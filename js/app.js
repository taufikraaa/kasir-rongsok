const $=id=>document.getElementById(id);

const E={
title:$('title'),subtitle:$('subtitle'),toast:$('toast'),
buyDate:$('buyDate'),buyPartner:$('buyPartner'),buyItem:$('buyItem'),buyWeight:$('buyWeight'),
buyPrice:$('buyPrice'),buyPaid:$('buyPaid'),buyChange:$('buyChange'),buyCart:$('buyCart'),
buyGrand:$('buyGrand'),buyWeightTotal:$('buyWeightTotal'),buyNo:$('buyNo'),buyHistory:$('buyHistory'),
buySearch:$('buySearch'),
dBuy:$('dBuy'),dBuyMeta:$('dBuyMeta'),dTrx:$('dTrx'),dStockTotal:$('dStockTotal'),dStockMeta:$('dStockMeta'),
dItemCount:$('dItemCount'),dRecent:$('dRecent'),dPriceList:$('dPriceList'),chart:$('chart'),topStock:$('topStock'),
stockTable:$('stockTable'),prices:$('prices'),from:$('from'),to:$('to'),rBuy:$('rBuy'),rTrx:$('rTrx'),report:$('report'),
shopName:$('shopName'),shopPhone:$('shopPhone'),shopAddress:$('shopAddress'),settings:$('settings'),
modal:$('modal'),modalTitle:$('modalTitle'),itemId:$('itemId'),itemName:$('itemName'),itemBuy:$('itemBuy'),
restoreFile:$('restoreFile'),addBuy:$('addBuy'),saveBuy:$('saveBuy'),clearBuy:$('clearBuy'),
newItem:$('newItem'),close:$('close'),itemForm:$('itemForm'),runReport:$('runReport'),printReport:$('printReport'),
backup:$('backup'),restoreBtn:$('restoreBtn'),wipe:$('wipe'),
clockText:$('clockText'),adminBtn:$('adminBtn'),adminMenu:$('adminMenu'),menuToggle:$('menuToggle'),
sidebar:$('sidebar'),sidebarBackdrop:$('sidebarBackdrop')
};

const KEY='kasirRongsokV2';

function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}
function defaultDB(){
  return {
    settings:{shopName:"Rongsok Jembar",shopPhone:"082121352861",shopAddress:"Jl. Pawenang II"},
    items:[
      {id:uid(),name:"ALUMUNIUM",buy:30000,stock:0},
      {id:uid(),name:"ALUMUNIUM KOTOR",buy:25000,stock:0},
      {id:uid(),name:"ALUMUNIUM SIKU",buy:32000,stock:0},
      {id:uid(),name:"ALUMUNIUM RONGSOK",buy:28000,stock:0},
      {id:uid(),name:"ALUMUNIUM RADIATOR",buy:25000,stock:0},
      {id:uid(),name:"ALUMUNIUM KRE",buy:17000,stock:0},
      {id:uid(),name:"ALUMUNIUM FOIL",buy:5000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"GRAM TEMBAGA",buy:120000,stock:0},
      {id:uid(),name:"GRAM KUNINGAN",buy:90000,stock:0},
      {id:uid(),name:"GRAM BESI",buy:3000,stock:0},
      {id:uid(),name:"GRAM ALUMUNIUM",buy:15000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"TEMBAGA DANDANG",buy:120000,stock:0},
      {id:uid(),name:"TEMBAGA BAKAR",buy:175000,stock:0},
      {id:uid(),name:"TEMBAGA SUPER",buy:185000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"MOBO PC",buy:70000,stock:0},
      {id:uid(),name:"MOBO LAPTOP",buy:100000,stock:0},
      {id:uid(),name:"PANEL A",buy:70000,stock:0},
      {id:uid(),name:"PANEL B",buy:50000,stock:0},
      {id:uid(),name:"PCB CHARGER",buy:10000,stock:0},
      {id:uid(),name:"ABAL ABAL",buy:5000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"ARSIP",buy:2200,stock:0},
      {id:uid(),name:"DUS",buy:2000,stock:0},
      {id:uid(),name:"KARUNG SEMEN",buy:2000,stock:0},
      {id:uid(),name:"DUPLEX",buy:700,stock:0},
      {id:uid(),name:"CD",buy:1000,stock:0},
      {id:uid(),name:"BUKU",buy:1000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"PLASTIK",buy:1500,stock:0},
      {id:uid(),name:"PUTIHAN",buy:3000,stock:0},
      {id:uid(),name:"MAINAN",buy:2500,stock:0},
      {id:uid(),name:"KERASAN",buy:1000,stock:0},
      {id:uid(),name:"CANGKANG KABEL",buy:800,stock:0},
      {id:uid(),name:"KARPET",buy:500,stock:0},
      {id:uid(),name:"PET",buy:4000,stock:0},
      {id:uid(),name:"KASET",buy:5000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"KUNINGAN",buy:115000,stock:0},
      {id:uid(),name:"KUNINGAN RADIATOR",buy:80000,stock:0},
      {id:uid(),name:"------------------------",buy:0,stock:0},
      {id:uid(),name:"ANHAS",buy:22000,stock:0},
      {id:uid(),name:"STAINLESS",buy:10000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"BESI A SUPER",buy:5400,stock:0},
      {id:uid(),name:"BESI SUPER",buy:3000,stock:0},
      {id:uid(),name:"KALENG",buy:2800,stock:0},
      {id:uid(),name:"BESI CAMPUR",buy:4000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"AKI",buy:13000,stock:0},
      {id:uid(),name:"TIMAH",buy:17000,stock:0},
      {id:uid(),name:"-------------------",buy:0,stock:0},
      {id:uid(),name:"BOTOL AO BESAR",buy:1000,stock:0},
      {id:uid(),name:"BOTOL AO KECIL",buy:500,stock:0},
      {id:uid(),name:"BOTOL ANGGUR",buy:500,stock:0},
      {id:uid(),name:"BOTOL ANGGUR KECIL",buy:250,stock:0},
      {id:uid(),name:"BOTOL MARJAN",buy:150,stock:0},
      {id:uid(),name:"-----------------------------",buy:0,stock:0},
      {id:uid(),name:"DINAMO",buy:10000,stock:0}
    ],
    purchases:[]
  };
}

