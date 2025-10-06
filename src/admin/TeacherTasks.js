
// // new
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
//   Container,
//   Grid,
//   Link,
//   Button,
// } from "@mui/material";
// import axiosInstance from "../pages/axiosInstance";
// import FeedbackForm from "./FeedbackForm";

// export default function TeacherTasks() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openFeedbackTaskId, setOpenFeedbackTaskId] = useState(null); // track open form

//   const fetchTasks = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/admin/tasks`,
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
//       <Box sx={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
//         <CircularProgress />
//       </Box>
//     );

//   return (
//     <Container sx={{ paddingY: 4 }}>
//       <Typography variant="h4" gutterBottom textAlign="center">
//         Assigned Tasks and Student Responses
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
//                     {task.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                     {task.description}
//                   </Typography>

//                   <Typography variant="subtitle2" sx={{ mb: 1 }}>
//                     Assigned To: {task.assignedTo?.name} ({task.assignedTo?.email})
//                   </Typography>

//                   {task.studentResponse?.content ? (
//                     <>
//                       <Typography variant="subtitle1" sx={{ mt: 2 }}>
//                         Student Response:
//                       </Typography>
//                       <Typography variant="body2" sx={{ mb: 1 }}>
//                         {task.studentResponse.content}
//                       </Typography>
//                       {task.studentResponse.file?.name && task.studentResponse.file?.data && (
//                         <Link
//                           href={task.studentResponse.file.data}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           download={task.studentResponse.file.name}
//                         >
//                           Download Student File: {task.studentResponse.file.name}
//                         </Link>
//                       )}
//                     </>
//                   ) : (
//                     <Typography color="text.secondary" sx={{ mt: 2 }}>
//                       No student response submitted yet.
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
//                     sx={{ mt: 2 }}
//                   >
//                     Status: {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
//                   </Typography>

//                   {/* Show Give Feedback button only if task is submitted */}
//                   {task.status === "submitted" && (
//                     <Box sx={{ mt: 2 }}>
//                       <Button
//                         variant="contained"
//                         onClick={() =>
//                           setOpenFeedbackTaskId(
//                             openFeedbackTaskId === task._id ? null : task._id
//                           )
//                         }
//                       >
//                         {openFeedbackTaskId === task._id ? "Hide Feedback" : "Give Feedback"}
//                       </Button>

//                       {/* Show feedback form if this task's form is open */}
//                       {openFeedbackTaskId === task._id && (
//                         <Box sx={{ mt: 3 }}>
//                           <FeedbackForm
//                             taskId={task._id}
//                             onFeedbackAdded={() => {
//                               fetchTasks();
//                               setOpenFeedbackTaskId(null);
//                             }}
//                           />
//                         </Box>
//                       )}
//                     </Box>
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
  Link,
  Button,
  Chip,
  Collapse,
  Divider,
} from "@mui/material";
import axiosInstance from "../pages/axiosInstance";
import FeedbackForm from "./FeedbackForm";

