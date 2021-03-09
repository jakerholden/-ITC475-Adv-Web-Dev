// Displays the welcome greeting
function SetGreeting()
{
    let date = new Date();
    let hours = date.getHours();
    let greeting;

    if (hours <= 11) 
    {
        greeting = "Good Morning";
    }
    else if (hours > 11 && hours < 17)
    {
        greeting = "Good Afternoon";
    }
    else
    {
        greeting = "Good Evening";
    }

    document.getElementById("GreetingBar").innerText = greeting;
}


// Displays the date and time in 'MM/DD/YYYY - 00:00:00' format
function SetDateAndTime()
{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = UpdatingTime(hour);
    minute = UpdatingTime(minute);
    second = UpdatingTime(second);
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById("SetDateAndTime").innerText = date.toLocaleDateString() + " - " + hour + ":" + minute + ":" + second;
      let timeout = setTimeout(function(){ Time() }, 1000);
}
function UpdatingTime(i) 
{
    if (i < 10) {
      return "0" + i;
    }
    else {
      return i;
    }
}

// Displays sun or moon image based on Time of Day
function SetImage()
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    var img = document.createElement("img");

    if ((hours >= 6 && hours < 18) || (hours = 18 && minutes == 0))
        {
            //Su nIcon
            img.src= "images/sun.png";
            img.height = 25;
            img.width = 25;
        }
    else
        {
            //Moon Icon
            img.src= "images/moon.png";
            img.height = 25;
            img.width = 25;
        }

    var src = document.getElementById("SetImage");
    src.appendChild(img);
}

SetGreeting();
SetDateAndTime();
SetImage();