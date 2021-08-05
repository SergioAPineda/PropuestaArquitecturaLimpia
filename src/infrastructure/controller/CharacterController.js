const makeCharacterDb = require('../repositories/CharacterRepositoryMongo')
const createCharacterUseCase = require('../../application/services/CreateCharacterService')

module.exports = function createCharacter(){
    return async (req,res) => {
        try{
            const characterData = req.body
            await createCharacterUseCase(makeCharacterDb(), characterData)   
            res.send('Ok')
        }catch(error){
            res.send(error)
        }
    }
}

