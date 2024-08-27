document.addEventListener('DOMContentLoaded', () => {
    const job1 = document.getElementById('job1');
    const job1TimerSpan = document.getElementById('job1-timer');

    let job1TimeLeft = 20; // seconds
    const yellowTimeThreshold = 10; // seconds before the job goes to the yellow section
    const interval = setInterval(() => {
        job1TimeLeft--;

        if (job1TimeLeft >= 0) {
            job1TimerSpan.textContent = job1TimeLeft;
        }

        if (job1TimeLeft === yellowTimeThreshold) {
            document.getElementById('yellow').appendChild(job1);
        } else if (job1TimeLeft === 0) {
            document.getElementById('red').appendChild(job1);
            clearInterval(interval);
        }
    }, 1000);
});
