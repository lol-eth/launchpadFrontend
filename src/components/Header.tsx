import { Typography, Box } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
  return (
    <Box
      className="connect-btn"
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        px: 4,
        py: 2,
        div: {
          button: {
            background: '#000 !important',
          },
        },
      }}
    >
      <ConnectButton label="Wallet" showBalance={false} />
    </Box>
  );
}

export default Header;
