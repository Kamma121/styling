const tabs = document.querySelectorAll(".tab");

function changeText() {
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const currentNumber = "." + tab.classList[1];
            const currentElements = document.querySelectorAll(currentNumber);
            clearActive();
            currentElements.forEach((element) => {
                element.classList.add("active");
            })
        })
    })
}

function clearActive() {
    const active = document.querySelectorAll(".active");
    console.log(active);
    active.forEach((element) => {
        element.classList.remove("active");
    })
}

changeText();