/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { uploadImage } from '../services/launchpad';

function UploadArtwork({ setArtImageUrl }:any) {
  const onDrop = useCallback(async (acceptedFiles:any) => {
    const imgUrl = await uploadImage(acceptedFiles?.[0]);
    setArtImageUrl(imgUrl);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        sx={{
          p: 6,
          background: '#eee',
          cursor: 'pointer',
        }}
      >
        <Typography sx={{
          textAlign: 'center',
          color: ' #1E32E5',
          textDecorationLine: 'underline',
          fontSize: 20,
        }}
        >
          Upload your artwork here
        </Typography>
      </Box>
    </div>
  );
}

export default UploadArtwork;
