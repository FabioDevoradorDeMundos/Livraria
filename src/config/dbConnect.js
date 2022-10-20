import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Fabio:va1sefude@cluster0.s20xqwp.mongodb.net/Cluster0");

let db = mongoose.connection;

export default db