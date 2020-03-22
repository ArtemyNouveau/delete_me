function sum (array) {
    let sum = 0;
    if (Array.isArray(array)) sum = array.reduce((sum, num) => (sum + num));

    return (
        !Array.isArray(this) ?
        array.reduce((sum, num) => (sum + num)) :
        this.reduce((sum, num) => (sum + num)) + sum
    )
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
