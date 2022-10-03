
/* Location hash management */

window.onhashchange = getBrowserHash;

function getBrowserHash() {

    if (location.hash != "") {
        const conceptID = decodeURIComponent(location.hash.replace("#", ""));
        const temp = conceptID.replace("/other", "").replace("/unspecified", "");
        if (temp.match(/[0-9]/g)) {
            ECT.Handler.setBrowserUri('1', conceptID);
        }
    }
}

function setBrowserHash(uri) {

    const newhash = encodeURIComponent(uri.split(" ").map((element) => { if ((element != "&") && (element != "/")) { return getConceptID(element); } else { return " " + element + " "; } }).join(''));
    if (newhash != location.hash) {
        let newlocation = document.location.href.substring(0, document.location.href.indexOf('#')); // without hash
        if (newhash != "") {
            newlocation += '#' + newhash;
        }
        history.pushState(null, null, newlocation);
    }
}

function getConceptID(entityURI) {

    let entityAsResidual = "";
    entityURI = String(entityURI);
    if (entityURI.indexOf('other') !== -1) {
        entityURI = entityURI.replace("/other", "");
        entityAsResidual = "/other";
    }
    if (entityURI.indexOf('unspecified') !== -1) {
        entityURI = entityURI.replace("/unspecified", "");
        entityAsResidual = "/unspecified";
    }

    const entityURIArray = entityURI.split('/');
    if ((entityURIArray.length > 0) && (entityURIArray[entityURIArray.length - 1] !== undefined)) {
        const conceptID = entityURIArray[entityURIArray.length - 1];
        if (conceptID.match(/[0-9]/g)) {
            return conceptID + entityAsResidual;
        }
    }

    return "";
}



/* ECT callback (N.B: settings is defined in Browser.cshtml) */

const callbacks = {
    getNewTokenFunction: async () => {
        try {
            let gtUrl = '../../gt';
            if (settings.isMajorVersionUrl == true) {
                gtUrl = '../../../gt'
            }
            const response = await fetch(gtUrl);
            const json = await response.json();
            const t = json.res;
            let s = '';
            const keyCharCode = t.charCodeAt(13);
            const offset = (keyCharCode - 48) % 70 % 14;
            for (let i = 0; i <= 12; i++) {
                let currentCharCode = t.charCodeAt(i);
                currentCharCode = currentCharCode - offset;
                s = s + String.fromCharCode(currentCharCode);
            }
            for (let i = 14; i < t.length; i++) {
                let currentCharCode = t.charCodeAt(i);
                currentCharCode = currentCharCode - offset;
                s = s + String.fromCharCode(currentCharCode);
            }
            return s;
        }
        catch (error) {
            console.log('Token Error message:');
            console.log(error);
            throw error;
        }
    },
    browserLoadedFunction: () => {
        getBrowserHash();
    },
    browserChangedFunction: (browserContent) => {        
        if (browserContent.uri !== undefined) {
            setBrowserHash(browserContent.uri);
        } 
    }
}

/* ECT configuration (N.B: settings is defined in Browser.cshtml) */

ECT.Handler.configure(settings, callbacks);










