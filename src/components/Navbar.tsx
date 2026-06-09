const Navbar = () => {
  return (
    <nav data-aos="fade-down">
      <div className="nav__logo">
        <img
          src="/assets/tải xuống.png"
          alt="EaAgri Logo"
        />
      </div>

      <div className="nav__btns">
        <button className="btn">
          <span>
            <i className="ri-login-circle-line"></i>
          </span>
          <span>Đăng Nhập</span>
        </button>

        <a
          href="https://www.youtube.com/watch?v=QgVPizuOCdg"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="btn">
            <span>
              <i className="ri-survey-line"></i>
            </span>
            <span>Xem Demo</span>
          </button>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61577351045350"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="btn">
            <span>
              <i className="ri-survey-line"></i>
            </span>
            <span>Fanpage Facebook</span>
          </button>
        </a>

        <a
          href="https://www.tiktok.com/@eaagri?_r=1&_t=ZS-94Nr7SdHCY0g"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="btn">
            <span>
              <i className="ri-survey-line"></i>
            </span>
            <span>Tik Tok</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;