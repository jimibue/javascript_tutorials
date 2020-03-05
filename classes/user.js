//@ts-check
class User1 {
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
    // return x
    return x.join('')
  }
  /**
   * @param {string} str
   */
  takesString(str) {
    return str
  }
}
const x = new User1('adf')
x.takesString('yo')
x.takesString

