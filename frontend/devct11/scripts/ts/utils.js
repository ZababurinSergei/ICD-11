var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
console.log("loading utils.ts");
var loadingGif = document.getElementById('loading-gif');
var callbacks = {
    searchStartedFunction: function () {
        if (loadingGif !== null) {
            loadingGif.classList.remove('hide');
        }
    },
    searchEndedFunction: function () {
        if (loadingGif !== null) {
            loadingGif.classList.add('hide');
        }
    },
    getNewTokenFunction: function () { return __awaiter(_this, void 0, void 0, function () {
        var response, json, t, s, keyCharCode, offset, i, currentCharCode, i, currentCharCode, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('../../gt')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    t = json.res;
                    s = '';
                    keyCharCode = t.charCodeAt(13);
                    offset = (keyCharCode - 48) % 70 % 14;
                    for (i = 0; i <= 12; i++) {
                        currentCharCode = t.charCodeAt(i);
                        currentCharCode = currentCharCode - offset;
                        s = s + String.fromCharCode(currentCharCode);
                    }
                    for (i = 14; i < t.length; i++) {
                        currentCharCode = t.charCodeAt(i);
                        currentCharCode = currentCharCode - offset;
                        s = s + String.fromCharCode(currentCharCode);
                    }
                    return [2 /*return*/, s];
                case 3:
                    error_1 = _a.sent();
                    console.log('Token Error message:');
                    console.log(error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); }
    //browserLoadedFunction: () => {
    //    console.log("browserLoadedFunction");
    //    // @ts-ignore
    //    getBrowserHash();
    //},
    //browserChangedFunction: (browserContent) => {
    //    console.log("browserChangedFunction");
    //    console.log(browserContent);
    //    if (browserContent.uri !== undefined) {
    //        // @ts-ignore
    //        setBrowserHash(browserContent.uri);            
    //    }
    //}
};
// @ts-ignore
ECT.Handler.configure(settings, callbacks); // "settings" comes from indexR.cshtml
/*
// @ts-ignore
ECT.Handler.overwriteConfiguration("1", { chaptersFilter: '18;19', wordsAvailable: false, height: "200px" });

// @ts-ignore
ECT.Handler.overwriteConfiguration("2", { chaptersFilter: '23', height: "210px", searchByCodeOrURI: true });

// @ts-ignore
ECT.Handler.overwriteConfiguration("3", { popupMode: true });

// @ts-ignore
ECT.Handler.bind("1");

// @ts-ignore
ECT.Handler.bind("2");

// @ts-ignore
ECT.Handler.bind("3");
*/ 
//# sourceMappingURL=utils.js.map