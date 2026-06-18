import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, profile, signOut, authError } = useAuth();

  const handleNew = () => {
    navigate("/news");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav data-aos="fade-down">
      <div className="nav__logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img
          src="/assets/tải xuống.png"
          alt="EaAgri Logo"
        />
      </div>

      <div className="nav__btns">
        {/* News Button */}
        <button className="btn" onClick={handleNew}>
          <span>
            <i className="ri-news-line"></i>
          </span>
          <span>Tin Tức</span>
        </button>

        {/* Demo Button */}
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

        {/* Conditionally render admin/auth controls */}
        {user ? (
          <>
            {profile?.role === "SA" && (
              <>
                <button className="btn btn--admin" onClick={() => navigate("/news/create")}>
                  <span>
                    <i className="ri-edit-box-line"></i>
                  </span>
                  <span>Đăng bài</span>
                </button>
                <button className="btn btn--admin" onClick={() => navigate("/admin/accounts")}>
                  <span>
                    <i className="ri-user-settings-line"></i>
                  </span>
                  <span>Tài khoản</span>
                </button>
              </>
            )}
            
            <div className="nav__user-greeting" style={{ fontSize: "0.85rem", color: "#1b3323", fontWeight: "600", marginLeft: "0.5rem" }}>
              {profile?.full_name || user.email?.split("@")[0]} 
              {/* ({profile ? `Role: ${profile.role}` : authError ? `Lỗi: ${authError}` : "Đang tải profile..."}) */}
            </div>

            <button className="btn btn--logout" onClick={signOut}>
              <span>
                <i className="ri-logout-box-r-line"></i>
              </span>
              <span>Đăng Xuất</span>
            </button>
          </>
        ) : (
          <button className="btn" onClick={handleLogin}>
            <span>
              <i className="ri-login-circle-line"></i>
            </span>
            <span>Đăng Nhập</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;