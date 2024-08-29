Array.prototype.findfn = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

var arr = [1, 3, 5, 7, 9, 11]
var result = arr.findfn((num) => {
    return num === 10;
});

console.log(result)