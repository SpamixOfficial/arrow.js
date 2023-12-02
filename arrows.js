let arrow_test = (name, age) => { return `Hello ${name}, you stupid piece of ${age}-year old shit >:(`; }

let help = () => {
    console.log("\n| arrows.js Help\t\t\t\t|\n-------------------------------------------------\nUSAGE: arrows.js [NAME] [AGE] [OPTIONS]\nOptions:\n\t-h, --help: Print this message and exit.\n\n\nSpamixOfficial 2023\n");
    process.exit(0);
}

function filter_args(required_args = 1, auto_help=true, tooFewArgsMessage) {
    let argslist = process.argv.slice(2);
    let returnlist = [];
    let argument;
    let used_args = [];
    let matchlist = {
            "help": help,
            "h": help
    };
 
    for (let i in argslist) {
        if (argslist[i].startsWith("-") || argslist[i].startsWith("--")) {
            argument = argslist[i];
            for (let i1 = 0; i1 < 2; i1++) {
                argument = argument.replace('-', '');
            };
            used_args.push(argument);
        } else {
            returnlist.push(argslist[i]);
        };
    };


    for (let i in used_args) {
        if (used_args[i] in matchlist) {
            matchlist[used_args[i]]();
        }; 
    };
     
    if (returnlist.length < required_args) {
        if (auto_help) {
            matchlist["help"]();
        } else {
            if (tooFewArgsMessage === undefined) {
                console.log("\"auto_help\" is disabled and no \"tooFewArgsMessage\" is set, if you are the developer you may want to set a \"tooFewArgsMessage\" if this is intentional!");
            } else {
                console.log(tooFewArgsMessage);
            };
            process.exit(1);
        }; 
    }
    return returnlist;
} 



let [first_name, age] = filter_args(2, true);


console.log(arrow_test(first_name, age));
