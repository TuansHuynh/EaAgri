const Hero = () => {
  return (
    <header>
      <div
        className="header__img"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img
          src="/assets/tải xuống (3).png"
          alt="Smart Agriculture"
        />
      </div>

      <div
        className="header__content"
        data-aos="fade-up"
      >
        <h1>HỆ SINH THÁI NÔNG NGHIỆP THÔNG MINH EAAGRI</h1>

        <p className="section__description">
          Giải pháp tối ưu hóa chuỗi giá trị sầu riêng tại Tây
          Nguyên: Tích hợp AI đa phương thức, IoT, đặt lịch chuyên
          gia và mô hình kinh tế chia sẻ.
        </p>

        <ul className="header__links">
          <li>
            <a href="#">
              <img
                src="/assets/apple.png"
                alt="App Store"
              />
            </a>
          </li>

          <li>
            <a href="https://play.google.com/store/apps/details?id=com.eaagri.app">
              <img
                src="/assets/google.png"
                alt="Google Play"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Hero;