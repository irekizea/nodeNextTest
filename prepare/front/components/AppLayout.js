import React, { useState} from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm'

const SearchInput = styled(Input.Search)`
  vertical-align : middle;
`

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode={"horizontal"}>
                <Menu.Item>
                    <Link href = "/"><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = "/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput  enterButton />
                </Menu.Item>
                <Menu.Item>
                     <Link href = "/signup"><a>가입</a></Link>
                </Menu.Item>
                <div>공통</div>


            </Menu>
            <Row gutter ={9}>
                <Col xs = {24} md = {6} >
                    {isLoggedIn ? <UserProfile /> : <LoginForm setIsLoggedIn={{setIsLoggedIn}}/>}
                </Col>
                <Col xs = {24} md = {12} >
                    {children}
                </Col>
                <a href = "https://www.naver.com" target="_blank" rel="noreferrer noopener"> naver </a>
                <Col xs = {24} md = {6} >
            </Col>
        </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;