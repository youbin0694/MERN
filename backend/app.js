const express = require('express'); // express 모듈 불러오기
const db = require('./db/Connect'); // db 모듈 불러오기

const app = express(); // express 초기화 후 app 할당
const userRouter = require('./routes/UserRoutes'); // UserRoutes 불러오기

app.set('port', process.env.PORT || 3000); // 서버가 실행될 포트 지정

db(); // connection DB
app.use(express.json()); // JSON 변환
app.use('/api/user', userRouter); // User 관련 경로

app.listen(app.get('port'), () => {
    // 몇 번 포트에서 서버 실행하지 지정
    console.log('express 실행');
});
