const React = require("react");

const styles = require("./ColourChecker.css");

function ColourChecker(props){
    //console.log(props);
    // console.log({props.find});
    // console.log({props.haystack});
    //console.log(props.haystack.find(o => o.name === props.find));

    const colourExists = props.haystack.find(o => o.name === props.find) === undefined ? false : true;
    const colourExistsClass = colourExists ? "found" : "notFound"

    return (
        <h3 className={colourExistsClass}>{props.find} {colourExists ? "✔" : "✘"}</h3>
    );
};

module.exports = ColourChecker;