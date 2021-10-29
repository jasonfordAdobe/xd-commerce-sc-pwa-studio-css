const { Color } = require("scenegraph");
const { alert, error } = require("@adobe/xd-plugin-toolkit/lib/dialogs");
var assets = require("assets");
const { toCSS } = require('css-convert-json');
const ColorJS = require('color');

require('./util/react-shim.jsx');
const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App.jsx");
const PanelController = require("./controllers/PanelController.js");

// function cssExportFunction() {

//     const colors = assets.colors.get();

//     let colorStyles = {};

//     let colorsSimplified = [];

//     colors.map((color) => {
//         colorsSimplified[color.name] = convertToColorObject(color.color.value);
//     })

//     colors.map((color) => {
//         colorStyles = Object.assign(colorStyles, colorMap(color));
//     })

//     colorStyles = Object.assign(colorStyles, {'--venia-global-color-gray-800': colorValueVarFormat(mixColors(colorsSimplified['Gray D1'],colorsSimplified['Gray D2']).rgbNumber())})
//     colorStyles = Object.assign(colorStyles, {'--venia-global-color-gray-600': colorValueVarFormat(mixColors(colorsSimplified['Gray D1'],colorsSimplified['Gray M1']).rgbNumber())})
//     colorStyles = Object.assign(colorStyles, {'--venia-global-color-gray-200': colorValueVarFormat(mixColors(colorsSimplified['White'],colorsSimplified['Gray L1']).rgbNumber(),0.1)})
//     colorStyles = Object.assign(colorStyles, {'--venia-global-color-gray-100': colorValueVarFormat(mixColors(colorsSimplified['White'],colorsSimplified['Gray L1']).rgbNumber(),0.5)})
//     colorStyles = Object.assign(colorStyles, {'--venia-global-color-gray-75': colorValueVarFormat(mixColors(colorsSimplified['White'],colorsSimplified['Gray L1']).rgbNumber(),0.75)})

//     let addStyles = {
//         ":global(:root)": {
//             "attributes": colorStyles
//         }
//     }

//     let styles = {
//         "children": {}
//     };

//     styles.children = addStyles;

//     console.log(toCSS(styles));

//     copyToClipboard(toCSS(styles));
// }

// function colorMap({ name, color }) {
//     const colorList = {
//         'Primary L1': '--venia-global-color-blue-400',
//         'Primary M1': '--venia-global-color-blue-500',
//         'Primary D1': '--venia-global-color-blue-800',
//         'White': '--venia-global-color-gray-50',
//         'Gray L1': '--venia-global-color-gray-300',
//         'Gray M1': '--venia-global-color-gray-500',
//         'Gray D1': '--venia-global-color-gray-700',
//         'Gray D2': '--venia-global-color-gray-900',
//         'Positive 1': '--venia-global-color-green-600',
//         'Positive 2': '--venia-global-color-green-700',
//         'Negative 1': '--venia-global-color-red-600',
//         'Negative 2': '--venia-global-color-red-700'
//     }

//     if(colorList[name]){
//         let tempJson = {}
//         if( name == 'Primary D1' ) {
//             let primaryColor = ColorJS(color.value);
//             let blue100 = primaryColor.darken(0.3);
//             let blue600 = primaryColor.lighten(0.2);
//             let blue700 = primaryColor.lighten(0.1);
//             tempJson['--venia-global-color-blue-100'] = colorValueVarFormat(blue100.rgbNumber());
//             tempJson['--venia-global-color-blue-600'] = colorValueVarFormat(blue600.rgbNumber());
//             tempJson['--venia-global-color-blue-700'] = colorValueVarFormat(blue700.rgbNumber());
//         }
//         if( name == 'Positive 1' ) {
//             let positiveColor = ColorJS(color.value);
//             let positive400 = positiveColor.darken(0.1);
//             let positive500 = positiveColor.darken(0.05);
//             tempJson['--venia-global-color-green-400'] = colorValueVarFormat(positive400.rgbNumber());
//             tempJson['--venia-global-color-green-500'] = colorValueVarFormat(positive500.rgbNumber());
//         }
//         if( name == 'Negative 1' ) {
//             let negativeColor = ColorJS(color.value);
//             let negative400 = negativeColor.darken(0.1);
//             let negative500 = negativeColor.darken(0.05);
//             tempJson['--venia-global-color-red-400'] = colorValueVarFormat(negative400.rgbNumber());
//             tempJson['--venia-global-color-red-500'] = colorValueVarFormat(negative500.rgbNumber());
//         }
//         tempJson[colorList[name]] = colorValueVarFormat(color.value)
//         return tempJson
//     }

// }

// function convertToColorObject(value) {
//     var tempColor = new Color(value).toRgba();
//     return ColorJS.rgb(tempColor.r, tempColor.g, tempColor.b);
// }

// function mixColors(color1, color2, value = .5) {
//     return color1.mix(color2, value);
// }

// function copyToClipboard(value) {
//     let clipboard = require("clipboard");
//     clipboard.copyText(value);
//     alertClipboardCopy();
// }

// async function alertClipboardCopy() {
//     await alert("Copied to Clipboard",
//     "The CSS has been copied to the clipboard");
// }

// function colorValueVarFormat(value) {
//     value = colorValueToRGBA(value)
//     return value.r + " " + value.g + " " + value.b;
// }

// function colorValueToRGBA(value) {
//     var tempColor = new Color(value);
//     return tempColor.toRgba();
// }

const pwaStudioPanel = new PanelController(App);

module.exports = {
    panels: {
        pwastudiopanel: pwaStudioPanel
    },
};
