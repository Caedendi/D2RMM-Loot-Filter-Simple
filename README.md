# Caedendi's Simple Loot Filter for D2RMM

_See also: [Caedendi's Extended Loot Filter for D2RMM](https://github.com/Caedendi/D2RMM-Loot-Filter-Extended)_

Adds a simple customizable loot filter to Diablo 2: Resurrected using D2RMM. <br>
Cleans up item names to remove clutter and emphasizes important items. For the full feature list, see below.

Recommended for those who want a quick and simple template to modify themselves. <br>
If you don't want to modify .js files and rather have a shitload of presets, see the Extended version above.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Recommended Mods](#recommended-mods)
- [Roadmap](#roadmap)
- [Credits](#credits)
  - [Code](#code)
  - [Filter Style](#filter-style)
- [License/Permissions](#licensepermissions)


## Features

- **Customize to your liking:**
  - Use this filter as a template to apply your own custom naming schemes. Just open the mod.js file in Notepad and change whatever items you'd like.
  - To hide an item, change its name to HIDDEN (without quotes). The value of HIDDEN (amount of spaces) can be changed in the D2RMM settings.
  - Don't forget to reload and apply in D2RMM!
- **Completely optional:** 
  - Untoggling everything means no modding will be applied
- **Gold:** 
  - Shrink the "Gold"-affix to a gold-colored "G".
- **Runes:** 
  - Remove the "Rune" affix, add rune numbers and highlight important runes.
- **Items:** 
  - Shrink, highlight and color the tooltips for potions, scrolls/tomes, bolts/arrows, gems, essences/tokens, Pandomonium Event and quest items.
- **Jewelry:** (disabled because BUGGED)
  - Highlight the tooltips for rings, amulets, jewels and charms.
  - To enable, remove `//` from lines 126-132 in mod.js
  - BUG: Crafted/rare/set/unique rings, amulets, jewels and charms now also have blue tooltips
- **Item tooltip customization:**
  - Modify the size and background opacity of the tooltip for items on the ground and in the inventory.


## Installation

- Download and install [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169), then run it.
- Download and extract this mod folder to /D2RMM/mods/.
- See D2RMM instructions on how to configure and enable.
- Play the game!


## Recommended Mods

In addition to this, I recommend you also use the following D2RMM mods:

| Mod                                                                             |   Creator   | Notes                                                                                              |
|---------------------------------------------------------------------------------|:-----------:|----------------------------------------------------------------------------------------------------|
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                      |   olegbl    | So you don't accidentally get yourself banned.                                                     |
| [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200)      |   olegbl    | In case any mod touches __profilehd_ and screws up the font size in the settings menu.             |
| [LightPillar](https://www.nexusmods.com/diablo2resurrected/mods/197)            |   qhu91it   | Add an awesome effect when certain items drop.                                                     |
| [Skip Intro Videos](https://www.nexusmods.com/diablo2resurrected/mods/179)      |   olegbl    | On startup, gets you straight to the title screen.                                                 |
| [Towns QoL Changes](https://www.nexusmods.com/diablo2resurrected/mods/310)      | night0wl117 | Move town starting points, TP locations and Cain's position in Act 5.                              |
| [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183)              |   olegbl    | Teleport and buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_ |
| [Show Item Level](https://www.nexusmods.com/diablo2resurrected/mods/174)        |   olegbl    | Adds the ilvl to the tooltips of all items with an ilvl.                                           |
| [Short Quality Prefixes](https://www.nexusmods.com/diablo2resurrected/mods/214) |    Jobus    | Shortens the Superior/Inferior prefixes _(will be added to this mod in a future update)_.          |


## Roadmap

- [x] Finish mod
- [x] Document mod
  - [x] JSON descriptions
  - [x] Finish README
- [x] Test
  - [x] verify keys
  - [x] verify gas/oil potions
  - [x] verify essences
- [ ] Publish mod
  - [ ] Create pictures
  - [ ] Link pictures in README
  - [ ] Git tag + release
  - [ ] Publish on Nexus Mods
  - [ ] Reddit post
- [ ] Fix known bugs:
  - [x] Loot filter not working for regular Ruby, Sapphire, Emerald and Diamond
  - [ ] Enabling jewelry turns crafted/rare/set/unique jewelry blue
- [ ] Add features:
  - [ ] Integrate [Short Quality Prefixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/214/?tab=files&category=archived) or [Show Item Quality for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/351)
  - [ ] different emphasis for unique charms, rare jewels and facets (rainbow color)


## Credits

This loot filter mod is based on code from existing mods and inspired by existing styles. I have added code optimizations, toggles and my own personal flair and preferences. <br>
Remnants of other people's codes remain, so I have tried to list the credits as accurately as I can. If you see any of your own code in this mod and it isn't credited, please send me a message.

Many thanks to:

### Code
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317) for acting as a base to build upon and the tooltip customization features
- [olegbl](https://github.com/olegbl) for:
  - creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)
  - his [example mods](https://github.com/olegbl/d2rmm.mods) in general
  - his [Short Potion Names](https://www.nexusmods.com/diablo2resurrected/mods/177) mod for the list of colors

### Filter Style
- [Path of Diablo filters](https://pathofdiablo.com/wiki/index.php?title=List_of_Loot_Filters) for removing all that clutter on Path of Diablo and inspiring me to create this loot filter for D2R
  - Mainly [Darkgale](https://www.twitch.tv/darkgale)'s filter called [Filtergale](https://www.reddit.com/r/pathofdiablo/comments/i9hdw7/filtergale/) ([download](https://greendu.de/s/ZbDwHekAg3rmeRB/download?path=%2F&files=item.filter)) regarding styling
- [Practical Item Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/317)


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is given), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.