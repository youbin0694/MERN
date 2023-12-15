import { Router } from 'express';
import { insertUser, findAllUser, findOne, updateUser, deleteUser, findByIdAndPassword } from '../controllers/UserController.js'; // userController 불러오기

const router = Router();

/** 사용자 등록 */
router.post('/add', insertUser);

/** 모든 사용자 조회 */
router.get('/all', findAllUser);
/** ID로 단일 사용자 조회 */
router.get('/:userId', findOne);
/** ID, PWD로 단일 사용자 조회 */
router.get('/:userId/:password', findByIdAndPassword);

/** 사용자 정보 수정 */
router.put('/:userId', updateUser);

/** 사용자 정보 삭제 */
router.delete('/:userId', deleteUser);

export default router;
