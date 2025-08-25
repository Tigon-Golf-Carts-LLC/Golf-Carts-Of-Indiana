interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  publisher?: {
    name: string;
    logo: string;
  };
}

export default function VideoObjectSchema({ 
  name, 
  description, 
  thumbnailUrl, 
  uploadDate, 
  duration, 
  contentUrl, 
  embedUrl, 
  publisher = {
    name: "Monroe County Golf Carts",
    logo: "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png"
  }
}: VideoObjectSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    ...(duration && { "duration": duration }),
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logo
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}