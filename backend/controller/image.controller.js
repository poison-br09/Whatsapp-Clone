import grid from "gridfs-stream";

import mongoose from "mongoose";

const url = "http://localhost:8000";

const conn = mongoose.connection;

let gfs, gridFsBucket;

conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
}); 

export const uploadFile = async (request, response) => {
  if (!request.file) {
    return response.status(400).json({ message: "No file was uploaded" });
  }
  const imageUrl = `${url}/file/${request.file.filename}`;

  return response.status(200).json(imageUrl);
};

export const getImage = async (request, response) => {
  try {
    const file = gfs.files.findOne({ filename: request.params.filename });

    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
