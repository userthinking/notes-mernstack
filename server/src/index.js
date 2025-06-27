import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/connectDB.js"

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`server connected to PORT ${process.env.PORT}`);
})

connectDB()

