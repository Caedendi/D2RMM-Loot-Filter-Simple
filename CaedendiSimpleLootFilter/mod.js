////=============================================////
////=============================================////
////                                             ////
////   Caedendi's Simple Loot Filter for D2RMM   ////
////                   v2.0.0                    ////
////                                             ////
////=============================================////
////=============================================////

//===============//
//   Constants   //
//===============//

// File paths
const FILE_EXTENSION_JSON = ".json";

const FILE_PROFILE_HD_PATH = `global\\ui\\layouts\\_profilehd${FILE_EXTENSION_JSON}`;

const FILE_PATH_STRINGS          = "local\\lng\\strings\\";
const FILE_ITEM_MODIFIERS_PATH   = `${FILE_PATH_STRINGS}item-modifiers${FILE_EXTENSION_JSON}`;
const FILE_ITEM_NAMEAFFIXES_PATH = `${FILE_PATH_STRINGS}item-nameaffixes${FILE_EXTENSION_JSON}`;
const FILE_ITEM_NAMES_PATH       = `${FILE_PATH_STRINGS}item-names${FILE_EXTENSION_JSON}`;
const FILE_ITEM_RUNES_PATH       = `${FILE_PATH_STRINGS}item-runes${FILE_EXTENSION_JSON}`;
const FILE_ITEM_UI_PATH          = `${FILE_PATH_STRINGS}ui${FILE_EXTENSION_JSON}`;

// Color
const COLOR_PREFIX = "ÿc";

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

// Gold
const customAffixes = {
  items: {},

  customizeGold() {
    this.items.gld = `${GOLD1}G`; // Gold displays as "1234 G" with white numbers and gold-colored G.
  },
  
  // Gems - For some reason, the devs put these gems in the wrong JSON file.
  customizeGems() {
    this.items.gsw = `${WHITE}o ${WHITE}Diamond`;  // Diamond
    this.items.gsg = `${GREEN}o ${WHITE}Emerald`;  // Emerald
    this.items.gsr =   `${RED}o ${WHITE}Ruby`;     // Ruby
    this.items.gsb =  `${BLUE}o ${WHITE}Sapphire`; // Sapphire
  },

  // Superior/Inferior Prefixes
  customizeSupInf() {
    this.items["Hiquality"]   = `+`;
    this.items["Damaged"]     = `-`;
    this.items["Cracked"]     = `-`;
    this.items["Low Quality"] = `-`;
    this.items["Crude"]       = `-`;
  },
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
  /* Ral   */ r08: `${RED}*****${ORANGE1}   Ral (8)   ${RED}*****${ORANGE1}`,
  /* Ort   */ r09: `${ORANGE1}Ort (9)`,
  /* Thul  */ r10: `${ORANGE1}Thul (10)`,
  /* Amn   */ r11: `${ORANGE1}Amn (11)`,
  /* Sol   */ r12: `${ORANGE1}Sol (12)`,
  /* Shael */ r13: `${ORANGE1}Shael (13)`,
  /* Dol   */ r14: `${ORANGE1}Dol (14)`,
  /* Hel   */ r15: `${RED}*****${ORANGE1}   Hel (15)   ${RED}*****${ORANGE1}`,
  /* Io    */ r16: `${RED}*****${ORANGE1}   Io (16)   ${RED}*****${ORANGE1}`,
  /* Lum   */ r17: `${RED}*****${ORANGE1}   Lum (17)   ${RED}*****${ORANGE1}`,
  /* Ko    */ r18: `${RED}*****${ORANGE1}   Ko (18)   ${RED}*****${ORANGE1}`,
  /* Fal   */ r19: `${RED}*****${ORANGE1}   Fal (19)   ${RED}*****${ORANGE1}`,
  /* Lem   */ r20: `${RED}**********${ORANGE1}     Lem ${RED}(20)     **********${ORANGE1}`,
  /* Pul   */ r21: `${RED}**********${ORANGE1}     Pul ${RED}(21)     **********${ORANGE1}`,
  /* Um    */ r22: `${RED}**********${ORANGE1}     Um ${RED}(22)     **********${ORANGE1}`,
  /* Mal   */ r23: `${RED}**********${ORANGE1}     Mal ${RED}(23)     **********${ORANGE1}`,
  /* Ist   */ r24: `${RED}**********${ORANGE1}     Ist ${RED}(24)     **********${ORANGE1}`,
  /* Gul   */ r25: `${RED}**********${ORANGE1}     Gul ${RED}(25)     **********${ORANGE1}`,
  /* Vex   */ r26: `${RED}********** ********** **********     Vex (26)     ********** ********** **********`,
  /* Ohm   */ r27: `${RED}********** ********** **********     Ohm (27)     ********** ********** **********`,
  /* Lo    */ r28: `${RED}********** ********** **********     Lo (28)     ********** ********** **********`,
  /* Sur   */ r29: `${RED}********** ********** **********     Sur (29)     ********** ********** **********`,
  /* Ber   */ r30: `${RED}********** ********** **********     Ber (30)     ********** ********** **********`,
  /* Jah   */ r31: `${RED}********** ********** **********     Jah (31)     ********** ********** **********`,
  /* Cham  */ r32: `${RED}********** ********** **********     Cham (32)     ********** ********** **********`,
  /* Zod   */ r33: `${RED}********** ********** **********     Zod (33)     ********** ********** **********`,
};


