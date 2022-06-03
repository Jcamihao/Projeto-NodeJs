import mongoose from "mongoose"

mongoose.connect("mongodb+srv://joao:123@cluster0.kcgfsog.mongodb.net/estudos-node?")

let db = mongoose.connection

export default db