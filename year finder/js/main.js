
function calculateYear()
{
    var age = document.getElementById('age').value;
   
    var date = new Date();
    var year = date.getFullYear();
    
    var birthYear = year - age;
    
    document.getElementById('demo').innerHTML = "Your birth year is "+birthYear+".";
}
