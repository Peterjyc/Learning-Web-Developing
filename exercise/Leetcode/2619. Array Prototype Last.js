Array.prototype.last = function() {
    const last = this[this.length-1]
    console.log(last)
    if (this.length == 0) return -1
    if(last === undefined) {
        return -1
    } else return last
};
