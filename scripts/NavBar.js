const tabs = ["Skills" , "PersonalTap" , "Certificates" , "Projects"]
var url = ""
const data = ""
function ChangeTab(tab){
    for(var i = 0 ; i < tabs.length ; i++){
        if(tabs[i] == tab){
            url = tab
            document.getElementById(tab).style.color = "orange";
            document.getElementById(tab).style.borderBottomColor = "orange";


        }
        else{
            
            document.getElementById(tabs[i]).style.color = "white";
            document.getElementById(tabs[i]).style.borderBottomColor = "transparent";


        }

    }
    
    $.ajax({
    
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: "GET",
        data: data,
        url: "/pages/"+ url + ".html",
        success:function(data) {
            
            console.log(data)
            document.getElementById("Changable").innerHTML = data
           


            
            
            
            
        },
        error: function(error) {
            console.log(error)
        }
}); 
}