export default function TeacherTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFeedbackTaskId, setOpenFeedbackTaskId] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/admin/tasks`,
        { headers: { Authorization: `Bearer ${token}` } }
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
      {/* Gradient Header */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{
          background: "linear-gradient(90deg, #0072ff, #00c6ff)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 5,
        }}
      >
        📚 Teacher Tasks & Student Responses
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
                  backdropFilter: "blur(12px)",
                  background: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  p: 1,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  {/* Title */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {task.title}
                  </Typography>

                  <Divider sx={{ mb: 2 }} />

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {task.description}
                  </Typography>

                  {/* Student Info */}
                  <Typography variant="subtitle2" sx={{ mb: 2 }}>
                    👤 Assigned To:{" "}
                    <strong>
                      {task.assignedTo?.name} ({task.assignedTo?.email})
                    </strong>
                  </Typography>

                  {/* Student Response */}
                  {task.studentResponse?.content ? (
                    <>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ mt: 2, mb: 1 }}
                      >
                        ✍️ Student Response
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          p: 1.2,
                          borderRadius: 2,
                          background: "#f4f6f8",
                        }}
                      >
                        {task.studentResponse.content}
                      </Typography>

                      {/* File Download (No Preview) */}
                      {task.studentResponse.file?.name &&
                        task.studentResponse.file?.data && (
                          <Box sx={{ mt: 1 }}>
                            <Link
                              href={task.studentResponse.file.data}
                              target="_blank"
                              rel="noopener noreferrer"
                              download={task.studentResponse.file.name}
                              underline="hover"
                              sx={{ fontWeight: "bold" }}
                            >
                              📎 Download File: {task.studentResponse.file.name}
                            </Link>
                          </Box>
                        )}
                    </>
                  ) : (
                    <Typography color="text.secondary" sx={{ mt: 2 }}>
                      ⏳ No student response submitted yet.
                    </Typography>
                  )}

                  {/* Status */}
                  <Box sx={{ mt: 3 }}>
                    <Chip
                      label={`Status: ${
                        task.status.charAt(0).toUpperCase() +
                        task.status.slice(1)
                      }`}
                      sx={{
                        fontWeight: "bold",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "16px",
                        background:
                          task.status === "assigned"
                            ? "#fff4e5"
                            : task.status === "submitted"
                            ? "#e3f2fd"
                            : "#e6f4ea",
                        color:
                          task.status === "assigned"
                            ? "#f57c00"
                            : task.status === "submitted"
                            ? "#1976d2"
                            : "#2e7d32",
                      }}
                    />
                  </Box>

                  {/* Feedback Section */}
                  {task.status === "submitted" && (
                    <Box sx={{ mt: 3 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() =>
                          setOpenFeedbackTaskId(
                            openFeedbackTaskId === task._id ? null : task._id
                          )
                        }
                        sx={{
                          borderRadius: "25px",
                          py: 1,
                          fontWeight: "bold",
                          background:
                            "linear-gradient(90deg, #0072ff, #00c6ff)",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #0052cc, #0099cc)",
                          },
                        }}
                      >
                        {openFeedbackTaskId === task._id
                          ? "Hide Feedback"
                          : "Give Feedback"}
                      </Button>

                      {/* Feedback Form */}
                      <Collapse in={openFeedbackTaskId === task._id}>
                        <Box sx={{ mt: 3 }}>
                          <FeedbackForm
                            taskId={task._id}
                            onFeedbackAdded={() => {
                              fetchTasks();
                              setOpenFeedbackTaskId(null);
                            }}
                          />
                        </Box>
                      </Collapse>
                    </Box>
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



// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CircularProgress,
//   Container,
//   Grid,
//   Link,
//   Button,
//   Chip,
//   Collapse,
//   Divider,
// } from "@mui/material";
// import axiosInstance from "../pages/axiosInstance";
// import FeedbackForm from "./FeedbackForm";

// export default function TeacherTasks() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openFeedbackTaskId, setOpenFeedbackTaskId] = useState(null);

//   const fetchTasks = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/admin/tasks`,
//         { headers: { Authorization: `Bearer ${token}` } }
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
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
//         <CircularProgress size={50} />
//       </Box>
//     );

//   return (
//     <Container sx={{ py: 6 }}>
//       {/* Gradient Header */}
//       <Typography
//         variant="h3"
//         fontWeight="bold"
//         textAlign="center"
//         sx={{
//           background: "linear-gradient(90deg, #0072ff, #00c6ff)",
//           backgroundClip: "text",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           mb: 5,
//         }}
//       >
//         📚 Teacher Tasks & Student Responses
//       </Typography>

//       {tasks.length === 0 ? (
//         <Typography textAlign="center" color="text.secondary" fontSize="1.2rem">
//           No tasks assigned yet.
//         </Typography>
//       ) : (
//         <Grid container spacing={4}>
//           {tasks.map((task) => (
//             <Grid item xs={12} sm={6} md={4} key={task._id}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   borderRadius: 4,
//                   backdropFilter: "blur(12px)",
//                   background: "rgba(255, 255, 255, 0.85)",
//                   boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//                   p: 1,
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
//                 }}
//               >
//                 <CardContent>
//                   {/* Title */}
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {task.title}
//                   </Typography>

