document.addEventListener('DOMContentLoaded', function() {
    // Handle menu item clicks
    const menuItems = document.querySelectorAll('.menu-section li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Handle user profile dropdown
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            // Add dropdown functionality here
            console.log('User profile clicked');
        });
    }

    // Cases table functionality
    const casesTableBody = document.getElementById('casesTableBody');
    if (casesTableBody) {
        const casesData = [
            {
                id: 1,
                date: '8/29/2024',
                complainant: 'දමිත්‍ර දෙල්කන් ඉදිකිරි දෙල්කන් කාර්යාලයෙන්',
                against: '',
                summary: '',
                currentAction: 'A',
                status: ''
            },
            // Add more cases as needed
        ];

        casesTableBody.innerHTML = casesData.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.date}</td>
                <td>${item.complainant}</td>
                <td>${item.against}</td>
                <td>${item.summary}</td>
                <td>${item.currentAction}</td>
                <td>${item.status}</td>
                <td><a href="#">Edit</a></td>
                <td><a href="#">View</a></td>
                <td><a href="#">Update</a></td>
            </tr>
        `).join('');
    }

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const from = document.querySelector('input[name="from"]').value;
            const to = document.querySelector('input[name="to"]').value;
            const summary = document.querySelector('input[name="summary"]').value;
            
            console.log('Search params:', { from, to, summary });
            // Implement your search logic here
        });
    }

    initializeSearchPerson();

    // Handle submenu active states
    const submenuItems = document.querySelectorAll('.submenu li');
    submenuItems.forEach(item => {
        if (window.location.href.includes(item.querySelector('a').getAttribute('href'))) {
            item.classList.add('active');
            item.closest('.has-submenu').classList.add('active');
        }
    });

    const registrationForm = document.querySelector('.registration-form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Add your form submission logic here
            console.log('Form submitted successfully');
        });
    }

    const modal = document.getElementById('typeModal');
    const addNewBtn = document.getElementById('addNewType');
    const closeModal = document.querySelector('.close-modal');
    const editLinks = document.querySelectorAll('.edit-link');
    const typeForm = document.querySelector('.type-form');
    
    // Open modal for new type
    addNewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        closeModalFn();
    });
    
    // Handle edit clicks
    editLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('tr');
            const type = row.cells[0].textContent;
            const status = row.cells[1].textContent;
            
            openModal(type, status);
        });
    });
    
    // Handle form submission
    typeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        closeModalFn();
    });
    
    function openModal(type = '', status = 'Active') {
        document.getElementById('typeName').value = type;
        document.getElementById('typeStatus').value = status;
        modal.classList.add('active');
    }
    
    function closeModalFn() {
        modal.classList.remove('active');
        typeForm.reset();
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFn();
        }
    });
});

function initializeSearchPerson() {
    const searchBtn = document.querySelector('.search-btn');
    const resultsList = document.getElementById('resultsList');

    if (searchBtn && resultsList) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.getElementById('searchInput').value;
            
            // Example results - replace with actual API call
            const results = [
                {
                    name: 'John Doe',
                    nic: '199012345678',
                    address: 'No 123, Sample Street, Colombo',
                    date: '2024-01-15',
                    status: 'Active'
                }
                // Add more results as needed
            ];

            // Display results
            resultsList.innerHTML = results.map(result => `
                <div class="result-item">
                    <h3>${result.name}</h3>
                    <p><strong>NIC:</strong> ${result.nic}</p>
                    <p><strong>Address:</strong> ${result.address}</p>
                    <div class="meta">
                        <span>Date: ${result.date}</span>
                        <span>Status: ${result.status}</span>
                    </div>
                </div>
            `).join('');
        });
    }
}
