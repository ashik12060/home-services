// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import Dropzone from 'react-dropzone';
// import axiosInstance from '../pages/axiosInstance';
// import { toast } from 'react-toastify';

// const FeedbackForm = ({ taskId, onFeedbackAdded }) => {
//   const [content, setContent] = useState('');
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFile({
//         data: reader.result,
//         name: file.name,
//         type: file.type,
//       });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axiosInstance.put(
//         `${process.env.REACT_APP_API_URL}/api/tasks/${taskId}/feedback`,
//         { content, file },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );
//       toast.success('Feedback submitted!');
//       setContent('');
//       setFile(null);
//       onFeedbackAdded(); // To refresh task list or data in parent
//     } catch (error) {
//       toast.error('Failed to submit feedback');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//       <Typography variant="h6">Add Feedback</Typography>
//       <TextField
//         fullWidth
//         multiline
//         rows={4}
//         label="Feedback content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         required
//         sx={{ mb: 2 }}
//       />

//       <Dropzone multiple={false} onDrop={handleDrop} accept=".jpg,.jpeg,.png,.pdf">
//         {({ getRootProps, getInputProps, isDragActive }) => (
//           <Box
//             {...getRootProps()}
//             sx={{
//               border: '2px dashed #1976d2',
//               p: 2,
//               textAlign: 'center',
//               cursor: 'pointer',
//               mb: 2,
//               backgroundColor: isDragActive ? '#e3f2fd' : '#fafafa',
//             }}
//           >
//             <input {...getInputProps()} />
//             {file ? (
//               <Typography>{file.name}</Typography>
//             ) : isDragActive ? (
//               <Typography>Drop the file here ...</Typography>
//             ) : (
//               <Typography>Drag 'n' drop a file here, or click to select file</Typography>
//             )}
//           </Box>
//         )}
//       </Dropzone>

//       <Button type="submit" variant="contained" disabled={loading}>
//         {loading ? 'Submitting...' : 'Submit Feedback'}
//       </Button>
//     </Box>
//   );
// };

// export default FeedbackForm;


import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axiosInstance from "../pages/axiosInstance";
import { toast } from "react-toastify";

const validationSchema = yup.object({
//   score: yup
//     .number()
//     .required("Score is required")
//     .min(0, "Minimum score is 0")
//     .max(100, "Maximum score is 100"),
  content: yup.string().required("Feedback content is required"),
});

export default function FeedbackForm({ taskId, onFeedbackAdded }) {
  const formik = useFormik({
    initialValues: {
    //   score: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.put(
          `${process.env.REACT_APP_API_URL}/api/tasks/${taskId}/feedback`,
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.data.success) {
          toast.success("Feedback submitted successfully!");
          resetForm();
          if (onFeedbackAdded) onFeedbackAdded();
        } else {
          toast.error("Failed to submit feedback.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error submitting feedback.");
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Provide Feedback
      </Typography>

      {/* <TextField
        fullWidth
        type="number"
        label="Score (0-100)"
        name="score"
        value={formik.values.score}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.score && Boolean(formik.errors.score)}
        helperText={formik.touched.score && formik.errors.score}
        margin="normal"
        inputProps={{ min: 0, max: 100 }}
      /> */}

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Feedback"
        name="content"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2 }}
        fullWidth
      >
        Submit Feedback
      </Button>
    </Box>
  );
}
