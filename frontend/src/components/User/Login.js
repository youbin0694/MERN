import axios from 'axios';
import React, { useState } from 'react';
import LoginView from './LoginView';

/**
 * 로그인
 *
 * @author yblee
 * @since 2023. 12. 15.
 */
function Login() {
    const ERROR_MSG = {
        findOne: '[User] 사용자 조회 실패',
    };

    const [input, setInput] = useState({});

    /**
     * 사용자 정보 저장
     *
     * @param {*} e 이벤트 발생
     *
     * @author yblee
     * @since 2023. 12. 15.
     */
    const inputUser = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    /**
     * 단일 사용자 조회
     *
     * @author yblee
     * @since 2023. 12. 15.
     */
    const findOne = async () => {
        const id = input.id;
        const password = input.password;
        try {
            const response = await axios.get(`/user/${id}/${password}`);
            const msg = response.data.data;

            if (response.data.status == 400) {
                window.confirm(msg);
            } else {
                window.confirm(msg);
            }
        } catch {
            console.log('Error:', ERROR_MSG['findOne']);
        }
    };

    const props = {
        inputUser,
        findOne,
    };

    return (
        <div>
            <LoginView {...props} />
        </div>
    );
}

export default Login;
