const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


const images = [
    { filename: 'pic1.jpg', alt: "Closeup of a human eye" },
    { filename: 'pic2.jpg', alt: "Rock that looks like a wave" },
    { filename: 'pic3.jpg', alt: "Purple and white pansies" },
    { filename: 'pic4.jpg', alt: "Pharaoh's tomb" },
    { filename: 'pic5.jpg', alt: "Large moth on a leaf" }
];


function updateDisplayedImage(src, alt) {
    displayedImage.setAttribute("src", src);
    displayedImage.setAttribute("alt", alt);
}



for (const image of images) {
    const newImage = document.createElement("img");
    const url = baseURL + image.filename;

    newImage.setAttribute("src", url);
    newImage.setAttribute("alt", image.alt);
    newImage.setAttribute("tabindex", "0");

    thumbBar.appendChild(newImage);


    newImage.addEventListener("click", (e) => {
        updateDisplayedImage(e.target.src, e.target.alt);
    });
    newImage.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            updateDisplayedImage(e.target.src, e.target.alt);
        }
    });
}
