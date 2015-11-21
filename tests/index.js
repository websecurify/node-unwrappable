var unwrappable = require('../lib')

exports.t01 = function (test) {
    var f = function () { return 'abc' }

    f = unwrappable(f)

    test.ok(f() === undefined)
    test.ok(f() === 'abc')
    test.ok(f() === 'abc')
    test.done()
}

exports.t02 = function (test) {
    var f = function () { return 'abc' }

    f = unwrappable(f)
    f = unwrappable(f)

    test.ok(f() === undefined)
    test.ok(f() === undefined)
    test.ok(f() === 'abc')
    test.ok(f() === 'abc')
    test.done()
}
