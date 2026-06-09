const resultImages = [
  "/assets/phancung",
  "/assets/anhthucte",
  "/assets/anhthucte1",
  "/assets/anhthucte2",
  "/assets/anhthucte3",
];

const ResultSection = () => {
  return (
    <section
      className="section__container download__container"
      data-aos="fade-up"
    >
      <h2 className="section__header">
        Kết Quả Thực Tiễn
      </h2>

      <p className="section__description">
        Dự án đã triển khai thí điểm tại xã Tân Tiến, Đắk Lắk.
        Hệ thống hoạt động ổn định 24/7, độ trễ dưới 2 giây,
        dự báo giá sai số dưới 5% và thực hiện chính xác
        kịch bản "Ngưng tưới đón đầu".
      </p>

      <div className="result__stats">
        <div className="stat__card">
          <h3>24/7</h3>
          <p>Hoạt động liên tục</p>
        </div>

        <div className="stat__card">
          <h3>&lt; 2s</h3>
          <p>Độ trễ phản hồi</p>
        </div>

        <div className="stat__card">
          <h3>&lt; 5%</h3>
          <p>Sai số dự báo giá</p>
        </div>
      </div>

      <div className="download__image">
        {resultImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Kết quả thực tế ${index + 1}`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default ResultSection;