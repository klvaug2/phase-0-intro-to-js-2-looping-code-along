const names=["Lisa", "Kaitlin", "Jan"];
const eventName = "suprise";

function writeCards(names, eventName) {
    let newArray = []
    for (let i = 0; i <names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return newArray;
}

writeCards("names", "eventName")

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}