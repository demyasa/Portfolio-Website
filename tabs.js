// Tabbed Component -> Work Experience Section

const jobs = document.querySelectorAll('.job');
const jobsContainer = document.querySelector('.jobs');
const jobContent = document.querySelectorAll('.job-box');

// Event Delegation

jobsContainer.addEventListener('click', (e) => {
    // Get closest parent with relevant class
    const clicked = e.target.closest('.job');
    // console.log(clicked);

    // Guard Clause: Ignore clicks where closest result is null
    // aka return out of function
    if(!clicked) return;

    // Remove active classes
    jobs.forEach(job => job.classList.remove('job-active'));
    jobContent.forEach(content => content.classList.remove('job-box--active'));

    // Activate job tab
    clicked.classList.add('job-active');

    // Load content
    document.querySelector(`.job-box-${clicked.dataset.job}`).classList.add('job-box--active');
})

// Mobile Navigation Actions

const btnNav = document.querySelector('.btn-mobile-nav');
const headerDiv = document.querySelector('.header');

btnNav.addEventListener('click', function() {
    headerDiv.classList.toggle('nav-open')
})