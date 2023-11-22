export function createBanner(config) {

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = getCSS();

    document.getElementsByTagName('head')[0].appendChild(style);

    let freePalestine = document.createElement("div");
    
    freePalestine.classList.add('free-palestine-banner');
    
    let textContent = document.createTextNode("🇵🇸 #FreePalestine");
    
    freePalestine.appendChild(textContent);

    switch (config.position) {
        case "top-right": {
            freePalestine.classList.add('free-palestine-top-right');
            break;
        }
        case "top-left": {
            freePalestine.classList.add('free-palestine-top-left');
            break;
        }
        case "bottom-right": {
            freePalestine.classList.add('free-palestine-bottom-right');
            break;
        }
        case "bottom-left": {
            freePalestine.classList.add('free-palestine-bottom-left');
            break;
        }
        default: {
            freePalestine.classList.add('free-palestine-bottom-right');
        }
    }

    freePalestine.addEventListener("click", redirectToCharityPage);


    window.addEventListener('load', function () {
        document.body.appendChild(freePalestine);
    });


}

function redirectToCharityPage() {
    window.open("https://www.islamic-relief.org.uk/giving/appeals/palestine/", "_blank");
}

function getCSS() {
    return `.free-palestine-banner {
        cursor: pointer;
        font-size: 22px;
        color: black;
        margin: 17px;        
        font-weight: bold;
        background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 3px, transparent 3px) 0% 0%/10px 10px no-repeat,
            radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px) 100% 0%/10px 10px no-repeat,
            radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/10px 10px no-repeat,
            radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/10px 10px no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 14px) calc(100% - 20px) no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 20px) calc(100% - 14px) no-repeat,
            conic-gradient(#ffffff 0%, #149954 27%, #000000 59%, #e4312b 100%);
        border-radius: 10px;
        padding: 12px 30px;
        box-sizing: border-box;
    }
    
    .free-palestine-top-right {
        position: fixed;
        top: 0;
        right: 0;
    }
    
    .free-palestine-top-left {
        position: fixed;
            top: 0;
            left: 0;
    }
    
    .free-palestine-bottom-right {
        position: fixed;
        bottom: 0;
        right: 0;
    }
    
    .free-palestine-bottom-left {
        position: fixed;
        bottom: 0;
        left: 0;
    }`;
}

