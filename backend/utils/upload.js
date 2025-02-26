import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const storage = new GridFsStorage({
  url: `mongodb+srv://${username}:${password}@wp-clone.tb1pv.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=wp-clone`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});


export default multer({ storage });
