function isValidMinutes(value) {
    if (value === undefined || value.isNaN || typeof value === "string") {
        return false
    }

    return value > 0 && !(value > 180)


}

module.exports = { isValidMinutes }