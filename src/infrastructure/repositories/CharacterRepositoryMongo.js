const character = require("../database/models/CharacterSchema");

module.exports = function makeCharacterDb() {
  return Object.freeze({
    insert
  })

  async function insert (characterData) {
    await character.create(characterData);
  }
};
 