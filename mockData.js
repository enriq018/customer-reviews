const faker = require('faker');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const mockGameData = [
  {
    title: "PLAYERUNKNOWN'S BATTLEGROUNDS",
    id: 1
  },
  {
    title: "Dota 2",
    id: 2
  },
  {
    title: "Counter-Strike: Global Offensive",
    id: 3
  },
  {
    title: "Tom Clancy's Rainbow Six Siege",
    id: 4
  },
  {
    title: "PAYDAY 2",
    id: 5
  },
  {
    title: "Warframe",
    id: 6
  },
  {
    title: "ARK: Survival Evolved",
    id: 7
  },
  {
    title: "Team Fortress 2",
    id: 8
  },
  {
    title: "Grand Theft Auto V",
    id: 9
  },
  {
    title: "Stellaris",
    id: 10
  },
  {
    title: "Rocket League",
    id: 11
  },
  {
    title: "Sid Meier's Civilization VI",
    id: 12
  },
  {
    title: "Sid Meier's Civilization V",
    id: 13
  },
  {
    title: "Garry's Mod",
    id: 14
  },
  {
    title: "Kingdom Come: Deliverance",
    id: 15
  },
  {
    title: "Rust",
    id: 16
  },
  {
    title: "Football Manager 2018",
    id: 17
  },
  {
    title: "Fallout 4",
    id: 18
  },
  {
    title: "Slay the Spire",
    id: 19
  },
  {
    title: "Terraria",
    id: 20
  },
  {
    title: "Black Desert Online",
    id: 21
  },
  {
    title: "Arma 3",
    id: 22
  },
  {
    title: "Paladins",
    id: 23
  },
  {
    title: "DARK SOULS™ III",
    id: 24
  },
  {
    title: "Dead by Daylight",
    id: 25
  },
  {
    title: "The Elder Scrolls V: Skyrim",
    id: 26
  },
  {
    title: "Yu-Gi-Oh! Duel Links",
    id: 27
  },
  {
    title: "The Elder Scrolls V: Skyrim Special Edition",
    id: 28
  },
  {
    title: "The Witcher 3: Wild Hunt",
    id: 29
  },
  {
    title: "Subnautica",
    id: 30
  },
  {
    title: "Stardew Valley",
    id: 31
  },
  {
    title: "Hearts of Iron IV",
    id: 32
  },
  {
    title: "SMITE",
    id: 33
  },
  {
    title: "Left 4 Dead 2",
    id: 34
  },
  {
    title: "War Thunder",
    id: 35
  },
  {
    title: "Unturned",
    id: 36
  },
  {
    title: "FINAL FANTASY XIV Online",
    id: 37
  },
  {
    title: "7 Days to Die",
    id: 38
  },
  {
    title: "Total War: WARHAMMER II",
    id: 39
  },
  {
    title: "The Elder Scrolls Online: Tamriel Unlimited",
    id: 40
  },
  {
    title: "Age of Empires II: HD Edition",
    id: 41
  },
  {
    title: "Divinity: Original Sin 2",
    id: 42
  },
  {
    title: "Counter-Strike",
    id: 43
  },
  {
    title: "Path of Exile",
    id: 44
  },
  {
    title: "Europa Universalis IV",
    id: 45
  },
  {
    title: "VRChat",
    id: 46
  },
  {
    title: "Borderlands 2",
    id: 47
  },
  {
    title: "Football Manager 2017",
    id: 48
  },
  {
    title: "Sword Art Online: Fatal Bullet",
    id: 49
  },
  {
    title: "Factorio",
    id: 50
  },
  {
    title: "Cities: Skylines",
    id: 51
  },
  {
    title: "Source SDK Base 2013 Multiplayer",
    id: 52
  },
  {
    title: "Hunt: Showdown",
    id: 53
  },
  {
    title: "Brawlhalla",
    id: 54
  },
  {
    title: "Euro Truck Simulator 2",
    id: 55
  },
  {
    title: "Black Squad",
    id: 56
  },
  {
    title: "Wallpaper Engine",
    id: 57
  },
  {
    title: "Clicker Heroes",
    id: 58
  },
  {
    title: "RimWorld",
    id: 59
  },
  {
    title: "Warhammer: Vermintide 2 Closed Test",
    id: 60
  },
  {
    title: "NBA 2K18",
    id: 61
  },
  {
    title: "Don't Starve Together",
    id: 62
  },
  {
    title: "Mount & Blade: Warband",
    id: 63
  },
  {
    title: "The Binding of Isaac: Rebirth",
    id: 64
  },
  {
    title: "Elite Dangerous",
    id: 65
  },
  {
    title: "Tom Clancy's The Division",
    id: 66
  },
  {
    title: "Total War: ROME II - Emperor Edition",
    id: 67
  },
  {
    title: "METAL GEAR SURVIVE",
    id: 68
  },
  {
    title: "Farming Simulator 17",
    id: 69
  },
  {
    title: "Call of Duty: WWII - Multiplayer",
    id: 70
  },
  {
    title: "XCOM 2",
    id: 71
  },
  {
    title: "Kerbal Space Program",
    id: 72
  },
  {
    title: "Fallout: New Vegas",
    id: 73
  },
  {
    title: "DRAGON BALL FighterZ",
    id: 74
  },
  {
    title: "FINAL FANTASY XV WINDOWS EDITION PLAYABLE DEMO",
    id: 75
  },
  {
    title: "Crusader Kings II",
    id: 76
  },
  {
    title: "Geometry Dash",
    id: 77
  },
  {
    title: "Idle Champions of the Forgotten Realms",
    id: 78
  },
  {
    title: "EVGA Precision XOC",
    id: 79
  },
  {
    title: "Dying Light",
    id: 80
  },
  {
    title: "The Sims(TM) 3",
    id: 81
  },
  {
    title: "H1Z1",
    id: 82
  },
  {
    title: "The Forest",
    id: 83
  },
  {
    title: "Starbound",
    id: 84
  },
  {
    title: "SoulWorker",
    id: 85
  },
  {
    title: "For Honor",
    id: 86
  },
  {
    title: "Space Engineers",
    id: 87
  },
  {
    title: "Killing Floor 2",
    id: 88
  },
  {
    title: "Battlerite",
    id: 89
  },
  {
    title: "DRAGON BALL XENOVERSE 2",
    id: 90
  },
  {
    title: "Trove",
    id: 91
  },
  {
    title: "Counter-Strike: Source",
    id: 92
  },
  {
    title: "They Are Billions",
    id: 93
  },
  {
    title: "American Truck Simulator",
    id: 94
  },
  {
    title: "Assassin's Creed Origins",
    id: 95
  },
  {
    title: "Warface",
    id: 96
  },
  {
    title: "Tom Clancy's Rainbow Six Siege - Technical Test Server",
    id: 97
  },
  {
    title: "Tom Clancy's Ghost Recon® Wildlands",
    id: 98
  },
  {
    title: "EVE Online",
    id: 99
  },
  {
    title: "Company of Heroes 2",
    id: 100
  }
];

/* True or false generator */
const addEarlyAccess = () => Math.random() >= 0.5;

/* Add early access property to mock data objects */
mockGameData.forEach((el) => { el.earlyAccess = addEarlyAccess(); });

const mockUserData = [];

for (let i = 0; i < 21; i += 1) {
  const user = {};
  user.userName = faker.name.findName();
  user.userTotalProducts = getRandomInt(1, 50);
  user.userTotalReviews = getRandomInt(1, 30);
  mockUserData.push(user);
}

const mockReviewData = [];

for (let i = 0; i < 500; i += 1) {
  const review = {};
  review.gameId = getRandomInt(1, 101);
  review.userId = getRandomInt(1, 21);
  review.reviewPost = 'THIS IS JUST A PLACEHOLDER FOR NOW';
  review.reviewTotalHelpful = getRandomInt(1, 400);
  review.hoursOnRecord = getRandomInt(1, 500);
  mockReviewData.push(review);
}

const mockData = {
  games: mockGameData,
  users: mockUserData,
  reviews: mockReviewData,
};

module.exports = mockData;
