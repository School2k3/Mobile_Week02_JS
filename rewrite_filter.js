Array.prototype.filterfn = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

var arr = [1, 2, 3, 5, 6, 10]
var evenArr = arr.filterfn((callback) => {
    return callback % 2 == 0;
});

console.log(evenArr)