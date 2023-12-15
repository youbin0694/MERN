import { Schema as _Schema, model } from 'mongoose'; // Schema 모듈 가져오기
const Schema = _Schema;

/**
 * 사용자 스키마 정의
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
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
export default model('User', userSchema);
