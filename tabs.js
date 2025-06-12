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

// Smooth Scrolling Animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const href = link.getAttribute('href');

        // Scroll to the top
        if (href === "#") window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        })

        // Scroll to different sections
        if (href !== "#" && href.startsWith("#")) {
            let sectionDiv = document.querySelector(href);
            sectionDiv.scrollIntoView({behavior: "smooth"});
        }

        // Close mobile nav
        if (link.classList.contains('main-nav-link')) {
            headerDiv.classList.toggle('nav-open')
        }

    })
})

// Sticky Header Navigation Bar

const sectionHeroDiv = document.querySelector('.section-hero');

const obs = new IntersectionObserver( function(entries) {
    const entry = entries[0]
    if (!entry.isIntersecting) {
        document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
        document.body.classList.remove("sticky");
    }
}, {
    // For Viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
})

obs.observe(sectionHeroDiv);

// Fix flexbox gap for Safari Browsers

function checkFlexGap() {
    let flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    let isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();