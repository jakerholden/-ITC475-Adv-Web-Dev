<html>

<head>
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

    <p><?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "$newSql";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if($conn->connect_error)
    {
        die("Connection failed: " . $conn->connect_error());
    }

    $sql = "SELECT id, fullName, email, phone, adults, 
        children, departureDate, returnDate, destination, activities FROM Fields";
    $result = $conn->query($sql);

    if($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc())
        {
            echo "Client Name: " . $row["fullName"]."<br><br>";
            echo "Client Email: ". $row["email"]."<br><br>";
            echo "Client Phone Number: ". $row["phone"]. "<br><br>";
            echo "Number of Adults: ". $row["adults"]. "<br><br>";
            echo "Number of Children: ". $row["children"]. "<br><br>";
            echo "Travel Dates: ". $row["departureDate"]." ".$row["returnDate"]"<br><br>";
            echo "Destination: ". $row["destination"]. "<br><br>";
            echo "Activities: ". $row["activities"]. "<br>";
            echo "<br><br>";
        }    
    }
    else
    {
        echo "No results";
    }
    $conn->close();
    ?></p>
    <footer>
    <footer>    <p>Copyright Protected. All rights reserved.<br></p>
        <p><br>   MEGA TRAVELS<br></p>    <p>mega@travels.com</p></footer>
    </footer>
</body>
</html>