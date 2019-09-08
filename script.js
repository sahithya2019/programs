
var entry = document.getElementById("entry");
entry.addEventListener("click", displayTable);


var row = 0;
function displayTable(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    //check the elememnts are filled or empty
    if(!fname || !lname || !age ) {
        alert("please fill all  boxes");
        return;
    } 
    //adding table rows when we give data in input fields
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);

    var Cell1 = newRow.insertCell(0);
    var Cell2 = newRow.insertCell(1);
    var Cell3 = newRow.insertCell(2);

    //when we give input cells take input of data and add another row
    Cell1.innerHTML = fname;
    Cell2.innerHTML = lname;
    Cell3.innerHTML = age; 
    row++;
    
}



