function TimeSet()
{
    let d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let sec = d.getSeconds();
    hour = runningTime(hour);
    minutes = runningTime(minutes);
    sec = runningTime(sec);

    document.getElementById("runningClock").innerText = hour + ":" + minutes + ":" + sec;
    let t = setTimeout(function(){ TimeSet() }, 1000);
}

function runningTime(k) 
{
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}

function Confirm()
{
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let time = hrs + ':' + mins;

    let frontDoorStart = document.getElementById("frontDoorStart");
    let frontDoorEnd = document.getElementById("frontDoorEnd");
    let fDoorStart = frontDoorStart.value;
    let fDoorEnd = frontDoorEnd.value;

    let backDoorStart = document.getElementById("backDoorStart");
    let backDoorEnd = document.getElementById("backDoorEnd");
    let bDoorStart = backDoorStart.value;
    let bDoorEnd = backDoorEnd.value;

    let garageDoorStart = document.getElementById("garageDoorStart");
    let garageDoorEnd = document.getElementById("garageDoorEnd");
    let gDoorStart = garageDoorStart.value;
    let gDoorEnd = garageDoorEnd.value;

    let diningRoomLightStart = document.getElementById("diningRoomLightStart");
    let diningRoomLightEnd = document.getElementById("diningRoomLightEnd");
    let drLampStart = diningRoomLightStart.value;
    let drLampEnd = diningRoomLightEnd.value;

    let livingRoomLampStart = document.getElementById("livingRoomLampStart");
    let livingRoomLampEnd = document.getElementById("livingRoomLampEnd");
    let lrLampStart = livingRoomLampStart.value;
    let lrLampEnd = livingRoomLampEnd.value;

    let bedroomOneLampStart = document.getElementById("bedroomOneLampStart");
    let bedroomOneLampEnd = document.getElementById("bedroomOneLampEnd");
    let b1LampStart = bedroomOneLampStart.value;
    let b1LampEnd = bedroomOneLampEnd.value;

    let bedroomTwoLampStart = document.getElementById("bedroomTwoLampStart");
    let bedroomTwoLampEnd = document.getElementById("bedroomTwoLampEnd");
    let b2LampStart = bedroomTwoLampStart.value;
    let b2LampEnd = bedroomTwoLampEnd.value;

    let kitchFanStart = document.getElementById("kitchenFanStart");
    let kitchFanEnd = document.getElementById("kitchenFanEnd");
    let kFanStart = kitchFanStart.value;
    let kFanEnd = kitchFanEnd.value;

    let bathroomFanStart = document.getElementById("bathroomFanStart");
    let bathroomFanEnd = document.getElementById("bathroomFanEnd");
    let bFanStart = bathroomFanStart.value;
    let bFanEnd = bathroomFanEnd.value;

    let washingMachineStart = document.getElementById("washingMachineStart");
    let washingMachineEnd = document.getElementById("washingMachineEnd");
    let washStart = washingMachineStart.value;
    let washEnd = washingMachineEnd.value;

    let dryerStart = document.getElementById("dryerStart");
    let dryerEnd = document.getElementById("dryerEnd");
    let dryStart = dryerStart.value;
    let dryEnd = dryerEnd.value;
}

