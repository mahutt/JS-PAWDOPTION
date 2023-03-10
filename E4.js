const BWP_PRICE = 19.99;
const ITP_PRICE = 86.00;
const AJ_PRICE = 55.00;

document.getElementById("process-button").onclick = process;

function process() {
    let basic_web_prog_quantity  = parseInt(document.getElementById("BWP-q").value);
    let intro_to_php_quantity    = parseInt(document.getElementById("ITP-q").value);
    let advanced_jquery_quantity = parseInt(document.getElementById("AJ-q").value);

    // document.getElementById("basic-web-prog-quantity").innerHTML =  " (Quantity = " + basic_web_prog_quantity  + "):";
    // document.getElementById("intro-to-php-quantity").innerHTML =    " (Quantity = " + intro_to_php_quantity    + "):";
    // document.getElementById("advanced-jquery-quantity").innerHTML = " (Quantity = " + advanced_jquery_quantity + "):";

    document.getElementById("BWP-subtotal").innerHTML = "<b>Basic Web Programming (Quantity = " + (basic_web_prog_quantity) + "):</b>";
    document.getElementById("ITP-subtotal").innerHTML = "<b>Intro to PHP (Quantity = " + (intro_to_php_quantity) + "):</b>";
    document.getElementById("AJ-subtotal" ).innerHTML = "<b>Advanced JQuery (Quantity = " + (advanced_jquery_quantity) + "):</b>";

    BWP_subtotal = basic_web_prog_quantity * BWP_PRICE;
    ITP_subtotal = intro_to_php_quantity * ITP_PRICE;
    AJ_subtotal = advanced_jquery_quantity * AJ_PRICE;

    document.getElementById("BWP-subtotal").innerHTML += " $" + (BWP_subtotal);
    document.getElementById("ITP-subtotal").innerHTML += " $" + (ITP_subtotal);
    document.getElementById("AJ-subtotal" ).innerHTML += " $" + (AJ_subtotal);

    document.getElementById("total" ).innerHTML = "<b>Final Total:</b> $" + (BWP_subtotal + ITP_subtotal + AJ_subtotal); 


}