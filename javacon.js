document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const menuItems = document.getElementById('menuItems');

    toggleBtn.addEventListener('click', function() {
        menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
    });

    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menuItems.contains(event.target) && event.target !== toggleBtn) {
            menuItems.style.display = 'none';
        }
    });
});

// JavaScript Document