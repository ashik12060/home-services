import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import Dropzone from "react-dropzone";
import axiosInstance from "../pages/axiosInstance";
import { toast } from "react-toastify";

export default function StudentTaskReply({ task, onSubmitted }) {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile({
        data: reader.result,
        name: file.name,
        type: file.type,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) {
      toast.error("Please add your response content.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/task/submit/${task._id}`,
        { content, file },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Response submitted!");
      setContent("");
      setFile(null);
      onSubmitted(); // callback to refresh parent list if needed
    } catch (error) {
      toast.error("Failed to submit response.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Submit Your Response</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Response Content"
          multiline
          rows={4}
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Dropzone acceptedFiles=".jpg,.jpeg,.png,.pdf" multiple={false} onDrop={handleDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <Box
              {...getRootProps()}
              sx={{
                border: "2px dashed blue",
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                mb: 2,
                backgroundColor: isDragActive ? "#cceffc" : "#fafafa",
              }}
            >
              <input {...getInputProps()} />
              {file ? (
                <Typography>{file.name}</Typography>
              ) : (
                <Typography>Drag 'n' drop a file here, or click to select file</Typography>
              )}
            </Box>
          )}
        </Dropzone>

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Submit Response"}
        </Button>
      </form>
    </Box>
  );
}
