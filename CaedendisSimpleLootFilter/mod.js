////=============================================////
////=============================================////
////                                             ////
////   Caedendi's Simple Loot Filter for D2RMM   ////
////                                             ////
////=============================================////
////=============================================////

//===============//
//   Constants   //
//===============//

// File paths
const profileHdPath = 'global\\ui\\layouts\\_profilehd.json';
const itemRunesPath = 'local\\lng\\strings\\item-runes.json';
const itemNamesPath = 'local\\lng\\strings\\item-names.json';
const itemNameAffixesPath = 'local\\lng\\strings\\item-nameaffixes.json';

// Color
const COLOR_PREFIX = 'ÿc';

const WHITE = `${COLOR_PREFIX}0`;
const WHITE1 = `${COLOR_PREFIX}=`;
const GRAY = `${COLOR_PREFIX}5`;
const GRAY1 = `${COLOR_PREFIX}K`;
const GRAY2 = `${COLOR_PREFIX}I`;
const BLACK = `${COLOR_PREFIX}6`;
const BLACK1 = `${COLOR_PREFIX}M`;
const RED = `${COLOR_PREFIX}1`;
const RED1 = `${COLOR_PREFIX}U`;
const LIGHTRED = `${COLOR_PREFIX}E`;
const DARKRED = `${COLOR_PREFIX}S`;
const GREEN = `${COLOR_PREFIX}2`;
const GREEN1 = `${COLOR_PREFIX}Q`;
const GREEN2 = `${COLOR_PREFIX}C`;
const GREEN3 = `${COLOR_PREFIX}<`;
const DARKGREEN1 = `${COLOR_PREFIX}A`;
const DARKGREEN2 = `${COLOR_PREFIX}:`;
const TURQUOISE = `${COLOR_PREFIX}N`;
const BLUE = `${COLOR_PREFIX}3`;
const BLUE1 = `${COLOR_PREFIX}B`;
const LIGHTBLUE1 = `${COLOR_PREFIX}F`;
const LIGHTBLUE2 = `${COLOR_PREFIX}P`;
const SKYBLUE = `${COLOR_PREFIX}T`;
const ORANGE = `${COLOR_PREFIX}8`;
const ORANGE1 = `${COLOR_PREFIX}@`;
const ORANGE2 = `${COLOR_PREFIX}J`;
const ORANGE3 = `${COLOR_PREFIX}L`;
const TAN = `${COLOR_PREFIX}7`;
const YELLOW = `${COLOR_PREFIX}9`;
const YELLOW1 = `${COLOR_PREFIX}R`;
const GOLD = `${COLOR_PREFIX}4`;
const GOLD1 = `${COLOR_PREFIX}D`;
const LIGHTGOLD1 = `${COLOR_PREFIX}H`;
const PINK = `${COLOR_PREFIX}O`;
const LIGHTPINK = `${COLOR_PREFIX}G`;
const PURPLE = `${COLOR_PREFIX};`;

// Naming
const HIDDEN = '' + ' '.repeat(config.HiddenItemTooltipSize);


//=============//
//   Affixes   //
//=============//
const customAffixes = {
  gld: `${GOLD1}G`, // Gold displays as "1234 G" with white numbers and gold-colored G.

  // For some reason, the devs put these gems in the wrong JSON file.
  gsw:  `${WHITE}o ${WHITE}Diamond`,  // Diamond
  gsg:  `${GREEN}o ${WHITE}Emerald`,  // Emerald
  gsr:    `${RED}o ${WHITE}Ruby`,     // Ruby
  gsb:   `${BLUE}o ${WHITE}Sapphire`, // Sapphire
};


