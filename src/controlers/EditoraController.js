import editora from "../models/Editora.js";

class EditoraController {
    static listarEditora = (req,res) => {
        editora.find((err,editora) => {
            res.status(200).json(editora)

            if(err){
                res.status(500).send({message : err.message})
            }
        })
    }

    static listarEditoraPorId = (req,res) => {
        const id = req.params.id;

        editora.findById(id, (err,editora) => {
            if(err){
                res.status(400).send({message: err.message + ' - Id da editora não localizada'})
            } else {
                res.status(200).send(editora);
            }

        })   

    }

    static cadastrarEditora = (req,res) => {
        let editor  = new editora(req.body);
        editor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar editora.`})
            } else {
                res.status(200).send(editor.toJSON())
            }
        })

    }

    static atualizarEditora = (req,res) => {
        const id = req.params.id;

        editora.findByIdAndUpdate(id,{$set: req.body},(err) => {
            if(!err){
                res.status(200).send({message: 'editora atualizada com sucesso'})
            } else {
                res.status(500).send({message: err.message + 'Não foi possível atualizar a editora'})
            }
        })

    }

    static excluirEditora = (req,res) => {
    const id = req.params.id;    

    editora.findByIdAndDelete(id,(err) => {
        if(!err){
            res.status(200).send({message: 'editora excluída'})
        } else {
            res.status(500).send({message: err.message})
        }

    })
    
    }
}

export default EditoraController