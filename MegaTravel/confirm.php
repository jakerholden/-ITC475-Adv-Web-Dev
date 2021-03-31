<html>
<head>
    <title>Confirmation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>        
        header {display: block;  border-bottom: 15px solid #d3d3d3; background: #add8e6;}
        header img {float: left; display: block; margin: 0px auto; width: 20%;}
        nav { background: transparent; margin-top: 20px; margin-bottom: 20px;}
        nav ul { display: flex; list-style: none; align-items: center; justify-content: center;}
        nav a {color: black; font-weight: bold; display: block; text-decoration: none; padding: 15px; position:relative;}
        nav a:hover {color: red; top: -4px;}
        footer {background: black; color: white; display: block; width: 100% ; padding: 10px;
            font-size: 12px; height: 60px; margin-top: 20px;}
        body {font-family: sans-serif; display: -webkit-flex; display:flex;flex-flow: column nowrap;
            font-family: sans-serif; font-size: 15px;}

        @media only screen and (max-width: 768px)
        {
            nav {background-color: black; color: white; font-family: Arial, Helvetica, sans-serif;
                font-weight: bold; padding: 10px; height: 25px;}
            nav ul {display: flex; list-style: none; align-items: center; 
                justify-content: center;}
            a {color: white; text-decoration: none; padding: 10px; padding-top: 4px;}
            a:hover {color: orange; transition: 0.5s ease-in; padding-bottom: 2%;}
        }
    </style>
</head>

<body>
    <header>
    <img style="width:25%; height:auto; display:block; margin-top:auto; margin-bottom:auto;"
    src="images\mega_travel_logo.png" alt="Mega Travel"/>  
    
    <div></div>

    <nav>
            <ul> 
                <a href="home.html">Home</a>
                <a href="about.html">About</a>
                <a href="contactagent.html">Contact Agent</a>
            </ul>        
        </nav>

    </header>     

    <br>
    <h2>Thank you for submitting your travel agent contact request!</h2> 
    <br>
    <h1>Here is the information you submitted:</h1>
    <br>
    <p>Cient Name: <?php echo $_POST["fullName"]; ?> </p> 
    <p>Client Email: <?php echo $_POST["email"]; ?> </p>
    <p>Client Phone Number: <?php echo $_POST["phone"]; ?> </p> 
    <p>Number of Adults: <?php echo $_POST["adults"]; ?> </p> 
    <p>Number of Children: <?php echo $_POST["children"]; ?> </p> 
    <p>Departure Date: <?php echo $_POST["departureDate"]; ?> </p> 
    <p>Return Date: <?php echo $_POST["returnDate"]; ?> </p> 
    <p>Destination: <?php echo $_POST["destinationOptions"]; ?> </p> 
    <p>Interested Activities: 
    
    <?php 
        if(array_key_exists("museumCheckBox", $_POST) && $_POST["museumCheckBox"])
        {
            echo "Museums, ";
        }

        if(array_key_exists("sailCheckBox", $_POST) && $_POST["sailCheckBox"])
        {
            echo "Sailing, ";
        }

        if(array_key_exists("beachCheckBox", $_POST) && $_POST["beachCheckBox"])
        {
            echo "Beaches, ";
        }

        if(array_key_exists("hikeCheckBox", $_POST) && $_POST["hikeCheckBox"])
        {
            echo "Hiking, ";
        }

        if(array_key_exists("boatCheckBox", $_POST) && $_POST["boatCheckBox"])
        {
            echo "Boating, ";
        }

        if(array_key_exists("parksCheckBox", $_POST) && $_POST["parksCheckBox"])
        {
            echo "Parks & Recreation, ";
        }

        if(array_key_exists("snorkelingCheckBox", $_POST) && $_POST["snorkelingCheckBox"])
        {
            echo "Snorkels, ";
        }

        if(array_key_exists("cityToursCheckBox", $_POST) && $_POST["cityToursCheckBox"])
        {
            echo "City Tours, ";
        }

        if(array_key_exists("sportsCheckBox", $_POST) && $_POST["sportsCheckBox"])
        {
            echo "Sports, ";
        }

        if(array_key_exists("cyclingCheckBox", $_POST) && $_POST["cyclingCheckBox"])
        {
            echo "Cycling, ";
        }

        if(array_key_exists("theatersCheckBox", $_POST) && $_POST["theatersCheckBox"])
        {
            echo "Theatre, ";
        }
    ?>

    <br><br>
    <h2>We will be in touch with you soon.</h2>
        <br>
    <footer>    <p>Copyright Protected. All rights reserved.<br></p>
        <p><br>   MEGA TRAVELS<br></p><p>mega@travels.com</p></footer>
</body>
</html>
