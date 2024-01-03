const addCSSStyles = require("./utils/addCSS/addCSSStyles");
const addSlogan = require("./utils/addSlogan/addSlogan");
const addAdditionalStatement = require("./utils/addStatement/addStatement")

function createBanner(config) {
  addCSSStyles();

  const freePalestine = document.createElement("div");

  addSlogan(freePalestine);

  addAdditionalStatement(freePalestine, config);

  window.addEventListener("load", function () {
    document.body.appendChild(freePalestine);
  });
}

module.exports = {createBanner};
