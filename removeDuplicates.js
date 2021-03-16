let arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = (array)=>{
    return [...new Set(array)]
}
console.log(uniqueArray(arr));