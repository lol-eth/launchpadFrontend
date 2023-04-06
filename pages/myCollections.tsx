import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Router from 'next/router';
import Link from '../src/components/Link';

const clist = [1, 2, 3, 4, 5, 6];
export default function MyCollections() {
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
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
        }}
        >
          <Box
            component="img"
            src="/watercolour.png"
            alt="test"
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
            Username
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
        <Grid container>
          {clist?.map((c) => (
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
    </Container>
  );
}
