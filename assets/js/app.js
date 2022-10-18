(function() {
    const containerInputSwitch = document.querySelector(".containerInputSwitch");

    //Themes switches
    containerInputSwitch.addEventListener("click", (evt) => {
        document.querySelectorAll(".radioSwitcher").forEach((element) => {
            if (evt.target.nodeName === "INPUT") {
                element.classList.remove("show");
            }
        });

        if (evt.target.nodeName === "INPUT") {
            evt.target.classList.add("show");
            document.documentElement.setAttribute("data-theme", evt.target.getAttribute("data-theme"));
        }

    });

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

})();