import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.yahcg.mongodb.net:27017,cluster0-shard-00-01.yahcg.mongodb.net:27017,cluster0-shard-00-02.yahcg.mongodb.net:27017/WHATSAPPCLONE?ssl=true&replicaSet=atlas-icjtd6-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database conected Succesfully");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default Connection;
