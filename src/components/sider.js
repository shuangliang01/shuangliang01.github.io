import {Menu} from "antd";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { getHistory} from "../services/api";

const items = [
    {
        label: 'Dashboard',
        key: 'Dashboard',
        icon: <i className='icon icon-dashboard'/>
    },
    {
        label: 'Agent',
        key: 'Agent',
        icon: <i className='icon icon-sitemap'/>
    },
    {
        label: 'MY CRUISE',
        key: 'MY CRUISE',
        icon: <i className='icon icon-boat' />
    },
    {
        label: 'HELP',
        key: 'HELP',
        icon: <i className='icon icon-life-bouy'/>
    },
]

export const LeftMenu = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getHistory().then((res) => setData(res.data))
    },[])

    return (
        <>
            <Menu
                items={items}
                theme='dark'
                selectedKeys={['Agent']}
            />
            <StyledH2>History</StyledH2>
            <StyledUl>
                {data.map(item => (
                        <StyledLi key={item.url}>
                            <StyledA href="/">{item.url}</StyledA>
                        </StyledLi>
                    ))
                }
            </StyledUl>
        </>
    )
}

const StyledUl = styled.ul`
  list-style: disc;
  padding: 0px 0 20px 25px;
  color: #999;
  font-size: 12px;
`

const StyledH2 = styled.h2`
  margin: 80px 0 10px 20px;
  font-size: 24px;
  font-weight: 500;
  color: #ccc;
`
const StyledLi = styled.li`
  height: 25px;
  line-height: 25px;
`
const StyledA = styled.a`
  padding-left: 10px;
  width: 200px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  vertical-align: middle;  
`