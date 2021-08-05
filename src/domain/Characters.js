module.exports = function makeCharacterFeature ({
      name,
      race,
      level
    } = {}) {
      if (!name) {
        throw new Error('User must have a name.')
      }
      if (name.length < 2) {
        throw new Error("User's name must be longer than 2 characters.")
      }
      if (!race) {
        throw new Error('User must have a lastname.')
      }
      if (race.length < 2) {
        throw new Error("User's lastname must be longer than 2 characters.")
      }
      if (!level) {
        throw new Error('User must have a DNI.')
      }
      if (level.length < 0) {
        throw new Error("User's DNI must be longer than 2 characters.")
      }


      return Object.freeze({
        name,
        race,
        level
      })

  
    }

