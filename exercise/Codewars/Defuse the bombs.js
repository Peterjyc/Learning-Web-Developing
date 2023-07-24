// Defuse all of the Bombs!
//1
Bomb.diffuse(Bomb.key)
//2
Bomb.diffuse(Bomb.key)
Bomb.diffuse(Bomb.key)
Bomb.diffuse(Bomb.key)
Bomb.diffuse(Bomb.key)
Bomb.diffuse(Bomb.key)
//3
Bomb.diffuse(global.BombKey)
//4
var diffuseTheBomb = () => true
Bomb.diffuse()
//5
Bomb.diffuse(3.14159)
//6
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4))
//7
Bomb.diffuse(Object.freeze({key : 43}))
//8
Bomb.diffuse(obj = {
  i : 0,
  valueOf: function () {
    let res = this.i > 0 ? 11 : 9
    this.i++;
    return res
  }
})
//9
Math.random = function() {
  return {
    valueOf: () => {
      if (!this.used) {
        this.used = true
        return 0.5
      }
      return 1
    }
  }
}
Bomb.diffuse(42)

//10
Array.prototype.valueOf = function() {
  return this.reduce((sum, cur) => sum + cur)
}
Bomb.diffuse(new Buffer("yes").toString("base64"))
