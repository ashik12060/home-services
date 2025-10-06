import { Box, Typography, Avatar, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../components/Shared/Header/Header";
// import { CartProvider } from "../hooks";
import { Link } from "react-router-dom";

const LoginChoice = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "81vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.white",
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {/* Teacher Login Box */}
          <Box
            className="form_style border-style"
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar className="bg-danger" sx={{ m: 1, mb: 2 }}>
              <SchoolIcon />
            </Avatar>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Teacher Login
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
              Login here if you are a teacher to manage classes and assignments.
            </Typography>
            <Link to="/admin-login" style={{ width: "100%" }}>
              <Button fullWidth className="bg-danger text-white fw-bold">
                Go to Teacher Login
              </Button>
            </Link>
          </Box>

          {/* Student Login Box */}
          <Box
            className="form_style border-style"
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar className="bg-danger" sx={{ m: 1, mb: 2 }}>
              <PersonIcon />
            </Avatar>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Student Login
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
              Login here if you are a student to access your courses and tasks.
            </Typography>
            <Link to="/login" style={{ width: "100%" }}>
              <Button fullWidth className="bg-danger text-white fw-bold">
                Go to Student Login
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginChoice;
