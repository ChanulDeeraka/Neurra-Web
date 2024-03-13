// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    document.querySelector('.days_dash .digit:nth-child(1)').innerHTML = Math.floor(days / 100);
    document.querySelector('.days_dash .digit:nth-child(2)').innerHTML = Math.floor((days % 100) / 10);
    document.querySelector('.days_dash .digit:nth-child(3)').innerHTML = days % 10;

    document.querySelector('.hours_dash .digit:nth-child(1)').innerHTML = Math.floor(hours / 10);
    document.querySelector('.hours_dash .digit:nth-child(2)').innerHTML = hours % 10;

    document.querySelector('.minutes_dash .digit:nth-child(1)').innerHTML = Math.floor(minutes / 10);
    document.querySelector('.minutes_dash .digit:nth-child(2)').innerHTML = minutes % 10;

    document.querySelector('.seconds_dash .digit:nth-child(1)').innerHTML = Math.floor(seconds / 10);
    document.querySelector('.seconds_dash .digit:nth-child(2)').innerHTML = seconds % 10;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown_dashboard").innerHTML = "EXPIRED";
    }
}, 1000);