//==================//
//   Custom Items   //
//==================//
const customItems = {

  //=============//
  //   Potions   //
  //=============//
  hp1: `${RED}+${WHITE}HP1`, // Minor Healing Potion
  hp2: `${RED}+${WHITE}HP2`, // Light Healing Potion
  hp3: `${RED}+${WHITE}HP3`, // Healing Potion
  hp4: `${RED}+${WHITE}HP4`, // Greater Healing Potion
  hp5: `${RED}+${WHITE}HP5`, // Super Healing Potion

  mp1: `${BLUE}+${WHITE}MP1`, // Minor Mana Potion
  mp2: `${BLUE}+${WHITE}MP2`, // Light Mana Potion
  mp3: `${BLUE}+${WHITE}MP3`, // Mana Potion
  mp4: `${BLUE}+${WHITE}MP4`, // Greater Mana Potion
  mp5: `${BLUE}+${WHITE}MP5`, // Super Mana Potion
  
  rvs: `${PURPLE}+${WHITE}S`, // Rejuvenation Potion
  rvl: `${PURPLE}+${WHITE}F`, // Full Rejuvenation Potion
  
  yps: `${GREEN}+${WHITE}Antidote`, // Antidote Potion
  wms: `${GREEN}+${WHITE}Thawing`, // Thawing Potion
  vps: `${GREEN}+${WHITE}Stamina`, // Stamina Potion

  //==========//
  //   Junk   //
  //==========//
  tbk: `${GREEN}+${WHITE}TP Tome`, // Tome of Town Portal
  ibk: `${GREEN}+${WHITE}ID Tome`, // Tome of Identify
  tsc: `${GREEN}+${WHITE}TP`,      // Scroll of Town Portal
  isc: `${GREEN}+${WHITE}ID`,      // Scroll of Identify

  gpl: `${DARKGREEN1}o ${WHITE}Gas 1`, // Strangling Gas Potion
  gpm: `${DARKGREEN1}o ${WHITE}Gas 2`, // Fulminating Potion
  gps: `${DARKGREEN1}o ${WHITE}Gas 3`, // Choking Gas Potion

  opl: `${ORANGE}o ${WHITE}Oil 1`, // Exploding Potion
  opm: `${ORANGE}o ${WHITE}Oil 2`, // Rancid Gas Potion
  ops: `${ORANGE}o ${WHITE}Oil 3`, // Oil Potion

  aqv: `${GRAY}o ${WHITE}Arrows`, // Arrow Quiver
  cqv: `${GRAY}o ${WHITE}Bolts`, // Crossbow Bolt Quiver

  //=============//
  //   Jewelry   //   BUGGED: crafted/rare/set/unique jewelry and charms show up as blue
  //=============//
  // amu: `${RED}0 ${BLUE}Amulet ${RED}0${BLUE}`, // Amulet
  // rin: `${RED}0 ${BLUE}Ring ${RED}0${BLUE}`,   // Ring
  // jew: `${RED}0 ${BLUE}Jewel ${RED}0${BLUE}`,  // Jewel

  // cm1: `${RED}0 ${BLUE}Small Charm ${RED}0${BLUE}`, // Small Charm
  // cm2: `${RED}0 ${BLUE}Large Charm ${RED}0${BLUE}`, // Large Charm
  // cm3: `${RED}0 ${BLUE}Grand Charm ${RED}0${BLUE}`, // Grand Charm

  //==========//
  //   Gems   //
  //==========//
  gcv: `${PURPLE}o ${WHITE}Chipped`,  // Chipped Amethyst
  gcw:  `${WHITE}o ${WHITE}Chipped`,  // Chipped Diamond
  gcg:  `${GREEN}o ${WHITE}Chipped`,  // Chipped Emerald
  gcr:    `${RED}o ${WHITE}Chipped`,  // Chipped Ruby
  gcb:   `${BLUE}o ${WHITE}Chipped`,  // Chipped Sapphire
  gcy: `${YELLOW}o ${WHITE}Chipped`,  // Chipped Topaz

  gfv: `${PURPLE}o ${WHITE}Flawed`,   // Flawed Amethyst
  gfw:  `${WHITE}o ${WHITE}Flawed`,   // Flawed Diamond
  gfg:  `${GREEN}o ${WHITE}Flawed`,   // Flawed Emerald
  gfr:    `${RED}o ${WHITE}Flawed`,   // Flawed Ruby
  gfb:   `${BLUE}o ${WHITE}Flawed`,   // Flawed Sapphire
  gfy: `${YELLOW}o ${WHITE}Flawed`,   // Flawed Topaz

  gsv: `${PURPLE}o ${WHITE}Amethyst`, // Amethyst
  // gsw:  `${WHITE}o ${WHITE}Diamond`,  // Diamond    See Affixes ^ line 70
  // gsg:  `${GREEN}o ${WHITE}Emerald`,  // Emerald    See Affixes ^ line 71
  // gsr:    `${RED}o ${WHITE}Ruby`,     // Ruby       See Affixes ^ line 72
  // gsb:   `${BLUE}o ${WHITE}Sapphire`, // Sapphire   See Affixes ^ line 73
  gsy: `${YELLOW}o ${WHITE}Topaz`,    // Topaz

  gzv: `${PURPLE}o ${WHITE}Flawless`, // Flawless Amethyst
  glw:  `${WHITE}o ${WHITE}Flawless`, // Flawless Diamond
  glg:  `${GREEN}o ${WHITE}Flawless`, // Flawless Emerald
  glr:    `${RED}o ${WHITE}Flawless`, // Flawless Ruby
  glb:   `${BLUE}o ${WHITE}Flawless`, // Flawless Sapphire
  gly: `${YELLOW}o ${WHITE}Flawless`, // Flawless Topaz
  
  gpv: `${PURPLE}o ${WHITE}Perfect`,  // Perfect Amethyst
  gpw:  `${WHITE}o ${WHITE}Perfect`,  // Perfect Diamond
  gpg:  `${GREEN}o ${WHITE}Perfect`,  // Perfect Emerald
  gpr:    `${RED}o ${WHITE}Perfect`,  // Perfect Ruby
  gpb:   `${BLUE}o ${WHITE}Perfect`,  // Perfect Sapphire
  gpy: `${YELLOW}o ${WHITE}Perfect`,  // Perfect Topaz
  
  skc: `${GRAY}o ${WHITE}Chipped`,    // Chipped Skull
  skf: `${GRAY}o ${WHITE}Flawed`,     // Flawed Skull
  sku: `${GRAY}o ${WHITE}Skull`,      // Skull
  skl: `${GRAY}o ${WHITE}Flawless`,   // Flawless Skull
  skz: `${GRAY}o ${WHITE}Perfect`,    // Perfect Skull

  //=======================//
  //   Pandemonium Event   //
  //=======================//
  pk1: `${RED}***  ${ORANGE}Key of Terror  ${RED}***`,      // Pandemonium Key 1 Key of Terror
  pk2: `${RED}***  ${ORANGE}Key of Hate  ${RED}***`,        // Pandemonium Key 2 Key of Hate
  pk3: `${RED}***  ${ORANGE}Key of Destruction  ${RED}***`, // Pandemonium Key 3 Key of Destruction
  dhn: `${RED}***  ${ORANGE}Diablo's Horn  ${RED}***`,      // Diablo's Horn
  bey: `${RED}***  ${ORANGE}Baal's Eye  ${RED}***`,         // Baal's Eye
  mbr: `${RED}***  ${ORANGE}Mephisto's Brain  ${RED}***`,   // Mephisto's Brain
  std: `${RED}* ${GOLD}Standard of Heroes ${RED}*`,         // Standard of Heroes
  
  //======================//
  //   Token & Essences   //
  //======================//
  tes: `${RED}* ${ORANGE}Twisted Essence of Suffering ${RED}*`,     // Twisted Essence of Suffering
  ceh: `${RED}* ${ORANGE}Charged Essense of Hatred ${RED}*`,        // Charged Essense of Hatred
  bet: `${RED}* ${ORANGE}Burning Essence of Terror ${RED}*`,        // Burning Essence of Terror
  fed: `${RED}* ${ORANGE}Festering Essence of Destruction ${RED}*`, // Festering Essence of Destruction
  toa: `${RED}***  ${ORANGE}Token of Absolution  ${RED}***`,        // Token of Absolution

  //=================//
  //   Quest Items   //
  //=================//
  // Act 1
  leg: `${RED}***  ${GOLD}Wirt's Leg  ${RED}***`,           // Wirt's Leg
  hdm: `${RED}***  ${GOLD}Horadric Malus  ${RED}***`,       // Horadric Malus
  bks: `${RED}***  ${GOLD}Scroll of Inifuss  ${RED}***`,    // Scroll of Inifuss
  bkd: `${RED}***  ${GOLD}Scroll of Inifuss  ${RED}***`,    // Scroll of Inifuss (deciphered)
  // Act 2
  ass: `${RED}***  ${GOLD}Book of Skill  ${RED}***`,        // Book of Skill
  box: `${RED}***  ${GOLD}Horadric Cube  ${RED}***`,        // Horadric Cube
  tr1: `${RED}***  ${GOLD}Horadric Scroll  ${RED}***`,      // Horadric Scroll
  msf: `${RED}***  ${GOLD}Staff of Kings  ${RED}***`,       // Staff of Kings
  vip: `${RED}***  ${GOLD}Amulet of the Viper  ${RED}***`,  // Amulet of the Viper
  hst: `${RED}***  ${GOLD}Horadric Staff  ${RED}***`,       // Horadric Staff
  // Act 3
  xyz: `${RED}***  ${GOLD}Potion of Life  ${RED}***`,       // Potion of Life
  j34: `${RED}***  ${GOLD}A Jade Figurine  ${RED}***`,      // A Jade Figurine
  g34: `${RED}***  ${GOLD}The Golden Bird  ${RED}***`,      // The Golden Bird
  bbb: `${RED}***  ${GOLD}Lam Esen's Tome  ${RED}***`,      // Lam Esen's Tome
  g33: `${RED}***  ${GOLD}The Gidbinn  ${RED}***`,          // The Gidbinn
  qf1: `${RED}***  ${GOLD}Khalim's Flail  ${RED}***`,       // Khalim's Flail
  qf2: `${RED}***  ${GOLD}Khalim's Will  ${RED}***`,        // Khalim's Will
  qey: `${RED}***  ${GOLD}Khalim's Eye  ${RED}***`,         // Khalim's Eye
  qhr: `${RED}***  ${GOLD}Khalim's Heart  ${RED}***`,       // Khalim's Heart
  qbr: `${RED}***  ${GOLD}Khalim's Brain  ${RED}***`,       // Khalim's Brain
  mss: `${RED}***  ${GOLD}Mephisto's Soulstone  ${RED}***`, // Mephisto's Soulstone
  // Act 4
  hfh: `${RED}***  ${GOLD}Hellforge Hammer  ${RED}***`,     // Hellforge Hammer
  // Act 5
  ice: `${RED}***  ${GOLD}Malah's Potion  ${RED}***`,       // Malah's Potion
  tr2: `${RED}***  ${GOLD}Scroll of Resistance  ${RED}***`, // Scroll of Resistance
};

