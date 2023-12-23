export function createBanner(config) {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = getCSS();

  document.getElementsByTagName("head")[0].appendChild(style);

  let freePalestine = document.createElement("div");

  freePalestine.classList.add("free-palestine-banner");

  let slogan = document.createElement("span");
  slogan.classList.add("free-paestine-banner-text-color-red");
  slogan.innerHTML = "&#x1f1f5;&#x1f1f8; #FreePalestine.";
  freePalestine.appendChild(slogan);

  let additionalStatement = document.createElement("span");
  additionalStatement.classList.add("free-paestine-banner-text-color-green");
  let additionalStatementText =
    "Lets stand together in solidarity for the people of Palestine.";
  if (!isBlankString(config.statement)) {
    additionalStatementText = config.statement;
  }
  let additionalStatementTextNode = document.createTextNode(
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

  switch (config.position) {
    case "top": {
      freePalestine.classList.add("free-palestine-banner-position-top");
      break;
    }
    case "bottom": {
      freePalestine.classList.add("free-palestine-banner-position-bottom");
      break;
    }
    default: {
      freePalestine.classList.add("free-palestine-banner-position-top");
    }
  }

  window.addEventListener("load", function () {
    document.body.appendChild(freePalestine);
  });
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
