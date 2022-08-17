export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = "Ethan Kaur's Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.querySelector('h1').innerHTML = "I am Ethan Kaur";
    // document.body.children[0].innerHTNL = "I am Ethan Kaurs";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.querySelector(".section h2 + p").innerHTML = "Foobar";
    document.querySelector(".section h2 + p + p").innerHTML = "Foobar2";
}
