function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    mainImage.alt = `Image showing ${imageSrc}`;
}

const toggleFooterButton = document.getElementById('toggleFooter');
toggleFooterButton.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    footer.classList.toggle('hidden');
    toggleFooterButton.textContent = footer.classList.contains('hidden')
        ? 'Show Footer'
        : 'Hide Footer';
});

const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const message = document.getElementById('formMessage');

    if (!nameInput.value || !emailInput.value) {
        message.textContent = 'Please fill out both fields.';
        message.style.color = 'red';
    } else {
        message.textContent = `Thank you for subscribing, ${nameInput.value}!`;
        message.style.color = 'green';
    }
    message.classList.remove('hidden');
});

const mainImage = document.getElementById('mainImage');
mainImage.addEventListener('mouseover', () => {
    mainImage.classList.add('hovered');
});
mainImage.addEventListener('mouseout', () => {
    mainImage.classList.remove('hovered');
});
