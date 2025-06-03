// Tabbed Component -> Work Experience Section

const jobs = document.querySelectorAll('.job');
const jobsContainer = document.querySelector('.jobs');
const jobContent = document.querySelectorAll('.job-box');

// jobs.forEach(t => t.addEventListener('click', () => {
//     console.log("YO MOMMA");
// }))

// Event Delegation

jobsContainer.addEventListener('click', (e) => {
    // Get closest parent with relevant class
    const clicked = e.target.closest('.job');
    console.log(clicked);

    // Guard Clause: Ignore clicks where closest result is null
    // aka return out of function
    if(!clicked) return;

    jobs.forEach(job => job.classList.remove('job-active'));
    clicked.classList.add('job-active');
})