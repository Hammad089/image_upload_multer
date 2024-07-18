import mongoose from "mongoose";

const DatabaseConnection = () => {
    try {
        const dbConnect = mongoose.connect(process.env.DB_URL);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Failed to connect database',error);
    }
}
export default DatabaseConnection;