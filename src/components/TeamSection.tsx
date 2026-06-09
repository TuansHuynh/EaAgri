const galleryImages = [
  "/assets/anhtrangchuapp.jpg",
  "/assets/anhtrangchuapp1.jpg",
  "/assets/hoiAi",
  "/assets/giaca1.jpg",
  "/assets/dubaogia.jpg",
  "/assets/lichtuoi.jpg",
  "/assets/lichtuoi1.jpg",
  "/assets/lichtuoi3jpg.jpg",
  "/assets/thuviensaubenh.jpg",
  "/assets/thuviensaubenh1.jpg",
  "/assets/chuyengiasaurieng.jpg",
  "/assets/chuyengiasaurieng1.jpg",
  "/assets/chuandoan.jpg",
  "/assets/chuandoan1.jpg",
  "/assets/datchuyengia.jpg",
  "/assets/datchuyengia1.jpg",
  "/assets/datchuyengia2.jpg",
  "/assets/tuvan.jpg",
  "/assets/tuvan1.jpg",
  "/assets/tuvan2.jpg",
];

const TeamSection = () => {
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="workout__container section__container">
      <div
        className="workout__content"
        data-aos="fade-right"
      >
        <h2 className="section__header">
          Đội Ngũ Thực Hiện
        </h2>

        <p className="section__description">
          Dự án được thực hiện bởi sinh viên Khoa Công nghệ
          Thông tin - Trường Đại học Nguyễn Tất Thành.
        </p>

        <div className="team__members">
          <div className="member">
            <strong>Phan Đăng Huy</strong>
            <span>Khoa học dữ liệu</span>
          </div>

          <div className="member">
            <strong>Nguyễn Anh Giảng</strong>
            <span>Khoa học dữ liệu</span>
          </div>

          <div className="member">
            <strong>Đặng Văn Chung</strong>
            <span>Khoa học dữ liệu</span>
          </div>

          <div className="member">
            <strong>Huỳnh Anh Tuấn</strong>
            <span>Kỹ thuật phần mềm</span>
          </div>
        </div>
      </div>

      <div
        className="workout__gallery"
        data-aos="fade-left"
      >
        <div className="workout__images">
          {duplicatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`gallery-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;