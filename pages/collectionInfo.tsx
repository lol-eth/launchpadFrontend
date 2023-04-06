import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useAccount } from 'wagmi';
import {
  Grid, Container, Typography, Box,
} from '@mui/material';
import { queryCollections } from '../src/services/launchpad';
import HorizontalLinearStepper from '../src/components/HorizontalLinearStepper';

export default function Signup() {
  const [collection, setCollection] = useState<any>({});
  useEffect(() => {
    queryCollections({ id: 5 }).then((res) => {
      console.log('res', res);
      setCollection(res?.[4] || {});
    });
  }, []);
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
        sx={{ width: '100%' }}
      >
        <Grid container>
          <Grid item xs={5}>
            <Box sx={{ p: 4, background: '#fff' }}>
              <Box
                component="img"
                src={collection?.imgUrl}
                alt="test"
                sx={{
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ m: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'left' }}>{collection?.collectionName}</Typography>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                my: 2,
              }}
              >
                <Box
                  component="img"
                  src={collection?.imgUrl}
                  alt="test"
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                  }}
                />
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{
                    textAlign: 'left',
                    ml: 2,
                  }}
                >
                  {collection?.userName || 'userName'}
                </Typography>
              </Box>
              <Typography variant="body1" component="p" gutterBottom sx={{ textAlign: 'left' }}>
                9999999 Minted
              </Typography>
              <Typography variant="body1" component="p" gutterBottom sx={{ textAlign: 'left' }}>
                {collection?.description}
              </Typography>
            </Box>
          </Grid>
          <Box sx={{ width: '80%', mt: 6, marginLeft: '10%' }}>
            <HorizontalLinearStepper />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
