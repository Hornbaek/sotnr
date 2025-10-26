import { supabase } from "@/integrations/supabase/client";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

export const validateImageFile = (file: File): boolean => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File size must be less than 10MB');
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('File type must be JPEG, PNG, WEBP, GIF, or SVG');
  }
  return true;
};

export const generateStoragePath = (filename: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const extension = filename.split('.').pop();
  const cleanName = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `${timestamp}-${randomString}-${cleanName}`;
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
  
  // Save metadata to database
  const { error: dbError } = await supabase.from('media_library').insert({
    filename: file.name,
    storage_path: storagePath,
    file_size: file.size,
    mime_type: file.type
  });
  
  if (dbError) {
    // Rollback storage upload if DB insert fails
    await supabase.storage.from('media-library').remove([storagePath]);
    throw dbError;
  }
  
  return publicUrl;
};

export const deleteFromStorage = async (storagePath: string): Promise<void> => {
  const { error: storageError } = await supabase.storage
    .from('media-library')
    .remove([storagePath]);
  
  if (storageError) throw storageError;
  
  const { error: dbError } = await supabase
    .from('media_library')
    .delete()
    .eq('storage_path', storagePath);
  
  if (dbError) throw dbError;
};

export const getPublicUrl = (path: string): string => {
  const { data: { publicUrl } } = supabase.storage
    .from('media-library')
    .getPublicUrl(path);
  return publicUrl;
};
