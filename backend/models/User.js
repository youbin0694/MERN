const mongoose = require('mongoose'); // Schema 모듈 가져오기
const Schema = mongoose.Schema;

// User Schema 정의
// mongoose -> Schema 기준으로 데이터 점검
const userSchema = new Schema(
    {
        id: { type: String, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        age: { type: Number, required: false },
    },
    {
        versionKey: false,
    }
);

// 작성된 스키마를 mongoose에서 사용할 수 있게, 모델 생성 및 내보내기
module.exports = mongoose.model('User', userSchema);



