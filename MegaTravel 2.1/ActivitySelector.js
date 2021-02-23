function reset()
{
    document.getElementById("availableActivitiesDropBox").innerHTML = "";
}

function viewActivities()
{
    let selectedDestination = document.getElementById("destinationOptions");

    let destination = selectedDestination.options[selectedDestination.selectedIndex].text;
    
    if (destination == "New Zealand Trek")
    {
        reset();

        let activitiesCheckBox = document.getElementById("availableActivitiesDropBox");

        let boatCheckBox = document.createElement('input');
        boatCheckBox.type = 'checkbox';
        let cityToursCheckBox = document.createElement('input');
        cityToursCheckBox.type = 'checkbox';
        let cyclingCheckBox = document.createElement('input');
        cyclingCheckBox.type = 'checkbox';
        let museumCheckBox = document.createElement('input');
        museumCheckBox.type = 'checkbox';
        let sportsCheckBox = document.createElement('input');
        sportsCheckBox.type = 'checkbox';
        
        activitiesCheckBox.appendChild(boatCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Boating"));
        
        activitiesCheckBox.appendChild(cityToursCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("City Tours"));

        activitiesCheckBox.appendChild(cyclingCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Cycling"));

        activitiesCheckBox.appendChild(museumCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Museums"));

        activitiesCheckBox.appendChild(sportsCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Sports"));
    }
    else if (destination == "Maldives, South Asia")
    {
        reset();

        let activitiesCheckBox = document.getElementById("availableActivitiesDropBox");

        let beachCheckBox = document.createElement('input');
        beachCheckBox.type = 'checkbox';
        let boatCheckBox = document.createElement('input');
        boatCheckBox.type = 'checkbox';
        let hikeCheckBox = document.createElement('input');
        hikeCheckBox.type = 'checkbox';
        let museumCheckBox = document.createElement('input');
        museumCheckBox.type = 'checkbox';
        let sailCheckBox = document.createElement('input');
        sailCheckBox.type = 'checkbox';

        activitiesCheckBox.appendChild(beachCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Beaches"));

        activitiesCheckBox.appendChild(boatCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Boating"));
        
        activitiesCheckBox.appendChild(hikeCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Hiking"));
        
        activitiesCheckBox.appendChild(museumCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Museums"));

        activitiesCheckBox.appendChild(sailCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Sailing"));
    }
    else if (destination == "Venice, Italy")
    {
        reset();
        
        let activitiesCheckBox = document.getElementById("availableActivitiesDropBox");

        let cityToursCheckBox = document.createElement('input');
        cityToursCheckBox.type = 'checkbox';
        let museumCheckBox = document.createElement('input');
        museumCheckBox.type = 'checkbox';
        let parksCheckBox = document.createElement('input');
        parksCheckBox.type = 'checkbox';
        let theatersCheckBox = document.createElement('input');
        theatersCheckBox.type = 'checkbox';
        
        activitiesCheckBox.appendChild(cityToursCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("City Tours"));

        activitiesCheckBox.appendChild(museumCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Museums"));
  
        activitiesCheckBox.appendChild(parksCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Parks & Recreation"));
        
        activitiesCheckBox.appendChild(theatersCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Theatre"));

        
    }
    else if (destination == "Cancun")
    {
        reset();
        
        let activitiesCheckBox = document.getElementById("availableActivitiesDropBox");

        let beachCheckBox = document.createElement('input');
        beachCheckBox.type = 'checkbox';

        let boatCheckBox = document.createElement('input');
        boatCheckBox.type = 'checkbox';

        let snorkelingCheckBox = document.createElement('input');
        snorkelingCheckBox.type = 'checkbox';

        let parksCheckBox = document.createElement('input');
        parksCheckBox.type = 'checkbox';

        activitiesCheckBox.appendChild(beachCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Beaches"));
    
        activitiesCheckBox.appendChild(boatCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Boating"));

        activitiesCheckBox.appendChild(parksCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Parks & Recreation"));
    
        activitiesCheckBox.appendChild(snorkelingCheckBox);
        activitiesCheckBox.appendChild(document.createTextNode("Snorkeling"));
    }
    else
    {
        reset();

        document.getElementById("availableActivitiesDropBox").innerText = "Please select a destination to view activities.";
    }
}