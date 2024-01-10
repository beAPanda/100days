var currentDay = 50;
counter();

function counter() {
    var count = 0;
    var progressValue = document.getElementById("progress-value");
    var progressBar = document.getElementById("progress-bar");

    progressValue.innerHTML = "0 Days";

    var id = setInterval(() => {
        count += 1;
        progressValue.innerHTML = count + " Days";

        if (count >= currentDay) {
            clearInterval(id);
        }

    }, 3000 / currentDay);
}