let db=loadDB();
let buyCart=[];

function loadDB(){
  try{
    const saved=JSON.parse(localStorage.getItem(KEY)||'null');
    if(!saved)return defaultDB();

    // Migrate older versions: keep purchase data, remove all selling data/fields.
    saved.settings=saved.settings||{shopName:'Rongsok Jembar',shopPhone:'',shopAddress:''};
    saved.items=Array.isArray(saved.items)?saved.items:[];
    saved.purchases=Array.isArray(saved.purchases)?saved.purchases:[];
    saved.items.forEach(i=>{
      i.buy=Number(i.buy)||0;
      i.stock=Number(i.stock)||0;
      delete i.sell;
    });
    delete saved.sales;
    saveRaw(saved);
    return saved;
  }catch(e){
    return defaultDB();
  }
}

function saveRaw(data){localStorage.setItem(KEY,JSON.stringify(data))}
function save(){saveRaw(db)}
function money(n){return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(+n||0)}
function dateNow(){return new Date().toISOString().slice(0,10)}
function getItem(id){return db.items.find(i=>i.id===id)}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function msg(x){
  E.toast.textContent=x;
  E.toast.style.display='block';
  clearTimeout(window.tm);
  window.tm=setTimeout(()=>E.toast.style.display='none',2500);
}
function itemIcon(name){
  let n=(name||'').toLowerCase();
  if(n.includes('besi')||n.includes('baja'))return '🔩';
  if(n.includes('kardus')||n.includes('kertas')||n.includes('koran'))return '📦';
  if(n.includes('alumin')||n.includes('kaleng'))return '🥫';
  if(n.includes('tembaga')||n.includes('kabel'))return '🔌';
  if(n.includes('plastik')||n.includes('botol'))return '🧴';
  return '♻️';
}

