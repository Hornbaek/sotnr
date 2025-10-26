-- Add UPDATE policy for media library storage objects
-- This allows admins to modify file metadata and properties

CREATE POLICY "Admins can update media library objects"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'media-library' AND has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (bucket_id = 'media-library' AND has_role(auth.uid(), 'admin'::app_role));