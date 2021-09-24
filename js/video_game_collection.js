/**
 * This JavaScript file will consist of my entire video game collection.
 */

const VIDEO_GAMES = [
    {
        "id": 1,
        "name": "Garry's Mod",
        "purchase_price": "9.99",
        "purchase_date": new Date(2013, 8, 29),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 2,
        "name": "Dungeon Siege Collection",
        "purchase_price": "4.99",
        "purchase_date": new Date(2013, 8, 29),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 3,
        "name": "Torchlight 2",
        "purchase_price": "19.99",
        "purchase_date": new Date(2013, 10, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 4,
        "name": "The Secret World",
        "purchase_price": "14.99",
        "purchase_date": new Date(2013, 10, 30),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 5,
        "name": "Left 4 Dead Bundle",
        "purchase_price": "7.49",
        "purchase_date": new Date(2013, 10, 30),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 6,
        "name": "Fallout New Vegas Ultimate ROW",
        "purchase_price": "4.99",
        "purchase_date": new Date(2013, 10, 30),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 7,
        "name": "Killing Floor Bundle - June 2013",
        "purchase_price": "12.49",
        "purchase_date": new Date(2013, 10, 30),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 8,
        "name": "Grand Theft Auto IV: Complete Edition",
        "purchase_price": "7.49",
        "purchase_date": new Date(2013, 11, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 9,
        "name": "Counter-Strike: Global Offensive",
        "purchase_price": "14.99",
        "purchase_date": new Date(2013, 11, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 10,
        "name": "Serious Sam BFE",
        "purchase_price": "5.99",
        "purchase_date": new Date(2013, 11, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 11,
        "name": "Terraria",
        "purchase_price": "4.99",
        "purchase_date": new Date(2013, 11, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 12,
        "name": "Rush",
        "purchase_price": "0.49",
        "purchase_date": new Date(2013, 20, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 13,
        "name": "Critical Mass",
        "purchase_price": "0.49",
        "purchase_date": new Date(2013, 20, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 14,
        "name": "Chivalry: Medieval Warfare",
        "purchase_price": "8.49",
        "purchase_date": new Date(2013, 23, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 15,
        "name": "Battlefield Bad Company 2 Standard Edition",
        "purchase_price": "9.99",
        "purchase_date": new Date(2013, 23, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 16,
        "name": "E.Y.E.: Divine Cybermancy",
        "purchase_price": "2.49",
        "purchase_date": new Date(2013, 23, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 17,
        "name": "The Witcher 2",
        "purchase_price": "4.99",
        "purchase_date": new Date(2013, 23, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 18,
        "name": "The Witcher: Enhanced Edition",
        "purchase_price": "2.49",
        "purchase_date": new Date(2013, 23, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 19,
        "name": "Borderlands 2 Game of the Year",
        "purchase_price": "14.99",
        "purchase_date": new Date(2013, 23, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 20,
        "name": "Elder Scrolls V: Skyrim Legendary",
        "purchase_price": "20.39",
        "purchase_date": new Date(2013, 26, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 21,
        "name": "Starbound",
        "purchase_price": "14.39",
        "purchase_date": new Date(2014, 12, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 22,
        "name": "Grim Dawn",
        "purchase_price": "20.99",
        "purchase_date": new Date(2014, 11, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 23,
        "name": "Rekoil Steam",
        "purchase_price": "2.99",
        "purchase_date": new Date(2014, 22, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 24,
        "name": "Bioshock Infinite (WW)",
        "purchase_price": "7.49",
        "purchase_date": new Date(2014, 22, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 25,
        "name": "Titan Quest Gold",
        "purchase_price": "4.99",
        "purchase_date": new Date(2014, 22, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 26,
        "name": "Geneforge Saga",
        "purchase_price": "3.99",
        "purchase_date": new Date(2014, 22, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 27,
        "name": "Just Cause 2",
        "purchase_price": "3.74",
        "purchase_date": new Date(2014, 29, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 28,
        "name": "God Mode Pre-Purchase (ROW)",
        "purchase_price": "1.99",
        "purchase_date": new Date(2014, 29, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 29,
        "name": "Dark Souls",
        "purchase_price": "19.99",
        "purchase_date": new Date(2014, 29, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 30,
        "name": "Two Worlds - Epic Edition",
        "purchase_price": "1.99",
        "purchase_date": new Date(2014, 21, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 31,
        "name": "Portal 2",
        "purchase_price": "4.99",
        "purchase_date": new Date(2014, 24, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 32,
        "name": "Sacred Gold",
        "purchase_price": "1.49",
        "purchase_date": new Date(2014, 19, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 33,
        "name": "ORION: Prelude",
        "purchase_price": "0.99",
        "purchase_date": new Date(2014, 4, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 34,
        "name": "Shadowgrounds Survivor",
        "purchase_price": "0.00",
        "purchase_date": new Date(2014, 31, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 35,
        "name": "Shadowgrounds",
        "purchase_price": "1.29",
        "purchase_date": new Date(2014, 31, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 36,
        "name": "Kingdoms of Amalur: Reckoning - Complete Pack",
        "purchase_price": "9.99",
        "purchase_date": new Date(2014, 14, 9),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 37,
        "name": "Castle Crashers",
        "purchase_price": "1.49",
        "purchase_date": new Date(2014, 21, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 38,
        "name": "Super Meat Boy",
        "purchase_price": "0.74",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 39,
        "name": "Halo: Spartan Assault",
        "purchase_price": "1.49",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 40,
        "name": "How to Survive - Storm Warning Edition",
        "purchase_price": "3.99",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 41,
        "name": "Dungeon Defenders Collection (Summer - Winter 2012)",
        "purchase_price": "4.99",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 42,
        "name": "Star Wars: Knights of the Old Republic II",
        "purchase_price": "3.39",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 43,
        "name": "Star Wars: KOTOR",
        "purchase_price": "3.39",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 44,
        "name": "Hero Siege",
        "purchase_price": "2.39",
        "purchase_date": new Date(2014, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 45,
        "name": "Minimum",
        "purchase_price": "4.99",
        "purchase_date": new Date(2014, 28, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 46,
        "name": "Euro Truck Simulator",
        "purchase_price": "1.79",
        "purchase_date": new Date(2014, 29, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 47,
        "name": "Binding of Isaac Bundle",
        "purchase_price": "0.66",
        "purchase_date": new Date(2015, 1, 1),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 48,
        "name": "Quest of Dungeons",
        "purchase_price": "1.99",
        "purchase_date": new Date(2015, 1, 1),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 49,
        "name": "Beyond Divinity",
        "purchase_price": "1.19",
        "purchase_date": new Date(2015, 1, 1),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 50,
        "name": "Divine Divinity",
        "purchase_price": "1.19",
        "purchase_date": new Date(2015, 1, 1),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 51,
        "name": "PAYDAY 2",
        "purchase_price": "7.49",
        "purchase_date": new Date(2015, 1, 1),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 52,
        "name": "Deus Ex: Game of the Year Edition",
        "purchase_price": "1.39",
        "purchase_date": new Date(2015, 5, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 53,
        "name": "Sins of a Dark Age - Early Access",
        "purchase_price": "0.99",
        "purchase_date": new Date(2015, 13, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 54,
        "name": "EvilQuest",
        "purchase_price": "0.99",
        "purchase_date": new Date(2015, 23, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 55,
        "name": "Sniper Elite: Nazi Zombie Army 2",
        "purchase_price": "3.74",
        "purchase_date": new Date(2015, 12, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 56,
        "name": "Waveform",
        "purchase_price": "0.19",
        "purchase_date": new Date(2015, 27, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 57,
        "name": "Borderless Gaming",
        "purchase_price": "3.39",
        "purchase_date": new Date(2015, 23, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 58,
        "name": "Game Dev Tycoon",
        "purchase_price": "9.99",
        "purchase_date": new Date(2015, 23, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 59,
        "name": "Town of Salem",
        "purchase_price": "4.99",
        "purchase_date": new Date(2015, 23, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 60,
        "name": "Blockstorm",
        "purchase_price": "3.49",
        "purchase_date": new Date(2015, 25, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 61,
        "name": "GunsNZombies",
        "purchase_price": "0.79",
        "purchase_date": new Date(2015, 27, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 62,
        "name": "Controller Companion",
        "purchase_price": "2.99",
        "purchase_date": new Date(2015, 27, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 63,
        "name": "Enclave",
        "purchase_price": "2.99",
        "purchase_date": new Date(2015, 28, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 64,
        "name": "Two Worlds II",
        "purchase_price": "2.79",
        "purchase_date": new Date(2015, 28, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 65,
        "name": "Orbital Gear",
        "purchase_price": "0.99",
        "purchase_date": new Date(2015, 28, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 66,
        "name": "Dungeon Defenders II",
        "purchase_price": "14.99",
        "purchase_date": new Date(2015, 28, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 67,
        "name": "Fallout 4",
        "purchase_price": "59.99",
        "purchase_date": new Date(2015, 14, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 68,
        "name": "Beep",
        "purchase_price": "0.74",
        "purchase_date": new Date(2015, 16, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 69,
        "name": "Out There Somewhere",
        "purchase_price": "0.00",
        "purchase_date": new Date(2015, 16, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 70,
        "name": "Polarity",
        "purchase_price": "0.00",
        "purchase_date": new Date(2015, 16, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 71,
        "name": "Camera Obscura",
        "purchase_price": "0.00",
        "purchase_date": new Date(2015, 16, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 72,
        "name": "Endless Legend",
        "purchase_price": "20.39",
        "purchase_date": new Date(2015, 26, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 73,
        "name": "Borderlands: The Pre-Sequel",
        "purchase_price": "20.99",
        "purchase_date": new Date(2015, 30, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 74,
        "name": "Dungeon of the Endless - Crystal Edition",
        "purchase_price": "6.45",
        "purchase_date": new Date(2015, 30, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 75,
        "name": "OH! RPG!",
        "purchase_price": "1.79",
        "purchase_date": new Date(2015, 11, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 76,
        "name": "Dying Light",
        "purchase_price": "20.39",
        "purchase_date": new Date(2015, 26, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 77,
        "name": "Call of Duty: Black Ops III",
        "purchase_price": "39.59",
        "purchase_date": new Date(2016, 27, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 78,
        "name": "Call of Duty: Black Ops III",
        "purchase_price": "39.59",
        "purchase_date": new Date(2016, 27, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 79,
        "name": "Outland",
        "purchase_price": "0.99",
        "purchase_date": new Date(2016, 15, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 80,
        "name": "Titan Souls",
        "purchase_price": "3.74",
        "purchase_date": new Date(2016, 15, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 81,
        "name": "Starpoint Gemini 2",
        "purchase_price": "8.40",
        "purchase_date": new Date(2016, 2, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 82,
        "name": "Divinity: Original Sin Enhanced Edition",
        "purchase_price": "19.99",
        "purchase_date": new Date(2016, 2, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 83,
        "name": "Baldur's Gate: Enhanced Edition",
        "purchase_price": "19.99",
        "purchase_date": new Date(2016, 2, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 84,
        "name": "Space Engineers",
        "purchase_price": "7.49",
        "purchase_date": new Date(2016, 8, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 85,
        "name": "Darksiders",
        "purchase_price": "4.99",
        "purchase_date": new Date(2016, 12, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 86,
        "name": "Darksiders II Deathinitive Edition",
        "purchase_price": "0.00",
        "purchase_date": new Date(2016, 12, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 87,
        "name": "Darksiders Warmastered Edition",
        "purchase_price": "0.00",
        "purchase_date": new Date(2016, 12, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 88,
        "name": "Nimble Writer",
        "purchase_price": "9.99",
        "purchase_date": new Date(2016, 12, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 89,
        "name": "Portal Knights Early Access",
        "purchase_price": "11.99",
        "purchase_date": new Date(2016, 4, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 90,
        "name": "The Witcher 3: Wild Hunt",
        "purchase_price": "24.99",
        "purchase_date": new Date(2016, 31, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 91,
        "name": "Lords of the Fallen Game of the Year Edition",
        "purchase_price": "5.99",
        "purchase_date": new Date(2016, 31, 10),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 92,
        "name": "Bound By Flame",
        "purchase_price": "5.99",
        "purchase_date": new Date(2016, 31, 10),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 93,
        "name": "7 Days to Die",
        "purchase_price": "9.99",
        "purchase_date": new Date(2016, 29, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 94,
        "name": "Toukiden: Kiwami (EN)",
        "purchase_price": "29.99",
        "purchase_date": new Date(2016, 22, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 95,
        "name": "ClusterTruck",
        "purchase_price": "8.99",
        "purchase_date": new Date(2016, 22, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 96,
        "name": "Final Fantasy XIV Online",
        "purchase_price": "19.99",
        "purchase_date": new Date(2016, 22, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 97,
        "name": "Undertale",
        "purchase_price": "4.99",
        "purchase_date": new Date(2016, 25, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 98,
        "name": "ONE PIECE PIRATE WARRIORS 3 Gold Edition",
        "purchase_price": "12.99",
        "purchase_date": new Date(2016, 27, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 99,
        "name": "DRAGON BALL XENOVERSE",
        "purchase_price": "9.99",
        "purchase_date": new Date(2016, 27, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 100,
        "name": "Wallpaper Engine",
        "purchase_price": "3.99",
        "purchase_date": new Date(2017, 11, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 101,
        "name": "SENRAN KAGURA SHINOVI VERSUS",
        "purchase_price": "19.49",
        "purchase_date": new Date(2017, 22, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 102,
        "name": "Shadow Warrior",
        "purchase_price": "3.59",
        "purchase_date": new Date(2017, 22, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 103,
        "name": "Shadow Warrior 2",
        "purchase_price": "21.59",
        "purchase_date": new Date(2017, 22, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 104,
        "name": "Empyrion - Galactic Survival (64 bit)",
        "purchase_price": "9.99",
        "purchase_date": new Date(2017, 25, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 105,
        "name": "LawBreakers - Deadzo Deluxe Edition",
        "purchase_price": "39.99",
        "purchase_date": new Date(2017, 7, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 106,
        "name": "Major/Minor - Complete Edition",
        "purchase_price": "7.99",
        "purchase_date": new Date(2017, 16, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 107,
        "name": "Vikings - Wolves of Midgard",
        "purchase_price": "13.99",
        "purchase_date": new Date(2017, 1, 10),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 108,
        "name": "Warhammer: Vermintide 2",
        "purchase_price": "29.99",
        "purchase_date": new Date(2018, 9, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 109,
        "name": "PixArk",
        "purchase_price": "19.99",
        "purchase_date": new Date(2018, 2, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 110,
        "name": "Tom Clancy's Ghost Recon Wildlands",
        "purchase_price": "19.79",
        "purchase_date": new Date(2018, 15, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 111,
        "name": "Dragon Knight",
        "purchase_price": "1.99",
        "purchase_date": new Date(2018, 15, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 112,
        "name": "Monster Hunter: World",
        "purchase_price": "56.39",
        "purchase_date": new Date(2018, 7, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 113,
        "name": "Car Mechanic Simulator 2015",
        "purchase_price": "1.99",
        "purchase_date": new Date(2018, 14, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 114,
        "name": "FINAL FANTASY XV WINDOWS EDITION",
        "purchase_price": "24.99",
        "purchase_date": new Date(2018, 23, 9),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 115,
        "name": "Divinity: Original Sin 2",
        "purchase_price": "30.14",
        "purchase_date": new Date(2018, 9, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 116,
        "name": "Far Cry Primal Standard Edition (WW)",
        "purchase_price": "12.49",
        "purchase_date": new Date(2019, 21, 1),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 117,
        "name": "Risk of Rain 2",
        "purchase_price": "19.99",
        "purchase_date": new Date(2019, 14, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 118,
        "name": "Project Zomboid",
        "purchase_price": "14.99",
        "purchase_date": new Date(2019, 21, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 119,
        "name": "Deathgarden: BLOODHARVEST",
        "purchase_price": "9.99",
        "purchase_date": new Date(2019, 4, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 120,
        "name": "South Park The Fractured But Whole",
        "purchase_price": "8.99",
        "purchase_date": new Date(2019, 29, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 121,
        "name": "Pagan: Absent Gods",
        "purchase_price": "8.99",
        "purchase_date": new Date(2019, 29, 6),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 122,
        "name": "Eastshade",
        "purchase_price": "14.99",
        "purchase_date": new Date(2019, 4, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 123,
        "name": "Tom Clancy's Rainbow Six Siege",
        "purchase_price": "19.99",
        "purchase_date": new Date(2019, 15, 9),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 124,
        "name": "Tom Clancy's Rainbow Six Siege",
        "purchase_price": "19.99",
        "purchase_date": new Date(2019, 15, 9),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 125,
        "name": "Destiny 2: Forsaken",
        "purchase_price": "24.99",
        "purchase_date": new Date(2019, 3, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 126,
        "name": "Destiny 2: Shadowkeep",
        "purchase_price": "20.99",
        "purchase_date": new Date(2019, 17, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 127,
        "name": "Halo: Reach",
        "purchase_price": "9.99",
        "purchase_date": new Date(2019, 7, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 128,
        "name": "Wolcen: Lords of Mayhem",
        "purchase_price": "39.99",
        "purchase_date": new Date(2020, 22, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 129,
        "name": "Injustice 2 Legendary Edition",
        "purchase_price": "17.99",
        "purchase_date": new Date(2020, 7, 3),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 130,
        "name": "Climbey",
        "purchase_price": "9.99",
        "purchase_date": new Date(2020, 8, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 131,
        "name": "Until You Fall",
        "purchase_price": "13.99",
        "purchase_date": new Date(2020, 9, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 132,
        "name": "Pavlov VR",
        "purchase_price": "24.99",
        "purchase_date": new Date(2020, 10, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 133,
        "name": "Beat Saber",
        "purchase_price": "29.99",
        "purchase_date": new Date(2020, 16, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 134,
        "name": "BONEWORKS",
        "purchase_price": "29.99",
        "purchase_date": new Date(2020, 31, 5),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 135,
        "name": "Human: Fall Flat",
        "purchase_price": "29.99",
        "purchase_date": new Date(2020, 1, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 136,
        "name": "Fall Guys",
        "purchase_price": "19.99",
        "purchase_date": new Date(2020, 16, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 137,
        "name": "ARK: Survival Evolved",
        "purchase_price": "9.99",
        "purchase_date": new Date(2020, 29, 8),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 138,
        "name": "STAR WARS Battlefront II: Celebration Edition",
        "purchase_price": "11.99",
        "purchase_date": new Date(2020, 6, 9),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 140,
        "name": "Destiny 2: Beyond Light Deluxe Edition",
        "purchase_price": "69.99",
        "purchase_date": new Date(2020, 7, 11),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 141,
        "name": "Cyberpunk 2077",
        "purchase_price": "59.99",
        "purchase_date": new Date(2020, 12, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 142,
        "name": "PC Building Simulator",
        "purchase_price": "9.99",
        "purchase_date": new Date(2020, 28, 12),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 143,
        "name": "Valheim",
        "purchase_price": "19.99",
        "purchase_date": new Date(2021, 13, 2),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 144,
        "name": "Nioh: Complete Edition / 仁王 Complete Edition",
        "purchase_price": "14.99",
        "purchase_date": new Date(2021, 24, 4),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 145,
        "name": "Warhammer 40,000: Inquisitor - Martyr Complete Collection",
        "purchase_price": "19.99",
        "purchase_date": new Date(2021, 6, 7),
        "platform": "PC",
        "source": "STEAM"
    },
    {
        "id": 146,
        "name": "Borderlands 3",
        "purchase_price": "19.79",
        "purchase_date": new Date(2021, 11, 8),
        "platform": "PC",
        "source": "STEAM"
    },
]

function Create_Data_Table_VideoGames(videoGameData, divToAppend) {
    let table = function () {
        let purchase_price_sum = 0.00;
        let table = 
            `
            <table class="table VIDEO_GAMES_TABLE">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Purchase Price</th>
                    <th scope="col">Purchase Date</th>
                </thead>
                <tbody>
            `;

        for (let i = 0; i < videoGameData.length; i++) {
            purchase_price_sum += Number(videoGameData[i].purchase_price);
            let month = videoGameData[i].purchase_date.getUTCMonth() + 1;
            let day = videoGameData[i].purchase_date.getUTCDate();
            let year = videoGameData[i].purchase_date.getUTCFullYear();
            let date = year + "/" + month + "/" + day;

            let tr =
                `
                <tr>
                    <th scope="row">` + videoGameData[i].id + `</th>
                    <td>` + videoGameData[i].name +`</td>
                    <td>$` + videoGameData[i].purchase_price +`</td>
                    <td>` + date +`</td>
                </tr>
                `
            table += tr;
        }

        table += "</tbody>";
        table += 
            `
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <th>$` + purchase_price_sum.toFixed(2) + `</th>
                    <td></td>
                </tr>
            </tfoot>
            `
        table += "</table>";

        return table;
    }

    divToAppend.append(table);

    // Turn table into a DataTable
    $(document).ready(function () {
        $(".VIDEO_GAMES_TABLE").DataTable();
    });
}