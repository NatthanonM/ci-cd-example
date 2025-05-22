const sayHello = require('./index');

test('greets the user', () => {
    expect(sayHello("Alice")).toBe("Hello, Alice!");
});
