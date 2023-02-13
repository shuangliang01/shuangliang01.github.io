import {Button, Card, Popconfirm, Row, Tag, Input, Empty} from "antd";
import styled from "styled-components";
import {useEffect, useState} from "react";


const StatusTag = ({ status }) => {
    const color = status === 0 ? "#7fbc39" : "#ff9a2a";
    const text = status === 0 ? 'Idle' : 'Building';
    return (
        <StyledTag color={color} size={'small'}>{text}</StyledTag>
    )
}

export const Instances = ({data}) => {
    const [localData, setLocalData] = useState(data)
    const [tag, setTag] = useState()

    const onConfirm = (index) => {
        const tagString = tag.trim()
        if (tagString) {
            // same tag should be filtered
            const newTags = new Set(tagString.split(',').map(tag => tag.trim()).filter(tag => (tag.length > 0) && (localData[index].tags.indexOf(tag) < 0)))
            localData[index].tags = [...localData[index].tags, ...newTags]
        }
        setLocalData([...localData])
        setTag(null)
    }

    useEffect(() => {
        setLocalData(data)
    }, [data])
    // clear when reopen

    return (
        <>
            {data.length === 0 && <Empty />}
            {localData.map((item, index) => (
                <Card key={item.host} style={{ marginBottom: 10 }}>
                    <OSImage alt="operation system icon" src={item.icon}/>
                    <AgentCard status={item.status}>
                        <InfoRow>
                            <HostSpan><StyledIcon className="icon icon-desktop"/>{item.host}</HostSpan>
                            <InfoSpan><StatusTag status={item.status} /></InfoSpan>
                            <InfoSpan><StyledIcon className="icon icon-info"/>{item.ip}</InfoSpan>
                            <InfoSpan><StyledIcon className="icon icon-folder"/>{item.path}</InfoSpan>
                        </InfoRow>
                        <OperationRow>
                            <Popconfirm
                                title="Separate multiple resource name with commas"
                                description={
                                    <Input value={tag} onChange={(e) => {
                                        setTag(e.target.value)
                                    }} />
                                }
                                onConfirm={() => onConfirm(index)}
                                onCancel={(index) => setTag(null)}
                                okText="Add Resources"
                                cancelText="Cancel"
                                onOpenChange={(e)=>{!e && setTag(null)}}
                            >
                            <Button size='small' style={{marginRight: 8}} type="primary" shape="square"
                                    icon={<i className="icon icon-plus"/>}/>
                            </Popconfirm>
                            {item.tags.map((tag, index) => (
                                <OperationTag key={index} closable closeIcon={<i className="icon icon-trash"/>}
                                              onClose={() => null}>{tag}</OperationTag>
                            ))}
                            <DenyButton size='small' style={{float: 'right'}} type='primary'
                                        icon={<i className="icon icon-deny"/>}>Deny</DenyButton>
                        </OperationRow>
                    </AgentCard>
                </Card>
            ))
            }
        </>
    )
}

const InfoRow = styled(Row)`
    justify-content: space-between;
    @media (max-width: 475px) and (orientation: portrait) {
      flex-direction: column;
      align-items: flex-start;
      line-height: 30px;
    }
`

const StyledIcon = styled.i`
    color: #999;
    font-size: 20px;
    margin-right: 10px;
    vertical-align: middle;
`

const InfoSpan = styled.span`
    flex: 1;
    text-align: left;
`

const HostSpan = styled(InfoSpan)`
    color: #00b4cf;
`

const StyledTag = styled(Tag)`
    border-radius: 0;
    @media (max-width: 475px) and (orientation: portrait) {
      display: none;
`

const OperationRow = styled.div`
    margin: 30px 0 0 0;
    text-align: left;
`

const OperationTag = styled(Tag)`
    background: #efefef;
`
const OSImage = styled.img`
    width: 80px;
    float: left;
    margin-right: 16px;
    @media (max-width: 1200px) {
        display: none;
    }
`

const AgentCard = styled.div`
    @media (max-width: 475px) and (orientation: portrait) {
        border-left: 5px solid ${props => props.status === 0 ? "#7fbc39" : "#ff9a2a"};
    }
`

const DenyButton = styled(Button)`
    @media (max-width: 475px) and (orientation: portrait) {
        display: none
    }
`