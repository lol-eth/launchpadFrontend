export const BASE_URL = 'https://launchpadtest.ezswap.io/api/';

type StatusType = {
  [key: number]: string
}
export const CollectionStatus: StatusType = {
  0: 'Deleted',
  1: 'Draft',
  2: 'Deployed',
  3: 'Minting',
  4: 'Mint Ended',
};

export const CollectionStatusMap = {
  Deleted: 0,
  Draft: 1,
  Deployed: 2,
  Minting: 3,
  MintEnded: 4,
};
