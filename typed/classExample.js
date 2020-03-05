//@ts-check
class TypedUser {
  /**
   * @param {string} nameVar
   */
  constructor(nameVar) {
    this.name = nameVar;
  }
  /**
   * @param {string} msg
   * @returns {string}
   */
  myNameThreeTimes(msg) {
    const x = [1,2,3].map((item) => {
      return `${this.name}`
    })
    return x.join('')
  }
  /**
   * @param {string} str
   * @returns {Array<string>} 
   */
  takesString(str) {
    return str.split(' ')
  }

  /**
   * @param {Array<{ name: string; age: number; }>} artists
   */
  takesMultiple(artists) {
    artists.filter(artist =>{
      return artist.age > 12 
    })
  }
}
