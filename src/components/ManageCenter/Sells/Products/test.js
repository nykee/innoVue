function PromiseTimeOut(ms,value){
return new Promise( (resolve)=>{
setTimeout( (value)=>{
resolve(value)
}, ms)
})
}
//useage
PromiseTimeOut(3000,"hello").then( (value)=>{
console.log(value)
})