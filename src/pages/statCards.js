import { Card, Col, Row } from 'antd';
import styled, {keyframes} from "styled-components";

export const StatCards = ({data}) => {
    return (
        <Row gutter={[32, 16]}>
            <Col xs={12} sm={8}>
                <StatCard style={{ background: '#ff9a2a' }}>
                    <Label>Building</Label>
                    <Count>{(data.filter(item => item.status === 1)).length}</Count>
                    <BuildingIcon className='icon icon-cog' />
                </StatCard>
            </Col>
            <Col xs={12} sm={8}>
                <StatCard style={{ background: '#7fbc39' }}>
                    <Label>Idle</Label>
                    <Count>{(data.filter(item => item.status === 0)).length}</Count>
                    <StyledIcon className='icon icon-coffee' />
                </StatCard>
            </Col>
            <Col xs={24} sm={8}>
                <StatCard bodyStyle={{ padding: 0 }}>
                    <CountWrapper>
                        <span>All</span>
                        <span>PHYSICAL</span>
                        <span>VIRTUAL</span>
                        <CountItem>{(data).length}</CountItem>
                        <CountItem>{(data.filter(item => item.type === 0)).length}</CountItem>
                        <CountItem>{(data.filter(item => item.type === 1)).length}</CountItem>
                    </CountWrapper>
                </StatCard>
            </Col>
        </Row>
    )
}

const StatCard = styled(Card)`
  height: 118px;
  position: relative;
  color: #fff;
`

const Count = styled.span`
  position: absolute;
  bottom: 15px;
  right: 20px;
  font-size: 48px;
`

const Label = styled.span`
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
`


const StyledIcon = styled.i`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.2;
  font-size: 115px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const BuildingIcon = styled(StyledIcon)`
  animation: ${rotate} 20s linear infinite;
`
const CountWrapper = styled.div`
  height: 118px;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  @media (max-width: 1200px) and (min-width: 576px) {
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
  }
`

const CountItem = styled.span`
  font-weight: bold;   
  font-size: 20px;
`