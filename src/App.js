import React from "react";
import styled from "styled-components";
import {Layout, Avatar, Button, Dropdown} from 'antd';
import {Agent} from "./pages/agent";
import { ReactComponent as Logo } from "./asserts/logo.svg";
import { LeftMenu } from "./components/sider";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;


function App() {
    const [menuVisible, setVisible] = useState(false)
    const items = [{key:'1', label:(
            <a target="_blank" rel="refer" href="https://shuangliang01.github.io/document/resume.pdf">
                <StyledIcon className="icon icon-id-card" />
                Profile
            </a>
        )}, {key:'2', label: (
            <a target="_blank" rel="no" href="">
                <StyledIcon className="icon icon-sign-in" />
                Sign Out
            </a>
        ), disabled: true}]


    return (
      <StyledLayout>
          <Header style={headerStyle}>
              <MenuButton className='show-menu icon-navicon' onClick={() => setVisible(!menuVisible)}/>
              <StyledLogo />
              <Dropdown menu={{items}}>
                  <a onClick={(e) => e.preventDefault()}>
                      <Avatar size='large' src='./img/cat.jpg' />
                      <AngleDownIcon className="iconfont icon-angle-down" />
                  </a>
              </Dropdown>
          </Header>
          <ContentLayout>
              <Sider
                  trigger={<i className='show-menu icon-navicon' />}
                  style={siderStyle} onBreakpoint={(broken) => setVisible(broken)} collapsed={menuVisible} width={250}  breakpoint="md" collapsedWidth="0">
                  <LeftMenu />
              </Sider>
              <StyledContent style={contentStyle}>
                  <Agent />
              </StyledContent>
          </ContentLayout>
          <Footer style={footerStyle}>
              © Copyright 2023
          </Footer>
      </StyledLayout>
  );
}

const StyledLogo = styled(Logo)`
  height: 30px;
  flex: 3;
`

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: #f3f3f3;
`

const ContentLayout = styled(Layout)`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  @media (max-width: 1200px) {
      max-width: 1024px;
  }
`

const StyledContent = styled(Content)`
    overflow-y: auto;
    overflow-x: hidden;
`

const AngleDownIcon = styled.i`
    font-size: 20px;
    margin-left: 8px;
    color: #999;
`

const StyledIcon = styled.i`
    margin: 0 12px 0 0;
`

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: '#fff',
    padding: 15,
};

const siderStyle = {
    overflow: 'auto',
};

const footerStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: 10,
    boxShadow: '0px 1px 5px 0 rgba(0, 0, 0, 0.2)',
}

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 1px 5px 0 rgba(0, 0, 0, 0.2)',
    zIndex: 1,
};

const MenuButton = styled.i`
  font-size: 24px;
  @media(min-width: 768px) {
    display: none;
  }
`

export default App;
