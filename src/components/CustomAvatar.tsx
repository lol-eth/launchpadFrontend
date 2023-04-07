import { useEffect, useState } from 'react';

function CustomAvatar({ address, size }:any) {
  const [userInfo, setUserInfo] = useState<any>(null);
  useEffect(() => {
    setTimeout(() => {
      const userString:any = localStorage.getItem('userInfo');
      const info = JSON.parse(userString);
      if (info?.walletAddress === address) {
        setUserInfo(info);
      }
    }, 1000);
  }, [address]);
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
