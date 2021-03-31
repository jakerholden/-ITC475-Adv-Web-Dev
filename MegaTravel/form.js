/*Mega Travel JavaScript
File name: form.js
Bridget Hudson
2/26/21
*/

function validate()
{
    let fName, lName, email, phoneNum, adultNum, childNum, travelDate;
    let destSelected, ds;

    let today = new Date(); 
    
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    
    if (dd < 10)
    {dd = '0' + dd;}

    if (mm < 10)
    {mm = '0' + mm}

    today = yyyy + '-' + mm + '-' + dd;
    
    let text = "Form Submitted. Thank you!"

    fName = document.getElementById("fullName").value; 
    email = document.getElementById("email").value;

    phoneNum = document.getElementById("phone").value;
    adultNum = document.getElementById("adults").value;
    childNum = document.getElementById("children").value;

    travelDate = document.getElementById("startdate").value;

    destSelected = document.getElementById("destinationOptions");
    ds = destSelected.options[destSelected.selectedIndex].text;

    if (fName == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (email == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (isNaN(phoneNum) || phoneNum == "" || phoneNum < 1000000000 || phoneNum < 0)
    {
        text = "Invalid input found. Please try again.";
    }

    if (isNaN(adultNum) || adultNum < 1 || adultNum > 200)
    {
        text = "Invalid input found. Please try again.";
    }

    if (isNaN(childNum) || childNum < 0 || childNum > 200 || childNum == "")
    {
        text = "Invalid input found. Please try again.";
    }

    if (travelDate <= today)
    {
        text = "Invalid input found. Please try again.";
    }

    if(ds == "- Choose Destination -")
    {
        text = "Invalid input found. Please try again.";
    }

    document.getElementById("validation").innerText = text;
}

function clearForm()
{
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("adults").value = "";
    document.getElementById("children").value = "";
    document.getElementById("startdate").value = "";
    document.getElementById("destination-selector").value = "- Choose Destination -";
}