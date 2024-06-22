
function superbowlWin(arr) {
    let val = arr.find(function (val) {
        return val.result === "W";
    });

    if (val === undefined) {
        return undefined;
    }
    return val.year;
}