function init(){
  E.buyDate.value=dateNow();
  E.from.value=new Date().toISOString().slice(0,8)+'01';
  E.to.value=dateNow();

  document.querySelectorAll('.nav').forEach(x=>x.onclick=()=>{page(x.dataset.page);closeSidebar()});
  document.querySelectorAll('[data-page].link-btn').forEach(x=>x.onclick=()=>page(x.dataset.page));
  document.querySelectorAll('#adminMenu [data-page]').forEach(x=>x.onclick=()=>{
    page(x.dataset.page);closeAdminMenu();closeSidebar();
  });

  E.buyItem.onchange=()=>priceFill();
  E.addBuy.onclick=addBuyLine;
  E.saveBuy.onclick=savePurchase;
  E.clearBuy.onclick=()=>{buyCart=[];renderCart()};
  E.buyPaid.oninput=payCalc;
  E.buySearch.oninput=renderHistory;

  E.newItem.onclick=()=>openItem();
  E.close.onclick=closeModal;
  E.modal.onclick=e=>{if(e.target===E.modal)closeModal()};
  E.itemForm.onsubmit=saveItem;

  E.runReport.onclick=renderReport;
  E.printReport.onclick=()=>window.print();
  E.backup.onclick=backupData;
  E.restoreBtn.onclick=()=>E.restoreFile.click();
  E.restoreFile.onchange=restoreData;
  E.settings.onsubmit=saveSettings;
  E.wipe.onclick=wipeData;

  E.adminBtn.onclick=e=>{e.stopPropagation();E.adminMenu.classList.toggle('show')};
  document.addEventListener('click',e=>{
    if(!E.adminMenu.contains(e.target)&&e.target!==E.adminBtn)closeAdminMenu();
  });
  E.menuToggle.onclick=()=>{
    E.sidebar.classList.toggle('open');
    E.sidebarBackdrop.classList.toggle('show');
  };
  E.sidebarBackdrop.onclick=closeSidebar;

  startClock();
  renderAll();
}

function closeAdminMenu(){E.adminMenu.classList.remove('show')}
function closeSidebar(){E.sidebar.classList.remove('open');E.sidebarBackdrop.classList.remove('show')}

function startClock(){
  const days=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const months=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  function tick(){
    let d=new Date();
    E.clockText.textContent=days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+
      '  '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');
  }
  tick();setInterval(tick,1000);
}

function page(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===id));
  document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.page===id));
  const t={
    dashboard:['Dashboard','Ringkasan usaha hari ini'],
    pembelian:['Pembelian','Satu nota dapat berisi banyak barang'],
    stok:['Stok Barang','Persediaan otomatis dari nota pembelian'],
    harga:['Daftar Harga','Harga beli default per kilogram'],
    laporan:['Laporan','Laporan pembelian berdasarkan periode'],
    pengaturan:['Pengaturan','Data usaha'],
    backup:['Backup & Restore','Cadangkan dan pulihkan data usaha']
  };
  if(!t[id])return;
  E.title.innerHTML=t[id][0];
  E.subtitle.textContent=t[id][1];
  if(id==='laporan')renderReport();
}

function renderAll(){
  renderSelects();
  renderDashboard();
  renderCart();
  renderHistory();
  renderStock();
  renderPrices();
  renderSettings();
  renderReport();
  E.buyNo.textContent='Nota baru: '+nextNo('PB');
}

function renderSelects(){
  let old=E.buyItem.value;
  E.buyItem.innerHTML='<option value="">-- Pilih barang --</option>'+
    db.items.map(i=>`<option value="${i.id}">${esc(i.name)}</option>`).join('');
  E.buyItem.value=old;
}

function priceFill(){
  const i=getItem(E.buyItem.value);
  if(i)E.buyPrice.value=i.buy;
}

function addBuyLine(){
  let i=getItem(E.buyItem.value),w=+E.buyWeight.value,p=+E.buyPrice.value;
  if(!i||w<=0)return msg('Pilih barang dan masukkan berat.');
  if(p<0)return msg('Harga beli tidak valid.');
  buyCart.push({id:uid(),itemId:i.id,weight:w,price:p,total:w*p});
  E.buyWeight.value='';
  renderCart();
}

function renderCart(){
  let grand=buyCart.reduce((a,x)=>a+x.total,0);
  let weight=buyCart.reduce((a,x)=>a+x.weight,0);
  E.buyCart.innerHTML=buyCart.length
    ?buyCart.map(x=>`<tr><td>${esc(getItem(x.itemId)?.name||'-')}</td><td>${x.weight} kg</td><td>${money(x.price)}</td><td><b>${money(x.total)}</b></td><td><button class="mini del" onclick="removeLine('${x.id}')">×</button></td></tr>`).join('')
    :'<tr><td colspan="5" class="empty">Belum ada barang dalam nota</td></tr>';
  E.buyGrand.textContent=money(grand);
  E.buyWeightTotal.textContent=weight.toFixed(2)+' kg';
  payCalc();
}

function removeLine(id){
  buyCart=buyCart.filter(x=>x.id!==id);
  renderCart();
}

