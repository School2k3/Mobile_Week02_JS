Array.prototype.mapfn = function(callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
};

var arr = [1, 3, 5, 11, 20]
var newArr = arr.mapfn((callback) => {
    return callback ** 2;
});

console.log(newArr);