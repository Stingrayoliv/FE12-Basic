fetch('hello_world.html', {
    method: "GET"
})
.then(response=>response.text())
.then(text=>{
    console.log(text);
    document.querySelector('div').innerHTML=text;
})