import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Link from '../src/components/Link';
// import { useLocalStorage } from '../src/hooks/useStorage';

export default function Home() {
  // const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage('userInfo', {});
  const [userInfo, setUserInfo] = useState({ id: '' });
  useEffect(() => {
    const userString:any = localStorage.getItem('userInfo');
    const info = JSON.parse(userString);
    setUserInfo(info);
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
        sx={{
          height: 200,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Create your Own Open Edition with Artez
        </Typography>

        <Link href={userInfo?.id ? '/myCollections' : '/signup'} color="secondary" sx={{ display: 'block' }}>
          Get Started
        </Link>
        <Link href="/collections" color="secondary">
          View Live Collections on Artez
        </Link>
      </Box>
    </Container>
  );
}
