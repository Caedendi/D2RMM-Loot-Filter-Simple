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

const itemNameAffixesPath = 'local\\lng\\strings\\item-nameaffixes.json';
const itemNamesPath = 'local\\lng\\strings\\item-names.json';
const itemRunesPath = 'local\\lng\\strings\\item-runes.json';
const uiPath = 'local\\lng\\strings\\ui.json';

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

  //==========//
  //   Gold   //
  //==========//
  gld: `${GOLD1}G`, // Gold displays as "1234 G" with white numbers and gold-colored G.

  //==========//
  //   Gems   //
  //==========//
  // For some reason, the devs put these gems in the wrong JSON file.
  gsw: `${WHITE}o ${WHITE}Diamond`,  // Diamond
  gsg: `${GREEN}o ${WHITE}Emerald`,  // Emerald
  gsr:   `${RED}o ${WHITE}Ruby`,     // Ruby
  gsb:  `${BLUE}o ${WHITE}Sapphire`, // Sapphire
};


//===========//
//   Runes   //
//===========//
const customRunes = {
  /* El    */ r01: `${ORANGE1}El (1)`,
  /* Eld   */ r02: `${ORANGE1}Eld (2)`,
  /* Tir   */ r03: `${ORANGE1}Tir (3)`,
  /* Nef   */ r04: `${ORANGE1}Nef (4)`,
  /* Eth   */ r05: `${ORANGE1}Eth (5)`,
  /* Ith   */ r06: `${ORANGE1}Ith (6)`,
  /* Tal   */ r07: `${ORANGE1}Tal (7)`,
  /* Ral   */ r08: `${RED}**${ORANGE1}  Ral (8)  ${RED}**${ORANGE1}`,
  /* Ort   */ r09: `${ORANGE1}Ort (9)`,
  /* Thul  */ r10: `${ORANGE1}Thul (10)`,
  /* Amn   */ r11: `${ORANGE1}Amn (11)`,
  /* Sol   */ r12: `${ORANGE1}Sol (12)`,
  /* Shael */ r13: `${ORANGE1}Shael (13)`,
  /* Dol   */ r14: `${ORANGE1}Dol (14)`,
  /* Hel   */ r15: `${RED}**${ORANGE1}  Hel (15) ${RED}**${ORANGE1}`,
  /* Io    */ r16: `${ORANGE1}Io (16)`,
  /* Lum   */ r17: `${ORANGE1}Lum (17)`,
  /* Ko    */ r18: `${RED}**${ORANGE1}  Ko (18)  ${RED}**${ORANGE1}`,
  /* Fal   */ r19: `${RED}**${ORANGE1}  Fal (19)  ${RED}**${ORANGE1}`,
  /* Lem   */ r20: `${RED}**${ORANGE1}  Lem (20)  ${RED}**${ORANGE1}`,
  /* Pul   */ r21: `${RED}*****${ORANGE1}   Pul (21)   ${RED}*****${ORANGE1}`,
  /* Um    */ r22: `${RED}*****${ORANGE1}   Um (22)   ${RED}*****${ORANGE1}`,
  /* Mal   */ r23: `${RED}*****${ORANGE1}   Mal (23)   ${RED}*****${ORANGE1}`,
  /* Ist   */ r24: `${RED}*****${ORANGE1}   Ist (24)   ${RED}*****${ORANGE1}`,
  /* Gul   */ r25: `${RED}*****${ORANGE1}   Gul (25)   ${RED}*****${ORANGE1}`,
  /* Vex   */ r26: `${RED}**********${ORANGE1}     Vex (26)     ${RED}**********${ORANGE1}`,
  /* Ohm   */ r27: `${RED}**********${ORANGE1}     Ohm (27)     ${RED}**********${ORANGE1}`,
  /* Lo    */ r28: `${RED}**********${ORANGE1}     Lo (28)     ${RED}**********${ORANGE1}`,
  /* Sur   */ r29: `${RED}**********${ORANGE1}     Sur (29)     ${RED}**********${ORANGE1}`,
  /* Ber   */ r30: `${RED}**********${ORANGE1}     Ber (30)     ${RED}**********${ORANGE1}`,
  /* Jah   */ r31: `${RED}**********${ORANGE1}     Jah (31)     ${RED}**********${ORANGE1}`,
  /* Cham  */ r32: `${RED}**********${ORANGE1}     Cham (32)     ${RED}**********${ORANGE1}`,
  /* Zod   */ r33: `${RED}**********${ORANGE1}     Zod (33)     ${RED}**********${ORANGE1}`,
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
  
  rvs: `${PURPLE}+${WHITE}RPS`, // Rejuvenation Potion
  rvl: `${PURPLE}+${WHITE}RPF`, // Full Rejuvenation Potion
  
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

  gpl: `${DARKGREEN1}o${WHITE} Gas 1`, // Strangling Gas Potion
  gpm: `${DARKGREEN1}o${WHITE} Gas 2`, // Fulminating Potion
  gps: `${DARKGREEN1}o${WHITE} Gas 3`, // Choking Gas Potion

  opl: `${ORANGE}o${WHITE} Oil 1`, // Exploding Potion
  opm: `${ORANGE}o${WHITE} Oil 2`, // Rancid Gas Potion
  ops: `${ORANGE}o${WHITE} Oil 3`, // Oil Potion

  aqv: `${GRAY}o${WHITE} Arrows`, // Arrow Quiver
  cqv: `${GRAY}o${WHITE} Bolts`, // Crossbow Bolt Quiver

  // key: HIDDEN, // Regular key for locked chests

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
  gcv: `${PURPLE}o${WHITE} Chipped`,  // Chipped Amethyst
  gcw:  `${WHITE}o${WHITE} Chipped`,  // Chipped Diamond
  gcg:  `${GREEN}o${WHITE} Chipped`,  // Chipped Emerald
  gcr:    `${RED}o${WHITE} Chipped`,  // Chipped Ruby
  gcb:   `${BLUE}o${WHITE} Chipped`,  // Chipped Sapphire
  gcy: `${YELLOW}o${WHITE} Chipped`,  // Chipped Topaz

  gfv: `${PURPLE}o${WHITE} Flawed`,   // Flawed Amethyst
  gfw:  `${WHITE}o${WHITE} Flawed`,   // Flawed Diamond
  gfg:  `${GREEN}o${WHITE} Flawed`,   // Flawed Emerald
  gfr:    `${RED}o${WHITE} Flawed`,   // Flawed Ruby
  gfb:   `${BLUE}o${WHITE} Flawed`,   // Flawed Sapphire
  gfy: `${YELLOW}o${WHITE} Flawed`,   // Flawed Topaz

  gsv: `${PURPLE}o${WHITE} Amethyst`, // Amethyst
  // gsw:  `${WHITE}o${WHITE} Diamond`,  // Diamond    See Affixes ^ line 79
  // gsg:  `${GREEN}o${WHITE} Emerald`,  // Emerald    See Affixes ^ line 80
  // gsr:    `${RED}o${WHITE} Ruby`,     // Ruby       See Affixes ^ line 81
  // gsb:   `${BLUE}o${WHITE} Sapphire`, // Sapphire   See Affixes ^ line 82
  gsy: `${YELLOW}o${WHITE} Topaz`,    // Topaz

  gzv: `${PURPLE}o${WHITE} Flawless`, // Flawless Amethyst
  glw:  `${WHITE}o${WHITE} Flawless`, // Flawless Diamond
  glg:  `${GREEN}o${WHITE} Flawless`, // Flawless Emerald
  glr:    `${RED}o${WHITE} Flawless`, // Flawless Ruby
  glb:   `${BLUE}o${WHITE} Flawless`, // Flawless Sapphire
  gly: `${YELLOW}o${WHITE} Flawless`, // Flawless Topaz
  
  gpv: `${PURPLE}o${WHITE} Perfect`,  // Perfect Amethyst
  gpw:  `${WHITE}o${WHITE} Perfect`,  // Perfect Diamond
  gpg:  `${GREEN}o${WHITE} Perfect`,  // Perfect Emerald
  gpr:    `${RED}o${WHITE} Perfect`,  // Perfect Ruby
  gpb:   `${BLUE}o${WHITE} Perfect`,  // Perfect Sapphire
  gpy: `${YELLOW}o${WHITE} Perfect`,  // Perfect Topaz
  
  skc: `${GRAY}o${WHITE} Chipped`,    // Chipped Skull
  skf: `${GRAY}o${WHITE} Flawed`,     // Flawed Skull
  sku: `${GRAY}o${WHITE} Skull`,      // Skull
  skl: `${GRAY}o${WHITE} Flawless`,   // Flawless Skull
  skz: `${GRAY}o${WHITE} Perfect`,    // Perfect Skull

  //=======================//
  //   Pandemonium Event   //
  //=======================//
  pk1: `${RED}*****${ORANGE}   Key of Terror   ${RED}*****${ORANGE}`,                  // Pandemonium Key 1 Key of Terror
  pk2: `${RED}*****${ORANGE}   Key of Hate   ${RED}*****${ORANGE}`,                    // Pandemonium Key 2 Key of Hate
  pk3: `${RED}*****${ORANGE}   Key of Destruction   ${RED}*****${ORANGE}`,             // Pandemonium Key 3 Key of Destruction
  dhn: `${RED}**********${ORANGE}     Diablo's Horn     ${RED}**********${ORANGE}`,    // Diablo's Horn
  bey: `${RED}**********${ORANGE}     Baal's Eye     ${RED}**********${ORANGE}`,       // Baal's Eye
  mbr: `${RED}**********${ORANGE}     Mephisto's Brain     ${RED}**********${ORANGE}`, // Mephisto's Brain
  std: `${RED}**${GOLD}  Standard of Heroes  ${RED}**${GOLD}`,                       // Standard of Heroes
  
  //======================//
  //   Token & Essences   //
  //======================//
  tes: `${RED}**${ORANGE}  Twisted Essence of Suffering  ${RED}**${ORANGE}`,     // Twisted Essence of Suffering
  ceh: `${RED}**${ORANGE}  Charged Essense of Hatred  ${RED}**${ORANGE}`,        // Charged Essense of Hatred
  bet: `${RED}**${ORANGE}  Burning Essence of Terror  ${RED}**${ORANGE}`,        // Burning Essence of Terror
  fed: `${RED}**${ORANGE}  Festering Essence of Destruction  ${RED}**${ORANGE}`, // Festering Essence of Destruction
  toa: `${RED}*****${ORANGE}   Token of Absolution   ${RED}*****${ORANGE}`,          // Token of Absolution

  //=================//
  //   Quest Items   //
  //=================//
  // Act 1
  leg: `${RED}**********${GOLD}     Wirt's Leg     ${RED}**********${GOLD}`,           // Wirt's Leg
  hdm: `${RED}**********${GOLD}     Horadric Malus     ${RED}**********${GOLD}`,       // Horadric Malus
  bks: `${RED}**********${GOLD}     Scroll of Inifuss     ${RED}**********${GOLD}`,    // Scroll of Inifuss
  bkd: `${RED}**********${GOLD}     Scroll of Inifuss     ${RED}**********${GOLD}`,    // Scroll of Inifuss (deciphered)
  // Act 2
  ass: `${RED}**********${GOLD}     Book of Skill     ${RED}**********${GOLD}`,        // Book of Skill
  box: `${RED}**********${GOLD}     Horadric Cube     ${RED}**********${GOLD}`,        // Horadric Cube
  tr1: `${RED}**********${GOLD}     Horadric Scroll     ${RED}**********${GOLD}`,      // Horadric Scroll
  msf: `${RED}**********${GOLD}     Staff of Kings     ${RED}**********${GOLD}`,       // Staff of Kings
  vip: `${RED}**********${GOLD}     Amulet of the Viper     ${RED}**********${GOLD}`,  // Amulet of the Viper
  hst: `${RED}**********${GOLD}     Horadric Staff     ${RED}**********${GOLD}`,       // Horadric Staff
  // Act 3
  xyz: `${RED}**********${GOLD}     Potion of Life     ${RED}**********${GOLD}`,       // Potion of Life
  j34: `${RED}**********${GOLD}     A Jade Figurine     ${RED}**********${GOLD}`,      // A Jade Figurine
  g34: `${RED}**********${GOLD}     The Golden Bird     ${RED}**********${GOLD}`,      // The Golden Bird
  bbb: `${RED}**********${GOLD}     Lam Esen's Tome     ${RED}**********${GOLD}`,      // Lam Esen's Tome
  g33: `${RED}**********${GOLD}     The Gidbinn     ${RED}**********${GOLD}`,          // The Gidbinn
  qf1: `${RED}**********${GOLD}     Khalim's Flail     ${RED}**********${GOLD}`,       // Khalim's Flail
  qf2: `${RED}**********${GOLD}     Khalim's Will     ${RED}**********${GOLD}`,        // Khalim's Will
  qey: `${RED}**********${GOLD}     Khalim's Eye     ${RED}**********${GOLD}`,         // Khalim's Eye
  qhr: `${RED}**********${GOLD}     Khalim's Heart     ${RED}**********${GOLD}`,       // Khalim's Heart
  qbr: `${RED}**********${GOLD}     Khalim's Brain     ${RED}**********${GOLD}`,       // Khalim's Brain
  mss: `${RED}**********${GOLD}     Mephisto's Soulstone     ${RED}**********${GOLD}`, // Mephisto's Soulstone
  // Act 4
  hfh: `${RED}**********${GOLD}     Hellforge Hammer     ${RED}**********${GOLD}`,     // Hellforge Hammer
  // Act 5
  ice: `${RED}**********${GOLD}     Malah's Potion     ${RED}**********${GOLD}`,       // Malah's Potion
  tr2: `${RED}**********${GOLD}     Scroll of Resistance     ${RED}**********${GOLD}`, // Scroll of Resistance

  // Extra
  LamTome:          `${RED}**********${GOLD}     Lam Esen's Tome     ${RED}**********${GOLD}`, // Lam Esen's Tome
  KhalimFlail:      `${RED}**********${GOLD}     Khalim's Flail     ${RED}**********${GOLD}`,  // Khalim's Flail
  SuperKhalimFlail: `${RED}**********${GOLD}     Khalim's Will     ${RED}**********${GOLD}`,   // Khalim's Will
};

