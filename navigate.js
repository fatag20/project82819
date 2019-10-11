function navigateTo(page) {
    let url = "pages/" + page + ".html";
    console.log("I'm in the navigate function for " + url);
    document.getElementsByTagName("main")[0].setAttribute("w3-include-html", url);

    let buttonId = page + "-button";

    let navBarList = document.getElementById("main-nav").childNodes;
    console.log(navBarList);

    navBarList.forEach(button => {
        if (button.nodeName != "#text") {
            console.log("I am inside the loop for button with id " + button.id);
            if (button.id == buttonId) {
                button.classList.add("current");
            } else {
                button.classList.remove("current");
            }
        }
    });
    includeHTML();
}