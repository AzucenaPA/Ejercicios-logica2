let multiDimension = [1, [2, 3, [4, 5, [6]]]];
console.log(multiDimension);


console.log("hola");

var arr2;
/*
let flatMultiArray = arr1 => {
    var arr1 = multiDimension;
    let arr2;
    if (arr1 === arr2){
        return;
    }
    arr2 = arr1.flat();
    console.log(arr2);
    //flatMultiArray(arr2);
    return arr2;
    
}*/
/*
function flatMultiArray(arr1){
    console.log(arr1);
    console.log(arr2);
    if (arr1 != arr2) { 
        return;
    }  else {
    arr2 = arr1.flat();
    console.log(arr2);
    return flatMultiArray(arr2);
    }
    
}

flatMultiArray(multiDimension);*/

function flatten(arr){
    var result = [];
    arr.forEach(function(element) {
        if (!Array.isArray(element)){
            result.push(element);
        }
        else {
            result =result.concat(flatten(element));
        }
    })
    return result; 
}
console.log(flatten(multiDimension));


/*
console.log(multiDimension.length);
arr = multiDimension.flat();
console.log(arr);
arr2 = arr.flat();
console.log(arr2);
arr3 = arr2.flat();
console.log(arr3);
arr4 = arr3.flat();
console.log(arr4);
*/