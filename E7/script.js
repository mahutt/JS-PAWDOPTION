/* To display the date and time in the header: */
let display = document.getElementById("date");
function displayDate() {
    var date = new Date();
    display.innerHTML = date.toDateString() + "<br>" + date.toLocaleTimeString();
}
setInterval(displayDate, 1000);

