import * as mongoose from "mongoose";

import { IComment } from "../../interfaces";

const CommentSchema: mongoose.Schema = new mongoose.Schema<IComment>({
    id: { type: String },

    user_id: { type: String },

    book_id: {type: String},

    content: { type: String },

    updated_at: { type: Date }

});


export { CommentSchema };

