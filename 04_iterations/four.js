const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for (const key in myobj) {
   console.log(`${key} shortcut is for ${myobj[key]}`);
}

const x=["js","cpp","py","java"]

for (const key of x) {
    console.log(x[key]);
}