//==================//
//   Custom Items   //
//==================//
const customItemNames = {

  items: {},

  //==========//
  //   Junk   //
  //==========//
  customizeJunk() {
    this.items.hp1 = `${RED}+${WHITE}HP1`;            // Minor Healing Potion
    this.items.hp2 = `${RED}+${WHITE}HP2`;            // Light Healing Potion
    this.items.hp3 = `${RED}+${WHITE}HP3`;            // Healing Potion
    this.items.hp4 = `${RED}+${WHITE}HP4`;            // Greater Healing Potion
    this.items.hp5 = `${RED}+${WHITE}HP5`;            // Super Healing Potion
    
    this.items.mp1 = `${BLUE}+${WHITE}MP1`;           // Minor Mana Potion
    this.items.mp2 = `${BLUE}+${WHITE}MP2`;           // Light Mana Potion
    this.items.mp3 = `${BLUE}+${WHITE}MP3`;           // Mana Potion
    this.items.mp4 = `${BLUE}+${WHITE}MP4`;           // Greater Mana Potion
    this.items.mp5 = `${BLUE}+${WHITE}MP5`;           // Super Mana Potion
    
    this.items.rvs = `${PURPLE}+${WHITE}RPS`;         // Rejuvenation Potion
    this.items.rvl = `${PURPLE}+${WHITE}RPF`;         // Full Rejuvenation Potion
    
    this.items.yps = `${GREEN}+${WHITE}Antidote`;     // Antidote Potion
    this.items.wms = `${GREEN}+${WHITE}Thawing`;      // Thawing Potion
    this.items.vps = `${GREEN}+${WHITE}Stamina`;      // Stamina Potion
    this.items.tbk = `${DARKGREEN1}+${WHITE}TP Tome`; // Tome of Town Portal
    this.items.ibk = `${DARKGREEN1}+${WHITE}ID Tome`; // Tome of Identify
    this.items.tsc = `${GREEN}+${WHITE}TP`;           // Scroll of Town Portal
    this.items.isc = `${GREEN}+${WHITE}ID`;           // Scroll of Identify
    
    this.items.gpl = `${DARKGREEN1}o${WHITE} Gas 1`;  // Strangling Gas Potion
    this.items.gpm = `${DARKGREEN1}o${WHITE} Gas 2`;  // Fulminating Potion
    this.items.gps = `${DARKGREEN1}o${WHITE} Gas 3`;  // Choking Gas Potion
    
    this.items.opl = `${ORANGE}o${WHITE} Oil 1`;      // Exploding Potion
    this.items.opm = `${ORANGE}o${WHITE} Oil 2`;      // Rancid Gas Potion
    this.items.ops = `${ORANGE}o${WHITE} Oil 3`;      // Oil Potion
    
    this.items.aqv = `${GRAY}o${WHITE} Arrows`;       // Arrow Quiver
    this.items.cqv = `${GRAY}o${WHITE} Bolts`;        // Crossbow Bolt Quiver
    
    // this.items.key = HIDDEN; // Regular key for locked chests
  },
    
  //==========//
  //   Gems   //
  //==========//
  customizeGems() {
    this.items.gcv = `${PURPLE}o${WHITE} Chipped`;  // Chipped Amethyst
    this.items.gcw =  `${WHITE}o${WHITE} Chipped`;  // Chipped Diamond
    this.items.gcg =  `${GREEN}o${WHITE} Chipped`;  // Chipped Emerald
    this.items.gcr =    `${RED}o${WHITE} Chipped`;  // Chipped Ruby
    this.items.gcb =   `${BLUE}o${WHITE} Chipped`;  // Chipped Sapphire
    this.items.gcy = `${YELLOW}o${WHITE} Chipped`;  // Chipped Topaz
    
    this.items.gfv = `${PURPLE}o${WHITE} Flawed`;   // Flawed Amethyst
    this.items.gfw =  `${WHITE}o${WHITE} Flawed`;   // Flawed Diamond
    this.items.gfg =  `${GREEN}o${WHITE} Flawed`;   // Flawed Emerald
    this.items.gfr =    `${RED}o${WHITE} Flawed`;   // Flawed Ruby
    this.items.gfb =   `${BLUE}o${WHITE} Flawed`;   // Flawed Sapphire
    this.items.gfy = `${YELLOW}o${WHITE} Flawed`;   // Flawed Topaz
    
    this.items.gsv = `${PURPLE}o${WHITE} Amethyst`; // Amethyst
    // for diamond/emerald/ruby/sapphire; see customAffixes
    this.items.gsy = `${YELLOW}o${WHITE} Topaz`;    // Topaz
    
    this.items.gzv = `${PURPLE}o${WHITE} Flawless`; // Flawless Amethyst
    this.items.glw =  `${WHITE}o${WHITE} Flawless`; // Flawless Diamond
    this.items.glg =  `${GREEN}o${WHITE} Flawless`; // Flawless Emerald
    this.items.glr =    `${RED}o${WHITE} Flawless`; // Flawless Ruby
    this.items.glb =   `${BLUE}o${WHITE} Flawless`; // Flawless Sapphire
    this.items.gly = `${YELLOW}o${WHITE} Flawless`; // Flawless Topaz
    
    this.items.gpv = `${PURPLE}o${WHITE} Perfect`;  // Perfect Amethyst
    this.items.gpw =  `${WHITE}o${WHITE} Perfect`;  // Perfect Diamond
    this.items.gpg =  `${GREEN}o${WHITE} Perfect`;  // Perfect Emerald
    this.items.gpr =    `${RED}o${WHITE} Perfect`;  // Perfect Ruby
    this.items.gpb =   `${BLUE}o${WHITE} Perfect`;  // Perfect Sapphire
    this.items.gpy = `${YELLOW}o${WHITE} Perfect`;  // Perfect Topaz
    
    this.items.skc = `${GRAY}o${WHITE} Chipped`;    // Chipped Skull
    this.items.skf = `${GRAY}o${WHITE} Flawed`;     // Flawed Skull
    this.items.sku = `${GRAY}o${WHITE} Skull`;      // Skull
    this.items.skl = `${GRAY}o${WHITE} Flawless`;   // Flawless Skull
    this.items.skz = `${GRAY}o${WHITE} Perfect`;    // Perfect Skull
  },

  //=============//
  //   Jewelry   //   
  //=============//
  customizeJewelry() {
    // BUGGED: crafted/rare/set/unique rings, amulets and jewels show up as blue
    // this.items.amu = `${RED}0 ${BLUE}Amulet ${RED}0${BLUE}`; // Amulet
    // this.items.rin = `${RED}0 ${BLUE}Ring ${RED}0${BLUE}`;   // Ring
    // this.items.jew = `${RED}0 ${BLUE}Jewel ${RED}0${BLUE}`;  // Jewel
    this.items["Rainbow Facet"] = `${RED}***** ${YELLOW}***** ${BLUE}***** ${GREEN}*****${GOLD}   Rainbow Facet   ${GREEN}***** ${BLUE}***** ${YELLOW}***** ${RED}*****${GOLD}`;
  },

  //============//
  //   Charms   //   
  //============//
  customizeCharms() {
    // charms
    this.items.cm1 = `Small ${RED}Charm${BLUE}`; // Small Charm
    this.items.cm2 = `Large ${RED}Charm${BLUE}`; // Large Charm
    this.items.cm3 = `Grand ${RED}Charm${BLUE}`; // Grand Charm

    // unique charms
    this.items["Annihilus"]       = `${RED}**********${GOLD}     Annihilus     ${RED}**********${GOLD}`;
    this.items["Hellfire Torch"]  = `${RED}**********${GOLD}     Hellfire Torch     ${RED}**********${GOLD}`;
    this.items["Gheed's Fortune"] = `${RED}**********${GOLD}     Gheed's Fortune     ${RED}**********${GOLD}`;
    
    // sunder charms
    this.items["Black Cleft"]          = `${RED}**********${GOLD}     Black Cleft     ${RED}**********${GOLD}`;
    this.items["Bone Break"]           = `${RED}**********${GOLD}     Bone Break     ${RED}**********${GOLD}`;
    this.items["Cold Rupture"]         = `${RED}**********${GOLD}     Cold Rupture     ${RED}**********${GOLD}`;
    this.items["Crack of the Heavens"] = `${RED}**********${GOLD}     Crack of the Heavens     ${RED}**********${GOLD}`;
    this.items["Flame Rift"]           = `${RED}**********${GOLD}     Flame Rift     ${RED}**********${GOLD}`;
    this.items["Rotting Fissure"]      = `${RED}**********${GOLD}     Rotting Fissure     ${RED}**********${GOLD}`;
  },

  customizeEndgame() {
    //=======================//
    //   Pandemonium Event   //
    //=======================//
    this.items.pk1 = `${RED}**********${ORANGE}     Key of Terror     ${RED}**********${ORANGE}`;                  // Pandemonium Key 1 Key of Terror
    this.items.pk2 = `${RED}**********${ORANGE}     Key of Hate     ${RED}**********${ORANGE}`;                    // Pandemonium Key 2 Key of Hate
    this.items.pk3 = `${RED}**********${ORANGE}     Key of Destruction     ${RED}**********${ORANGE}`;             // Pandemonium Key 3 Key of Destruction
    this.items.dhn = `${RED}**********${ORANGE}     Diablo's Horn     ${RED}**********${ORANGE}`;    // Diablo's Horn
    this.items.bey = `${RED}**********${ORANGE}     Baal's Eye     ${RED}**********${ORANGE}`;       // Baal's Eye
    this.items.mbr = `${RED}**********${ORANGE}     Mephisto's Brain     ${RED}**********${ORANGE}`; // Mephisto's Brain
    this.items.std = `${RED}*****${GOLD}   Standard of Heroes   ${RED}*****${GOLD}`;                       // Standard of Heroes
    
    //======================//
    //   Token & Essences   //
    //======================//
    this.items.tes = `${RED}*****${ORANGE}   Twisted Essence of Suffering   ${RED}*****${ORANGE}`;     // Twisted Essence of Suffering
    this.items.ceh = `${RED}*****${ORANGE}   Charged Essense of Hatred   ${RED}*****${ORANGE}`;        // Charged Essense of Hatred
    this.items.bet = `${RED}*****${ORANGE}   Burning Essence of Terror   ${RED}*****${ORANGE}`;        // Burning Essence of Terror
    this.items.fed = `${RED}*****${ORANGE}   Festering Essence of Destruction   ${RED}*****${ORANGE}`; // Festering Essence of Destruction
    this.items.toa = `${RED}*****${ORANGE}   Token of Absolution   ${RED}*****${ORANGE}`;          // Token of Absolution
  },

  //=================//
  //   Quest Items   //
  //=================//
  customizeQuest() {
    // Act 1
    this.items.leg = `${RED}**********${GOLD}     Wirt's Leg     ${RED}**********${GOLD}`;           // Wirt's Leg
    this.items.hdm = `${RED}**********${GOLD}     Horadric Malus     ${RED}**********${GOLD}`;       // Horadric Malus
    this.items.bks = `${RED}**********${GOLD}     Scroll of Inifuss     ${RED}**********${GOLD}`;    // Scroll of Inifuss
    this.items.bkd = `${RED}**********${GOLD}     Scroll of Inifuss     ${RED}**********${GOLD}`;    // Scroll of Inifuss (deciphered)
    // Act 2
    this.items.tr1 = `${RED}**********${GOLD}     Horadric Scroll     ${RED}**********${GOLD}`;      // Horadric Scroll
    this.items.msf = `${RED}**********${GOLD}     Staff of Kings     ${RED}**********${GOLD}`;       // Staff of Kings
    this.items.vip = `${RED}**********${GOLD}     Amulet of the Viper     ${RED}**********${GOLD}`;  // Amulet of the Viper
    this.items.hst = `${RED}**********${GOLD}     Horadric Staff     ${RED}**********${GOLD}`;       // Horadric Staff
    // Act 3
    this.items.j34 = `${RED}**********${GOLD}     A Jade Figurine     ${RED}**********${GOLD}`;      // A Jade Figurine
    this.items.g34 = `${RED}**********${GOLD}     The Golden Bird     ${RED}**********${GOLD}`;      // The Golden Bird
    this.items.bbb = `${RED}**********${GOLD}     Lam Esen's Tome     ${RED}**********${GOLD}`;      // Lam Esen's Tome
    this.items.g33 = `${RED}**********${GOLD}     The Gidbinn     ${RED}**********${GOLD}`;          // The Gidbinn
    this.items.qf1 = `${RED}**********${GOLD}     Khalim's Flail     ${RED}**********${GOLD}`;       // Khalim's Flail
    this.items.qf2 = `${RED}**********${GOLD}     Khalim's Will     ${RED}**********${GOLD}`;        // Khalim's Will
    this.items.qey = `${RED}**********${GOLD}     Khalim's Eye     ${RED}**********${GOLD}`;         // Khalim's Eye
    this.items.qhr = `${RED}**********${GOLD}     Khalim's Heart     ${RED}**********${GOLD}`;       // Khalim's Heart
    this.items.qbr = `${RED}**********${GOLD}     Khalim's Brain     ${RED}**********${GOLD}`;       // Khalim's Brain
    this.items.mss = `${RED}**********${GOLD}     Mephisto's Soulstone     ${RED}**********${GOLD}`; // Mephisto's Soulstone
    // Act 4
    this.items.hfh = `${RED}**********${GOLD}     Hell Forge Hammer     ${RED}**********${GOLD}`;     // Hell Forge Hammer
    // Act 5
    
    // Extra
    this.items["Staff of Kings"] =      `${RED}**********${GOLD}     Staff of Kings     ${RED}**********${GOLD}`;      // Staff of Kings
    this.items["Amulet of the Viper"] = `${RED}**********${GOLD}     Amulet of the Viper     ${RED}**********${GOLD}`; // Amulet of the Viper
    this.items["Horadric Staff"] =      `${RED}**********${GOLD}     Horadric Staff     ${RED}**********${GOLD}`;      // Horadric Staff
    this.items.LamTome =                `${RED}**********${GOLD}     Lam Esen's Tome     ${RED}**********${GOLD}`;     // Lam Esen's Tome
    this.items.KhalimFlail =            `${RED}**********${GOLD}     Khalim's Flail     ${RED}**********${GOLD}`;      // Khalim's Flail
    this.items.SuperKhalimFlail =       `${RED}**********${GOLD}     Khalim's Will     ${RED}**********${GOLD}`;       // Khalim's Will
    this.items["Hell Forge Hammer"] =   `${RED}**********${GOLD}     Hell Forge Hammer     ${RED}**********${GOLD}`;   // Hell Forge Hammer
  },

  customizeCube() {
    this.items.box = `${RED}**********${GOLD}     Horadric Cube     ${RED}**********${GOLD}`;
  }
};