//===========//
//   Runes   //
//===========//
const customRunes = {
  /*El   */ r01: `${ORANGE1}El ${WHITE}[${RED}1${WHITE}]`,
  /*Eld  */ r02: `${ORANGE1}Eld ${WHITE}[${RED}2${WHITE}]`,
  /*Tir  */ r03: `${ORANGE1}Tir ${WHITE}[${RED}3${WHITE}]`,
  /*Nef  */ r04: `${ORANGE1}Nef ${WHITE}[${RED}4${WHITE}]`,
  /*Eth  */ r05: `${ORANGE1}Eth ${WHITE}[${RED}5${WHITE}]`,
  /*Ith  */ r06: `${ORANGE1}Ith ${WHITE}[${RED}6${WHITE}]`,
  /*Tal  */ r07: `${ORANGE1}Tal ${WHITE}[${RED}7${WHITE}]`,
  /*Ral  */ r08: `${RED}* ${ORANGE1}Ral ${WHITE}[${RED}8${WHITE}] ${RED}*`,
  /*Ort  */ r09: `${ORANGE1}Ort ${WHITE}[${RED}9${WHITE}]`,
  /*Thul */ r10: `${ORANGE1}Thul ${WHITE}[${RED}10${WHITE}]`,
  /*Amn  */ r11: `${ORANGE1}Amn ${WHITE}[${RED}11${WHITE}]`,
  /*Sol  */ r12: `${ORANGE1}Sol ${WHITE}[${RED}12${WHITE}]`,
  /*Shael*/ r13: `${ORANGE1}Shael ${WHITE}[${RED}13${WHITE}]`,
  /*Dol  */ r14: `${ORANGE1}Dol ${WHITE}[${RED}14${WHITE}]`,
  /*Hel  */ r15: `${RED}* ${ORANGE1}Hel ${WHITE}[${RED}15${WHITE}] ${RED}*`,
  /*Io   */ r16: `${RED}* ${ORANGE1}Io ${WHITE}[${RED}16${WHITE}] ${RED}*`,
  /*Lum  */ r17: `${RED}* ${ORANGE1}Lum ${WHITE}[${RED}17${WHITE}] ${RED}*`,
  /*Ko   */ r18: `${RED}* ${ORANGE1}Ko ${WHITE}[${RED}18${WHITE}] ${RED}*`,
  /*Fal  */ r19: `${RED}* ${ORANGE1}Fal ${WHITE}[${RED}19${WHITE}] ${RED}*`,
  /*Lem  */ r20: `${RED}* ${ORANGE1}Lem ${WHITE}[${RED}20${WHITE}] ${RED}*`,
  /*Pul  */ r21: `${RED}***  ${ORANGE1}Pul ${WHITE}[${RED}21${WHITE}]  ${RED}***`,
  /*Um   */ r22: `${RED}***  ${ORANGE1}Um ${WHITE}[${RED}22${WHITE}]  ${RED}***`,
  /*Mal  */ r23: `${RED}***  ${ORANGE1}Mal ${WHITE}[${RED}23${WHITE}]  ${RED}***`,
  /*Ist  */ r24: `${RED}***  ${ORANGE1}Ist ${WHITE}[${RED}24${WHITE}]  ${RED}***`,
  /*Gul  */ r25: `${RED}***  ${ORANGE1}Gul ${WHITE}[${RED}25${WHITE}]  ${RED}***`,
  /*Vex  */ r26: `${RED}*****   ${ORANGE1}Vex ${WHITE}[${RED}26${WHITE}]   ${RED}*****`,
  /*Ohm  */ r27: `${RED}*****   ${ORANGE1}Ohm ${WHITE}[${RED}27${WHITE}]   ${RED}*****`,
  /*Lo   */ r28: `${RED}*****   ${ORANGE1}Lo ${WHITE}[${RED}28${WHITE}]   ${RED}*****`,
  /*Sur  */ r29: `${RED}*****   ${ORANGE1}Sur ${WHITE}[${RED}29${WHITE}]   ${RED}*****`,
  /*Ber  */ r30: `${RED}*****   ${ORANGE1}Ber ${WHITE}[${RED}30${WHITE}]   ${RED}*****`,
  /*Jah  */ r31: `${RED}*****   ${ORANGE1}Jah ${WHITE}[${RED}31${WHITE}]   ${RED}*****`,
  /*Cham */ r32: `${RED}*****   ${ORANGE1}Cham ${WHITE}[${RED}32${WHITE}]   ${RED}*****`,
  /*Zod  */ r33: `${RED}*****   ${ORANGE1}Zod ${WHITE}[${RED}33${WHITE}]   ${RED}*****`,
};

