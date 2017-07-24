var text= document.getElementById("textbox");


function validate()
{
    if(text=="" || text==null)
    {
        alert("Please enter your email:");
        return false;
        text.focus();
    }
    

}


