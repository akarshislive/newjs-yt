const coding=["js","ruby","py","cpp"]
coding.forEach(function (val) {
    // console.log(val);
})
//--------------------------------------------
function printme(item) {
    // console.log(item);
    
}

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const mycoding=[
    {
        languagename:"javascript",
        languagfilename:"js"
    },
    {
        languagename:"java",
        languagfilename:"js"
    },
    {
        languagename:"python",
        languagfilename:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
})