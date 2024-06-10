// Typing Animation in .intro Section

function changeAboutMeText() {
    const aboutMeTexts = ["Full Stack Web Developer", "Flutter Developer", "Graphic Designer", "Freelancer"]
    const typingSpeed = 100;
    const eraseSpeed = 100;
    const pauseTime = 1500;
    const aboutMeElements = document.querySelector(".typingText");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];
        // Typing
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElements.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed)
        }

        // Erasing
        else if (isDeleting && charIndex > 0) {
            aboutMeElements.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed)
        }


        // Switiching the deleting or typing process
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length
            }
            setTimeout(type, pauseTime)
        }
    }
    type();
}



// Dark/Light Toggle

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('toggleBtn');
    const body = document.body;
    const intro = document.querySelector('.intro');
    const copyright = document.querySelector('.Copyright');
    const submitBtn = document.querySelector('.Btn');
    const downloadBtn = document.querySelector('.downloadBtn');
    const actionBtns = document.querySelectorAll('.actionBtn');
    const skillSets = document.querySelectorAll('.skillset');

    darkModeToggle.addEventListener('click', () => {
        const currentMode = body.classList.toggle('dark-mode') ? 'Dark' : 'Light';
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');

        if (currentMode === 'Dark') {
            intro.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';
            copyright.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';
            darkModeToggle.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';
            submitBtn.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';
            downloadBtn.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';

            actionBtns.forEach(actionBtn => {
                actionBtn.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';
            });

            skillSets.forEach(skillSet => {
                skillSet.style.color = 'white';
            });

            darkModeToggle.addEventListener('mouseover', () => {
                darkModeToggle.style.background = 'linear-gradient(to right, #cc2b5e 0%, #753a88 100%)';
            });
        } else {
            intro.style.background = 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)';
            copyright.style.background = 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)';
            darkModeToggle.style.background = 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)';
            submitBtn.style.background = 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)';
            downloadBtn.style.background = 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)';

            actionBtns.forEach(actionBtn => {
                actionBtn.style.background = 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)';
            });

            skillSets.forEach(skillSet => {
                skillSet.style.color = 'black';
            });
        }
    });
});





// changeAboutMeText function call
changeAboutMeText();


// document.addEventListener('DOMContentLoaded',function(){
//     const observer = new IntersectionObserver(entries=>{
//         entries.forEach(entry=>{
//             if(entry.isIntersecting){
//                 const progressBar=entry.target.querySelector('.progress-bar');
//                 const progress=progressBar.dataset.progress;
//                 progressBar.style.setProperty('--progress',`${progress}%`)
//                 progressBar.classList.add('animated');
//                 observer.unobserve(entry.target)
//             }
//         });
//         const programmingLanguages=document.querySelectorAll('#programmingLanguages .lang');
//         programmingLanguages.forEach(lang=>{
//             observer.observe(lang)
//         })
//     });
// });
