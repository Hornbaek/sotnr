-- Create storage bucket for media library
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'media-library',
  'media-library',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- RLS Policy: Only admins can upload
DROP POLICY IF EXISTS "Admins can upload to media library" ON storage.objects;
CREATE POLICY "Admins can upload to media library"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'media-library' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- RLS Policy: Only admins can delete
DROP POLICY IF EXISTS "Admins can delete from media library" ON storage.objects;
CREATE POLICY "Admins can delete from media library"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'media-library' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- RLS Policy: Everyone can view
DROP POLICY IF EXISTS "Anyone can view media library" ON storage.objects;
CREATE POLICY "Anyone can view media library"
ON storage.objects FOR SELECT
USING (bucket_id = 'media-library');

-- Create media_library table for metadata
CREATE TABLE IF NOT EXISTS media_library (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  storage_path TEXT NOT NULL UNIQUE,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  alt_text TEXT,
  title TEXT,
  width INTEGER,
  height INTEGER,
  uploaded_by UUID REFERENCES auth.users(id),
  uploaded_at TIMESTAMPTZ DEFAULT now(),
  tags TEXT[],
  used_count INTEGER DEFAULT 0
);

-- Enable RLS
ALTER TABLE media_library ENABLE ROW LEVEL SECURITY;

-- RLS Policies for media_library table
DROP POLICY IF EXISTS "Admins can manage media metadata" ON media_library;
CREATE POLICY "Admins can manage media metadata"
ON media_library FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Anyone can view media metadata" ON media_library;
CREATE POLICY "Anyone can view media metadata"
ON media_library FOR SELECT
USING (true);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_media_library_storage_path ON media_library(storage_path);
CREATE INDEX IF NOT EXISTS idx_media_library_tags ON media_library USING GIN(tags);