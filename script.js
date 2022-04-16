document.getElementById("xyz").addEventListener("click",async()=>{
    inputValue = document.getElementById("name").value;
    let x= {
        "word":inputValue
    }
    const res = await fetch ('https://python-extension-api.herokuapp.com/spellcheck',{
        method:"POST",headers : { 
            'Content-Type': 'application/json',
           },
        body:JSON.stringify(x)
    })
    const respData = await res.json();
    document.getElementById("result").innerText=respData.Word;
})