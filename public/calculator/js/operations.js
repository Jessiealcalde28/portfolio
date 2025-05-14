function plus(){
 document.getElementById('operator').value = "+";
 const display = document.getElementById('display').value;

 if (display !== "0") {
    document.getElementById('dispaly2').value = display;
    document.getElementById('dispaly').value = "0";
 }
}

function minus(){
    document.getElementById('operator').value = "-";
    const display = document.getElementById('display').value;

 if (display !== "0") {
    document.getElementById('dispaly2').value = display;
    document.getElementById('dispaly').value = "0";
 }
   }

   function times(){
    document.getElementById('operator').value = "*";
    const display = document.getElementById('display').value;

 if (display !== "0") {
    document.getElementById('dispaly2').value = display;
    document.getElementById('dispaly').value = "0";
 }
   }

   function divide(){
    document.getElementById('operator').value = "/";
    const display = document.getElementById('display').value;

 if (display !== "0") {
    document.getElementById('dispaly2').value = display;
    document.getElementById('dispaly').value = "0";
 }
   }
