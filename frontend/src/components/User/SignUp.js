import axios from 'axios';
import React, { useState } from 'react';
import SignUpView from './SignUpView';

/**
 * 회원가입
 * 
 * @author yblee
 * @since 2023. 12. 15.
 */
function SignUp() {
    const ERROR_MSG = {
        registerUser: '[User] 사용자 등록 실패',
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
     * 사용자 정보 등록
     * 
     * @author yblee
     * @since 2023. 12. 15.
     */
    const registerUser = async () => {
        try {
            const response = await axios.post(`/user/add`, input);
            const msg = response.data.data;

            if (response.data.status === 400) {
                window.confirm(msg);
            } else {
                window.confirm(msg);
            }
        } catch (error) {
            console.log('Error:', ERROR_MSG['registerUser']);
        }
    };

    const props = {
        inputUser,
        registerUser,
    };

    return (
        <div>
            <SignUpView {...props} />
        </div>
    );
}

export default SignUp;
