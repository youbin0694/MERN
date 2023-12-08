const express = require('express');
const userController = require('../controllers/UserController'); // userController 불러오기

const router = express.Router();

// 등록
router.post('/add', userController.insertUser);

// 조회
router.get('/all', userController.findAllUser);
router.get('/:userId', userController.findUserById);

// 수정
router.put('/:userId', userController.updateUser);

// 삭제
router.delete('/:userId', userController.deleteUser);

module.exports = router;
