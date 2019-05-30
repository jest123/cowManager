function jsonDownload (){
    var jsonObject;
    var downloadLink;
    jsonObject = localStorage.getItem("Cow1");
    for (e=2; e<=1000;e++){
        if(localStorage.getItem("Cow"+e) != undefined)
        {
        jsonObject += ",";
        jsonObject += "\n";
        jsonObject += localStorage.getItem("Cow"+e);
        }
    }
    var data = "text/json;charset=utf-8,"+jsonObject;
    downloadLink= document.getElementById("container");
    downloadLink.setAttribute("href","data:"+data);
    downloadLink.setAttribute("download","data.json");
}
function onChange() {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(document.getElementById("fileSelect").files[0]);
}
function onReaderLoad(event){
    console.log(event.target.result);
    var obj = event.target.result;
    obj = obj.split(",");
    console.log(obj);
    for(e = 0;e<=obj.length;e+=3){
        var objectString = "";
        for(i=0;i<=2;i++){
        objectString += obj[e+i]
        objectString += ",";
        }
        objectString = objectString.slice(0,-1);
        console.log(objectString);
        //localStorage.setItem()
        if(!objectString.includes("undefined")){
        //var jsonString = (JSON.parse(objectString));
        var jsonString = JSON.parse(objectString);
        jsonString = JSON.stringify({
            ID : jsonString.ID,
            BirthDate : jsonString.BirthDate,
            Gender : jsonString.Gender,
        })
        localStorage.setItem("Cow"+e/3,jsonString);
        }
        document.getElementById("paragraph").innerHTML = "Podatki dodani!";
    }  
   
}
