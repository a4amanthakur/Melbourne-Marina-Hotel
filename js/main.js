/* alert box 1 for contact.html page*/
function checkEmpty()
      {

        var emp1 =document.forms["form-contact"]["name"].value;
        var emp2 =document.forms["form-contact"]["email"].value;
        var emp4 =document.forms["form-contact"]["msg"].value;
        if (emp1 == "" || emp2 == "" ||  emp4 == "" )
        {
          alert("Please fill all the fields.");
          return false;
        }
        
      }
/* alert box 2 for booking.html page*/
function checkBookingField()
{
  var val=document.forms["booking-form"]["fname"].value;
  var val1=document.forms["booking-form"]["lname"].value;
  var val2=document.forms["booking-form"]["email"].value;
  var val3=document.forms["booking-form"]["phone"].value;
  var val4=document.forms["booking-form"]["code"].value;
  var val5=document.forms["booking-form"]["card-name"].value;
  var val6=document.forms["booking-form"]["card-number"].value;
  var val7=document.forms["booking-form"]["exp"].value;
  var val8=document.forms["booking-form"]["postal-code"].value;
  if(val=="" || val1=="" ||val2=="" ||val3=="" ||val4=="" ||val5=="" ||val6=="" ||val7=="" ||val8=="")
  {
    alert("Please fill all the fields.");
        return false;
  }
}

/* popup for 2 pages (suport.html & feedback.html)*/

function popupWindow() 
{
  text =  "<html>\n<head>\n<title>Pop | Offers</title>\n<body>\n";
  text += "<center>\n<br>";
  text += "<a href='./offers.html' target='_blank'><h2>Click here for special offers.</h2></a>";
  text += "</center>\n</body>\n</html>\n";
  setTimeout('windowProp(text)', 3000); // delay 3 seconds before opening
}
function windowProp(text) 
{
  newWindow = window.open('','newWin','width=400,height=200');
  newWindow.document.write(text);
  setTimeout('closeWin(newWindow)', 5000); // delay 5 seconds before closing
}
function closeWin(newWindow) 
{
  newWindow.close(); // close small window and depart
}