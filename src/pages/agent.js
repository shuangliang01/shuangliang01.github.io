import { Tabs, Input } from 'antd';
import { StatCards } from "./statCards";
import { Instances } from "./instances";
import styled from "styled-components";
import {useEffect, useState} from "react";
import { getInstances } from "../services/api";

const { Search } = Input;
export const Agent = () => {
    const [data, setData] = useState([]);
    const [rawData, setRawData] = useState([])
    const [searchInput, setSearch] = useState();


    useEffect(() => {
        getInstances().then(res => {
            setData(res.data)
            setRawData(res.data)
        })
    }, [])

    const [renderSearchBarInTabs, setRenderSearchBarInTabs] = useState(window.innerWidth < 576 ? false : true)
    useEffect(() => {
        const fn = () => {
            if (window.innerWidth < 576) {
                setRenderSearchBarInTabs(false)
            } else {
                setRenderSearchBarInTabs(true)
            }
        }
        window.addEventListener('resize', fn)
        return () => window.removeEventListener('resize', fn)
    }, [])

    const searchFilter = (value, e) => {
        const newData = rawData.filter(item => item.host.includes(value))
        setData(newData)
    }

    const items = [
        {
            key: 'All',
            label: <TabLabel>All</TabLabel>,
            children: <Instances data={data} />,
        },
        {
            key: 'Physical',
            label: <TabLabel>Physical</TabLabel>,
            children: <Instances data={data.filter(item => item.type === 0)}  />,
        },
        {
            key: 'Visual',
            label: <TabLabel>Visual</TabLabel>,
            children: <Instances data={data.filter(item => item.type === 1)} />,
        },
    ];
    const menuBar = (
        <MenuBar>
            <SearchInput size='small' placeholder="input search text"
                         value={searchInput} onChange={(e) => {setSearch(e.target.value)}} onSearch={searchFilter}/>
            <div>
                <SwitchIcon className='icon icon-th-card' />
                <SwitchIcon className='icon icon-th-list' style={{ color: '#00b4cf' }} />
            </div>
        </MenuBar>
    )
    return  (
        <>
            <StatCards data={rawData}/>
                {!renderSearchBarInTabs && menuBar}
            <TabWrapper>
                <Tabs defaultActiveKey="1" items={items} tabBarStyle={tabBarStyle}
                tabBarExtraContent={renderSearchBarInTabs && menuBar}
                />
            </TabWrapper>
        </>
    )
}


const tabBarStyle = {
    backgroundColor: '#fff'
}

const TabLabel = styled.div`
  min-width: 80px;
`

const TabWrapper = styled.div`
  margin-top: 15px;
  position: relative;
`

const MenuBar = styled.div`
  height: 46px;
  display: flex;
`

const SearchInput = styled(Search)`
  width: 200px;
  margin-top: 10px;
  margin-right: 20px;
  @media (max-width: 576px) {
     width: 100%;
     margin-right: 0px;
  }

`

const SwitchIcon = styled.i`
  color: #999;
  font-size: 20px;
  line-height: 50px;
  margin: 0 20px 0 0px;
  cursor: pointer;
  &:hover {
        color: #00b4cf;
  }
  @media (max-width: 576px) {
        display: none
  }
`
