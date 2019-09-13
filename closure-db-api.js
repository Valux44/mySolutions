
// Closure exercise

const init = () => {
    const db = [];
    let api = [];

    const create = element => {
        db.push(element);
        return (db.length);
        // return db;             // if you want to log the actual contents of the array

    };
    const read = () => {
        // return db.slice(...db);                     //this was my initial code 
        return [...db];
    }
    const update = (index, newElement) => {
        if (index >= 0 && index <= (db.length - 1)) {
            db[index] = newElement;
            return db;
        }
        if (index < 0) {
            return 'GitRekt...Noob!'
        }
        if (index = '' && index > (db.length - 1)) {
            create();

        }

    }

    api.push(create);
    api.push(read);
    api.push(update);
    // api = [create, read, update];
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
// read().push('hack');
console.log(createInDb[1]());
console.log(createInDb[2](0, 'lets update and'));
console.log(createInDb[2](-1, 'whaaaaaa!'));