function status(fDoorStart, fDoorEnd, bDoorStart, bDoorEnd, garageDoorStart, garageDoorEnd, 
    drLampStart, drLampEnd, lrLampStart, lrLampEnd, b1LampStart, b1LampEnd, b2LampStart, b2LampEnd,
    kFanStart, kFanEnd, bFanStart, bFanEnd, washStart, washEnd, dryStart, dryEnd)
{
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let time = hrs + ':' + mins;

    // Front Door
    var imgFD = document.createElement("img");
        
    if(time > fDoorStart && time < fDoorEnd)
    {
        imgFD.src= "homeImages/door-unlocked.png";
        var src = document.getElementById("frontDoor");
        src.appendChild(imgFD);
    }
    else
    {
        imgFD.src= "homeImages/door-locked.png";
        var src = document.getElementById("frontDoor");
        src.appendChild(imgFD); 
    }

    // Back Door
    var imgBD = document.createElement("img");

    if(time > bDoorStart && time < bDoorEnd)
    {
        imgBD.src= "homeImages/door-unlocked.png";
        var src = document.getElementById("backDoor");
        src.appendChild(imgBD);
    }
    else
    {
        imgBD.src= "homeImages/door-locked.png";
        var src = document.getElementById("backDoor");
        src.appendChild(imgBD); 
    }

    // Garage Door
    var imgGD = document.createElement("img");

    if(time > garageDoorStart && time < garageDoorEnd)
    {
        imgGD.src= "homeImages/garage-door-open.png";
        var src = document.getElementById("garageDoor");
        src.appendChild(imgGD);
    }
    else
    {
        imgGD.src= "homeImages/garage-door-closed.png";
        var src = document.getElementById("garageDoor");
        src.appendChild(imgGD); 
    }

    // Dining Room Light
    var imgDineL = document.createElement("img");
    
    if(time > drLampStart && time < drLampEnd)
    {
        imgDineL.src= "homeImages/light-off.png";
        var src = document.getElementById("diningRoomLight");
        src.appendChild(imgDineL);
    }
    else
    {
        imgDineL.src= "homeImages/light-on.png";
        var src = document.getElementById("diningRoomLight");
        src.appendChild(imgDineL); 
    } 

    // Living Room Lamp
    var imgLiveL = document.createElement("img");

    if(time > lrLampStart && time < lrLampEnd)
    {
        imgLiveL.src= "homeImages/light-off.png";
        var src = document.getElementById("livingRoomLamp");
        src.appendChild(imgLiveL);
    }
    else
    {
        imgLiveL.src= "homeImages/light-on.png";
        var src = document.getElementById("livingRoomLamp");
        src.appendChild(imgLiveL);
    }

    // Bedroom One Lamp
    var imgBed1L = document.createElement("img");

    if(time > b1LampStart && time < b1LampEnd)
    {
        imgBed1L.src= "homeImages/light-off.png";
        var src = document.getElementById("bedroomOneLamp");
        src.appendChild(imgBed1L);
    }
    else
    {
        imgBed1L.src= "homeImages/light-on.png";
        var src = document.getElementById("bedroomOneLamp");
        src.appendChild(imgBed1L);
    }

    // Bedroom Two Lamp
    var imgBed2L = document.createElement("img");

    if(time > b2LampStart && time < b2LampEnd)
    {
        imgBed2L.src= "homeImages/light-off.png";
        var src = document.getElementById("bedroomTwoLamp");
        src.appendChild(imgBed2L);
    }
    else
    {
        imgBed2L.src= "homeImages/light-on.png";
        var src = document.getElementById("bedroomTwoLamp");
        src.appendChild(imgBed2L);
    }

    // Kitchen Fan
    var imgKitchF = document.createElement("img");

    if(time > kFanStart && time < kFanEnd)
    {
        imgKitchF.src= "homeImages/fan-off.png";
        var src = document.getElementById("kitchenFan");
        src.appendChild(imgKitchF);
    }
    else
    {
        imgKitchF.src= "homeImages/fan-on.png";
        var src = document.getElementById("kitchenFan");
        src.appendChild(imgKitchF);
    }
    
    // Bathroom Fan
    var imgBathF = document.createElement("img");

    if(time > bFanStart && time < bFanEnd)
    {
        imgBathF.src= "homeImages/fan-off.png";
        var src = document.getElementById("bathroomFan");
        src.appendChild(imgBathF);
    }
    else
    {
        imgBathF.src= "homeImages/fan-on.png";
        var src = document.getElementById("bathroomFan");
        src.appendChild(imgBathF);
    }

    // Washing Machine
    var washer = document.createElement("img");

    if(time > washStart && time < washEnd)
    {
        washer.src= "homeImages/clothes-off.png";
        var src = document.getElementById("washingMachine");
        src.appendChild(washer);
    }
    else
    {
        washer.src= "homeImages/clothes-on.png";
        var src = document.getElementById("washingMachine");
        src.appendChild(washer);
    }

    // Dryer
    var dryer = document.createElement("img");

    if(time > dryStart && time < dryEnd)
    {
        dryer.src= "homeImages/clothes-off.png";
        var src = document.getElementById("dryer");
        src.appendChild(dryer);  
    }
    else
    {
        dryer.src= "homeImages/clothes-on.png";
        var src = document.getElementById("dryer");
        src.appendChild(dryer);  
    }     
}

function Run()
{
    TimeSet();
    status();
}