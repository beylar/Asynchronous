let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

module.exports = function(id) {
    return central(id)
        .then(dbIdentifier => {
            let dbPromise;

            if (dbIdentifier === 'db1') {
                dbPromise = db1(id);
            } else if (dbIdentifier === 'db2') {
                dbPromise = db2(id);
            } else if (dbIdentifier === 'db3') {
                dbPromise = db3(id);
            } else {
                return Promise.reject('Error central');
            }

            return dbPromise.then(userData => {
                return vault(id)
                    .then(personalData => {
                        // Fire and forget the mark service
                        mark(id).catch(() => {
                            // Handle error silently
                        });

                        return {
                            id: id,
                            username: userData.username,
                            country: userData.country,
                            firstname: personalData.firstname,
                            lastname: personalData.lastname,
                            email: personalData.email
                        };
                    });
            });
        })
        .catch(error => {
            if (error.message && error.message.includes('central')) {
                return Promise.reject('Error central');
            } else if (error.message && error.message.includes('vault')) {
                return Promise.reject('Error vault');
            } else if (error.message && error.message.includes('db1')) {
                return Promise.reject('Error db1');
            } else if (error.message && error.message.includes('db2')) {
                return Promise.reject('Error db2');
            } else if (error.message && error.message.includes('db3')) {
                return Promise.reject('Error db3');
            } else {
                return Promise.reject('Unknown error');
            }
        });
};