customItems["Staff of Kings"]      = `${RED}**********${GOLD}     Staff of Kings     ${RED}**********${GOLD}`;      // Staff of Kings
customItems["Amulet of the Viper"] = `${RED}**********${GOLD}     Amulet of the Viper     ${RED}**********${GOLD}`; // Amulet of the Viper
customItems["Horadric Staff"]      = `${RED}**********${GOLD}     Horadric Staff     ${RED}**********${GOLD}`;      // Horadric Staff
customItems["Hell Forge Hammer"]   = `${RED}**********${GOLD}     Hell Forge Hammer     ${RED}**********${GOLD}`;   // Hellforge Hammer


//===============//
//   Custom UI   //
//===============//
const customUi = {

  //=================//
  //   Quest Items   //
  //=================//
  // For some reason, the devs put these gems in the wrong JSON file.
  ass: `${RED}**********${GOLD}     Book of Skill     ${RED}**********${GOLD}`,  // Book of Skill
  xyz: `${RED}**********${GOLD}     Potion of Life     ${RED}**********${GOLD}`, // Potion of Life
};


function applyLootFilter() {
  applyItemNameMods();
  applyTooltipMods();
}

function applyItemNameMods() {
  if (config.IsGoldEnabled) {
    applyCustomNames(itemNameAffixesPath, customAffixes);
  }
  if (config.IsRunesEnabled) {
    applyCustomNames(itemRunesPath, customRunes);
  }
  if (config.IsItemsEnabled) {
    applyCustomNames(itemNamesPath, customItems);
    applyCustomNames(uiPath, customUi);
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
