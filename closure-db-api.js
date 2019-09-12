
// Closure exercise

function init() {
    let db = [];

    function create(element) {
        db.push(element);
        return (db.length);

    }
    return create
}

const createInDb = init();

console.log(createInDb('lets'));
console.log(createInDb('see'));
console.log(createInDb('if'));
console.log(createInDb('this'));
console.log(createInDb('works'));
