var Array= [
    {Name: "Saka",Age:22, Gender:"male"},
    {Name: "kada",Age:16, Gender:"male"},
    {Name: "jhin",Age:18, Gender:"male"},
    {Name: "ahri",Age:17, Gender: "female"},
    {Name: "missfortune",Age:16, Gender:"female"}
]
let result= Array.filter((ev)=>ev.Age>=18 && ev.Gender=="male").map((e)=>e);
console.log(result);