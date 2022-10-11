import * as mongoose from "mongoose";

import { ILibrary } from "../../interfaces";

const LibrarySchema: mongoose.Schema = new mongoose.Schema<ILibrary>({
    id: { type: String },

    user_id: { type: String },

    book_id: { type: String },

});


export { LibrarySchema };

