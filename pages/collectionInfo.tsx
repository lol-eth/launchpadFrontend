import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Grid } from '@mui/material';
import Link from '../src/components/Link';
import bgimg from '../public/watercolour.png';

const clist = [1, 2, 3, 4, 5, 6];
export default function Signup() {
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
                src="/watercolour.png"
                alt="test"
                sx={{
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ m: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'left' }}>Collection Name</Typography>
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
                  Creator Name
                </Typography>
              </Box>
              <Typography variant="body1" component="p" gutterBottom sx={{ textAlign: 'left' }}>
                9999999 Minted
              </Typography>
              <Typography variant="body1" component="p" gutterBottom sx={{ textAlign: 'left' }}>
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
                Description here Description here Description here Description here
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
