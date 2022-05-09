function flattern (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++ ) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flattern(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
function flattern(arr) {
    console.log(1);
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flattern(cur) : cur) ;
    }, []);
}
function flattern(arr) {
    console.log(2);
    return arr.toString().split(',').map(i => Number(i));
}

function flattern(arr) {
    console.log(3);
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, '');
    str = '['+ str+ ']';
    return JSON.parse(str);
}


let arr = [1,2,[3,4,5,[6,7]]];
console.log(flattern(arr));