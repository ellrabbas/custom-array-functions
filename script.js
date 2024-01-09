// forEach
// Array.prototype.customForEach = function (callbackFn) {
//     for (let i = 0; i < this.length; i++) {
//         callbackFn(this[i], i, this);
//     }
// }

// [1, 2, 3, 'hello', 5, 9, 8, true].customForEach((val, index, arr) => {
//     console.log(val, index, arr);
// });


// Mən sizin yazdığınız forEach kodunu yenidən yazdım, amma davamlı nədənsə error alıram

// include
Array.prototype.customInclude = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            return true;
        }
    }

    return false;
}

const resultInc = [1, 2, 3, 'hello', 5, 9, 8, true].customInclude((val, i, arr) => val === 5);
console.log(resultInc);

// indexOF
Array.prototype.customIndexOf = function (callbackFn, startIndex) {
    for (let i = startIndex; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

const resultIndex = [1, 2, 3, 'hello', 5, 9, 8, true, 'hello'].customIndexOf((val, index, array) => val === 'hello', 4);
console.log(resultIndex);

// reverse
Array.prototype.customReverseMethod = function (callbackFn) {
    for (let i = this.length - 1; i > 0; i--) {
        if (callbackFn(this[i], i, this)) {
            return true;
        }
    }

    return false;
}

const emptyArr = [];
[12, 19, 22, 'hello', false, 75].customReverseMethod((value, index, arr) => {
    emptyArr.push(value);
    return false;
});

console.log(emptyArr);

// join
Array.prototype.customJoinMethod = function (callbackFn) {
    let emptyStr = "";

    for (let i = 0; i < this.length; i++) {
        emptyStr += callbackFn(this[i], i, this);
        if (i < this.length - 1) {
            emptyStr += ",";
        }
    }
    return emptyStr;
}

const resJoinMethod = [1, 2, 3, 85, true, "no"].customJoinMethod((value, index, array) => value);
console.log(resJoinMethod);

// find
Array.prototype.customFindMethod = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

const resFindMethod = [1, 6, 9, 57, 'hello', 'no', false].customFindMethod((value, index, array) => value > 52);
console.log(resFindMethod);

// findIndex
Array.prototype.customFindIndex = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

const resFindIndexMethod = [5, 6, 87, 8, 10, -1].customFindIndex((value, index, array) => value == 6);
console.log(resFindIndexMethod);

// filter
Array.prototype.customFilter = function (callbackFn) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

const resFilterMehthod = [8, 52, 63, 67, -1].customFilter((value, index, array) => value > 65);
console.log(resFilterMehthod);

// every
Array.prototype.customEveryMethod = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i], i, this)) {
            return false;
        }
    }
    return true;
}
const restEveryMethod = [95, 85, 3, 45, 7].customEveryMethod((value, index, array) => value > 3);
console.log(restEveryMethod);


// some
Array.prototype.customSomeMethod = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

const restSomeMethod = [87, 54, 65, true].customSomeMethod((value, index, array) => value > 78);
console.log(restSomeMethod);

//

// reduce
// Bunu edə bilmədim

