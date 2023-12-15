import dotenv from 'dotenv' // env 파일
import express, { json } from 'express'; // express 모듈 불러오기
import db from './db/Connect.js'; // db 모듈 불러오기
import userRouter from './routes/UserRoutes.js'; // UserRoutes 불러오기

dotenv.config();
db(); // connection DB

const app = express(); // express 초기화 후 app 할당
app.set('port', process.env.PORT); // 서버가 실행될 포트 지정
app.use(json()); // JSON 변환
app.use('/api/user', userRouter); // User 관련 경로

app.listen(app.get('port'), () => {
    console.log('Server Connect Success!');

    // localhost:5000 보여지는.
    app.get('/', function(req,res){
        res.send('express 실행');
    });
});