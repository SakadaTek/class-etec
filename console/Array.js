//method-push-use-for-add-elemant-to-the-last
// let Stuname = ["Dara","Jame","Mr-beast"];
// Stuname.push("koy");
// Stuname.push("J+O");
// console.log(Stuname);

//method-table-array
// var obj=
// [
//     {id:1001,Name:"Dara",school:"RUPP"},
//     {id:1002,Name:"Sophine",school:"Setec"}
// ]
// console.table(obj);

//method-map-call-back-Function
// var obj=
// [
//     {id:1001,Name:"Dara",school:"RUPP"},
//     {id:1002,Name:"Sophine",school:"Setec"}
// ]
// var id=obj.map((e)=>e.id);
// var Name=obj.map((e)=>e.Name);
// var school=obj.map((e)=>e.school);
// console.log(id);
// console.log(Name);

var obj=
[
    {id:1001,Name:"Dara",school:"RUPP"},
    {id:1002,Name:"Sophine",school:"Setec"},
    {id:9,Name:"Yasuo",school:"Setec"},
    {id:8,Name:"amber",school:"Setec"}
]
//meth0d-map
// var resultmap=obj.map((e)=>e);
//method-filter-reprecat-function
//var resultName= obj.filter((e)=>e);
// var resultName= obj.filter((e)=>e.id <=1001).map((e)=>e);
// console.log(resultName);
// console.log(resultmap);

//method-pop-for-remove-last-elemant
obj.pop();
console.log(obj);



