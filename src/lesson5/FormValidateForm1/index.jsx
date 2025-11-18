import { useState } from "react";

const ValidateForm1 = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeUserName = (event) => {
    setForm({
      ...form,
      username: event.target.value,
    });
  };

  const handleChangeEmail = (event) => {
    setForm({
      ...form,
      email: event.target.value,
    });
  };

  const handleChangePassword = (event) => {
    setForm({
      ...form,
      password: event.target.value,
    });
  };

  const handleRegister = () => {
    const { username, email, password } = form;

    const usernameTrim = username.trim();
    const emailTrim = email.trim();
    const passwordTrim = password.trim();

    if (usernameTrim.length === 0) {
      alert("Bạn chưa nhập username");
      return;
    }

    if (emailTrim.trim().length === 0) {
      alert("Bạn chưa nhập email");
      return;
    }

    if (passwordTrim.trim().length === 0) {
      alert("Bạn chưa nhập password");
      return;
    }

    if (usernameTrim.length < 2) {
      alert("Giá trị username không hợp lệ");
      return;
    }

    if (!email.includes("@gmail.com")) {
      alert("Giá trị email không hợp lệ");
      return;
    }

    if (password.length < 6 || password.length > 24) {
      alert("Giá trị password không hợp lệ");
      return;
    }

    alert("Đăng ký thành công");
  };
  return (
    <div>
      <h1>Validate form thủ công</h1>
      <div className="form">
        <div className="element">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={form.username}
            onChange={handleChangeUserName}
          />
        </div>
        <div className="element">
          <label htmlFor="">Email</label>
          <input type="email" value={form.email} onChange={handleChangeEmail} />
        </div>
        <div className="element">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={handleChangePassword}
          />
        </div>
        <button onClick={handleRegister}>Đăng ký</button>
      </div>
    </div>
  );
};

export default ValidateForm1;
