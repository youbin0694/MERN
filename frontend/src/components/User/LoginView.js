import React from 'react';

function LoginView({ inputUser, findOne }) {
    return (
        <div>
            <h1>Login</h1>
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
                </thead>
            </table>
            <button
                style={{ display: 'auto', marginTop: '10px' }}
                onClick={findOne}
            >
                로그인
            </button>
        </div>
    );
}

export default LoginView;
