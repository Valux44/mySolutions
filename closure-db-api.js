
// Closure exercise

const init = () => {
    const db = [];
    const api = [];

    const create = element => {
        db.push(element);
        return (db.length);
        // return db;             // if you want to log the actual contents of the array

    };
    const read = () => {
        // return db.slice(...db);
        return [...db];
    }
    let innerFunc = create;
    api.push(innerFunc);
    return api
    // return create;
};

const createInDb = init();

console.log(createInDb[0](1));
console.log(createInDb[0]('see'));
console.log(createInDb[0]('if'));
console.log(createInDb[0]('this'));
console.log(createInDb[0]('works'));
