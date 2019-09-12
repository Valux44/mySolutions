
// Closure exercise

const init = () => {
    const db = [];
    const api = [];

    const create = element => {
        db.push(element);
        return (db.length);
        // return db;             // if you want to log the actual contents of the array

    };

    api.push(create);
    return api
};

const createInDb = init();

console.log(createInDb(1));
console.log(createInDb('see'));
console.log(createInDb('if'));
console.log(createInDb('this'));
console.log(createInDb('works'));
