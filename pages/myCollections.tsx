import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Router from 'next/router';
import { useAccount } from 'wagmi';
import { queryCollections } from '../src/services/launchpad';

export default function MyCollections() {
  const account = useAccount();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [collections, setCollections] = useState<any[]>([]);
  useEffect(() => {
    const userString:any = localStorage.getItem('userInfo');
    const info = JSON.parse(userString);
    if (info?.walletAddress === account?.address) {
      // logined get List
      setUserInfo(info);
      queryCollections({ userId: info?.id }).then((res) => {
        console.log('res', res);
      });
    } else {
      Router.push('/signup');
    }
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
      {userInfo ? (
        <Box
          sx={{ width: '100%' }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            my: 2,
          }}
          >
            <Box
              component="img"
              src={userInfo?.userLogo}
              alt="userLogo"
              sx={{
                width: '114px',
                height: '114px',
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
                fontSize: '30px',
              }}
            >
              {userInfo?.userName}
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: 2,
          }}
          >
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'left' }}>Your open edition collections</Typography>
            <Button
              sx={{
                background: '#000',
                color: '#fff',
                mr: 2,
                '&:hover': {
                  backgroundColor: '#000',
                  color: '#fff',
                },
              }}
              onClick={() => {
                Router.push('/createCollection');
              }}
            >
              Create New
            </Button>
          </Box>
          <Grid
            container
            sx={{
              minHeight: '500px',
            }}
          >
            {collections?.map((c) => (
              <Grid item xs={4} key={c}>
                <Box
                  sx={{
                    background: '#fff',
                    mr: 2,
                    mt: 2,
                    p: 2,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    Router.push(`/collectionInfo?cid=${c}`);
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src="/watercolour.png"
                      alt="test"
                      sx={{
                        maxWidth: '100%',
                      }}
                    />
                    <Typography sx={{
                      position: 'absolute',
                      bottom: 10,
                      left: 0,
                      p: 2,
                    }}
                    >
                      name
                    </Typography>
                  </Box>
                  <Box sx={{ px: 2 }}>
                    <Typography>mint</Typography>
                    <Typography>09/10/2000</Typography>
                  </Box>
                  <Button
                    sx={{
                      background: '#000',
                      color: '#fff',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: '#000',
                        color: '#fff',
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      Router.push(`/editCollection?cid=${c}`);
                    }}
                  >
                    Edit
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : null}
    </Container>
  );
}
