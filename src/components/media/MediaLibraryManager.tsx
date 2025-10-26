import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, Copy, Search } from "lucide-react";
import { uploadToSupabaseStorage, deleteFromStorage, getPublicUrl } from "@/lib/uploadToStorage";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface MediaItem {
  id: string;
  filename: string;
  storage_path: string;
  file_size: number;
  mime_type: string;
  width: number | null;
  height: number | null;
  uploaded_at: string;
}

interface MediaLibraryManagerProps {
  onSelect?: (url: string) => void;
  selectable?: boolean;
}

export const MediaLibraryManager = ({ onSelect, selectable = false }: MediaLibraryManagerProps) => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteItem, setDeleteItem] = useState<MediaItem | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMedia();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredMedia(
        media.filter((item) =>
          item.filename.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMedia(media);
    }
  }, [searchQuery, media]);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from("media_library")
        .select("*")
        .order("uploaded_at", { ascending: false });

      if (error) throw error;
      setMedia(data || []);
      setFilteredMedia(data || []);
    } catch (error) {
      console.error("Error fetching media:", error);
      toast({
        title: "Error",
        description: "Failed to load media library",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    let successCount = 0;

    for (const file of Array.from(files)) {
      try {
        await uploadToSupabaseStorage(file);
        successCount++;
      } catch (error) {
        console.error(`Failed to upload ${file.name}:`, error);
        toast({
          title: "Upload Failed",
          description: `Failed to upload ${file.name}`,
          variant: "destructive",
        });
      }
    }

    if (successCount > 0) {
      toast({
        title: "Success",
        description: `Uploaded ${successCount} file(s)`,
      });
      await fetchMedia();
    }

    setUploading(false);
    e.target.value = "";
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      await deleteFromStorage(deleteItem.storage_path);
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
      await fetchMedia();
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    } finally {
      setDeleteItem(null);
    }
  };

  const handleCopyUrl = (item: MediaItem) => {
    const url = getPublicUrl(item.storage_path);
    navigator.clipboard.writeText(url);
    toast({
      title: "Success",
      description: "URL copied to clipboard",
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <label>
          <Button disabled={uploading} className="cursor-pointer">
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? "Uploading..." : "Upload Images"}
          </Button>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">Loading media library...</div>
      ) : filteredMedia.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          {searchQuery ? "No images found matching your search" : "No images uploaded yet"}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedia.map((item) => {
            const url = getPublicUrl(item.storage_path);
            return (
              <Card
                key={item.id}
                className={`p-2 space-y-2 ${
                  selectable ? "cursor-pointer hover:ring-2 hover:ring-primary" : ""
                }`}
                onClick={() => selectable && onSelect?.(url)}
              >
                <div className="aspect-square relative overflow-hidden rounded-md bg-muted">
                  <img
                    src={url}
                    alt={item.filename}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium truncate" title={item.filename}>
                    {item.filename}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(item.file_size)}
                    {item.width && item.height && ` • ${item.width}×${item.height}`}
                  </p>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyUrl(item);
                      }}
                      className="flex-1"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteItem(item);
                      }}
                    >
                      <Trash2 className="w-3 h-3 text-destructive" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <AlertDialog open={!!deleteItem} onOpenChange={() => setDeleteItem(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deleteItem?.filename}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
