module.exports = function (func) {
    var wrapped = true

    return function () {
        if (wrapped) {
            return wrapped = undefined
        } else {
            return func.apply(this, arguments)
        }
    }
}
