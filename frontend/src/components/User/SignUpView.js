import React from 'react';

function SignUpView({ inputUser, registerUser}) {
    return (
        <div>
            <h1>Sign up</h1>
            <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <span>
                                <input
                                    type="text"
                                    name="id"
                                    placeholder="아이디"
                                    onChange={inputUser}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <span>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="비밀번호"
                                    onChange={inputUser}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="이름"
                                    onChange={inputUser}
                                />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>나이</th>
                        <td>
                            <span>
                                <input
                                    type="text"
                                    name="age"
                                    placeholder="나이"
                                    onChange={inputUser}
                                />
                            </span>
                        </td>
                    </tr>
                </thead>
            </table>
            <button
                style={{ display: 'auto', marginTop: '10px' }}
                onClick={registerUser}
            >
                회원가입
            </button>
        </div>
    );
}

export default SignUpView;
