import { MediaLibraryManager } from "@/components/media/MediaLibraryManager";

const MediaLibrary = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Media Library</h1>
        <p className="text-muted-foreground">
          Manage images for your journal posts and website
        </p>
      </div>

      <MediaLibraryManager />
    </div>
  );
};

export default MediaLibrary;
