function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
const bodyBg = document.body;
const btn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
btn.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    bodyBg.style.backgroundColor = newColor;
    colorText.textContent = newColor;
});