interface VideoSectionProps {
  title: string;
  description: string;
  videoUrl: string;
  fallbackUrl?: string;
  footerText?: string;
}

const VideoSection = ({
  title,
  description,
  videoUrl,
  fallbackUrl,
  footerText,
}: VideoSectionProps) => {
  return (
    <section
      className="section__container video__section"
      data-aos="fade-up"
    >
      <h2 className="section__header">
        {title}
      </h2>

      <p className="section__description video__description">
        {description}
      </p>

      <div className="architecture__video">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {fallbackUrl && (
        <p className="video__link">
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-youtube-fill"></i>
            <span>Xem trực tiếp trên YouTube</span>
          </a>
        </p>
      )}

      {footerText && (
        <p className="video__footer">
          {footerText}
        </p>
      )}
    </section>
  );
};

export default VideoSection;