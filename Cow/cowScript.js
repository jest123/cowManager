var cowCount = 0;
var isShown = false;
    function SetVar(){
        var addWindow = document.getElementById("addWindow");
        addWindow.style.display = "none"; 
        PrintFunc();
        jsonDownload();
    }
  
        function ShowFunc(){
            if(addWindow.style.display == "none"){
                addWindow.style.display = "block"; 
            }
            else{
                addWindow.style.display = "none";
            }
        }    
    function addFunc(){
        if(localStorage.getItem("CowCount")=== null || isNaN(localStorage.getItem("CowCount"))){
            localStorage.setItem("CowCount", 0);
            cowCount = 0;
        }
        else{
            cowCount = localStorage.getItem("CowCount");
        }
        
        var info = {
                ID : document.getElementById("Identifikacijska").value,
                BirthDate: inputChangeFormat(document.getElementById("BirthDateInput").value),
                Gender: document.getElementById("GenderInput").value,
            }
        localStorage.setItem(("Cow"+(parseInt(cowCount)+1).toString()),JSON.stringify(info));
        localStorage.setItem("CowCount",parseInt(localStorage.getItem("CowCount"))+parseInt(1)); 
        console.log(("Cow"+(parseInt(cowCount)+1).toString()));

        function inputChangeFormat(birth){
            var dateArray = birth.split(".");
            var birthDateInput = new Date(dateArray[2]+"-"+dateArray[1]+"-"+dateArray[0]);
            return birthDateInput;

        }
    }
    function PrintFunc(){
        var age;
        var window = document.getElementById("cowWindow");
        var strongText = document.createElement("strong");
        //Lastnosti strongText-a
        strongText.id = "Identity";
        var para = document.createElement("p");
        var gender = document.createElement("p");
        gender.id = "Gender";
        //Lastnosti para-ja
        para.id = "BirthDate";
        var createWindow = document.createElement("div"); 
        createWindow.appendChild(strongText);
        createWindow.appendChild(para);
        createWindow.appendChild(gender);
        createWindow.style.fontFamily = "Oswald, sans-serif";
        createWindow.style.width = "8cm";
        //Lastnosti createWindow-a
        createWindow.style.height = "3cm";
        createWindow.style.backgroundColor = "#1dad41";
        createWindow.style.boxShadow = " 2px 2px 2px rgb(0, 0, 0)"
        createWindow.style.borderRadius = "5%";
        createWindow.style.margin = "5px";
        addWindow.style.display = "none";
        window.style.display = "block";
        if(!isShown){
            //Informacijska zanka
            for(var e = 1;e <= 1000;e++){
                var ItemInfo = JSON.parse(localStorage.getItem("Cow"+e));
                if(ItemInfo != undefined){
                    age = changeFormat(ItemInfo.BirthDate);
                    window.children[0].innerHTML = ItemInfo.ID;
                    window.children[1].innerHTML = "Datum rojstva : "+age;
                    window.children[2].innerHTML = "Spol : "+ItemInfo.Gender;
                    createWindow.id = "cowWindow"+e;
                    document.body.appendChild(createWindow.cloneNode(true));
                    window = document.getElementById("cowWindow"+e);
                }
            }
            window.parentNode.removeChild(window);
        }
        function changeFormat(birth){
                var birthDate = new Date(birth)
                var formatDate = birthDate.getDate()+"."+(birthDate.getMonth()+1)+"."+birthDate.getFullYear();
                return formatDate;
        }
    }

function findFunc(){
    var identityArray = document.getElementsByTagName("strong");
    for(var i = 0;i<= identityArray.length-1;i++){
        identityArray[i].parentNode.style.display = "block";
    }
    var value = document.getElementById("searchBar").value;
    for(var e = 0;e<= identityArray.length-1;e++){
        if(identityArray[e].parentNode != undefined){
            if(!identityArray[e].innerHTML.includes(value)){
            identityArray[e].parentNode.style.display = "none";
        }
        }
        
    }
}

