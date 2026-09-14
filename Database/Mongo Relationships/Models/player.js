const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const playerSchema = new Schema({
  username: String,
  favoriteGames: [{ _id: false, title: String, platform: String }],
});

const Player = mongoose.model("Player", playerSchema);

const addPlayer = async () => {
  let player1 = new Player({
    username: "Nathan",
    favoriteGames: [
      {
        title: "Fortnite",
        platform: "Xbox",
      },
      {
        title: "Minecraft",
        platform: "PC",
      },
    ],
  });
  player1.favoriteGames.push({
    title: "Roblox",
    platform: "Mobile",
  });
  let result = await player1.save();
  console.log(result);
};

addPlayer();
