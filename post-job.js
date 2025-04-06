document.addEventListener('DOMContentLoaded', () => {
    const jobPostForm = document.getElementById('jobPostForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');

    jobPostForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            companyName: document.getElementById('companyName').value,
            jobTitle: document.getElementById('jobTitle').value,
            location: document.getElementById('location').value,
            jobType: document.getElementById('jobType').value,
            industry: document.getElementById('industry').value,
            salaryMin: document.getElementById('salaryMin').value,
            salaryMax: document.getElementById('salaryMax').value,
            description: document.getElementById('description').value,
            qualifications: document.getElementById('qualifications').value,
            contactInfo: document.getElementById('contactInfo').value,
            status: 'pending',
            datePosted: new Date().toISOString()
        };

        // In a real application, this would send the data to a backend
        console.log('Job posting submitted:', formData);

        // Show confirmation modal
        confirmationModal.style.display = 'block';

        // Reset form
        jobPostForm.reset();
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });

    // Form validation
    const requiredFields = jobPostForm.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.value.trim() === '') {
                field.classList.add('invalid');
            } else {
                field.classList.remove('invalid');
            }
        });
    });
}); 