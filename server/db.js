import mongoose from "mongoose";

export default async function conectTDb(){
mongoose.connect("mongodb+srv://Admin:Admin@cluster0.aaoxt.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

return mongoose.connection
}