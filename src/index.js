export function createBanner(config) {
  addCSSStyles();

  const freePalestine = document.createElement("div");

  addSlogan(freePalestine);

  addAdditionalStatement(freePalestine, config);

  if (isValidBannerPosition(config.position)) {
    freePalestine.classList.add(
      `free-palestine-banner-position-${config.position}`
    );
  } else {
    freePalestine.classList.add("free-palestine-banner-position-top");
  }

  window.addEventListener("load", function () {
    document.body.appendChild(freePalestine);
  });
}

function addCSSStyles() {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = getCSS();

  document.getElementsByTagName("head")[0].appendChild(style);
}

function addSlogan(freePalestine) {
  freePalestine.classList.add("free-palestine-banner");
  const slogan = document.createElement("span");
  slogan.classList.add("free-paestine-banner-text-color-red");
  slogan.innerHTML = "&#x1f1f5;&#x1f1f8; #FreePalestine.";
  freePalestine.appendChild(slogan);
}

function addAdditionalStatement(freePalestine, config) {
  const additionalStatement = document.createElement("span");
  additionalStatement.classList.add("free-paestine-banner-text-color-green");

  const additionalStatementText = isBlankString(config.statement)
    ? "Lets stand together in solidarity for the people of Palestine."
    : config.statement;

  const additionalStatementTextNode = document.createTextNode(
    additionalStatementText
  );
  additionalStatement.classList.add("free-paestine-banner-text-padding-left");
  additionalStatement.appendChild(additionalStatementTextNode);

  if (isValidUrl(config.externalLink)) {
    additionalStatement.classList.add("free-paestine-banner-link");
    additionalStatement.addEventListener("click", function () {
      window.open(config.externalLink, "_blank");
    });
  }
  freePalestine.appendChild(additionalStatement);
}

function getCSS() {
  return `
    .free-palestine-banner {
        --tw-bg-opacity: 1;
        background-color: rgb(47 47 47 / var(--tw-bg-opacity));
        text-align: center;
        color: white;
        position: absolute;
        width: 100%;
        padding: 0.5rem;
        font-size: 1.25rem;
    }

    .free-paestine-banner-text-color-red {
        color: #E4312b;
    }

    .free-paestine-banner-text-color-green {
        color: #149954;
      }

    .free-paestine-banner-link {
        text-decoration: underline;        
    }

    .free-paestine-banner-link:hover {
        text-decoration: underline;
        color: blue;
        cursor: pointer;        
    }

    .free-paestine-banner-text-padding-left {
        padding-left: 0.2rem;
    }

    .free-palestine-banner-position-top {
        top: 0px;
    }

    .free-palestine-banner-position-bottom {
        bottom: 0px;
    }
    `;
}

function isValidBannerPosition(position) {
  return position === "top" || position === "bottom";
}

function isBlankString(str) {
  return !str || /^\s*$/.test(str);
}

function isValidUrl(urlString) {
  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
