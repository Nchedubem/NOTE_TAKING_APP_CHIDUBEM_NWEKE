##This is a project template for LMTechub students. ##Few steps to get started

- Clone the repository in the created folder for your project using: "git clone git@github.com:promise-J/LMTechub_Javascript_Template.git ./"
- Run rm -fr .git to destroy any previous git connection with the cloned remote repo
- From the terminal in your project folder, run the command "npm install" (You should see a generated node_modules folder)
- create a new branch feature using "git branch feature" then check out to the branch
- MAKE SURE YOU DO NOT COMMIT TO THE MAIN BRANCH
- Follow the project layout in adding your HTML, CSS AND Images to the project
- To test your lint check for HTML run "npm run lint:html"
- To test your lint check for CSS run "npm run lint:css"
- To test your lint check for both HTML and CSS files (both HTML and CSS) run "npm run lint:all"
- To test your lint check for Javascript run "npm run js-lint"
- To fix your lint error/warnings for css files run "npm run fix:lint:css"
- To fix your lint error/warnings for javascript files run "npm run js-lint-fix"
- Only when your lints checks are completed, get started to git, link to your remote repository, commit changes, push changes.
- After changes have been pushed, make a pull request between the feature branch and the main branch.

Make sure to update this README.md file with the usual as in the HTML/CSS Module. Tag your instructor and supervisor.
Feel free to create a file(s) as the need arises.
Remember to add okechukwupromise638@gmail.com to review


const dynamicText = document.querySelector("h1 span");
const words = ["Love", "like Art", "the Future", "Everything"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();