import { Avatar, Box } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
// import { CartProvider } from "../hooks";

const validationSchema = yup.object({
  name: yup.string("Enter admin name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const TeacherRegister = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "admin", // 👈 default role set here
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignUpAction(values));
      actions.resetForm();
    },
  });

  return (
    <>

        <Header />
    
      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.white",
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar className="bg-danger" sx={{ m: 1, mb: 3 }}>
              <AdminPanelSettingsIcon />
            </Avatar>
            <h2 className="mb-3 fw-bold text-danger">Admin Register</h2>

            {/* Name */}
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="name"
              label="Name"
              name="name"
              placeholder="Admin name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            {/* Email */}
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              placeholder="Admin email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            {/* Password */}
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            {/* Submit */}
            <Button
              fullWidth
              className="bg-danger text-white fw-bold"
              type="submit"
            >
              Register as Teacher
            </Button>

            <Link to="/login" className="mt-2 fs-6 font-color">
              <u>Already teacher? Login</u>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeacherRegister;
