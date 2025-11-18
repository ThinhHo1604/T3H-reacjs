import { useFormik } from "formik";
import * as Yup from "yup";

const ValidateForm2 = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .required("vui lòng nhập tên đăng nhập")
        .min(2, "Tên đăng nhập không hợp lệ"),
      email: Yup.string()
        .trim()
        .required("vui lòng nhập email")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .trim()
        .required("vui lòng nhập mật khẩu")
        .min(6, "mật khẩu quá ngắn")
        .max(24, "mật khẩu quá dài"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Submitted!");
    },
  });

  return (
    <div>
      <h1>Validate form thủ công</h1>
      <div className="form">
        <div className="element">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          )}
        </div>
        <div className="element">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>
        <div className="element">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </div>
        <button onClick={formik.handleSubmit}>Đăng ký</button>
      </div>
    </div>
  );
};

export default ValidateForm2;
