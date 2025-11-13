function call(a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
}
console.log(call("a", "b", "c"));
console.log(call("a", "b"));
