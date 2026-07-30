import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "@/config";
import { Alert } from "antd";

const getRoleFromEmail = (email) => {
  if (!email) {
    return null;
  }

  const localPart = email.trim().split("@")[0].toLowerCase();

  if (localPart.startsWith("ps")) {
    return "manager";
  }

  if (localPart.startsWith("hs")) {
    return "student";
  }

  return null;
};

export function SignUp() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const role = getRoleFromEmail(email);
  const roleLabel =
    role === "manager"
      ? "Ban quản lý học sinh"
      : role === "student"
        ? "Học sinh"
        : "Chưa xác định";

  const validateForm = () => {
    const newErrors = {};
    if (!userId.trim()) {
      newErrors.userId = "Vui lòng nhập ID người dùng";
    }
    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!role) {
      newErrors.email = "Email phải bắt đầu bằng PS hoặc HS (ví dụ: ps123@domain.com)";
    }
    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/register`, {
        userId,
        email,
        password,
      });
      if (response.status === 201) {
        navigate("/auth/sign-in");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.";
      setFormError(errorMsg);
      console.error("Đăng ký thất bại:", error);
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Đăng ký
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Nhập đầy đủ thông tin để đăng ký.
          </Typography>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          {formError && (
            <div className="mb-4">
              <Alert message={formError} type="error" showIcon />
            </div>
          )}
          <div className="mb-1 flex flex-col gap-6">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                ID Người Dùng
              </Typography>
              <Input
                size="lg"
                placeholder="nguoidung123"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  if (errors.userId) setErrors({ ...errors, userId: null });
                }}
                error={Boolean(errors.userId)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.userId && (
                <Typography variant="small" color="red" className="mt-1 font-normal">
                  {errors.userId}
                </Typography>
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="ten@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
                error={Boolean(errors.email)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.email && (
                <Typography variant="small" color="red" className="mt-1 font-normal">
                  {errors.email}
                </Typography>
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Mật khẩu
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: null });
                }}
                error={Boolean(errors.password)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.password && (
                <Typography variant="small" color="red" className="mt-1 font-normal">
                  {errors.password}
                </Typography>
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Xác nhận mật khẩu
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                }}
                error={Boolean(errors.confirmPassword)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.confirmPassword && (
                <Typography variant="small" color="red" className="mt-1 font-normal">
                  {errors.confirmPassword}
                </Typography>
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Vai trò tự động
              </Typography>
              <div className="rounded-md border border-blue-gray-100 bg-blue-gray-50 px-3 py-2 text-sm text-blue-gray-700">
                {role ? roleLabel : "Email phải bắt đầu bằng PS hoặc HS"}
              </div>
            </div>
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Đăng Ký Ngay
          </Button>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Đã có tài khoản?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Đăng nhập
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