//===============//
//   Custom UI   //
//===============//
const customUi = {
  items: {},

  customizeQuest() {
    // For some reason the devs put these quest items in the wrong JSON file.
    this.items.ass = `${RED}**********${GOLD}     Book of Skill     ${RED}**********${GOLD}`;  // Book of Skill
    this.items.xyz = `${RED}**********${GOLD}     Potion of Life     ${RED}**********${GOLD}`; // Potion of Life
  }
};

//======================//
//   Custom Modifiers   //
//======================//
const customModifiers = {
  items: {},
  
  customizeQuest() {
    // For some reason the devs put these quest items in the wrong JSON file.
    this.items.ice = `${RED}**********${GOLD}     Malah's Potion     ${RED}**********${GOLD}`;       // Malah's Potion
    this.items.tr2 = `${RED}**********${GOLD}     Scroll of Resistance     ${RED}**********${GOLD}`; // Scroll of Resistance
  }
};


//============================//
//   How to apply the magic   //
//============================//

// Gold, Superior/Inferior affixes, Gems (exceptions)
function applyCustomAffixes() {
  if (!config.IsGoldEnabled && !config.IsGemsEnabled && !config.ShortSupInf) {
    return;
  }
  
  if (config.IsGoldEnabled) {
    customAffixes.customizeGold();
  }
  if (config.IsGemsEnabled) {
    customAffixes.customizeGems();
  }
  if (config.ShortSupInf) {
    customAffixes.customizeSupInf();
  }

  applyCustomNames(FILE_ITEM_NAMEAFFIXES_PATH, customAffixes.items);
}

