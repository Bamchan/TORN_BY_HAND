Array.prototype._map = function (fn) {
    const res = [];
    for(let i = 0, len = this.length; i< len; i++) {
        res.push(fn(this[i], i))
    }
    return res;
}

let arr = [1,2,3,4,5];
const newArr = arr._map((item, i) => {
    console.log(i);
    return item * 2;
})
console.log(newArr);