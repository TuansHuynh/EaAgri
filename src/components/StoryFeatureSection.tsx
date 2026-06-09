interface StoryFeatureSectionProps {
  title: string;
  description: string;
  image: string | string[];
  list: {
    title: string;
    content: string;
  }[];
  reverse?: boolean;
}

const StoryFeatureSection = ({
  title,
  description,
  image,
  list,
  reverse = false,
}: StoryFeatureSectionProps) => {
  return (
    <section
      className={`story__container section__container ${
        reverse ? "reverse" : ""
      }`}
    >
      <div
        className="story__content"
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <h2 className="section__header">{title}</h2>

        <p className="section__description">
          {description}
        </p>

        <ul className="story__list">
          {list.map((item, idx) => (
            <li key={idx}>
              <strong>{item.title}:</strong> {item.content}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="story__image"
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        {Array.isArray(image) ? (
          <div className="story__image-grid">
            {image.map((img, i) => (
              <img key={i} src={img} alt={title} />
            ))}
          </div>
        ) : (
          <img src={image} alt={title} />
        )}
      </div>
    </section>
  );
};

export default StoryFeatureSection;