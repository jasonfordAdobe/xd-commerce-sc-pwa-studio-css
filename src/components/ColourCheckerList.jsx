const React = require("react");
const ColourChecker = require("./ColourChecker.jsx");

var assets = require("assets");

const styles = require("./ColourCheckerList.css");

function ColourCheckerList(props){

    const colors = assets.colors.get();

    const coloursToCheck = [
        'Primary - Brand',
        'Primary L1',
        'Primary M1',
        'Primary D1',
        'White',
        'Gray L1',
        'Gray L2',
        'Gray M1',
        'Gray D1',
        'Gray D2',
        'Positive 1',
        'Positive 2',
        'Negative 1',
        'Negative 2'
    ];
    
    return (
        <React.Fragment>
            {coloursToCheck.map((colourToCheck) => (
                <ColourChecker find={colourToCheck} haystack={colors} />
            ))}
        </React.Fragment>
    );
};

module.exports = ColourCheckerList;