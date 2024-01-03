function addCSSStyles() {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = getCSS();
    document.getElementsByTagName("head")[0].appendChild(style);
}

function getCSS() {
    return `
    
    body {
      margin-top: 45px;  
    } 
    
    .free-palestine-banner {
        background-color: rgb(47 47 47);
        text-align: center;
        color: white;
        position: absolute;
        width: 100%;
        padding: 0.5rem 0;
        font-size: 1.25rem;
        top: 0px;
        left: 0px;
        right: 0px;       
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
    `;
}

module.exports = addCSSStyles;