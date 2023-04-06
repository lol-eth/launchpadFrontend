import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

function CustomAvatar({ size }:any) {
  const account = useAccount();
  const [userInfo, setUserInfo] = useState<any>(null);
  useEffect(() => {
    const userString:any = localStorage.getItem('userInfo');
    const info = JSON.parse(userString);
    if (info?.walletAddress === account?.address) {
      setUserInfo(info);
    }
  }, [account?.address]);
  return userInfo?.userLogo ? (
    <img
      src={userInfo?.userLogo}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
      alt="avatar"
    />
  ) : (
    <div
      style={{
        backgroundColor: '#eee',
        borderRadius: 999,
        height: size,
        width: size,
      }}
    />
  );
}

export default CustomAvatar;
