import React, { useState, useCallback, useMemo} from 'react'
import {Form, Input, Button} from "antd";
import Link from 'next/link';
import styled from 'styled-components'
import UserProfile from "./UserProfile";

const ButtonWrapper = styled.div`
margin-top:10px;
`;

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) =>{
        setId(e.target.value)
    }, []);

    const onChangePassword = useCallback((e) =>{
        setPassword(e.target.value)
    }, []);

    const style = useMemo(() => ({ marginTop : 10}), [])

    const onSubmitForm = useCallback(() => {
        console.log(id, password)
    }, [id, password])

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a>회원가입</a></Link>
            </ButtonWrapper>
        </Form>
    )
}

export default LoginForm;