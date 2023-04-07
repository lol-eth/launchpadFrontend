import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { RainbowKitProvider, getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit';
import {
  configureChains, createClient, WagmiConfig, useAccount,
} from 'wagmi';
import { scrollTestnet } from 'wagmi/chains';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';
import { ArrowBack } from '@mui/icons-material';
import Header from '../src/components/Header';
import createEmotionCache from '../src/components/createEmotionCache';
import theme from '../src/theme';
import { signIn } from '../src/services/account';
import CustomAvatar from '../src/components/CustomAvatar';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// watercolour.png
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const { chains, provider, webSocketProvider } = configureChains(
  [
    scrollTestnet,
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: 'QZScWh5Dxk2PGMTw3IFLI0XcZvskklD8',
    }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const account = useAccount();
  useEffect(() => {
    if (account?.address && account?.isConnected) {
      signIn({ walletAddress: account?.address }).then((userInfo) => {
        if (account?.address === userInfo?.walletAddress) {
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          // window?.location?.search?.split('?cid=')?.[1];
          if (window?.location?.pathname === '/signup') {
            Router.push('/myCollections');
          }
        }
      });
    } else {
      localStorage.removeItem('userInfo');
      if (window?.location?.pathname === '/myCollections') {
        Router.push('/signup');
      }
    }
  }, [account?.address]);
  return (
    <CacheProvider value={emotionCache}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} avatar={CustomAvatar}>
          <Box sx={{
            background: 'url(watercolour.png) no-repeat',
            backgroundSize: '100% 100%',
          }}
          >
            <Head><meta name="viewport" content="initial-scale=1, width=device-width" /></Head>
            <Header />
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </Box>
          <ToastContainer />
        </RainbowKitProvider>
      </WagmiConfig>
    </CacheProvider>
  );
}