function applyLootFilter() {
  applyItemNameMods();

  if (config.isModifyTooltipEnabled) {
    applyTooltipMods();
  }
}

function applyItemNameMods() {
  if (config.isGoldEnabled) {
    applyCustomNames(itemNameAffixesPath, customAffixes);
  }
  if (config.isRunesEnabled) {
    applyCustomNames(itemRunesPath, customRunes);
  }
  if (config.isItemsEnabled) {
    applyCustomNames(itemNamesPath, customItems);
  }
}

function applyCustomNames(path, customNames) {
  let file = D2RMM.readJson(path); // copy existing file
  file.forEach((item) => { // overwrite provided entries with new names
    if (item.Key in customNames) {
      for (const key in item) {
        if (key !== 'id' && key !== 'Key') {
          item[key] = customNames[item.Key];
        }
      }
    }
  });
  D2RMM.writeJson(path, file); // overwrite existing file with new file
}

function applyTooltipMods() {
  if (config.Tooltip == "none")
    return

  let profileHD = D2RMM.readJson(profileHdPath);

  switch (config.Tooltip) {
    case "all":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      profileHD.TooltipFontSize = config.TooltipSize;
      break;
    case "opacity":
      profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, config.TooltipOpacity]; // [R, G, B, opacity]
      break;
    case "size":
      profileHD.TooltipFontSize = config.TooltipSize;
      break;
  }
  
  D2RMM.writeJson(profileHdPath, profileHD);
  D2RMM.copyFile('hd', 'hd', true);
  // This simply copies the rune.json files instead of modifying each one with code which 
  // I am too dumb to understand how to do. It gets the job done, it may cause issues if 
  // you have other mods that modify the runes.json files.
}

applyLootFilter();
