// ! 1. How to compare two JSON have the same properties without order?

var obj1 = {name:"person 1", age:5};
var obj2 = {age:5, name:"person 1"};

if(Object.keys(obj1).length===Object.keys(obj2).length){
    
    console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}


// ! 2. Use the rest contries API URL and display all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function () {
var data = request.response;
var result = JSON.parse(data)
for (var i = 0; i < result.length; i++) {
console.log(result[i].flags.png);
}
};

// ! 3. Use the same rest countries and print all countries names, regions, sub region and populations

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function () {
var data1 = request1.response;
var result1 = JSON.parse(data1);
for(var i=0; i<result1.length; i++) {
console.log("Country Name:"+" "+result1[i].name.common,"Region:"+" "+result1[i].region,"Sub region:"+" "+result1[i].subregion,"Population:"+" "+result1[i].population);
}
}
