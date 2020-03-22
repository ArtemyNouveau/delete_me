function sum (array) {
    return (!Array.isArray(this) ?
        array.reduce((sum, num) => (sum + num)) :
        this.reduce((sum, num) => (sum + num)) + array.reduce((sum, num) => (sum + num)))
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
