function superbowlWin(data) {
    let result = data.find(data => data.result === "W")
    if (result) {
        return result.year
    }
    else {
        return undefined
    };
}
