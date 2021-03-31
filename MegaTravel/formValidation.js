function validate()
{
    let fullName, email, phoneNumber, numberOfAdults, numberOfChildren, departureDate, returnDate;
    let destination, destinationSelected;

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

    fullName = document.getElementById("fullName").value;
    email = document.getElementById("email").value;
    phoneNumber = document.getElementById("phone").value;

    numberOfAdults = document.getElementById("adults").value;
    numberOfChildren = document.getElementById("children").value;

    departureDate = document.getElementById("departureDate").value;
    returnDate = document.getElementById("returnDate").value;

    destination = document.getElementById("destinationOptions");
    destinationSelected = destination.options[destination.selectedIndex].text;

    if (fullName == "")
    {
        text = "Invalid input.";
    }

    if (email == "")
    {
        text = "Invalid input.";
    }

    if (isNaN(phoneNumber) || phoneNumber == "" || phoneNumber < 1000000000 || phoneNumber < 0)
    {
        text = "Invalid input.";
    }

    if (isNaN(numberOfAdults) || numberOfAdults < 1 || numberOfAdults > 200)
    {
        text = "Invalid input.";
    }

    if (isNaN(numberOfChildren) || numberOfChildren < 0 || numberOfChildren > 200 || numberOfChildren == "")
    {
        text = "Invalid input.";
    }

    if (departureDate <= today)
    {
        text = "Invalid input.";
    }

    if (returnDate <= departureDate)
    {
        text = "Invalid input.";
    }

    if(destinationSelected == "- Choose Destination -")
    {
        text = "Invalid input.";
    }

    document.getElementById("validate").innerText = text;
}

function clearForm()
{
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("adults").value = "";
    document.getElementById("children").value = "";
    document.getElementById("departureDate").value = "";
    document.getElementById("returnDate").value = "";
    document.getElementById("destinationOptions").value = "- Choose Destination -";
}