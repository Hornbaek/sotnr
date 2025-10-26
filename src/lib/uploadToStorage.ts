import { supabase } from "@/integrations/supabase/client";

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const validateImageFile = (file: File): boolean => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(`Invalid file type. Allowed: ${ALLOWED_TYPES.join(', ')}`);
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`File too large. Max size: ${MAX_FILE_SIZE / 1024 / 1024}MB`);
  }
  return true;
};

export const generateStoragePath = (filename: string): string => {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 15);
  const ext = filename.split('.').pop();
  const name = filename.replace(/\.[^/.]+$/, "").replace(/[^a-z0-9]/gi, '-').toLowerCase();
  return `${name}-${timestamp}-${randomStr}.${ext}`;
};

export const uploadToSupabaseStorage = async (file: File): Promise<string> => {
  validateImageFile(file);

  const storagePath = generateStoragePath(file.name);
  
  const { data, error } = await supabase.storage
    .from('media-library')
    .upload(storagePath, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('media-library')
    .getPublicUrl(storagePath);

  // Get image dimensions
  const dimensions = await getImageDimensions(file);

  // Save metadata to database
  await supabase.from('media_library').insert({
    filename: file.name,
    storage_path: storagePath,
    file_size: file.size,
    mime_type: file.type,
    width: dimensions.width,
    height: dimensions.height,
  });

  return publicUrl;
};

export const deleteFromStorage = async (path: string): Promise<void> => {
  const { error: storageError } = await supabase.storage
    .from('media-library')
    .remove([path]);

  if (storageError) throw storageError;

  // Delete metadata
  const { error: dbError } = await supabase
    .from('media_library')
    .delete()
    .eq('storage_path', path);

  if (dbError) throw dbError;
};

export const getPublicUrl = (path: string): string => {
  const { data: { publicUrl } } = supabase.storage
    .from('media-library')
    .getPublicUrl(path);
  
  return publicUrl;
};

const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
};
