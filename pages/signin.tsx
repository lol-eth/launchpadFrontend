/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container, Typography, Box, Button, TextField,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import Router from 'next/router';
import { uploadImage, signUp } from '../src/services/account';

function MyDropzone({ setImageUrl, imageUrl }:any) {
  const onDrop = useCallback(async (acceptedFiles:any) => {
    // Do something with the files
    const imgUrl = await uploadImage(acceptedFiles?.[0]);
    setImageUrl(imgUrl);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  useEffect(() => {
    const userString:any = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(userString);
    if (userInfo?.id) {
      if (Router?.router?.state?.pathname === '/signup') {
        Router.push('/myCollections');
      }
    }
  }, []);
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid #fff',
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {imageUrl ? (
          <Box
            component="img"
            src={imageUrl}
            sx={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
            }}
          />
        ) : (
          <CloudUploadIcon sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
          }}
          />
        )}
      </Box>
    </div>
  );
}
export default function Signup() {
  const [imageUrl, setImageUrl] = useState('');
  const account = useAccount();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      userName: '',
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required'),
      userName: Yup
        .string()
        .max(255)
        .required('User Name is required'),
    }),
    onSubmit: async (e, { setErrors, setSubmitting }) => {
      if (!account?.address) {
        toast.error('Please connect your wallet');
      }
      if (!imageUrl) {
        toast.error('Please upload a avatar');
      }
      const { email, password, userName } = formik?.values || {};
      const data = {
        email,
        password,
        userName,
        walletAddress: account?.address,
        userLogo: imageUrl,
      };
      try {
        const userInfo = await signUp(data);
        if (userInfo?.id) {
          toast.success('Registered successfully');
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          Router.push('/myCollections');
        }
      } catch (error) {
        setSubmitting(false);
        // setErrors(error);
      }
    },
  });
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: 600,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In On Artez
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            error={Boolean(formik.touched.userName && formik.errors.userName)}
            fullWidth
            helperText={formik.touched.userName && formik.errors.userName}
            label="User Name"
            margin="normal"
            name="userName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            value={formik.values.userName}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{
                background: '#b3d3ea',
                color: '#000',
                '&:hover': {
                  background: '#86bae0',
                },
              }}
            >
              Sign In Now
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
