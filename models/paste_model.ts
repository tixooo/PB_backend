import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pasteSchema = new Schema({
    content: {type: String, required: true},
})

const Paste = mongoose.model('Paste', pasteSchema);

export default Paste