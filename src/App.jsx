const React = require('react');

const styles = require('./App.css');

const { alert, error } = require("@adobe/xd-plugin-toolkit/lib/dialogs");

const ColourCheckerList = require('./components/ColourCheckerList.jsx');
const GenerateCSSButton = require('./components/GenerateCSSButton.jsx');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.panel = React.createRef();
        this.documentStateChanged = this.documentStateChanged.bind(this);

    }

    documentStateChanged(selection) {
        if (selection.items.length > 0) {
            // If selection changes
        }
    }

    render() {
        const { selection } = this.props;

        async function alertClipboardCopy() {
            await alert("Copied to Clipboard",
            "Command is in the clipboard, run it in the PWA root directory.");
        }

        function pwaUpgradeCmd() {
            let clipboard = require("clipboard");
            clipboard.copyText('curl -sS https://raw.githubusercontent.com/jasonfordAdobe/xd-commerce-sc-pwa-studio-css/main/supporting-scripts/updatepwa.sh | bash');
            alertClipboardCopy();
        }
        
        return (
            <panel className={styles.panel}>
                <p>This is a plugin designed to work with the <a href="https://www.adobe.io/commerce-xd-kits/">PWA Studio XD Kit</a>.</p>
                <p>It's main aim is to make it easy for SC's to update a local PWA with customer colours.</p>
                <p><span className="bold">Note:</span> XD is a design tool, and is not directly linked to your Adobe Commerce PWA. Changes you make here beyond what is supported, will not suddenly appear in a PWA.</p>
                <hr/>
                <h2>Step 1 - Scaffold your PWA Studio</h2>
                <p>Follow the <a href="https://magento.github.io/pwa-studio/pwa-buildpack/scaffolding/">instructions</a> to scaffold a standard Venia PWA.</p>
                <hr/>
                <h2>Step 2 - Extend the base styles</h2>
                <p>Run this command in terminal from within your PWA Studio root folder.</p>
                <button onClick={pwaUpgradeCmd}>Copy Command</button>
                <hr/>
                <h2>Step 3 - Generate CSS</h2>
                <p>This button will take the colours you've chosen in XD and generate CSS that can be copied into the tokens.module.css file in your PWA.</p>
                <GenerateCSSButton />
                <p>You need to copy this to the end of the file <code>src/overrides/venia-ui/tokens.module.css</code></p>
                <hr/>
                <h2>Step 4 - Run your PWA</h2>
                <p>Run the command <code>yarn watch</code> to see your PWA in the browser.</p>
                <p>You only need to do Step 3, to make further changes.</p>
                <hr/>
                <h2>Validator</h2>
                <p>This plugin only works with the PWA Studio XD Kit. You need to have the following items in the document for it to work.</p>
                <ColourCheckerList />
            </panel>
        );
    }
}

module.exports = App;