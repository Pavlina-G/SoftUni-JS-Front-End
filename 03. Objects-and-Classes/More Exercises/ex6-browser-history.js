function browserHistory(obj, strArray) {
    let commands = strArray;

    let browser = 'Browser Name';
    let openTabs = 'Open Tabs';
    let closedTabs = 'Recently Closed';
    let logs = 'Browser Logs';


    for (const command of strArray) {
        let tab = '';
        if (command.startsWith('Open')) {
            tab = getTab(command, 'Open');
            if (!(tab in obj[openTabs])) {
                obj[openTabs].push(tab);
                obj[logs].push(command);
            }
        } else if (command.startsWith('Close')) {
            tab = getTab(command, 'Close');

            if (obj[openTabs].includes(tab)) {
                let updatedList = [];
                updatedList = obj[openTabs].filter((w) => {
                    return w !== tab;
                })
                obj[openTabs] = updatedList;
                obj[closedTabs].push(tab);
                obj[logs].push(command);

            }

        } else if (command.startsWith('Clear')) {
            obj[openTabs] = [];
            obj[closedTabs] = [];
            obj[logs] = [];
        }
    }


    console.log(obj[browser]);
    console.log(`Open Tabs: ${obj[openTabs].join(', ')}`);
    console.log(`Recently Closed: ${obj[closedTabs].join(', ')}`);
    console.log(`Browser Logs: ${obj[logs].join(', ')}`);


    function getTab(command, word) {
        return command.slice(command.indexOf(word) + word.length + 1);

    }

}

//
// browserHistory({
//         "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);