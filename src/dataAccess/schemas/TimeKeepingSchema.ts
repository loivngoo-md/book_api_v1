import * as mongoose from "mongoose";

import { ITimeKeeping } from "../../interfaces";

const TimeKeepingSchema: mongoose.Schema = new mongoose.Schema<ITimeKeeping>({
    id: Number,

    is_ghost: Boolean,

    production: Boolean,

    value: String
});


export { TimeKeepingSchema };

