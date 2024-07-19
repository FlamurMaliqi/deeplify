import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

export default function ImageUpload() {
  let [image, setImage] = useState(null); 
  let [classification, setClassification] = useState(''); 

  // Configure the dropzone for handling file uploads
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Accept image files only
    onDrop: acceptedFiles => {
      let file = acceptedFiles[0];
      setImage(URL.createObjectURL(file)); 
      let formData = new FormData();
      formData.append('file', file);

      // Send image to server and handle the response
      axios.post('http://localhost:8000/upload', formData)
        .then(response => setClassification(response.data.classification)) 
        .catch(error => console.error('Upload error:', error));
    }
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Box {...getRootProps()} sx={{ border: '2px dashed #000', p: 5, textAlign: 'center' }}>
        <input {...getInputProps()} />
        <Typography variant="body1">Drag and drop an image here, or click to select one</Typography>
      </Box>
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: 16 }} />}
      {classification && (
        <Typography
          variant="body1"
          sx={{ mt: 2, p: 1, backgroundColor: classification === 'OK' ? 'green' : 'red', color: 'white' }}
        >
          {classification}
        </Typography>
      )}
    </Box>
  );
}
