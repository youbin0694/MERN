const User = require('../models/User'); // User 불러오기

// 단일 사용자 찾기
exports.findUserById = async (req, res) => {
    const userId = req.params.userId;

    // 1
    User.findOne({ id: userId })
        .exec()
        .then(function (user) {
            if (user == null) {
                user = '존재하지 않는 사용자입니다.';
            }
            return res.json(user);
        })
        .catch(function (err) {
            return res.json(err);
        });

    // 2
    try {
        const user = await User.findOne({ id: userId }).exec();
        if (user == null) {
            user = '존재하지 않는 사용자입니다.';
        }
        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};

// 모든 사용자 찾기
exports.findAllUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: userId }).exec();
        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};

// 새로운 사용자 등록
exports.insertUser = async (req, res) => {
    const userId = req.body.id;

    try {
        const userExists = await User.findOne({ id: userId }).exec();
        if (userExists != null) {
            user = '존재하는 아이디입니다.';
        }
        const user = new User(req.body);
        await user.save();

        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};

// 사용자 정보 수정
exports.updateUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findOneAndUpdate({ id: userId }, req.body, { new: true }).exec();
        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};

// 사용자 삭제
exports.deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findOneAndDelete({ id: userId }).exec();
        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
};
