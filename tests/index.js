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

exports.t03 = function (test) {
    var f = function (message) { return message }

    f = unwrappable(f)
    f = unwrappable(f)
    f = unwrappable(f)

    test.ok(f('hello') === undefined)
    test.ok(f('hello') === undefined)
    test.ok(f('hello') === undefined)
    test.ok(f('hello') === 'hello')
    test.ok(f('hello') === 'hello')
    test.ok(f('hello') === 'hello')
    test.done()
}

exports.t04 = function (test) {
    var f = function () { return Array.prototype.slice.call(arguments).join(' ') }

    f = unwrappable(f)
    f = unwrappable(f)
    f = unwrappable(f)
    f = unwrappable(f)

    test.ok(f('hello', 'world') === undefined)
    test.ok(f('hello', 'world') === undefined)
    test.ok(f('hello', 'world') === undefined)
    test.ok(f('hello', 'world') === undefined)
    test.ok(f('hello', 'world') === 'hello world')
    test.ok(f('hello', 'world') === 'hello world')
    test.ok(f('hello', 'world') === 'hello world')
    test.ok(f('hello', 'world') === 'hello world')
    test.done()
}
