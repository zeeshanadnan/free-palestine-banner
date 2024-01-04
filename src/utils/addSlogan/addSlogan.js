function addSlogan(freePalestine) {
    freePalestine.classList.add("free-palestine-banner");
    const slogan = document.createElement("span");
    slogan.classList.add("free-paestine-banner-text-color-red");
    slogan.innerHTML = "&#x1f1f5;&#x1f1f8; #FreePalestine.";
    freePalestine.appendChild(slogan);
}

module.exports = addSlogan;