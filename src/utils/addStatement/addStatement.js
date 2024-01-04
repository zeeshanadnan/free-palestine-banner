const isValidUrl = require("./isValidUrl");
const isBlankString = require("./checkBlankString");

function addAdditionalStatement(freePalestine, config) {
    const additionalStatement = document.createElement("span");
    additionalStatement.classList.add("free-paestine-banner-text-color-green");

    const additionalStatementText = isBlankString(config?.statement)
        ? "Lets stand together in solidarity for the people of Palestine."
        : config.statement;

    const additionalStatementTextNode = document.createTextNode(
        additionalStatementText
    );
    additionalStatement.classList.add("free-paestine-banner-text-padding-left");
    additionalStatement.appendChild(additionalStatementTextNode);

    if (isValidUrl(config?.externalLink)) {
        additionalStatement.classList.add("free-paestine-banner-link");
        additionalStatement.addEventListener("click", function () {
            window.open(config.externalLink, "_blank");
        });
    }
    freePalestine.appendChild(additionalStatement);
}

module.exports = addAdditionalStatement;