

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
//   Container,
//   Grid,
// } from "@mui/material";
// import axiosInstance from "../pages/axiosInstance";
// import StudentTaskReply from "./StudentTaskReply";

// export default function StudentDashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch tasks including feedback
//   const fetchTasks = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token"); // stored after login
//       const res = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/my-tasks`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setTasks(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   if (loading)
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: 8,
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );

//   return (
//     <Container sx={{ paddingY: 4 }}>
//       <Typography variant="h4" gutterBottom textAlign="center">
//         Student Dashboard
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Assigned Tasks
//       </Typography>

//       {tasks.length === 0 ? (
//         <Typography>No tasks assigned yet.</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {tasks.map((task) => (
//             <Grid item xs={12} sm={6} md={4} key={task._id}>
//               <Card variant="outlined" sx={{ height: "100%" }}>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     Title: {task.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 2 }}
//                   >
//                     Summary: {task.description}
//                   </Typography>

//                   {task.file?.name && task.file?.data && (
//                     <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
//                       Attached file:{" "}
//                       <a
//                         href={task.file.data}
//                         download={task.file.name}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{
//                           color: "#1976d2",
//                           textDecoration: "underline",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {task.file.name}
//                       </a>
//                     </Typography>
//                   )}

//                   <Typography
//                     variant="caption"
//                     color={
//                       task.status === "assigned"
//                         ? "warning.main"
//                         : task.status === "submitted"
//                         ? "info.main"
//                         : "success.main"
//                     }
//                   >
//                     Status: {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
//                   </Typography>

//                   {/* Show reply form if task is assigned or submitted */}
//                   {(task.status === "assigned" || task.status === "submitted") && (
//                     <StudentTaskReply task={task} onSubmitted={fetchTasks} />
//                   )}

//                   {/* Show feedback if present */}
//                   {task.feedback && task.feedback.length > 0 ? (
//                     <>
//                       <Typography variant="subtitle2" mt={2}>
//                         Teacher Feedback:
//                       </Typography>
//                       {task.feedback.map((fb, idx) => (
//                         <Box
//                           key={idx}
//                           sx={{ mb: 1, p: 1, borderLeft: "3px solid #1976d2" }}
//                         >
                       
//                           <Typography variant="body2" color="text.secondary">
//                             {fb.content}
//                           </Typography>
//                           <Typography variant="caption" color="text.secondary">
//                             Given at: {new Date(fb.givenAt).toLocaleString()}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </>
//                   ) : (
//                     <Typography variant="caption" color="text.secondary" mt={2}>
//                       No feedback from teacher yet.
//                     </Typography>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// }



import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Chip,
  Divider,
  Link,
  Button,
} from "@mui/material";
import axiosInstance from "../pages/axiosInstance";
import StudentTaskReply from "./StudentTaskReply";

export default function StudentDashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/my-tasks`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress size={50} />
      </Box>
    );

  return (
    <Container sx={{ py: 6 }}>
      {/* Dashboard Header */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{
          background: "linear-gradient(90deg, #ff512f, #dd2476)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 5,
        }}
      >
        🎓 Student Dashboard
      </Typography>

      {tasks.length === 0 ? (
        <Typography textAlign="center" color="text.secondary" fontSize="1.2rem">
          No tasks assigned yet.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {tasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task._id}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.9) 100%)",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08), 0 6px 10px rgba(0,0,0,0.04)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.06)",
                  },
                }}
              >
                <CardContent>
                  {/* Task Title */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 1 }}
                  >
                    {task.title}
                  </Typography>

                  {/* Task Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: "#f7f9fc",
                    }}
                  >
                    {task.description}
                  </Typography>

                  {/* File download */}
                  {task.file?.name && task.file?.data && (
                    <Box sx={{ mb: 2 }}>
                      <Link
                        href={task.file.data}
                        download={task.file.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{
                          fontWeight: "bold",
                          color: "#d81b60",
                        }}
                      >
                        📎 Download File: {task.file.name}
                      </Link>
                    </Box>
                  )}

                  {/* Status */}
                  <Chip
                    label={`Status: ${
                      task.status.charAt(0).toUpperCase() + task.status.slice(1)
                    }`}
                    sx={{
                      fontWeight: "bold",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "16px",
                      background:
                        task.status === "assigned"
                          ? "#fff3e0"
                          : task.status === "submitted"
                          ? "#e1f5fe"
                          : "#e8f5e9",
                      color:
                        task.status === "assigned"
                          ? "#ff9800"
                          : task.status === "submitted"
                          ? "#0288d1"
                          : "#2e7d32",
                      mb: 2,
                    }}
                  />

                  {/* Reply form */}
                  {(task.status === "assigned" || task.status === "submitted") && (
                    <StudentTaskReply task={task} onSubmitted={fetchTasks} />
                  )}

                  {/* Teacher Feedback */}
                  {task.feedback && task.feedback.length > 0 && (
                    <>
                      <Divider sx={{ my: 2 }} />
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        gutterBottom
                      >
                        📝 Teacher Feedback
                      </Typography>
                      {task.feedback.map((fb, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            mb: 1.5,
                            p: 1.5,
                            borderRadius: 2,
                            backgroundColor: "#fff0f5",
                            borderLeft: "4px solid #d81b60",
                          }}
                        >
                          <Typography variant="body2" sx={{ mb: 0.5 }}>
                            {fb.content}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ⏰ {new Date(fb.givenAt).toLocaleString()}
                          </Typography>
                        </Box>
                      ))}
                    </>
                  )}

                  {/* No feedback */}
                  {(!task.feedback || task.feedback.length === 0) && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      mt={2}
                      sx={{ fontStyle: "italic" }}
                    >
                      No feedback from teacher yet.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
