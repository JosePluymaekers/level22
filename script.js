
const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(function () {
        callback();
    }, 3000);
}

const klaarMetHuiswerk = function () {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    console.log('Finished my homework');
}
doHomework('math', alertFinished);