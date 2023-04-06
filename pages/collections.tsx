import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Link from '../src/components/Link';

const clist = [1, 2, 3, 4, 5, 6];
export default function Collections() {
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
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'left' }}>Live Collection on Artez</Typography>
        <Grid container>
          {clist?.map((c) => (
            <Grid item xs={4} key={c}>
              <Link href={`/collectionInfo?cid=${c}`} color="secondary">
                <Box sx={{
                  background: '#fff',
                  mr: 2,
                  mt: 2,
                  p: 2,
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
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
