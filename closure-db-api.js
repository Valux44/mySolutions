
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
        // return db.slice(...db);                     //this was my initial code 
        return [...db];
    }
    let innerFunc = create;
    api.push(innerFunc);
    api.push(read);
    return api
    // return create;
};

const createInDb = init();



console.log(createInDb[0]('lets'));
console.log(createInDb[0]('see'));
console.log(createInDb[0]('if'));
console.log(createInDb[0]('this'));
console.log(createInDb[0]('works'));
console.log(createInDb[1]());
read().push('hack');
console.log(createInDb[1]());