//                   <Divider sx={{ mb: 2 }} />

//                   {/* Description */}
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{ mb: 2 }}
//                   >
//                     {task.description}
//                   </Typography>

//                   {/* Student Info */}
//                   <Typography variant="subtitle2" sx={{ mb: 2 }}>
//                     👤 Assigned To:{" "}
//                     <strong>
//                       {task.assignedTo?.name} ({task.assignedTo?.email})
//                     </strong>
//                   </Typography>

//                   {/* Student Response */}
//                   {task.studentResponse?.content ? (
//                     <>
//                       <Typography
//                         variant="subtitle1"
//                         fontWeight="bold"
//                         sx={{ mt: 2, mb: 1 }}
//                       >
//                         ✍️ Student Response
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           mb: 1,
//                           p: 1.2,
//                           borderRadius: 2,
//                           background: "#f4f6f8",
//                         }}
//                       >
//                         {task.studentResponse.content}
//                       </Typography>

//                       {/* File Preview */}
//                       {task.studentResponse.file?.name &&
//                         task.studentResponse.file?.data && (
//                           <Box sx={{ mt: 1 }}>
//                             {task.studentResponse.file.type?.includes(
//                               "image"
//                             ) ? (
//                               <img
//                                 src={task.studentResponse.file.data}
//                                 alt={task.studentResponse.file.name}
//                                 style={{
//                                   maxWidth: "100%",
//                                   borderRadius: 8,
//                                   marginBottom: "8px",
//                                 }}
//                               />
//                             ) : (
//                               <Link
//                                 href={task.studentResponse.file.data}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 download={task.studentResponse.file.name}
//                                 underline="hover"
//                                 sx={{ fontWeight: "bold" }}
//                               >
//                                 📎 {task.studentResponse.file.name}
//                               </Link>
//                             )}
//                           </Box>
//                         )}
//                     </>
//                   ) : (
//                     <Typography color="text.secondary" sx={{ mt: 2 }}>
//                       ⏳ No student response submitted yet.
//                     </Typography>
//                   )}

//                   {/* Status */}
//                   <Box sx={{ mt: 3 }}>
//                     <Chip
//                       label={`Status: ${
//                         task.status.charAt(0).toUpperCase() +
//                         task.status.slice(1)
//                       }`}
//                       sx={{
//                         fontWeight: "bold",
//                         px: 1.5,
//                         py: 0.5,
//                         borderRadius: "16px",
//                         background:
//                           task.status === "assigned"
//                             ? "#fff4e5"
//                             : task.status === "submitted"
//                             ? "#e3f2fd"
//                             : "#e6f4ea",
//                         color:
//                           task.status === "assigned"
//                             ? "#f57c00"
//                             : task.status === "submitted"
//                             ? "#1976d2"
//                             : "#2e7d32",
//                       }}
//                     />
//                   </Box>

//                   {/* Feedback Section */}
//                   {task.status === "submitted" && (
//                     <Box sx={{ mt: 3 }}>
//                       <Button
//                         fullWidth
//                         variant="contained"
//                         onClick={() =>
//                           setOpenFeedbackTaskId(
//                             openFeedbackTaskId === task._id ? null : task._id
//                           )
//                         }
//                         sx={{
//                           borderRadius: "25px",
//                           py: 1,
//                           fontWeight: "bold",
//                           background:
//                             "linear-gradient(90deg, #0072ff, #00c6ff)",
//                           "&:hover": {
//                             background:
//                               "linear-gradient(90deg, #0052cc, #0099cc)",
//                           },
//                         }}
//                       >
//                         {openFeedbackTaskId === task._id
//                           ? "Hide Feedback"
//                           : "Give Feedback"}
//                       </Button>

//                       {/* Feedback Form */}
//                       <Collapse in={openFeedbackTaskId === task._id}>
//                         <Box sx={{ mt: 3 }}>
//                           <FeedbackForm
//                             taskId={task._id}
//                             onFeedbackAdded={() => {
//                               fetchTasks();
//                               setOpenFeedbackTaskId(null);
//                             }}
//                           />
//                         </Box>
//                       </Collapse>
//                     </Box>
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
