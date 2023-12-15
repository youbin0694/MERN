import dotenv from 'dotenv'; // env 파일
import { connect } from 'mongoose';

dotenv.config();

/**
 * DB 연결
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
function db() {
    try {
        // DB 연결
        connect(process.env.MONGO_URL);
        console.log('DB Connect Success!');
    } catch (error) {
        console.log('error');
    }
}

export default db;
