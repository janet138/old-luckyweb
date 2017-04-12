<html>
<head>
 <script src="jquery/jquery-1.12.0.js" type="text/javascript"></script>
 <script src="jquery/myjquery.js" type="text/javascript"></script>
 <link rel="stylesheet" href="css/stylesheet.css" type="text/css">

</head>
<body>
  <?php include_once("analyticstracking.php") ?>
  <div id="header">
      <div id="header-inner">
              <div id="logo-div"><img id="logo-pic" alt="logo-pic" title="logo-pic" src="pics/logo.jpg"/></div>
              <div id="menu-div" class="close"/><img  id="menu-icon" alt="menu-icon" title="menu-icon" src="pics/menu2-icon.jpg" /></div>
              <ul id="nav-header">
                  <a id="" href="index.html" onclick=""><li class="nav-item">Home</li></a>
                  <a href="services.html" onclick=""><li class="nav-item">Sevices</li></a>
                  <a href="calculate-price.html" onclick=""><li class="nav-item">Pricing</li></a>
                  <a href="contact-us.html"><li class="nav-item">Contact us</li></a>
              </ul>
              
              <br class="clear" />
      </div>
  </div>
</body>
</html>

<?php 
$style = '<link rel="stylesheet" href="css/stylesheet.css" type="text/css">';
echo $style;
if(isset($_POST['submit'])){
    $to = "jaleh_pedram@yahoo.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
	$Phone = $_POST['Phone'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " " . $Phone .  " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender


    
// Required field names
   $required = array('first_name', 'Phone', 'email', 'message');

// Loop over field names, make sure each one exists and is not empty
   $error = false;
   foreach($required as $field) {
     if (empty($_POST[$field])) {
     $error = true;
  }
}

   if ($error) {
      echo "<h2 style ='width:60%;padding:20% 0 3%;margin:0 auto; text-align:center;font-size: 36px;border-bottom:1px solid;'>Your message can not be delivered</h2></br><h2 style ='width:70%;padding:2% 0 5%;margin:0 auto; text-align:center;font-size: 28px;'>Dear " . $first_name . ",Please fill all the required fields.</h2>";
   } else {
      echo "<h2 style ='width:60%;padding:20% 0 3%;margin:0 auto; text-align:center;font-size: 36px;border-bottom:1px solid;'>Your message delivered</h2></br><h2 style ='width:70%;padding:2% 0 5%;margin:0 auto; text-align:center;font-size: 28px;'> Thank you " . $first_name . ", we will contact you shortly.</h2>";

    }
     echo("<div style ='text-align:center;width:100%;'><button style ='background-image:url(pics/gold-button.jpg);padding:1% 4%;
	background-size:100%;font-size:24px;margin:0 auto; text-align:center;' onclick=\"location.href='http://luckyweb.com.au/contact-us.html'\">Back</button></div>");
}
?>