// Runes
function applyCustomRuneNames() {
  if (config.IsRunesEnabled) {
    applyCustomNames(FILE_ITEM_RUNES_PATH, customRunes);
  }
}

function applyCustomItemNames() {
  if (!config.IsJunkEnabled && !config.IsGemsEnabled && !config.IsJewelryEnabled && !config.IsCharmsEnabled && !config.IsQuestEnabled && !config.IsEndgameEnabled) {
    return;
  }

  if (config.IsJunkEnabled) {
    customItemNames.customizeJunk();
  }
  if (config.IsGemsEnabled) {
    customItemNames.customizeGems();
  }
  if (config.IsJewelryEnabled) {
    customItemNames.customizeJewelry();
  }
  if (config.IsCharmsEnabled) {
    customItemNames.customizeCharms();
  }
  if (config.IsQuestEnabled) {
    customItemNames.customizeQuest();
    if (!config.ShouldExcludeCube) {
      customizeCube();
    }
  }
  if (config.IsEndgameEnabled) {
    customItemNames.customizeEndgame();
  }

  applyCustomNames(FILE_ITEM_NAMES_PATH, customItemNames.items);
}

// quest
function applyCustomUi() {
  if (!config.IsQuestEnabled) {
    return;
  }
  customUi.customizeQuest();
  applyCustomNames(FILE_ITEM_UI_PATH, customUi.items);
}

// quest
function applyCustomModifiers() {
  if (!config.IsQuestEnabled) {
    return;
  }
  customModifiers.customizeQuest();
  applyCustomNames(FILE_ITEM_MODIFIERS_PATH, customModifiers.items);
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

  let profileHD = D2RMM.readJson(FILE_PROFILE_HD_PATH);

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
  
  D2RMM.writeJson(FILE_PROFILE_HD_PATH, profileHD);
}


//========================//
//   Applying the magic   //
//========================//

function applyLootFilter() {
  applyCustomAffixes();
  applyCustomRuneNames();
  applyCustomItemNames();
  applyCustomUi();
  applyCustomModifiers();
  applyTooltipMods();
}

applyLootFilter();
