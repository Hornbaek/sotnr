import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MediaLibraryManager } from "./MediaLibraryManager";
import { uploadToSupabaseStorage } from "@/lib/uploadToStorage";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

interface MediaPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (url: string) => void;
}

export const MediaPicker = ({ open, onOpenChange, onSelect }: MediaPickerProps) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadToSupabaseStorage(file);
      onSelect(url);
      onOpenChange(false);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      console.error("Upload failed:", error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleSelectFromLibrary = (url: string) => {
    onSelect(url);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Choose Image</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="library" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="library">Media Library</TabsTrigger>
            <TabsTrigger value="upload">Upload New</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="flex-1 overflow-auto mt-4">
            <MediaLibraryManager onSelect={handleSelectFromLibrary} selectable />
          </TabsContent>

          <TabsContent value="upload" className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <label>
                <Button disabled={uploading} size="lg" className="cursor-pointer">
                  <Upload className="w-5 h-5 mr-2" />
                  {uploading ? "Uploading..." : "Select File to Upload"}
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>
              <p className="text-sm text-muted-foreground">
                Max file size: 10MB
                <br />
                Supported: JPG, PNG, WebP, GIF, SVG
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
