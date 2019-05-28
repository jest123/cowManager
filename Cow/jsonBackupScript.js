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
function jsonReader(){
    console.log(document. getElementById("submitButton").value);
};