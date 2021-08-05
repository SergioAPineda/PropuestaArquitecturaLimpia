const character = require('../../domain/Characters.js')

module.exports = async function createCharacter(repositoryCharacterDb, characterData){
    const user = character(characterData)
    await repositoryCharacterDb.insert(user)
}