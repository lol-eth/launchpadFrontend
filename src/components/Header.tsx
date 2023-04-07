import { Typography, Box, Button } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Router from 'next/router';

function Header() {
  return (
    <Box
      className="connect-btn"
      sx={{
        background: 'url(watercolour.png) no-repeat',
        backgroundSize: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        px: 4,
        py: 2,
        '.connect-button': {
          button: {
            background: '#000 !important',
            fontFamily: 'Georgia',
          },
        },
      }}
    >
      <Box>
        <Button
          size="large"
          variant="contained"
          sx={{
            background: 'rgba(0,0,0,0)',
            borderRadius: '50px',
            fontFamily: 'Georgia',
            color: '#000',
            mr: 4,
            '&:hover': {
              background: 'rgba(0,0,0,0)',
            },
          }}
          onClick={() => {
            Router.push('/');
          }}
        >
          Art EZ
        </Button>
        <Button
          size="large"
          variant="contained"
          sx={{
            background: 'rgba(0,0,0,0)',
            borderRadius: '50px',
            fontFamily: 'Georgia',
            color: '#000',
            mr: 4,
            '&:hover': {
              background: 'rgba(0,0,0,0)',
            },
          }}
          onClick={() => {
            Router.push('/collections');
          }}
        >
          Live Collections
        </Button>
        <Button
          size="large"
          variant="contained"
          sx={{
            background: 'rgba(0,0,0,0)',
            borderRadius: '50px',
            fontFamily: 'Georgia',
            color: '#000',
            mr: 4,
            '&:hover': {
              background: 'rgba(0,0,0,0)',
            },
          }}
          onClick={() => {
            Router.push('/myCollections');
          }}
        >
          My Collections
        </Button>
      </Box>
      <Box className="connect-button">
        <ConnectButton label="Wallet" showBalance={false} />
      </Box>
    </Box>
  );
}

export default Header;
