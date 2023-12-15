import User from '../models/User.js'; // User 불러오기

/**
 * 단일 사용자 찾기
 *
 * @param {*} req 사용자 정보
 * @param {*} res 조회 결과
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
export function findOne(req, res) {
    const userId = req.params.userId;

    User.findOne({ id: userId })
        .exec()
        .then(function (user) {
            console.log("user",user);
            if (user == null) {
                return res.json({ status: 400, data: '존재하지 않는 사용자입니다.' });
            }

            return res.json({ status: 200, data: '로그인에 성공했습니다.' });
        })
        .catch(function (err) {
            return res.json(err);
        });
}

export function findByIdAndPassword(req, res) {
    const userId = req.params.userId;
    const password = req.params.password;
    const exists = true;

    User.findOne({ id: userId })
        .exec()
        .then(function (user) {
            if(user== null){
                exists = true;
            } else{
                exists = false;
            }
        });

    User.findOne({ id: userId, password: password })
        .exec()
        .then(function (user) {
            if (exists) {
                return res.json({ status: 400, data: '존재하지 않는 아이디입니다.' });
            } else {
                // ID는 존재.
                if (user == null) {
                    return res.json({ statue: 400, data: '비밀번호가 틀렸습니다.' });
                }
                return res.json({ status: 200, data: '로그인에 성공하였습니다.' });
            }
        })
        .catch(function (err) {
            return res.json(err);
        });
}

/**
 * 모든 사용자 찾기
 *
 * @param {*} res 조회 결과
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
export function findAllUser(res) {
    User.find()
        .exec()
        .then(function (users) {
            return res.json({ status: 200, data: users });
        })
        .catch(function (err) {
            return res.json(err);
        });
}

/**
 * 사용자 등록
 *
 * @param {*} req 사용자 정보
 * @param {*} res 등록 결과
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
export function insertUser(req, res) {
    const userId = req.body.id;
    console.log(req.url);

    User.findOne({ id: userId })
        .exec()
        .then(function (user) {
            if (user == null) {
                const result = new User(req.body);
                result.save();

                return res.json({ status: 200, data: '회원가입에 성공하였습니다.' });
            } else {
                return res.json({ status: 400, data: '존재하는 아이디입니다.' });
            }
        })
        .catch(function (err) {
            return res.json(err);
        });
}

/**
 * 사용자 정보 수정
 *
 * @param {*} req 사용자 아이디
 * @param {*} res 수정 결과
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
export function updateUser(req, res) {
    //TODO params 확인 필요
    const userId = req.params.userId;

    User.findOneAndUpdate({ id: userId }, req.body, { new: true })
        .exec()
        .then(function () {
            return res.json({ status: 200, data: '사용자 정보 수정을 성공했습니다.' });
        })
        .catch(function (err) {
            return res.json(err);
        });
}

/**
 * 사용자 정보 삭제
 *
 * @param {*} req 사용자 아이디
 * @param {*} res 삭제 결과
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
export function deleteUser(req, res) {
    const userId = req.params.userId;

    User.findByIdAndDelete({ id: userId })
        .exec()
        .then(function () {
            return res.json({ status: 200, data: '사용자 정보 삭제를 성공했습니다.' });
        })
        .catch(function (err) {
            return res.json(err);
        });
}
