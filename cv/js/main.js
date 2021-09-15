document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let progressnumber = bar.children[0];
        // progressnumber.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    })
});