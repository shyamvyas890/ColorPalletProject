

const options={
    method:"GET",
    headers: {
            "Content-Type": "application/json"
    } 
}
let theData={};
function fillColors(){
    const schemeFormat = document.getElementById('schemes').value;
    const colorValue= document.getElementById("colorInput").value.slice(1);
    let templateString= `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${schemeFormat}&count=5`;
    fetch(templateString,options).then(res=>res.json()).then(function(data){
        Object.assign(theData,data.colors);
        let collections= document.getElementById("colors").children;
        let hexCollections=document.getElementById("hex").children;
        let count=0;
        for(c of collections){
            c.style.backgroundColor=`${theData[count].hex.value}`;
            hexCollections[count].textContent=`${theData[count].hex.value}`;
            count++;
        } 
    })
}
document.getElementById("generate").addEventListener('click', fillColors)

