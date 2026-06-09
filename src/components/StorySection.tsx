interface StorySectionProps {
  title: string;
  image: string;
  imageAlt: string;
  descriptions: React.ReactNode[];
  reverse?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const StorySection = ({
  title,
  image,
  imageAlt,
  descriptions,
  reverse = false,
  showButton = false,
  buttonText = "Xem Chi Tiết Đề Tài",
  buttonLink = "#",
}: StorySectionProps) => {
  return (
    <section
      className={`section__container story__container ${
        reverse ? "reverse" : ""
      }`}
    >
      <div
        className="story__image"
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <img src={image} alt={imageAlt} />
      </div>

      <div
        className="story__content"
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <h2
          className="section__header"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        {descriptions.map((item, index) => (
          <div
            key={index}
            className="section__description"
          >
            {item}
          </div>
        ))}

        {showButton && (
          <div className="story__link">
            <a href={buttonLink}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default StorySection;