// #region Variables

const buttonContainer = document.getElementById("button-container");

const continueButton = document.getElementById("continue-button");
const newGameButton = document.getElementById("new-game-button");
const homeButton = document.getElementById("home-button");

const contentContainer = document.getElementById("content-container");

// #endregion

// #region Main

initButtons();

// #endregion

// #region Functions

function initButtons()
{
    for (let button of buttonContainer.children)
    {
        button.addEventListener("pointerenter", () =>
        {
            playSound("/sounds/hover.wav");
        });
    }

    continueButton.addEventListener("click", () =>
    {
        let target = contentContainer.offsetTop;
        window.scrollTo({ top: target, behavior: 'smooth' });
    });

    homeButton.addEventListener("click", () =>
    {
        window.location.href = "/";
    })
}

// #endregion