function payCalc(){
  let total=buyCart.reduce((a,x)=>a+x.total,0);
  let paid=+E.buyPaid.value||0;
  E.buyChange.value=money(paid-total);
}

function nextNo(prefix){
  return prefix+'-'+String(db.purchases.length+1).padStart(5,'0');
}

function savePurchase(){
  if(!E.buyPartner.value.trim())return msg('Masukkan nama pemasok.');
  if(!buyCart.length)return msg('Tambahkan minimal satu barang.');

  let total=buyCart.reduce((a,x)=>a+x.total,0);
  let paid=+E.buyPaid.value||0;
  let no=nextNo('PB');

  for(const x of buyCart){
    let i=getItem(x.itemId);
    i.stock+=x.weight;
    i.buy=x.price;
  }

  const rec={
    id:uid(),no,date:E.buyDate.value,
    partner:E.buyPartner.value.trim(),
    items:buyCart.map(x=>({...x})),
    total,paid,ts:Date.now()
  };

  db.purchases.unshift(rec);
  save();
  msg('Nota pembelian tersimpan');
  printReceipt(rec);
  buyCart=[];
  E.buyPartner.value='';
  E.buyPaid.value='';
  E.buyDate.value=dateNow();
  renderAll();
}

function renderHistory(){
  let q=(E.buySearch.value||'').toLowerCase();
  E.buyHistory.innerHTML=db.purchases
    .filter(x=>(x.no+' '+x.partner).toLowerCase().includes(q))
    .map(x=>`<tr><td><b>${x.no}</b></td><td>${x.date}</td><td>${esc(x.partner)}</td><td>${x.items.length} jenis</td><td>${money(x.total)}</td><td><button class="mini" onclick="printPurchase('${x.id}')">Struk</button> <button class="mini del" onclick="deleteNote('${x.id}')">Hapus</button></td></tr>`)
    .join('')||empty(6);
}

function empty(n){return `<tr><td colspan="${n}" class="empty">Belum ada data</td></tr>`}

function deleteNote(id){
  if(!confirm('Hapus nota pembelian? Stok akan dikoreksi otomatis.'))return;
  let x=db.purchases.find(a=>a.id===id);
  if(!x)return;
  for(const l of x.items){
    let i=getItem(l.itemId);
    if(i)i.stock-=l.weight;
  }
  db.purchases.splice(db.purchases.indexOf(x),1);
  save();
  renderAll();
  msg('Nota pembelian dihapus');
}

function renderStock(){
  E.stockTable.innerHTML=db.items.map(i=>`<tr>
    <td><b>${esc(i.name)}</b></td>
    <td class="${i.stock<=5?'low':''}">${i.stock.toFixed(2)} kg</td>
    <td>${money(i.buy)}</td>
    <td>${money(i.stock*i.buy)}</td>
    <td><button class="mini" onclick="openItem('${i.id}')">Edit</button> <button class="mini del" onclick="deleteItem('${i.id}')">Hapus</button></td>
  </tr>`).join('')||empty(5);
}

function renderPrices(){
  E.prices.innerHTML=db.items.map(i=>`<div class="price">
    <b>${esc(i.name)}</b>
    <label>Harga beli<input type="number" value="${i.buy}" onchange="changePrice('${i.id}',this.value)"></label>
  </div>`).join('')||'<div class="empty">Belum ada barang</div>';
}

function changePrice(id,v){
  let i=getItem(id);
  if(!i)return;
  i.buy=+v||0;
  save();
  renderSelects();
  renderDashboard();
  renderStock();
  msg('Harga beli diperbarui');
}

function openItem(id=''){
  E.modal.classList.add('show');
  let i=getItem(id);
  E.itemId.value=id;
  E.itemName.value=i?.name||'';
  E.itemBuy.value=i?.buy||0;
  E.modalTitle.textContent=id?'Edit Barang':'Tambah Barang';
}

function closeModal(){E.modal.classList.remove('show')}

function saveItem(e){
  e.preventDefault();
  let id=E.itemId.value,n=E.itemName.value.trim();
  if(!n)return msg('Nama barang wajib diisi.');

  if(id){
    let i=getItem(id);
    i.name=n;
    i.buy=+E.itemBuy.value||0;
  }else{
    db.items.push({id:uid(),name:n,buy:+E.itemBuy.value||0,stock:0});
  }
  save();
  closeModal();
  renderAll();
  msg('Barang disimpan');
}

