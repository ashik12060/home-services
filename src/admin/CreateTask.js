import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axiosInstance from "../pages/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  title: yup.string().required("Task title is required"),
  description: yup.string().required("Task description is required"),
  assignedTo: yup.string().required("Please select a student"),
});

const CreateTask = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosInstance.get("/api/students"); // adjust backend route
        setStudents(res.data);
      } catch (error) {
        toast.error("Failed to fetch students");
      }
    };
    fetchStudents();
  }, []);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      assignedTo: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        const payload = {
          title: values.title,
          description: values.description,
          assignedTo: values.assignedTo,
          file: values.file,
        };

        const res = await axiosInstance.post(
          `${process.env.REACT_APP_API_URL}/api/task/create`,
          payload
        );
        if (res.data.success) {
          toast.success("Task created successfully!");
          actions.resetForm();
          navigate("/admin/dashboard");
        }
      } catch (error) {
        toast.error("Failed to create task");
      }
    },
  });

  return (
    <Box
      sx={{
        minHeight: "81vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f7fb",
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 600,
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 3, color: "primary.main" }}
        >
          Create New Task
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Task Title */}
          <TextField
            fullWidth
            label="Task Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            margin="normal"
          />

          {/* Task Description */}
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Task Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            margin="normal"
          />

          {/* Assign to Student */}
          <TextField
            select
            fullWidth
            label="Assign To Student"
            name="assignedTo"
            value={values.assignedTo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.assignedTo && Boolean(errors.assignedTo)}
            helperText={touched.assignedTo && errors.assignedTo}
            margin="normal"
          >
            <MenuItem value="">
              <em>Select Student</em>
            </MenuItem>
            {students.map((student) => (
              <MenuItem key={student._id} value={student._id}>
                {student.name} ({student.email})
              </MenuItem>
            ))}
          </TextField>

          {/* File Upload */}
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png,.pdf"
            multiple={false}
            onDrop={(acceptedFiles) => {
              acceptedFiles.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFieldValue("file", {
                    data: reader.result,
                    name: file.name,
                    type: file.type,
                  });
                };
                reader.readAsDataURL(file);
              });
            }}
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed #1976d2",
                  borderRadius: 3,
                  mt: 3,
                  p: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  bgcolor: isDragActive ? "#e3f2fd" : "#fafafa",
                  transition: "0.3s",
                  "&:hover": { bgcolor: "#f0f6ff" },
                }}
              >
                <input {...getInputProps()} />
                <CloudUploadIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                {isDragActive ? (
                  <Typography>Drop the file here...</Typography>
                ) : values.file ? (
                  values.file.type === "application/pdf" ? (
                    <Typography>{values.file.name} (PDF)</Typography>
                  ) : (
                    <img
                      src={values.file.data}
                      alt={values.file.name}
                      style={{ maxWidth: "100px", marginTop: "8px" }}
                    />
                  )
                ) : (
                  <Typography>Drag & drop a file here, or click to select</Typography>
                )}
              </Box>
            )}
          </Dropzone>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              borderRadius: "30px",
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Assign Task
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateTask;
