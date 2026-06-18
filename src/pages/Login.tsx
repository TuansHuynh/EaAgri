import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../utils/supabase/client";

interface AlertState {
  type: "success" | "error" | null;
  message: string;
}

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>({ type: null, message: "" });

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already logged in
  const from = (location.state as any)?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert({ type: null, message: "" });

    // Validate inputs
    if (!email.trim() || !password.trim()) {
      setAlert({ type: "error", message: "Vui lòng điền đầy đủ email và mật khẩu." });
      return;
    }

    if (password.length < 6) {
      setAlert({ type: "error", message: "Mật khẩu phải có ít nhất 6 ký tự." });
      return;
    }

    if (!isLogin && !fullName.trim()) {
      setAlert({ type: "error", message: "Vui lòng nhập họ và tên của bạn." });
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        // Handle Login
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password
        });

        if (error) throw error;

        setAlert({ type: "success", message: "Đăng nhập thành công! Đang chuyển hướng..." });
      } else {
        // Handle Registration
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
              role: "user" // Standard sign-up gets 'user' role by default
            }
          }
        });

        if (error) throw error;

        setAlert({
          type: "success",
          message: "Đăng ký thành công! Bạn hiện đã có thể đăng nhập vào hệ thống."
        });
        
        // Reset states and switch to login
        setIsLogin(true);
        setPassword("");
        setFullName("");
      }
    } catch (err: any) {
      console.error("Auth action error:", err);
      let errMsg = err.message || "Đã xảy ra lỗi trong quá trình xác thực.";
      if (errMsg.includes("Invalid login credentials")) {
        errMsg = "Email hoặc mật khẩu không chính xác.";
      } else if (errMsg.includes("User already registered")) {
        errMsg = "Tài khoản email này đã được đăng ký từ trước.";
      }
      setAlert({ type: "error", message: errMsg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-page__card" data-aos="zoom-in">
        
        {/* Toggle Title */}
        <div className="auth-page__header">
          <h1>{isLogin ? "Đăng Nhập" : "Đăng Ký"}</h1>
          <p>
            {isLogin 
              ? "Chào mừng bạn quay trở lại với hệ thống EaAgri!" 
              : "Tạo tài khoản mới để trải nghiệm đầy đủ các tính năng nông nghiệp."
            }
          </p>
        </div>

        {/* Status Alert */}
        {alert.type && (
          <div style={{ marginBottom: "1.5rem" }}>
            <div className={`auth-page__alert auth-page__alert--${alert.type}`}>
              <i className={alert.type === "success" ? "ri-checkbox-circle-line" : "ri-error-warning-line"}></i>
              <span>{alert.message}</span>
            </div>
          </div>
        )}

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="auth-page__form">
          
          {/* Full Name (Only for Registration) */}
          {!isLogin && (
            <div className="auth-page__group">
              <label htmlFor="fullName">Họ và tên</label>
              <div className="auth-page__input-wrapper">
                <i className="ri-user-line"></i>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="auth-page__input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="auth-page__group">
            <label htmlFor="email">Email</label>
            <div className="auth-page__input-wrapper">
              <i className="ri-mail-line"></i>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className="auth-page__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="auth-page__group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="auth-page__input-wrapper">
              <i className="ri-lock-line"></i>
              <input
                type="password"
                id="password"
                placeholder="Tối thiểu 6 ký tự..."
                className="auth-page__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="auth-page__submit" 
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="upload-news__spinner"></span>
            ) : (
              <>
                <i className={isLogin ? "ri-login-box-line" : "ri-user-add-line"}></i>
                <span>{isLogin ? "Đăng Nhập" : "Đăng Ký Tài Khoản"}</span>
              </>
            )}
          </button>

        </form>

        {/* Toggle Button */}
        <div className="auth-page__toggle">
          {isLogin ? (
            <span>
              Chưa có tài khoản?{" "}
              <button type="button" onClick={() => { setIsLogin(false); setAlert({ type: null, message: "" }); }}>
                Đăng ký ngay
              </button>
            </span>
          ) : (
            <span>
              Đã có tài khoản?{" "}
              <button type="button" onClick={() => { setIsLogin(true); setAlert({ type: null, message: "" }); }}>
                Đăng nhập
              </button>
            </span>
          )}
        </div>

      </div>
    </section>
  );
}
