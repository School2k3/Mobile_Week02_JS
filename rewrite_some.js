Array.prototype.somefn = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

var arr = [1, 2, 3, 4, 5];
var result = arr.somefn(function(num) {
    return num > 5;
});

console.log(result);