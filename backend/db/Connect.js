const mongoose = require('mongoose');

const mongo = async () => {
    try {
        // DB 연결
        mongoose.connect('mongodb://ubin:ubin@localhost:27017/admin');
        console.log('connection');
    } catch (error) {
        console.log('error');
    }
};

module.exports = mongo;