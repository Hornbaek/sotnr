import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Upload, Search } from "lucide-react";
import { uploadToSupabaseStorage, getPublicUrl } from "@/lib/uploadToStorage";
import { Card } from "@/components/ui/card";

interface MediaItem {
  id: string;
  filename: string;
  storage_path: string;
  file_size: number;
}

interface MediaPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

export const MediaPicker = ({ open, onClose, onSelect }: MediaPickerProps) => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (open) {
      fetchMedia();
    }
  }, [open]);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from('media_library')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setMedia(data || []);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadToSupabaseStorage(file);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
      onSelect(url);
      onClose();
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSelect = (storagePath: string) => {
    const url = getPublicUrl(storagePath);
    onSelect(url);
    onClose();
  };

  const filteredMedia = media.filter(item =>
    item.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Select Image</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="library">Media Library</TabsTrigger>
            <TabsTrigger value="upload">Upload New</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
              {loading ? (
                <p className="col-span-3 text-center text-muted-foreground py-8">
                  Loading...
                </p>
              ) : filteredMedia.length === 0 ? (
                <p className="col-span-3 text-center text-muted-foreground py-8">
                  No images found
                </p>
              ) : (
                filteredMedia.map((item) => {
                  const imageUrl = getPublicUrl(item.storage_path);
                  return (
                    <Card
                      key={item.id}
                      className="p-2 cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                      onClick={() => handleSelect(item.storage_path)}
                    >
                      <div className="aspect-square rounded overflow-hidden bg-muted">
                        <img
                          src={imageUrl}
                          alt={item.filename}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs truncate mt-2" title={item.filename}>
                        {item.filename}
                      </p>
                    </Card>
                  );
                })
              )}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-12 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-4">
                Click to upload or drag and drop
              </p>
              <Button
                onClick={() => document.getElementById('picker-upload')?.click()}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Choose File'}
              </Button>
              <input
                id="picker-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUpload}
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
