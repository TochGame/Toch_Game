// script.js
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-btn');

// Select all buttons with class "topup-btn"
const buttons = document.querySelectorAll('.topup-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah aksi default link
        
        // Ambil judul dan deskripsi dari card yang bersangkutan
        const card = button.parentElement;
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        
        // Masukkan judul dan deskripsi ke dalam modal
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        // Tampilkan modal
        modal.style.display = 'flex';
    });
});

// Close modal when clicking on close button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of modal-content
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    // Simulasi delay untuk loading (bisa disesuaikan)
    setTimeout(function() {
        loading.style.display = "none";
        content.style.display = "block";
    }, 5000); // 2000ms = 2 detik
});

