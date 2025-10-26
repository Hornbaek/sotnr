import { MediaLibraryManager } from "@/components/media/MediaLibraryManager";
import { Card } from "@/components/ui/card";

export default function MediaLibrary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Media Library</h1>
        <p className="text-muted-foreground">
          Manage all your uploaded images and media files
        </p>
      </div>

      <Card className="p-6">
        <MediaLibraryManager />
      </Card>
    </div>
  );
}
