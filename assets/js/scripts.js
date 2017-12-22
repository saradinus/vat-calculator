// Select your input element.
var fixnumber = document.getElementById('vat-amount');

// Listen for input event on numInput.
fixnumber.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || (e.keyCode == 188)
      || e.keyCode == 8)) {
        return false;
    }
}
var vatamount;
function setValues() { 
    vatamount = Number(document.getElementById("vat-amount").value);
}
function brutto() {
    setValues();
    result = (vatamount * (23 / 100) + vatamount);
    score = result.toFixed(2);
    document.getElementById("howmuch").innerHTML = score;
}
function netto() {
    setValues();
    result = (vatamount-((23 / 100) * vatamount));
    var score = result.toFixed(2);
    document.getElementById("howmuch").innerHTML = score;
}
