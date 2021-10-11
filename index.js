function superbowlWin(data) {
    let result = data.find(data => data.result === "W")
    // return !!result ? result.year : undefined
    debugger
    if (result) {
        return result.year
    }
    else {
        return undefined
    };
}