function deleteItem(id){
  let i=getItem(id);
  if(!i)return;
  if(i.stock||db.purchases.some(n=>n.items.some(x=>x.itemId===id)))
    return msg('Barang sudah dipakai transaksi, tidak dapat dihapus.');
  if(confirm('Hapus barang?')){
    db.items=db.items.filter(x=>x.id!==id);
    save();
    renderAll();
  }
}

/* ---------------- Dashboard ---------------- */
function renderDashboard(){
  let d=dateNow();
  let buysToday=db.purchases.filter(x=>x.date===d);
  let b=buysToday.reduce((a,x)=>a+x.total,0);
  let bW=buysToday.reduce((a,x)=>a+x.items.reduce((p,l)=>p+l.weight,0),0);

  E.dBuy.textContent=money(b);
  E.dBuyMeta.textContent=`${buysToday.length} Nota · ${bW.toFixed(0)} kg`;
  E.dTrx.textContent=buysToday.length;
  E.dStockTotal.textContent=db.items.reduce((a,i)=>a+i.stock,0).toFixed(0)+' kg';
  E.dStockMeta.textContent=db.items.length+' Jenis Barang';
  E.dItemCount.textContent=db.items.length;

  renderChart();
  renderTopStock();
  renderRecentTable();
  renderDashboardPriceList();
}

function renderTopStock(){
  let top=db.items.slice().sort((a,b)=>b.stock-a.stock).slice(0,5);
  let max=Math.max(1,...top.map(i=>i.stock));
  E.topStock.innerHTML=top.length
    ?top.map(i=>`<div class="stock-row"><div class="icon">${itemIcon(i.name)}</div><div class="name">${esc(i.name)}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(4,i.stock/max*100)}%"></div></div><div class="val">${i.stock.toFixed(0)} kg</div></div>`).join('')
    :'<div class="empty">Belum ada barang</div>';
}

function renderRecentTable(){
  let n=db.purchases.slice().sort((a,b)=>(b.ts||0)-(a.ts||0)||b.date.localeCompare(a.date)).slice(0,5);
  E.dRecent.innerHTML=n.length
    ?n.map(x=>`<tr><td>${x.date}</td><td><b>${x.no}</b></td><td><span class="tag buy">Pembelian</span></td><td>${esc(x.partner)}</td><td>${money(x.total)}</td><td><button class="eye" onclick="printPurchase('${x.id}')" title="Lihat nota"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td></tr>`).join('')
    :empty(6);
}

function renderDashboardPriceList(){
  E.dPriceList.innerHTML=db.items.length
    ?db.items.map(i=>`<tr><td>${itemIcon(i.name)} ${esc(i.name)}</td><td>${money(i.buy)}</td><td>${i.stock.toFixed(0)} kg</td></tr>`).join('')
    :empty(3);
}

