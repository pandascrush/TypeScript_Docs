function call() {
    var count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
        decrease: function () {
            count--;
        }
    };
}
var count = call();
count.increment();
count.increment();
console.log(count.getCount());
count.decrease();
console.log(count.getCount());
