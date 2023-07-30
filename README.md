# Caedendi's Simple Loot Filter for D2RMM

_See also: [Caedendi's Extended Loot Filter for D2RMM](https://github.com/Caedendi/D2RMM-Loot-Filter-Extended)_

Adds a simple customizable loot filter to Diablo II: Resurrected using D2RMM. <br>
Cleans up item names to remove clutter and emphasizes important items. For the full feature list, see below.

Recommended for those who want a quick and simple template to modify themselves. <br>
If you don't want to modify .js files and rather have a shitload of presets, see the Extended version at the bottom of the page.


## Table of Contents

- [Screenshots](#screenshots)
- [Changelog](#changelog)
  - [2.0.0](#200)
  - [1.0.0](#100)
- [How to Install](#how-to-install)
- [Features](#features)
- [Roadmap](#roadmap)
- [Recommended Mods](#recommended-mods)
- [License/Permissions](#licensepermissions)
- [Credits](#credits)
  - [Code](#code)
  - [Filter Style](#filter-style)
- [My Mods + Source](#my-mods--source)
  - [Diablo II: Resurrected](#diablo-ii-resurrected)


## Screenshots

<p float="left">
    <img src="https://i.imgur.com/3FsggaT.png" alt="01_pots_scrolls_gold" width="49%">
    <img src="https://i.imgur.com/eJ8EyNk.png" alt="02_gems_quest_endgame" width="49%">
</p>

<p float="left">
    <img src="https://i.imgur.com/7jkSd0G.png" alt="03_runes_numbers_highlights_no-affix" width="49%">
</p>


## Changelog

### 2.0.0

- The mod settings menu is now divided into sections. Make sure to use D2RMM 1.4.6 or higher!
- Fixed half of the quest items not having highlighting patterns
- Fixed the cube window's title being all messy when highlighting quest items is enabled by adding an option to exclude the cube
- Fixed Hell Forge Hammer incorrectly displaying as "Hellforge Hammer" when highlighting is enabled
- Fixed some gem names not being filtered correctly
- Fixed bugged support for charms and added highlighting of id'd uniques
- Removed bugged support for jewels, rings and amulets as they can't be fixed
- Changed Small/Full Rejuvenation Potion name from +SRP/+FRP to +RPS/+RPF
- Improved highlight patterns
- Added highlighting to Rainbow Facets
- Added built-in short superior/inferior prefixes mod

### 1.0.0

First official release!


## How to Install

- Download and install [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169), then run it.
- Download and extract this mod folder to /D2RMM/mods/.
- See D2RMM instructions on how to configure and enable.
- Play the game!


## Features

- **Customize to your liking:**
  - Use this filter as a template to apply your own custom naming schemes. Just open the mod.js file in Notepad or VSCodium and change whatever items you'd like.
  - To hide an item, change its name to HIDDEN (without quotes). The value of HIDDEN (amount of spaces) can be changed in the D2RMM settings.
  - Don't forget to reload and apply in D2RMM!
- **Completely optional:** 
  - Untoggling everything means no modding will be applied
- **Gold:** 
  - Shrink the "Gold"-affix to a gold-colored "G".
- **Runes:** 
  - Remove the "Rune" affix, add rune numbers and highlight important runes.
- **Items:** 
  - Shrink, highlight and color the tooltips for potions, scrolls/tomes, bolts/arrows, gems, charms, facets, essences/tokens, Pandomonium Event - and quest items.
- **Short Superior/Inferior prefixes:** 
  - Shorten superior/inferior prefixes to + and -.
- **Item tooltip customization:**
  - Modify the size and background opacity of the tooltip for items on the ground and in the inventory.


## Roadmap

None at the moment. If you have a request for a feature, please open a GitHub issue (preferred) or post a comment on Nexus Mods.

### Fix known bugs

- [x] Regular Ruby, Sapphire, Emerald and Diamond not working
- [x] Certain quest item customization not working
- [x] Enabling quest item highlighting screws up the Horadric Cube's displayed name when the cube menu is open.
- [x] Enabling jewelry turns crafted/rare/set/unique jewelry blue

### Add features

- [x] Integrate [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214) by [Jobus](https://www.nexusmods.com/diablo2resurrected/users/3107665)


## Recommended Mods

In addition to this, I recommend you also use the following D2RMM mods:

| Mod                                                                                  |                                                   Creator                                                    | Notes                                                                                              |
|--------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------:|----------------------------------------------------------------------------------------------------|
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                           |                                     [olegbl](https://github.com/olegbl)                                      | So you don't accidentally get yourself banned.                                                     |
| [Skip Videos](https://www.nexusmods.com/diablo2resurrected/mods/179)                 |                [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me)                 | Disable launch intro videos and cinematic cutscenes when transitioning between acts.               |
| [Improved Potion Visibility](https://www.nexusmods.com/diablo2resurrected/mods/384)  |                   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)                   | Changes healing/mana potion sprites so it's easier to distinguish different potion levels.         |
| [UI Fixes](https://www.nexusmods.com/diablo2resurrected/mods/387)                    |                   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)                   | Fixes the placement of a few item grids.                                                           |
| [Towns QoL Changes](https://www.nexusmods.com/diablo2resurrected/mods/310)           |                  [night0wl117](https://www.nexusmods.com/diablo2resurrected/users/33697975)                  | Move town starting points, TP locations and Cain's position in Act 5.                              |
| [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183)                   |                                     [olegbl](https://github.com/olegbl)                                      | Teleport and buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_ |
| [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174)             |                                     [olegbl](https://github.com/olegbl)                                      | Adds the ilvl to the tooltips of all items with an ilvl.                                           |
| [LightPillar](https://www.nexusmods.com/diablo2resurrected/mods/197)                 | [qhu91it](https://github.com/qhu91it) and [buzh](https://www.nexusmods.com/diablo2resurrected/users/2596633) | Add an awesome effect when certain items drop.                                                     |
| [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200)           |                                     [olegbl](https://github.com/olegbl)                                      | In case any mod touches __profilehd_ and screws up the font size in the settings menu.             |


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is given), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.


## Credits

This loot filter mod is based on code from existing mods and inspired by existing styles. I have added code optimizations, toggles and my own personal flair and preferences. <br>
Remnants of other people's codes remain, so I have tried to list the credits as accurately as I can. If you see any of your own code in this mod and it isn't credited, please send me a message.

Many thanks to:

### Code
- [salzgaard](https://www.nexusmods.com/diablo2resurrected/users/6397569) for his [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317), which acted as a base for this mod and the tooltip customization features.
- [olegbl](https://github.com/olegbl) for
  - Creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)
  - His [example mods](https://github.com/olegbl/d2rmm.mods) in general
  - His [Short Potion Names](https://www.nexusmods.com/diablo2resurrected/mods/177) mod for the list of colors
- [Jobus](https://www.nexusmods.com/diablo2resurrected/users/3107665) for his [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214) mod, which I integrated

### Filter Style
- [Path of Diablo filters](https://pathofdiablo.com/wiki/index.php?title=List_of_Loot_Filters) for removing all that clutter on Path of Diablo and inspiring me to create this loot filter for D2R.
  - Mainly [Darkgale](https://www.twitch.tv/darkgale)'s filter called [Filtergale](https://www.reddit.com/r/pathofdiablo/comments/i9hdw7/filtergale/) ([download](https://greendu.de/s/ZbDwHekAg3rmeRB/download?path=%2F&files=item.filter)) regarding styling.
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317)
- [Cbraqz](https://www.nexusmods.com/diablo2resurrected/users/3106975)'s [D2R Simple Loot Filter](https://www.nexusmods.com/diablo2resurrected/mods/54) mod for giving me an idea on how to fix highlighting charms without removing rarity coloring


## My Mods + Source ##

### Diablo II: Resurrected ###

| Nexus Mods Page                                                                                    | Source                                                           |
|:---------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
| [Caedendi's Extended Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/361) | [GitHub](https://github.com/Caedendi/D2RMM-Loot-Filter-Extended) |
| [Caedendi's Simple Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/360)   | [GitHub](https://github.com/Caedendi/D2RMM-Loot-Filter-Simple)   |
| [Skip Videos for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/397)                     | [GitHub](https://github.com/Caedendi/D2RMM-Skip-Videos)          |
