import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  CircularProgress,
  Box,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import { toast } from "react-toastify";
import axiosInstance from "../pages/axiosInstance";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import Header from "../components/Shared/Header/Header";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosInstance.get("/api/students");
        setStudents(res.data);
      } catch (error) {
        toast.error("Failed to fetch students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
 <>
 <Header />
    <Paper
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 3,
        boxShadow: 4,
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
    >
      <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 2 }}>
        👩‍🎓 All Students
      </Typography>
      <List>
        {students.map((student) => (
          <ListItem
            key={student._id}
            divider
            sx={{
              borderRadius: 2,
              mb: 1,
              bgcolor: "white",
              boxShadow: 1,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 3,
                bgcolor: "#f1fdf1",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "green" }}>
                {student.name ? student.name.charAt(0).toUpperCase() : "?"}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {student.name}
                </Typography>
              }
              secondary={
                <Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon fontSize="small" color="action" />
                    <Typography variant="body2">{student.email}</Typography>
                  </Box>
                  {/* <Box display="flex" alignItems="center" gap={1}>
                    <SchoolIcon fontSize="small" color="action" />
                    <Typography variant="body2">
                      {student.class || "N/A"}
                    </Typography>
                  </Box> */}
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
 </>
  );
};

export default StudentsList;