function renderChart(){
  let days=[];
  for(let k=6;k>=0;k--){
    let dt=new Date();
    dt.setDate(dt.getDate()-k);
    days.push(dt.toISOString().slice(0,10));
  }

  let data=days.map(d=>({
    label:d.slice(8,10)+' '+['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][+d.slice(5,7)-1],
    buy:db.purchases.filter(x=>x.date===d).reduce((a,x)=>a+x.total,0)
  }));

  let max=Math.max(1,...data.map(x=>x.buy));
  let niceMax=niceCeil(max);
  let steps=4,W=680,H=230,padL=64,padB=30,padT=10,padR=10;
  let plotW=W-padL-padR,plotH=H-padT-padB,groupW=plotW/data.length,barW=Math.min(28,groupW*.38);

  let svg=`<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:100%;height:auto;font-family:inherit">`;
  for(let s=0;s<=steps;s++){
    let val=niceMax/steps*s;
    let y=padT+plotH-(val/niceMax*plotH);
    svg+=`<line x1="${padL}" y1="${y}" x2="${W-padR}" y2="${y}" stroke="#eef0f2" stroke-width="1"/>`;
    svg+=`<text x="${padL-8}" y="${y+4}" text-anchor="end" font-size="10" fill="#9aa3ad">${fmtShort(val)}</text>`;
  }
  data.forEach((d,idx)=>{
    let gx=padL+idx*groupW,bh=d.buy/niceMax*plotH,bx=gx+groupW/2-barW/2;
    svg+=`<rect x="${bx}" y="${padT+plotH-bh}" width="${barW}" height="${bh}" rx="3" fill="#22c55e"/>`;
    svg+=`<text x="${gx+groupW/2}" y="${H-8}" text-anchor="middle" font-size="10" fill="#6b7280">${d.label}</text>`;
  });
  svg+=`</svg>`;
  E.chart.innerHTML=svg;
}

function niceCeil(v){
  if(v<=0)return 100;
  let mag=Math.pow(10,Math.floor(Math.log10(v))),n=v/mag;
  let nice=n<=1?1:n<=2?2:n<=5?5:10;
  return nice*mag;
}

function fmtShort(v){
  if(v>=1000000)return (v/1000000).toFixed(v%1000000===0?0:1)+'jt';
  if(v>=1000)return (v/1000).toFixed(0)+'rb';
  return String(Math.round(v));
}

function renderReport(){
  let a=E.from.value,z=E.to.value;
  let b=db.purchases.filter(x=>x.date>=a&&x.date<=z);
  let bv=b.reduce((x,y)=>x+y.total,0);
  E.rBuy.textContent=money(bv);
  E.rTrx.textContent=b.length;
  E.report.innerHTML=b.map(x=>`<tr><td>${x.no}</td><td>${x.date}</td><td>Pembelian</td><td>${esc(x.partner)}</td><td>${x.items.length} jenis</td><td>${money(x.total)}</td></tr>`).join('')||empty(6);
}

function renderSettings(){
  E.shopName.value=db.settings.shopName;
  E.shopPhone.value=db.settings.shopPhone;
  E.shopAddress.value=db.settings.shopAddress;
}

function saveSettings(e){
  e.preventDefault();
  db.settings={
    shopName:E.shopName.value.trim()||'Rongsok Jembar',
    shopPhone:E.shopPhone.value.trim(),
    shopAddress:E.shopAddress.value.trim()
  };
  save();
  msg('Pengaturan disimpan');
}

function wipeData(){
  if(confirm('Hapus semua data?')){localStorage.removeItem(KEY);location.reload()}
}

function backupData(){
  let b=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});
  let a=document.createElement('a');
  a.href=URL.createObjectURL(b);
  a.download='backup-rongsok-jembar-'+dateNow()+'.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function restoreData(e){
  let f=e.target.files[0];
  if(!f)return;
  let r=new FileReader();
  r.onload=()=>{
    try{
      let x=JSON.parse(r.result);
      if(!x.items||!x.purchases)throw 0;
      x.settings=x.settings||{shopName:'Rongsok Jembar',shopPhone:'',shopAddress:''};
      x.items.forEach(i=>{delete i.sell;i.buy=Number(i.buy)||0;i.stock=Number(i.stock)||0});
      delete x.sales;
      db=x;
      save();
      renderAll();
      msg('Restore berhasil');
    }catch{msg('File backup tidak valid')}
  };
  r.readAsText(f);
  e.target.value='';
}

function printPurchase(id){
  let x=db.purchases.find(a=>a.id===id);
  if(x)printReceipt(x);
}

function printReceipt(x){
  let w=window.open('','_blank','width=430,height=700');
  if(!w)return;
  let rows=x.items.map(l=>`<div class="row"><span>${esc(getItem(l.itemId)?.name||'-')}<br>${l.weight} kg × ${money(l.price)}</span><b>${money(l.total)}</b></div>`).join('');
  w.document.write(`<html><head><title>${x.no}</title><style>
  body{font:12px Arial;width:330px;margin:20px auto}.c{text-align:center}.line{border-top:1px dashed #000;margin:10px 0}
  .row{display:flex;justify-content:space-between;margin:9px 0;gap:10px}.total{font-size:16px;font-weight:bold}
  </style></head><body><div class="c"><h2>${esc(db.settings.shopName)}</h2>${esc(db.settings.shopAddress)}<br>${esc(db.settings.shopPhone)}</div>
  <div class="line"></div><p>Nota: ${x.no}<br>Tanggal: ${x.date}<br>Pemasok: ${esc(x.partner)}</p>
  <div class="line"></div>${rows}<div class="line"></div>
  <div class="row total"><span>TOTAL</span><span>${money(x.total)}</span></div>
  <div class="row"><span>Bayar</span><span>${money(x.paid)}</span></div>
  <div class="row"><span>Kembali</span><span>${money(x.paid-x.total)}</span></div>
  <div class="line"></div><div class="c">Terima kasih</div><script>window.print()<\/script></body></html>`);
  w.document.close();
}

document.addEventListener('DOMContentLoaded',init);
