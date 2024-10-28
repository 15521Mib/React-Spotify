import mongoose from "mongoose";

export default async function conectDb() {
    mongoose.connect("mongodb+srv://adm:adm@cluster0.8qqds.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}