interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: "01",
    title: "Mobile App (Flutter)",
    description:
      "Đa nền tảng Android/iOS, đảm bảo trải nghiệm mượt mà cho nông dân.",
  },
  {
    id: "02",
    title: "Backend (Firebase)",
    description:
      "Sử dụng Firestore, Authentication, Cloud Functions cho dữ liệu thời gian thực.",
  },
  {
    id: "03",
    title: "AI Core",
    description:
      "Tích hợp YOLOv9 (PyTorch/TFLite) và Google Gemini API.",
  },
  {
    id: "04",
    title: "Hardware (ESP32)",
    description:
      "Vi điều khiển chi phí thấp, hỗ trợ WiFi/Bluetooth kết nối cảm biến.",
  },
  {
    id: "05",
    title: "Tích hợp kỹ thuật RAG (API/Firebase)",
    description:
      "Kết nối với các nguồn dữ liệu bên ngoài như API giá sầu riêng và cơ sở dữ liệu kiến thức cây trồng để làm giàu ngữ cảnh cho hệ thống.",
  },
];

const leftColumn = [features[0], features[2], features[4]];
const rightColumn = [features[1], features[3]];

const FeatureGrid = () => {
  return (
    <section className="section__container feature__container">
      <h2
        className="section__header"
        data-aos="fade-up"
      >
        Tổng Quan Công Nghệ
      </h2>

      <p
        className="section__description"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Các nền tảng kỹ thuật hỗ trợ dự án vận hành ổn định.
      </p>

      <div className="feature__columns">
        <div className="feature__column">
          {leftColumn.map((feature, index) => (
            <div
              key={feature.id}
              className="feature__card"
              data-aos="fade-right"
              data-aos-delay={index * 200}
            >
              <span>{feature.id}</span>

              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="feature__column">
          {rightColumn.map((feature, index) => (
            <div
              key={feature.id}
              className="feature__card"
              data-aos="fade-left"
              data-aos-delay={(index + 1) * 200}
            >
              <span>{feature.id}</span>

              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;