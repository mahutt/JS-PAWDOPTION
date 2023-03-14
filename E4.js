const BWP_PRICE = 19.99;
const ITP_PRICE = 86.00;
const AJ_PRICE = 55.00;

document.getElementById("process-button").onclick = process;
const inputs = document.getElementById("form").getElementsByTagName("input");
const outputs = document.getElementById("display").getElementsByTagName("p");

function process() {

    for (let input of inputs) {
        if (input.value == "" || /[^0-9]/.test(input.value)) {
            alert("Please enter a valid number of books.")
            input.focus();
            return;
        }
    }

    let basic_web_prog_quantity  = parseInt(inputs["BWP-q"].value);
    let intro_to_php_quantity    = parseInt(inputs["ITP-q"].value);
    let advanced_jquery_quantity = parseInt(inputs["AJ-q" ].value);

    outputs["BWP-subtotal"].innerHTML = "<b>Basic Web Programming (Quantity = " + (basic_web_prog_quantity) + "):</b>";
    outputs["ITP-subtotal"].innerHTML = "<b>Intro to PHP (Quantity = " + (intro_to_php_quantity) + "):</b>";
    outputs["AJ-subtotal" ].innerHTML = "<b>Advanced JQuery (Quantity = " + (advanced_jquery_quantity) + "):</b>";

    let BWP_subtotal = basic_web_prog_quantity * BWP_PRICE;
    let ITP_subtotal = intro_to_php_quantity * ITP_PRICE;
    let AJ_subtotal = advanced_jquery_quantity * AJ_PRICE;

    outputs["BWP-subtotal"].innerHTML += " $" + (BWP_subtotal);
    outputs["ITP-subtotal"].innerHTML += " $" + (ITP_subtotal);
    outputs["AJ-subtotal" ].innerHTML += " $" + (AJ_subtotal);

    outputs["total"].innerHTML = "<b>Final Total:</b> $" + (BWP_subtotal + ITP_subtotal + AJ_subtotal);
}