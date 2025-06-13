function loadPage(id, pageUrl) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
      link.classList.remove('active');
    });

    

    fetch('./rs/pages/' + pageUrl)
        .then(response => response.text())
        .then(data => {
        document.getElementById('page-content').innerHTML = data;
        })
        .catch(error => {
        console.error('Error loading page:', error);
        document.getElementById('page-content').innerHTML = '<div class="container my-5"><h1>Error</h1><p>An error occurred while loading the page.</p></div>';
        });

    document.getElementById(id).classList.add('active');
}

// Load the default page (e.g., home)
loadPage('home', 'home.html');

function addService(serviceName) {
    const list = document.getElementById('selected-services');

    // Check if the service is already added
    if ([...list.children].some(li => li.textContent.trim().includes(serviceName))) {
    alert('Service already added.');
    return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
    <span>${serviceName}</span>
    <button class="btn btn-sm btn-danger" onclick="removeService(this)">Remove</button>
    `;

    list.appendChild(li);
}

function removeService(button) {
    // Remove the service item from the list
    const li = button.closest('li');
    li.remove();
}