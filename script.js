const text = document.querySelector('.second-text');
const textload = () => {
    setTimeout(() => {
        text.textContent = "Full Stack Web Developer"
    }, 0)
    setTimeout(() => {
        text.textContent = "Flutter Developer"
    }, 1000)
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 2000);
}
textload()