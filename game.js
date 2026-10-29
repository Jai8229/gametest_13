// ==========================================
// 數學與陣列輔助工具
// ==========================================
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffleArray(arr).slice(0, n);
}

// ==========================================
// 高清向量 SVG 圖庫 (食物 + 角色)
// ==========================================
const ASSET_SVGS = {
  player: `<svg class="avatar-svg" viewBox="0 0 24 30"><circle cx="12" cy="5.5" r="3.5" fill="#fde047"/><path d="M7 11 C7 9.5, 17 9.5, 17 11 L16 19 H8 Z" fill="#6366f1"/><rect x="8.5" y="19" width="2.5" height="7" rx="1.2" fill="#1e293b"/><rect x="13" y="19" width="2.5" height="7" rx="1.2" fill="#1e293b"/><circle cx="12" cy="14" r="1.2" fill="#e0e7ff"/></svg>`,
  burger: `<svg class="shelf-svg" viewBox="0 0 64 64"><path d="M14 26 C14 12, 50 12, 50 26 Z" fill="#f59e0b"/><rect x="16" y="28" width="32" height="4" rx="2" fill="#ef4444"/><rect x="14" y="33" width="36" height="6" rx="2" fill="#78350f"/><path d="M12 40 Q32 44 52 40" stroke="#10b981" stroke-width="4" fill="none"/><path d="M15 44 H49 V47 C49 53, 15 53, 15 47 Z" fill="#f59e0b"/><circle cx="25" cy="20" r="1.5" fill="#fef3c7"/><circle cx="34" cy="18" r="1.5" fill="#fef3c7"/><circle cx="41" cy="21" r="1.5" fill="#fef3c7"/></svg>`,
  chicken: `<svg class="shelf-svg" viewBox="0 0 64 64"><ellipse cx="38" cy="28" rx="16" ry="12" fill="#b45309"/><ellipse cx="36" cy="26" rx="14" ry="10" fill="#d97706"/><path d="M24 34 L12 48" stroke="#f1f5f9" stroke-width="6" stroke-linecap="round"/><circle cx="10" cy="50" r="4" fill="#f1f5f9"/><circle cx="15" cy="52" r="4" fill="#f1f5f9"/></svg>`,
  pizza: `<svg class="shelf-svg" viewBox="0 0 64 64"><path d="M32 10 L52 50 A26 26 0 0 1 12 50 Z" fill="#fbbf24"/><path d="M12 50 A26 26 0 0 0 52 50" stroke="#b45309" stroke-width="5" fill="none"/><circle cx="32" cy="28" r="3.5" fill="#ef4444"/><circle cx="25" cy="40" r="3.5" fill="#ef4444"/><circle cx="39" cy="38" r="3.5" fill="#ef4444"/></svg>`,
  soda: `<svg class="shelf-svg" viewBox="0 0 64 64"><rect x="14" y="20" width="18" height="34" rx="4" fill="#ef4444"/><rect x="18" y="16" width="10" height="4" fill="#cbd5e1"/><path d="M36 16 L52 24 L48 54 L32 46 Z" fill="#3b82f6"/><circle cx="23" cy="37" r="4" fill="#fff"/></svg>`,
  donut: `<svg class="shelf-svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="#d97706"/><circle cx="32" cy="32" r="20" fill="#f472b6"/><circle cx="32" cy="32" r="8" fill="#0f172a"/><circle cx="24" cy="22" r="1.5" fill="#fff"/><circle cx="40" cy="24" r="1.5" fill="#facc15"/><circle cx="38" cy="42" r="1.5" fill="#38bdf8"/></svg>`,
  noodles: `<svg class="shelf-svg" viewBox="0 0 64 64"><path d="M14 24 L20 54 H44 L50 24 Z" fill="#e2e8f0"/><ellipse cx="32" cy="24" rx="18" ry="4" fill="#f59e0b"/><line x1="28" y1="12" x2="48" y2="4" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/></svg>`,
  beans: `<svg class="shelf-svg" viewBox="0 0 64 64"><rect x="18" y="18" width="28" height="36" rx="4" fill="#475569"/><ellipse cx="32" cy="18" rx="14" ry="4" fill="#94a3b8"/><rect x="18" y="26" width="28" height="18" fill="#15803d"/><ellipse cx="32" cy="35" rx="4" ry="2.5" fill="#fef08a"/></svg>`,
  oats: `<svg class="shelf-svg" viewBox="0 0 64 64"><ellipse cx="32" cy="42" rx="22" ry="12" fill="#cbd5e1"/><ellipse cx="32" cy="38" rx="20" ry="10" fill="#fef08a"/><circle cx="28" cy="36" r="2" fill="#b45309"/><circle cx="36" cy="37" r="2" fill="#ef4444"/><circle cx="32" cy="40" r="1.5" fill="#b45309"/></svg>`,
  chicken_meal: `<svg class="shelf-svg" viewBox="0 0 64 64"><ellipse cx="32" cy="40" rx="22" ry="12" fill="#e2e8f0"/><ellipse cx="26" cy="36" rx="12" ry="7" fill="#ffffff"/><path d="M34 28 C42 26 48 34 40 40 Z" fill="#f59e0b"/><circle cx="38" cy="42" r="4" fill="#10b981"/><circle cx="44" cy="38" r="3.5" fill="#10b981"/></svg>`,
  fruit: `<svg class="shelf-svg" viewBox="0 0 64 64"><circle cx="26" cy="36" r="12" fill="#ef4444"/><path d="M26 24 C28 20 32 18 32 18" stroke="#10b981" stroke-width="2.5" fill="none"/><path d="M32 44 C42 44 50 34 50 24 C46 28 40 34 32 38 Z" fill="#facc15"/></svg>`,
  salmon: `<svg class="shelf-svg" viewBox="0 0 64 64"><ellipse cx="32" cy="40" rx="22" ry="12" fill="#1e293b"/><path d="M18 36 Q32 26 46 36 Q32 46 18 36 Z" fill="#fb923c"/><path d="M24 34 L30 38 M32 32 L38 36" stroke="#fff" stroke-width="1.5"/><circle cx="22" cy="42" r="3" fill="#10b981"/><circle cx="42" cy="32" r="3" fill="#10b981"/></svg>`,
  hotdog: `<svg class="shelf-svg" viewBox="0 0 64 64"><path d="M6 34 Q32 18 58 34 Q60 40 54 42 Q32 28 10 42 Q4 40 6 34 Z" fill="#f59e0b"/><rect x="8" y="30" width="48" height="9" rx="4.5" fill="#dc2626"/><path d="M12 33 L18 31 L24 34 L30 31 L36 34 L42 31 L48 34" stroke="#fde047" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
  lunch_tray: `<svg class="shelf-svg" viewBox="0 0 64 64"><rect x="8" y="18" width="48" height="30" rx="4" fill="#94a3b8"/><rect x="12" y="22" width="18" height="10" rx="2" fill="#fbbf24"/><rect x="34" y="22" width="18" height="10" rx="2" fill="#10b981"/><rect x="12" y="36" width="40" height="8" rx="2" fill="#f87171"/></svg>`,
  home_bowl: `<svg class="shelf-svg" viewBox="0 0 64 64"><path d="M12 34 H52 Q50 50 32 50 Q14 50 12 34 Z" fill="#e2e8f0"/><ellipse cx="32" cy="34" rx="20" ry="5" fill="#fef9c3"/><circle cx="32" cy="30" r="4" fill="#facc15"/></svg>`
};

// ==========================================
// 食物數據庫與同行評審文獻
// ==========================================
const FOOD_CATALOG = {
  // 家居三餐
  home_egg_rice: { id: "home_egg_rice", name: "家常蒸水蛋配白飯", svg: "home_bowl", type: "healthy", price: 1.6, calories: 420, protein: 15, t2d: -0.4, cvd: -0.3, upf: false, source: "Wolfson & Bleich (2015, Public Health Nutr)", cite: "每週在家自煮超過 5 次的人士，每日糖分及超加工食品攝取量顯著低於外食群體。" },
  home_canned_beans: { id: "home_canned_beans", name: "茄汁焗豆配白飯", svg: "beans", type: "healthy", price: 1.8, calories: 480, protein: 17, t2d: -0.6, cvd: -0.5, upf: false, source: "Bazzano et al. (2001, Arch Intern Med)", cite: "每週進食豆類 4 次以上，可降低缺血性心臟病風險 22%；屬食物沙漠中少數平價抗病食材。" },
  home_nuggets: { id: "home_nuggets", name: "特價急凍炸雞塊", svg: "chicken", type: "junk", price: 2.2, calories: 650, protein: 16, t2d: 1.2, cvd: 1.8, upf: true, source: "Sun et al. (2019, BMJ)", cite: "長期食用高鹽油炸超加工食物，令全因心血管死亡風險上升 13%。" },
  home_ramen: { id: "home_ramen", name: "低鈉即食麵打蛋", svg: "noodles", type: "healthy", price: 1.1, calories: 440, protein: 11, t2d: 0.5, cvd: 0.9, upf: true, source: "Shin et al. (2014, J Nutr)", cite: "每週進食即食麵兩次以上與女性高血壓及腹部肥胖顯著正相關。" },

  // 學校
  sch_lunch_box: { id: "sch_lunch_box", name: "國家資助營養午餐", svg: "lunch_tray", type: "healthy", price: 0.8, calories: 560, protein: 26, t2d: -0.7, cvd: -0.6, upf: false, source: "USDA ERS (2022)", cite: "參與學校資助午餐計劃（NSLP）能有效提高低收入學童的乳清蛋白與全穀攝取。" },
  sch_snack_fry: { id: "sch_snack_fry", name: "小賣部脆薯條", svg: "chicken", type: "junk", price: 1.8, calories: 450, protein: 5, t2d: 1.4, cvd: 1.7, upf: true, source: "Drewnowski & Specter (2004, Am J Clin Nutr)", cite: "精緻炸薯條提供最廉價的每美元熱量，是校園周邊兒童肥胖的主要驅動力。" },
  sch_cookie_milk: { id: "sch_cookie_milk", name: "高糖朱古力奶配曲奇", svg: "donut", type: "junk", price: 1.3, calories: 380, protein: 7, t2d: 1.6, cvd: 0.9, upf: true, source: "Malik et al. (2010, Circulation)", cite: "液態添加糖不會產生正常飽足感，易導致兒童早期脂肪肝與胰島素耐受性下降。" },

  // 公園
  park_hotdog: { id: "park_hotdog", name: "街角流動熱狗", svg: "hotdog", type: "junk", price: 2.2, calories: 510, protein: 13, t2d: 1.3, cvd: 2.0, upf: true, source: "Pan et al. (2011, Am J Clin Nutr / Harvard)", cite: "每日進食一份加工紅肉（如熱狗腸），二型糖尿病發病風險提高 51%。" },
  park_soda: { id: "park_soda", name: "特大杯碳酸糖水", svg: "soda", type: "junk", price: 1.2, calories: 290, protein: 0, t2d: 2.2, cvd: 1.2, upf: true, source: "Hall et al. (2019, Cell Metabolism)", cite: "超加工糖飲會直接破壞大腦下丘腦的飽足中樞訊號，誘發暴食循環。" },

  // 快餐連鎖
  ff_combo_burger: { id: "ff_combo_burger", name: "超值雙層牛堡餐", svg: "burger", type: "junk", price: 3.8, calories: 920, protein: 28, t2d: 2.0, cvd: 2.5, upf: true, source: "Pan et al. (2011, Circulation)", cite: "富含反式脂肪酸與高鈉的精煉紅肉漢堡，加速早期冠狀動脈粥樣斑塊沉積。" },
  ff_tenders: { id: "ff_tenders", name: "特價香辣炸雞條", svg: "chicken", type: "junk", price: 4.0, calories: 820, protein: 32, t2d: 1.6, cvd: 2.4, upf: true, source: "Sun et al. (2019, BMJ)", cite: "頻繁進食油炸禽肉直接令心血管疾病發病率及全因死亡率顯著上升。" },
  ff_pepperoni: { id: "ff_pepperoni", name: "辣肉腸披薩厚切", svg: "pizza", type: "junk", price: 2.8, calories: 680, protein: 18, t2d: 1.7, cvd: 2.1, upf: true, source: "Mozaffarian (2016, Circulation)", cite: "高精製澱粉配搭加工肉品是典型貧窮飲食陷阱，提供過量熱量但微量營養素匱乏。" },

  // 油站便利店
  gas_drink_chips: { id: "gas_drink_chips", name: "超大汽水加芝士脆片", svg: "soda", type: "junk", price: 2.1, calories: 720, protein: 4, t2d: 2.6, cvd: 1.8, upf: true, source: "Malik et al. (2010, Circulation)", cite: "高果糖玉米糖漿在肝臟中快速轉化為甘油三酯，加速非酒精性脂肪肝與內臟肥胖。" },
  gas_rolls: { id: "gas_rolls", name: "保溫滾輪芝士熱狗", svg: "hotdog", type: "junk", price: 2.4, calories: 540, protein: 14, t2d: 1.3, cvd: 2.2, upf: true, source: "KFF (2022)", cite: "在美國食物沙漠中，便利店往往是唯一的夜間食物來源，架上幾乎全為高加工食品。" },

  // 一元折扣店
  dol_instant_cup: { id: "dol_instant_cup", name: "一折即食杯麵", svg: "noodles", type: "junk", price: 0.85, calories: 390, protein: 7, t2d: 1.3, cvd: 2.1, upf: true, source: "Shin et al. (2014, J Nutr)", cite: "一元店杯麵的鈉含量超過成人每日建議攝取量的 65%，極易引起年輕人早期高血壓。" },
  dol_oats_box: { id: "dol_oats_box", name: "平價袋裝純燕麥", svg: "oats", type: "healthy", price: 2.2, calories: 450, protein: 16, t2d: -1.0, cvd: -0.9, upf: false, source: "Reynolds et al. (2019, Lancet)", cite: "每日進食燕麥中的水溶性膳食纖維（β-葡聚醣），能顯著降低總膽固醇與 LDL-C。" },

  // 生鮮超市
  mkt_breast_broccoli: { id: "mkt_breast_broccoli", name: "自煮西蘭花鮮雞胸", svg: "chicken_meal", type: "healthy", price: 6.5, calories: 540, protein: 46, t2d: -1.4, cvd: -1.2, upf: false, source: "Simpson & Raubenheimer (2005, Obes Rev)", cite: "足量精益蛋白質可透過「蛋白質槓桿假說」自然降低大腦對過度熱量的渴望。" },
  mkt_fresh_fruit: { id: "mkt_fresh_fruit", name: "新鮮蘋果藍莓盒", svg: "fruit", type: "healthy", price: 4.2, calories: 210, protein: 2, t2d: -1.1, cvd: -1.3, upf: false, source: "Muraki et al. (2013, BMJ)", cite: "進食原粒水果與二型糖尿病風險下降 23% 顯著相關，且富含多種抗氧化花青素。" },
  mkt_salmon_meal: { id: "mkt_salmon_meal", name: "挪威三文魚菠菜碟", svg: "salmon", type: "healthy", price: 12.0, calories: 520, protein: 38, t2d: -1.8, cvd: -2.4, upf: false, source: "Mozaffarian & Rimm (2006, JAMA)", cite: "Omega-3 脂肪酸可穩定心肌細胞膜電位，使心因性猝死風險降低 36%，但基層家庭難以長期負擔其價格。" },

  // 職場
  work_bento: { id: "work_bento", name: "家中自備均衡飯盒", svg: "chicken_meal", type: "healthy", price: 2.6, calories: 580, protein: 28, t2d: -0.8, cvd: -0.7, upf: false, source: "Wolfson & Bleich (2015)", cite: "自備飯盒的藍領工人，在長期心血管健康指標上顯著優於外食群體。" },
  work_canteen: { id: "work_canteen", name: "飯堂超大碟炒麵", svg: "noodles", type: "junk", price: 4.5, calories: 880, protein: 22, t2d: 1.1, cvd: 1.4, upf: true, source: "Mozaffarian (2016)", cite: "大份量精緻碳水化合物會引發劇烈餐後血糖波動，加重胰臟分泌負擔。" },

  // 長者中心
  snr_nutri_plate: { id: "snr_nutri_plate", name: "政府資助長者溫熱餐", svg: "lunch_tray", type: "healthy", price: 1.5, calories: 520, protein: 27, t2d: -0.7, cvd: -0.6, upf: false, source: "USDA ACL Title IIIC Evaluation (2021)", cite: "資助長者膳食計劃有效保障獨居長者的蛋白質攝取，將營養不良與骨折住院率降低 28%。" },
  snr_porridge: { id: "snr_porridge", name: "低鈉高纖燕麥粥", svg: "oats", type: "healthy", price: 1.2, calories: 360, protein: 12, t2d: -0.9, cvd: -0.8, upf: false, source: "Reynolds et al. (2019, Lancet)", cite: "老年人每天補充充足膳食纖維，全因死亡率顯著下降 15-30%。" }
};

// ==========================================
// 地點模組與開放年齡段
// ==========================================
const MAP_FACILITIES = {
  home: { key: "home", name: "屋企飯枱", fullTitle: "🏠 屋企飯枱 (Home)", icon: "🏠", minAge: 5, maxAge: 85, cssClass: "building-home", desc: "基層家庭三餐，主要依靠急凍肉、罐頭與廉價白米，偶爾有家常菜。", pool: ["home_egg_rice", "home_canned_beans", "home_nuggets", "home_ramen"] },
  school: { key: "school", name: "學校飯堂", fullTitle: "🏫 學校飯堂與小賣部 (School)", icon: "🏫", minAge: 5, maxAge: 17, cssClass: "building-school", desc: "受政府補助的營養午餐與琳琅滿目的油炸小賣部並存。", pool: ["sch_lunch_box", "sch_snack_fry", "sch_cookie_milk"] },
  park: { key: "park", name: "社區公園", fullTitle: "🌳 公園小賣車 (Park Kiosk)", icon: "🌳", minAge: 5, maxAge: 20, cssClass: "building-park", desc: "放學後青少年常去的流動熱狗攤與冰凍甜飲。", pool: ["park_hotdog", "park_soda"] },
  fastfood: { key: "fastfood", name: "連鎖快餐", fullTitle: "🍔 連鎖廉價快餐店 (Fast Food)", icon: "🍔", minAge: 5, maxAge: 85, cssClass: "building-fastfood", desc: "貧民區轉角最醒目的霓虹招牌，全天候供應極平價的超加工熱量炸彈。", pool: ["ff_combo_burger", "ff_tenders", "ff_pepperoni"] },
  gas: { key: "gas", name: "油站便利店", fullTitle: "⛽ 油站 24H 便利店 (Gas Mart)", icon: "⛽", minAge: 10, maxAge: 85, cssClass: "building-gas", desc: "夜間沙漠中唯一的燈火，充斥高果糖碳酸汽水與高鹽膨化零食。", pool: ["gas_drink_chips", "gas_rolls"] },
  dollar: { key: "dollar", name: "一元平價店", fullTitle: "🏪 一元折價店 (Dollar Store)", icon: "🏪", minAge: 12, maxAge: 85, cssClass: "building-dollar", desc: "全店無新鮮蔬果生鮮，但能以超低價買到罐頭與燕麥糧食。", pool: ["dol_instant_cup", "dol_oats_box"] },
  market: { key: "market", name: "優質超市", fullTitle: "🥦 遠程生鮮有機超市 (Fresh Market)", icon: "🥦", minAge: 18, maxAge: 85, cssClass: "building-market", desc: "位於中產街區，需長途跋涉或乘車前往，食物品質優越但價格高昂。", pool: ["mkt_breast_broccoli", "mkt_fresh_fruit", "mkt_salmon_meal"] },
  work: { key: "work", name: "職場飯堂", fullTitle: "🏭 工地/物流園區飯堂 (Workplace)", icon: "🏭", minAge: 18, maxAge: 64, cssClass: "building-work", desc: "打工時代的日常三餐，講求便宜大份與迅速出餐。", pool: ["work_bento", "work_canteen"] },
  senior: { key: "senior", name: "長者中心", fullTitle: "👴 長者中心受助食堂 (Senior Center)", icon: "👴", minAge: 65, maxAge: 85, cssClass: "building-senior", desc: "由聯邦基金與非牟利機構資助，為退休低收入長者提供均衡熱食。", pool: ["snr_nutri_plate", "snr_porridge"] },
  clinic: { key: "clinic", name: "社區診所", fullTitle: "🏥 貧困社區急診診所 (Clinic)", icon: "🏥", minAge: 5, maxAge: 85, cssClass: "building-clinic", desc: "無保險者往往因高昂自負額而延遲就醫，是醫療破產的高發地。", pool: null }
};

// ==========================================
// 地圖與遊戲狀態
// ==========================================
const GRID_SIZE = 8;
const FIXED_SLOTS = [
  { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 6, y: 1 },
  { x: 2, y: 3 }, { x: 5, y: 3 }, { x: 7, y: 3 },
  { x: 1, y: 5 }, { x: 4, y: 5 }, { x: 6, y: 5 },
  { x: 2, y: 7 }, { x: 5, y: 7 }
];

let mapMatrix = [];
let localStoreState = {};
let playerCoords = { x: 0, y: 0 };
let walkingAnimationTimer = null;

let playerState = {
  age: 5,
  maxAge: 75,
  budget: 25.0,
  health: 100,
  heightCm: 110, // 5歲身高起點
  weightKg: 18.2, // 5歲體重起點
  insurance: "none",
  t2dScore: 3.0,
  cvdScore: 2.0,
  currentYearProtein: 0,
  currentYearJunkCount: 0,
  currentYearHealthyCount: 0,
  diagnosedDiseases: [],
  annualActionDone: false
};

// ==========================================
// 生理與醫學計算
// ==========================================
function computeBMI() {
  const hM = playerState.heightCm / 100;
  return playerState.weightKg / (hM * hM);
}

function getBMILabel(bmi, age) {
  if (age < 18) {
    if (bmi < 14) return "過輕";
    if (bmi < 18.5) return "發育正常";
    if (bmi < 22) return "超重傾向";
    return "兒童肥胖 ⚠️";
  }
  if (bmi < 18.5) return "過輕";
  if (bmi < 24.9) return "體重正常";
  if (bmi < 29.9) return "超重";
  if (bmi < 34.9) return "一級肥胖 ⚠️";
  return "重度病態肥胖 🚨";
}

function getProteinNeed(age) {
  if (age <= 12) return 30;
  if (age <= 17) return 45;
  return 60;
}

// ==========================================
// 地圖生成與渲染
// ==========================================
function buildRandomWorld() {
  mapMatrix = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    const row = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      row.push({ kind: "road" });
    }
    mapMatrix.push(row);
  }

  const accessible = Object.values(MAP_FACILITIES).filter(
    f => playerState.age >= f.minAge && playerState.age <= f.maxAge
  );

  const shuffledSpots = shuffleArray(FIXED_SLOTS);
  localStoreState = {};

  accessible.forEach((fac, idx) => {
    const spot = shuffledSpots[idx % shuffledSpots.length];
    mapMatrix[spot.y][spot.x] = {
      kind: fac.cssClass,
      facKey: fac.key,
      icon: fac.icon
    };

    if (fac.pool) {
      localStoreState[fac.key] = {
        items: sample(fac.pool.map(id => FOOD_CATALOG[id]), Math.min(3, fac.pool.length))
      };
    }
  });
}

function renderGridBoard() {
  const board = document.getElementById("grid-board");
  board.innerHTML = "";

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const tile = mapMatrix[y][x];
      const div = document.createElement("div");
      div.className = `cell ${tile.kind}`;

      const isCurrent = playerCoords.x === x && playerCoords.y === y;
      if (isCurrent) {
        div.classList.add("is-player");
        div.innerHTML = ASSET_SVGS.player;
      } else if (tile.icon) {
        div.innerHTML = `<span>${tile.icon}</span>`;
      }

      div.onclick = () => {
        if (walkingAnimationTimer) return;
        stepTowards(x, y);
      };

      board.appendChild(div);
    }
  }
}

// 逐格移動動畫
function stepTowards(tx, ty) {
  if (walkingAnimationTimer) return;
  const path = [];
  let cx = playerCoords.x;
  let cy = playerCoords.y;

  while (cx !== tx) {
    cx += Math.sign(tx - cx);
    path.push({ x: cx, y: cy });
  }
  while (cy !== ty) {
    cy += Math.sign(ty - cy);
    path.push({ x: cx, y: cy });
  }

  if (path.length === 0) {
    inspectCurrentTile();
    return;
  }

  let stepIdx = 0;
  walkingAnimationTimer = setInterval(() => {
    playerCoords = { x: path[stepIdx].x, y: path[stepIdx].y };
    renderGridBoard();
    stepIdx++;
    if (stepIdx >= path.length) {
      clearInterval(walkingAnimationTimer);
      walkingAnimationTimer = null;
      inspectCurrentTile();
    }
  }, 110);
}

function movePlayer(dx, dy) {
  if (walkingAnimationTimer) return;
  const nx = Math.max(0, Math.min(GRID_SIZE - 1, playerCoords.x + dx));
  const ny = Math.max(0, Math.min(GRID_SIZE - 1, playerCoords.y + dy));
  if (nx !== playerCoords.x || ny !== playerCoords.y) {
    playerCoords.x = nx;
    playerCoords.y = ny;
    renderGridBoard();
    inspectCurrentTile();
  }
}

// 方向鍵監聽
window.addEventListener("keydown", e => {
  if (["ArrowUp", "KeyW"].includes(e.code)) movePlayer(0, -1);
  if (["ArrowDown", "KeyS"].includes(e.code)) movePlayer(0, 1);
  if (["ArrowLeft", "KeyA"].includes(e.code)) movePlayer(-1, 0);
  if (["ArrowRight", "KeyD"].includes(e.code)) movePlayer(1, 0);
});

// ==========================================
// 導航與圖例渲染
// ==========================================
function renderNavigationAndLegend() {
  const destContainer = document.getElementById("destinations-container");
  const legendBox = document.getElementById("map-legend");
  destContainer.innerHTML = "";
  legendBox.innerHTML = "";

  const available = Object.values(MAP_FACILITIES).filter(
    f => playerState.age >= f.minAge && playerState.age <= f.maxAge
  );

  const meChip = document.createElement("span");
  meChip.className = "legend-chip";
  meChip.innerHTML = `🧍 你`;
  legendBox.appendChild(meChip);

  available.forEach(fac => {
    // 目的地快捷按鈕
    const btn = document.createElement("button");
    btn.className = "dest-chip-btn";
    btn.id = `nav-${fac.key}`;
    btn.innerHTML = `${fac.icon} ${fac.name}`;
    btn.onclick = () => navigateToFacility(fac.key);
    destContainer.appendChild(btn);

    // 圖例
    const chip = document.createElement("span");
    chip.className = "legend-chip";
    chip.innerHTML = `${fac.icon} ${fac.name}`;
    legendBox.appendChild(chip);
  });
}

function navigateToFacility(key) {
  if (walkingAnimationTimer) return;
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (mapMatrix[y][x].facKey === key) {
        stepTowards(x, y);
        return;
      }
    }
  }
  pushLog("該設施今年未能在街區尋獲。", "warn");
}

// ==========================================
// 檢查當前格子與貨架渲染
// ==========================================
function inspectCurrentTile() {
  const current = mapMatrix[playerCoords.y][playerCoords.x];
  const lblLoc = document.getElementById("lbl-current-loc");
  const shopName = document.getElementById("shop-name");
  const shopBadge = document.getElementById("shop-badge");
  const shopNarrative = document.getElementById("shop-narrative");
  const shelfContainer = document.getElementById("shelf-container");

  document.querySelectorAll(".dest-chip-btn").forEach(b => b.classList.remove("active"));

  if (!current.facKey) {
    lblLoc.textContent = `街區街道 (${playerCoords.x}, ${playerCoords.y})`;
    shopName.textContent = "🚶 街道途中";
    shopBadge.textContent = "漫步中";
    shopNarrative.textContent = "此處為普通街道路段。點擊目的地按鈕或用手掣走到有圖案的地點尋找食物。";
    shelfContainer.innerHTML = `<div class="empty-shelf-tip">🚶 行去地圖上有圖示嘅格子揀選食物</div>`;
    return;
  }

  const activeBtn = document.getElementById(`nav-${current.facKey}`);
  if (activeBtn) activeBtn.classList.add("active");

  const facility = MAP_FACILITIES[current.facKey];
  lblLoc.textContent = facility.fullTitle;
  shopName.textContent = facility.fullTitle;
  shopBadge.textContent = "已抵達";
  shopNarrative.textContent = facility.desc;

  if (facility.key === "clinic") {
    renderClinicInterface();
    return;
  }

  renderFacilityGoods(facility);
}

function renderFacilityGoods(facility) {
  const shelfContainer = document.getElementById("shelf-container");
  shelfContainer.innerHTML = "";
  const store = localStoreState[facility.key];

  if (!store || !store.items || store.items.length === 0) {
    shelfContainer.innerHTML = `<div class="empty-shelf-tip">今日貨架已被搶購一空。</div>`;
    return;
  }

  store.items.forEach(food => {
    const card = document.createElement("div");
    card.className = "shelf-item-card";
    card.innerHTML = `
      <div class="item-thumb-box ${food.type}">
        ${ASSET_SVGS[food.svg] || "🍲"}
      </div>
      <div class="item-info">
        <div class="item-name-row">
          <span class="item-name">${food.name}</span>
          <span class="item-price">$${food.price.toFixed(2)}</span>
        </div>
        <div class="item-nutri">
          <span>🔥 ${food.calories} kcal</span>
          <span>🥩 蛋白 ${food.protein}g</span>
          <span>${food.upf ? "⚠️ 超加工食品" : "🌿 天然/微加工"}</span>
        </div>
      </div>
      <div class="item-btns">
        <button class="btn-ui btn-primary-action" onclick="purchaseFood('${food.id}')">購買食用</button>
        <button class="btn-ui btn-ghost-science" onclick="openFoodCitation('${food.id}')">🔬 研究</button>
      </div>
    `;
    shelfContainer.appendChild(card);
  });
}

function renderClinicInterface() {
  const shelfContainer = document.getElementById("shelf-container");
  let clinicCost = 220;
  let insuranceTag = "無醫療保險（自付 100%）";

  if (playerState.insurance === "private") {
    clinicCost = 220 * 0.15;
    insuranceTag = "商業醫保報銷 85%";
  } else if (playerState.insurance === "medicaid") {
    clinicCost = 220 * 0.05;
    insuranceTag = "Medicaid 報銷 95%";
  }

  shelfContainer.innerHTML = `
    <div class="shelf-item-card">
      <div class="item-thumb-box healthy">
        <span style="font-size: 1.8rem;">🩺</span>
      </div>
      <div class="item-info">
        <div class="item-name-row">
          <span class="item-name">全身體格檢查與慢性病調治</span>
          <span class="item-price">$${clinicCost.toFixed(2)}</span>
        </div>
        <div class="item-nutri">
          <span>🛡️ ${insuranceTag}</span>
          <span>❤️ 恢復 16 點健康機能</span>
        </div>
      </div>
      <div class="item-btns">
        <button class="btn-ui btn-primary-action" onclick="takeClinicTreatment(${clinicCost})">立即就診</button>
      </div>
    </div>
  `;
}

function takeClinicTreatment(cost) {
  if (playerState.budget < cost) {
    pushLog(`你看診失敗！無法負擔 $${cost.toFixed(2)} 的醫療診金。`, "danger");
    return;
  }
  playerState.budget -= cost;
  playerState.health = Math.min(100, playerState.health + 16);
  pushLog(`在社區診所完成了醫生會診，自付 $${cost.toFixed(2)}，健康值回升 16 點。`, "heal");
  syncHUD();
}

// 購買並食用食物
function purchaseFood(foodId) {
  const food = FOOD_CATALOG[foodId];
  if (!food) return;

  if (playerState.budget < food.price) {
    pushLog(`餘額不足！你買不起一份 $${food.price.toFixed(2)} 的【${food.name}】。`, "danger");
    return;
  }

  playerState.budget -= food.price;
  playerState.currentYearProtein += food.protein;

  if (food.type === "junk") {
    playerState.currentYearJunkCount++;
  } else {
    playerState.currentYearHealthyCount++;
  }

  // 體重微幅影響
  if (playerState.age >= 18) {
    if (food.upf) playerState.weightKg += 0.2;
    else playerState.weightKg = Math.max(50, playerState.weightKg - 0.1);
  }

  playerState.t2dScore = Math.max(1, Math.min(99, playerState.t2dScore + food.t2d));
  playerState.cvdScore = Math.max(1, Math.min(99, playerState.cvdScore + food.cvd));

  pushLog(`購買並食用了【${food.name}】：花費 $${food.price.toFixed(2)}，攝取 ${food.calories} kcal / ${food.protein}g 蛋白質。`);
  syncHUD();
}

function openFoodCitation(foodId) {
  const food = FOOD_CATALOG[foodId];
  if (!food) return;
  displayScienceModal({
    icon: "🔬",
    title: `科學依據：${food.name}`,
    desc: "這項日常食物選擇背後的公共衛生與臨床營養學研究：",
    source: food.source,
    body: food.cite
  });
}

// ==========================================
// 年度額外生活行動 (兼職/運動/食物券)
// ==========================================
function doAnnualAction(actionKey) {
  if (playerState.annualActionDone) {
    pushLog("你今年已經進行過一項生活行動，請推進至下一年再作抉擇。", "warn");
    return;
  }

  if (actionKey === "work_extra") {
    if (playerState.age < 14) {
      pushLog("童年時期年齡太小，無法從事非法童工兼職。", "warn");
      return;
    }
    const earn = playerState.age < 18 ? 160 : 450;
    playerState.budget += earn;
    playerState.health = Math.max(1, playerState.health - 4);
    playerState.annualActionDone = true;
    pushLog(`你利用休息時間從事超時體力兼職：獲得額外收入 +$${earn}，但因過勞體能輕微透支（健康 -4）。`, "normal");
  } else if (actionKey === "exercise") {
    playerState.t2dScore = Math.max(1, playerState.t2dScore - 1.2);
    playerState.cvdScore = Math.max(1, playerState.cvdScore - 1.4);
    playerState.health = Math.min(100, playerState.health + 3);
    playerState.annualActionDone = true;
    pushLog("你在社區空地堅持進行慢跑與體能鍛鍊：心血管與糖尿病風險降低，健康值 +3。", "heal");
    displayScienceModal({
      icon: "🏃",
      title: "運動對代謝風險的逆轉作用",
      desc: "規律的中等強度有氧運動對改善胰島素敏感性至關重要。",
      source: "Colberg et al. (2016, Diabetes Care / ADA)",
      body: "每週 150 分鐘的中等強度運動能顯著改善骨骼肌葡萄糖轉運蛋白 GLUT4 的表達，即使在體重不變的情況下亦能顯著降低 HbA1c。"
    });
  } else if (actionKey === "snap_apply") {
    if (playerState.budget > 2200) {
      pushLog("申請駁回！你的可支配資產超過 $2,200，不符合美國聯邦補充營養援助計劃（SNAP 食物券）資產審查資格。", "warn");
      return;
    }
    playerState.budget += 240;
    playerState.annualActionDone = true;
    pushLog("成功獲批聯邦 SNAP 食物券補助！獲得飲食援助金 +$240.00。", "heal");
    displayScienceModal({
      icon: "📦",
      title: "SNAP 食物券與貧困家庭營養安全",
      desc: "美國聯邦補充營養援助計劃是數千萬極端貧困人口的核心安全網。",
      source: "Carlson & Keith-Jennings (2018, Center on Budget and Policy Priorities)",
      body: "研究顯示，領取 SNAP 補助顯著減少了受試家庭在醫療上的極端支出，但由於津貼按月發放且金額有限，受助者在月底依然常跌入超加工快餐的陷阱。"
    });
  }
  syncHUD();
}

// ==========================================
// 醫療保險方案選擇
// ==========================================
function selectInsurancePlan(planKey) {
  if (planKey === "medicaid") {
    if (playerState.budget > 2000) {
      pushLog("申請失敗！你的儲蓄超過 $2,000，未通過 Medicaid 資產貧困審查（Asset Poverty Test）。", "warn");
      displayScienceModal({
        icon: "⚖️",
        title: "Medicaid 覆蓋夾縫 (Coverage Gap)",
        desc: "微薄的儲蓄使你被排除在公共濟貧醫保之外，卻又無力購買私營醫保。",
        source: "Sommers et al. (2017, New England Journal of Medicine)",
        body: "美國部分州份嚴苛的 Medicaid 資產限制造成了數百萬在職貧窮人口（Working Poor）面臨『病不敢醫、貧無立錐』的制度性困境。"
      });
      return;
    }
  }

  playerState.insurance = planKey;
  syncInsuranceButtons();
  syncHUD();

  if (planKey === "none") {
    displayScienceModal({
      icon: "⚠️",
      title: "選擇完全不購買醫保 (Uninsured)",
      desc: "在沒有全民免費醫保的體系中，這是一場高風險的賭博。",
      source: "Himmelstein et al. (2019, Am J Public Health)",
      body: "美國超過 66% 的個人破產源於醫療急症帳單。無保險者在急症室會被直接開出缺乏集體談判的高昂標價（Chargemaster Prices）。"
    });
  } else if (planKey === "private") {
    displayScienceModal({
      icon: "🏥",
      title: "購買商業私人醫療保險",
      desc: "支付固定年費，以換取重症時報銷 85% 帳單。",
      source: "KFF Employer Health Benefits Annual Survey (2022)",
      body: "美國商業醫保保費年年上漲，工資停滯的低薪藍領工人需動用近兩成收入支付保費，極大擠壓了購買優質天然食材的預算。"
    });
  } else if (planKey === "medicaid") {
    displayScienceModal({
      icon: "🏛️",
      title: "獲得 Medicaid 公共醫療補助",
      desc: "專為低收入底層家庭設立的公營保障，自負額降至 5%。",
      source: "Finkelstein et al. (2012, Q J Econ / Oregon Health Insurance Experiment)",
      body: "著名的俄勒岡醫保實驗證實，獲得 Medicaid 全面消除了因災難性醫療帳單而宣告破產的極端風險，大幅降低心理壓力。"
    });
  }
}

function syncInsuranceButtons() {
  document.getElementById("btn-plan-none").classList.toggle("selected", playerState.insurance === "none");
  document.getElementById("btn-plan-private").classList.toggle("selected", playerState.insurance === "private");
  document.getElementById("btn-plan-medicaid").classList.toggle("selected", playerState.insurance === "medicaid");
}

// ==========================================
// 推進下一年 (生命週期結算)
// ==========================================
function advanceAge() {
  playerState.age += 1;
  playerState.annualActionDone = false;

  // 1. 年齡對應收入模型
  let annualIncome = 0;
  let incomeNote = "";
  if (playerState.age <= 12) {
    annualIncome = 120;
    incomeNote = "父母微薄伙食津貼";
  } else if (playerState.age <= 17) {
    annualIncome = 850;
    incomeNote = "課餘打散工收入";
  } else if (playerState.age <= 64) {
    annualIncome = 3600;
    incomeNote = "藍領薪酬";
  } else {
    annualIncome = 1650;
    incomeNote = "社會保障老年退休金";
  }
  playerState.budget += annualIncome;

  // 2. 醫保固定年保費
  let premium = 0;
  if (playerState.insurance === "private") premium = 1200;
  if (playerState.insurance === "medicaid") premium = 150;
  playerState.budget -= premium;

  // 3. 身高發育與體重真實自然成長
  if (playerState.age <= 18) {
    playerState.heightCm = Math.min(175, 110 + (playerState.age - 5) * 5.0);
    const standardChildWeight = 18.2 + (playerState.age - 5) * 3.4;
    playerState.weightKg = standardChildWeight + (playerState.currentYearJunkCount * 0.4);
  } else {
    playerState.weightKg += (playerState.currentYearJunkCount * 0.45) - (playerState.currentYearHealthyCount * 0.25);
    playerState.weightKg = Math.max(48, playerState.weightKg);
  }

  // 4. 蛋白質與年度營養結算
  const targetPro = getProteinNeed(playerState.age);
  if (playerState.currentYearProtein >= targetPro * 0.8) {
    playerState.health = Math.min(100, playerState.health + 4);
    pushLog(`[${playerState.age} 歲] 過去一年蛋白質攝取充足 (${playerState.currentYearProtein}g)，身體組織機能得以修復 (+4 健康)。`, "heal");
  } else if (playerState.age >= 18) {
    playerState.health -= 5;
    pushLog(`[${playerState.age} 歲] 過去一年缺乏足夠優質蛋白質，肌肉萎縮與免疫力下降 (-5 健康)。`, "warn");
  } else {
    playerState.health -= 2;
    pushLog(`[${playerState.age} 歲] 發育階段蛋白質不足，身高體格發育受阻 (-2 健康)。`, "warn");
  }

  // 5. 慢性病發病判定
  evaluateChronicConditions();

  // 6. 突發急症隨機事件
  evaluateEmergencyIncident();

  // 7. 重設年度飲食計數
  playerState.currentYearProtein = 0;
  playerState.currentYearJunkCount = 0;
  playerState.currentYearHealthyCount = 0;

  // 8. 判定是否終局
  if (checkSimulationOutcome()) return;

  // 9. 重生地圖與設施貨架
  buildRandomWorld();
  renderGridBoard();
  renderNavigationAndLegend();
  inspectCurrentTile();

  pushLog(`⏩ 步入 ${playerState.age} 歲。${incomeNote} +$${annualIncome}，街區商舖與物資已重新輪替。`);
  syncHUD();
}

// 慢性病觸發判定
function evaluateChronicConditions() {
  const bmi = computeBMI();

  // 糖尿病判定 (25 歲後)
  if (playerState.age >= 25 && !playerState.diagnosedDiseases.includes("T2D")) {
    const riskFactor = playerState.t2dScore * 0.35 + (bmi > 28 ? 10 : 0);
    if (Math.random() * 100 < riskFactor) {
      playerState.diagnosedDiseases.push("T2D");
      playerState.health -= 20;
      pushLog(`🚨【醫院確診】你在例行篩查中確診「二型糖尿病 (T2D)」！胰島素嚴重抵抗，健康值 -20。`, "danger");
      displayScienceModal({
        icon: "🩸",
        title: "確診：二型糖尿病 (Type 2 Diabetes)",
        desc: "多年攝取高果糖與精緻超加工食品引發嚴重的胰島素耐受性與胰島衰竭。",
        source: "Global Burden of Disease Study (Lancet, 2019)",
        body: "高體脂與不健康飲食是現代早逝的主要誘因。糖尿病患者伴隨嚴重心血管併發症、視網膜病變及下肢壞疽風險。"
      });
    }
  }

  // 心血管硬化判定 (38 歲後)
  if (playerState.age >= 38 && !playerState.diagnosedDiseases.includes("CVD")) {
    const riskFactor = playerState.cvdScore * 0.35 + (bmi > 30 ? 12 : 0);
    if (Math.random() * 100 < riskFactor) {
      playerState.diagnosedDiseases.push("CVD");
      playerState.health -= 25;
      pushLog(`🚨【醫院確診】冠狀動脈出現粥樣硬化斑塊阻塞，確診「冠心病 (CVD)」！健康值 -25。`, "danger");
      displayScienceModal({
        icon: "💔",
        title: "確診：冠狀動脈心臟病 (CVD)",
        desc: "反式脂肪酸、高鹽與長期血管內皮氧化發炎形成粥樣硬化。",
        source: "Yusuf et al. (2004, Lancet / INTERHEART Study)",
        body: "全球大型對照試驗證實，快餐高飽和脂肪飲食直接解釋了超過三成急性心肌梗塞的病例。"
      });
    }
  }

  // 慢性病每年持續折損
  if (playerState.diagnosedDiseases.length > 0) {
    const drag = playerState.diagnosedDiseases.length * 4;
    playerState.health -= drag;
    pushLog(`慢性疾病持續引發血管微發炎與體力耗損（健康 -${drag}）。`, "warn");
  }
}

// 隨機急症事件
function evaluateEmergencyIncident() {
  if (playerState.age < 16) return;
  const bmi = computeBMI();
  const emergencyChance = 0.12 + (bmi > 32 ? 0.15 : 0);

  if (Math.random() < emergencyChance) {
    const fullHospitalBill = 3100;
    let actualPaid = fullHospitalBill;
    let coverageText = "無保險（自費 100% 原始標價）";

    if (playerState.insurance === "private") {
      actualPaid = fullHospitalBill * 0.15;
      coverageText = "商業醫保報銷 85%";
    } else if (playerState.insurance === "medicaid") {
      actualPaid = fullHospitalBill * 0.05;
      coverageText = "Medicaid 報銷 95%";
    }

    playerState.budget -= actualPaid;
    playerState.health -= 14;
    pushLog(`【急症室事件】因急性胸悶劇痛乘坐救護車送院救治！原帳單 $${fullHospitalBill}，經 [${coverageText}] 你自付了 $${actualPaid.toFixed(2)}。`, "danger");
  }
}

// ==========================================
// 終局判定
// ==========================================
function checkSimulationOutcome() {
  const modal = document.getElementById("modal-gameover");
  const title = document.getElementById("go-title");
  const content = document.getElementById("go-content");

  // 1. 醫療債務破產
  if (playerState.budget < -1200) {
    title.textContent = "💸 因病致貧：醫療破產終結";
    content.innerHTML = `
      <p>在缺乏全民公營醫療的環境中，突發急症的高昂自負額與微薄工資徹底吞噬了你的積蓄，你於 <strong>${playerState.age} 歲</strong> 被迫申請破產清算。</p>
      <p><strong>終生確診：</strong>${playerState.diagnosedDiseases.join(", ") || "嚴重急性急症衝擊"}</p>
      <p><strong>心血管危險指數：</strong>${Math.round(playerState.cvdScore)}%</p>
      <div style="background:rgba(255,255,255,0.04); padding:10px; border-radius:8px; margin-top:10px; font-size:0.8rem; text-align:left; color:#cbd5e1;">
        <strong>📖 研究回顧 (KFF / Himmelstein, 2019)：</strong> 醫療債務是美國工人階級破產的頭號元兇，低收入人群往往在『治病』與『交租吃飯』之間陷入死局。
      </div>
    `;
    modal.classList.remove("hidden");
    return true;
  }

  // 2. 健康歸零身故
  if (playerState.health <= 0) {
    title.textContent = "⚰️ 慢性併發症衰竭離世";
    content.innerHTML = `
      <p>長年累月的高糖高鹽超加工食品引發嚴重的全身代謝綜合症，你的心臟於 <strong>${playerState.age} 歲</strong> 停止了跳動。</p>
      <p><strong>臨床死因：</strong>${playerState.diagnosedDiseases.join(" 併發 ") || "全身性代謝衰竭"}</p>
      <p><strong>離世時體重：</strong>${playerState.weightKg.toFixed(1)} kg (BMI: ${computeBMI().toFixed(1)})</p>
      <div style="background:rgba(255,255,255,0.04); padding:10px; border-radius:8px; margin-top:10px; font-size:0.8rem; text-align:left; color:#cbd5e1;">
        <strong>📖 研究回顧 (The Lancet GBD)：</strong> 不良飲食習慣帶來的死亡風險已全面超越吸煙，成為現代人類慢性病早逝的最主要可預防危險因素。
      </div>
    `;
    modal.classList.remove("hidden");
    return true;
  }

  // 3. 順利越過 75 歲人生大關
  if (playerState.age >= playerState.maxAge) {
    title.textContent = "🏆 跨越食物荒漠：長壽人生獲勝！";
    content.innerHTML = `
      <p>恭喜你！在缺乏平價健康生鮮與昂貴醫療保險的重重結構性困境下，你憑藉堅韌明智的選擇成功跨過了 <strong>${playerState.maxAge} 歲</strong> 的預期壽命大關！</p>
      <p><strong>結算資產：</strong>$${playerState.budget.toFixed(2)}</p>
      <p><strong>最終健康值：</strong>${playerState.health} / 100</p>
      <p><strong>醫保策略：</strong>${playerState.insurance.toUpperCase()}</p>
      <div style="background:rgba(255,255,255,0.04); padding:10px; border-radius:8px; margin-top:10px; font-size:0.8rem; text-align:left; color:#cbd5e1;">
        <strong>📖 人生總結：</strong> 你成功平衡了廉價熱量、蛋白質攝取與醫療風險，在資源匱乏中守護了自己的生命尊嚴！
      </div>
    `;
    modal.classList.remove("hidden");
    return true;
  }

  return false;
}

// ==========================================
// 介面與 HUD 數據同步
// ==========================================
function syncHUD() {
  let stageText = "童年期 (5 歲)";
  if (playerState.age >= 65) stageText = `老年期 (${playerState.age} 歲)`;
  else if (playerState.age >= 18) stageText = `成年期 (${playerState.age} 歲)`;
  else if (playerState.age >= 13) stageText = `青少年期 (${playerState.age} 歲)`;

  document.getElementById("life-stage-name").textContent = stageText;
  const lifePct = Math.min(100, Math.max(0, (playerState.age / playerState.maxAge) * 100));
  document.getElementById("life-progress-bar").style.width = `${lifePct}%`;

  document.getElementById("txt-age").textContent = playerState.age;
  document.getElementById("txt-budget").textContent = `$${playerState.budget.toFixed(2)}`;
  document.getElementById("txt-health").textContent = Math.max(0, playerState.health);
  document.getElementById("txt-weight").textContent = playerState.weightKg.toFixed(1);

  const bmi = computeBMI();
  document.getElementById("txt-bmi").textContent = `BMI ${bmi.toFixed(1)} (${getBMILabel(bmi, playerState.age)})`;

  const insMap = { none: "無保險 ⚠️", private: "商業醫保 🛡️", medicaid: "Medicaid 🏛️" };
  document.getElementById("txt-insurance").textContent = insMap[playerState.insurance];

  document.getElementById("val-t2d").textContent = `${Math.round(playerState.t2dScore)}%`;
  document.getElementById("val-cvd").textContent = `${Math.round(playerState.cvdScore)}%`;
  document.getElementById("gauge-t2d").style.width = `${Math.min(100, playerState.t2dScore)}%`;
  document.getElementById("gauge-cvd").style.width = `${Math.min(100, playerState.cvdScore)}%`;

  const need = getProteinNeed(playerState.age);
  document.getElementById("val-cur-pro").textContent = playerState.currentYearProtein;
  document.getElementById("val-target-pro").textContent = need;
  const proPct = Math.min(100, Math.round((playerState.currentYearProtein / need) * 100));
  document.getElementById("val-pro-pct").textContent = `${proPct}%`;
  document.getElementById("gauge-pro").style.width = `${proPct}%`;
}

function pushLog(msg, tone = "normal") {
  const terminal = document.getElementById("terminal-console");
  const p = document.createElement("div");
  p.className = `log-line ${tone}`;
  p.textContent = msg;
  terminal.prepend(p);
}

function displayScienceModal({ icon, title, desc, source, body }) {
  document.getElementById("m-icon").textContent = icon;
  document.getElementById("m-title").textContent = title;
  document.getElementById("m-desc").textContent = desc;
  document.getElementById("m-source").textContent = `📖 權威論文：${source}`;
  document.getElementById("m-body").textContent = body;
  document.getElementById("modal-science").classList.remove("hidden");
}

function closeScienceModal() {
  document.getElementById("modal-science").classList.add("hidden");
}

// 重新開始
function restartSimulation() {
  playerState = {
    age: 5,
    maxAge: 75,
    budget: 25.0,
    health: 100,
    heightCm: 110,
    weightKg: 18.2,
    insurance: "none",
    t2dScore: 3.0,
    cvdScore: 2.0,
    currentYearProtein: 0,
    currentYearJunkCount: 0,
    currentYearHealthyCount: 0,
    diagnosedDiseases: [],
    annualActionDone: false
  };
  document.getElementById("modal-gameover").classList.add("hidden");
  document.getElementById("modal-science").classList.add("hidden");
  document.getElementById("terminal-console").innerHTML = `<div class="log-line system">[5 歲] 新人生開始！由童年挑選每一餐，兼顧熱量、蛋白質與長期醫療保障！</div>`;
  initSimulation();
}

// ==========================================
// 初始化
// ==========================================
function initSimulation() {
  playerCoords = { x: 0, y: 0 };
  buildRandomWorld();
  renderGridBoard();
  renderNavigationAndLegend();
  syncInsuranceButtons();
  syncHUD();
  inspectCurrentTile();
}

window.onload = initSimulation;
