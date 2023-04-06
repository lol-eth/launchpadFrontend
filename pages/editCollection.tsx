import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Router from 'next/router';
import Link from '../src/components/Link';

export default function editCollection() {
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
          height: 400,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up for Artez
        </Typography>
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel htmlFor="user-email">Email address</InputLabel>
          <Input id="user-email" aria-describedby="user-email-text" />
          <FormHelperText id="user-email-text">your email</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel htmlFor="user-name">Name</InputLabel>
          <Input id="user-name" aria-describedby="user-name-text" />
          <FormHelperText id="user-name-text">your name</FormHelperText>
        </FormControl>
        <Box maxWidth="sm">
          <Button
            variant="contained"
            onClick={() => {
              Router.push('/myCollections');
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
