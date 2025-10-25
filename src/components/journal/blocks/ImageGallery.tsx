interface ImageGalleryProps {
  data: {
    images: Array<{
      url: string;
      caption?: string;
    }>;
  };
}

export const ImageGallery = ({ data }: ImageGalleryProps) => {
  const imageCount = data.images.length;
  
  const gridClass = imageCount === 1 
    ? "grid-cols-1" 
    : imageCount === 2 
    ? "grid-cols-2" 
    : "grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid ${gridClass} gap-4 my-8`}>
      {data.images.map((image, index) => (
        <div key={index} className="space-y-2">
          <img 
            src={image.url} 
            alt={image.caption || `Gallery image ${index + 1}`}
            className="w-full h-auto rounded-lg border-2 border-border object-cover"
          />
          {image.caption && (
            <p className="text-sm text-muted-foreground text-center italic">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
