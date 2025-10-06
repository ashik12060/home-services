import React from "react";
import { Box, Button, Typography, Grid, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
// import { CartProvider } from "../hooks";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const actions = [
    {
      label: "Create New Task",
      icon: <AddTaskIcon fontSize="large" />,
      color: "contained",
      onClick: () => navigate("/teacher/task/create"),
    },
    {
      label: "View All Tasks",
      icon: <ListAltIcon fontSize="large" />,
      color: "outlined",
      onClick: () => navigate("/teacher/tasks"),
    },
    {
      label: "View Students",
      icon: <GroupIcon fontSize="large" />,
      color: "outlined",
      onClick: () => navigate("/teacher/students-list"),
    },
  ];

  return (
    <>
      {/* <CartProvider> */}
      <Header />
      {/* </CartProvider> */}

      <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 } }}>
        {/* Title */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main", mb: 4 }}
        >
          Teacher Dashboard
        </Typography>

        {/* Action Cards */}
        <Grid container spacing={3}>
          {actions.map((action, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ mb: 2, color: "error.main" }}>{action.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {action.label}
                </Typography>
                <Button
                  variant={action.color}
                  onClick={action.onClick}
                  className="fw-bold"
                  sx={{ mt: 1 }}
                >
                  {action.label}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Welcome section */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: "grey.100",
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Welcome Back!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Use the quick actions above to manage your tasks and students
            efficiently. Keep track of assignments and student progress right
            here in your dashboard.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
