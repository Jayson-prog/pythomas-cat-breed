function showAlert() {
    const alertBox = document.createElement('div');
    alertBox.textContent = 'successfully added to cart';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50px';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.padding = '10px 20px';
    alertBox.style.backgroundColor = '#28a745';
    alertBox.style.color = 'white';
    alertBox.style.fontSize = '1.2em';
    alertBox.style.borderRadius = '5px';
    alertBox.style.opacity = '1';
    alertBox.style.transition = 'opacity 1s ease';

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => alertBox.remove(), 1000);
    }, 2000);
}

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', showAlert);
});