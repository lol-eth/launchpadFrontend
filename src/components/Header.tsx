import { Typography, Box } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        px: 2,
        py: 1,
      }}
    >
      <ConnectButton />
    </Box>
  );
}

export default Header;
