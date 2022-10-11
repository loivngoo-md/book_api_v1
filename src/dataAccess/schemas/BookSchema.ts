import * as mongoose from "mongoose";

import { IBook } from "../../interfaces";

const BookSchema: mongoose.Schema = new mongoose.Schema<IBook>({
  id: { type: Number },

  author: { type: String },

  title: { type: String },

  description: { type: String },

  type: { type: String },

  image_path: { type: String },

  count_rating: { type: Number },

  avg_rating: { type: Number },
});


export { BookSchema };

