document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('location');
    const jobTypeSelect = document.getElementById('jobType');
    const industrySelect = document.getElementById('industry');
    const jobResults = document.getElementById('jobResults');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');

    // Sample job data (in a real application, this would come from a backend)
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            type: 'full-time',
            industry: 'tech',
            description: 'Looking for an experienced software engineer to join our team...',
            salary: '$100,000 - $150,000'
        },
        // Add more sample jobs as needed
    ];

    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        const location = locationInput.value.toLowerCase();
        const jobType = jobTypeSelect.value;
        const industry = industrySelect.value;

        return jobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                                job.company.toLowerCase().includes(searchTerm);
            const matchesLocation = !location || job.location.toLowerCase().includes(location);
            const matchesType = !jobType || job.type === jobType;
            const matchesIndustry = !industry || job.industry === industry;

            return matchesSearch && matchesLocation && matchesType && matchesIndustry;
        });
    }

    function displayJobs(filteredJobs) {
        jobResults.innerHTML = '';

        if (filteredJobs.length === 0) {
            jobResults.innerHTML = '<p class="no-results">No jobs found matching your criteria.</p>';
            return;
        }

        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <div class="company">${job.company}</div>
                <div class="details">
                    <span>${job.location}</span>
                    <span>${job.type}</span>
                    <span>${job.salary}</span>
                </div>
                <div class="description">${job.description}</div>
                <button onclick="applyForJob(${job.id})">Apply Now</button>
            `;
            jobResults.appendChild(jobCard);
        });
    }

    function applyForJob(jobId) {
        // In a real application, this would send the application to a backend
        confirmationModal.style.display = 'block';
    }

    // Event listeners
    searchBtn.addEventListener('click', () => {
        const filteredJobs = filterJobs();
        displayJobs(filteredJobs);
    });

    [locationInput, jobTypeSelect, industrySelect].forEach(filter => {
        filter.addEventListener('change', () => {
            const filteredJobs = filterJobs();
            displayJobs(filteredJobs);
        });
    });

    closeModal.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });

    // Initial display of all jobs
    displayJobs(jobs);
}); 