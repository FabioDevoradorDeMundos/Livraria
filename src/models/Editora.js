import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type:String, required:true},
    nacionalidade: {type: String, required:true}

},
{
    versionKey:false

}
)

const editora = mongoose.model("editora",editoraSchema)

export default editora
