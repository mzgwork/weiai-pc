import React, { Component } from 'react'
import './placeDetail.less'
import { Row, Col, Icon, Pagination } from 'antd'
import case1 from '../../images/case1.png'
import p1 from '../../images/p1.png'
import xc from '../../images/xc.png'

class PlaceDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 3,
        }
    }

    onChange(page) {
        this.setState({
            current: page,
        });
    }

    render(){
        return (
            <div className="main">
                <div className="common-banner place-banner"></div>
                <div className="content-layout">
                    <div className="common-title">服务场所</div>
                    <Row type="flex" justifity="center" align="middle">
                        <Col span={12}>
                            <img src={p1} className="place-img" alt="标题"/>
                        </Col>
                        <Col span={12}>
                            <p className="place-text">环境卫生对餐饮行业来说，是做好生意的必备条件。近年来不断出现各种爆料，某餐厅食材违规，某原料含有害物质，某后厨爆出有老鼠有关部门对餐饮行业的卫生要求越发严格。哪怕是一只， Jv ］、的嶂螂，只要出现在客户面前，不光店铺将名誉扫地，造成巨大损失，还会受到卫生部门的处罚。</p>
                        </Col>
                    </Row>
                    
                    <div className="common-title">解决方案</div>
                    <Row type="flex" justify="center">
                        <Col span={4} className="place-flow-item">
                            <div className="place-flow-default place-flow-icon0"></div>
                            <p>服务预约</p>
                        </Col>
                        <Col span={4} className="place-flow-item">
                            <div className="place-flow-default place-flow-icon1"></div>
                            <p>上门勘察</p>
                        </Col>
                        <Col span={4} className="place-flow-item">
                            <div className="place-flow-default place-flow-icon2"></div>
                            <p>沟通了解</p>
                        </Col>
                        <Col span={4} className="place-flow-item">
                            <div className="place-flow-default place-flow-icon3"></div>
                            <p>检查虫害</p>
                        </Col>
                        <Col span={4} className="place-flow-item">
                            <div className="place-flow-default place-flow-icon4"></div>
                            <p>无力化学灭杀</p>
                        </Col>
                        <Col span={4} className="place-flow-item">
                            <div className="place-flow-default place-flow-icon5"></div>
                            <p>预防治理</p>
                        </Col>
                    </Row>

                    <div className="common-title">灭杀现场</div>
                    <Row type="flex" justifity="center">
                        <Col span={8}>
                            <img src={xc} className="three-card-img" alt="标题"/>
                            <p className="three-card-text">家庭社区</p>
                        </Col>
                        <Col span={8}>
                            <img src={xc} className="three-card-img" alt="标题"/>
                            <p className="three-card-text">家庭社区</p>
                        </Col>
                        <Col span={8}>
                            <img src={xc} className="three-card-img" alt="标题"/>
                            <p className="three-card-text">家庭社区</p>
                        </Col>
                    </Row>

                    <div className="common-title">客户评价</div>
                    <div className="evaluate-layout">
                        <div className="eva-icon"><Icon type="user-add" /></div>
                        <div className="eva-content">
                            <h2 className="eva-title">申女士(17****0354)  <span>2017-09-01  服务类型:灭蟑螂单次</span></h2>
                            <p className="eva-text">服务评价:服务必须夸奖-下,本来约的29号晚上的，因为有事临时取消了，客服莎莎很nice的又给另外约了个时间，工程师来的时候还给我电话确认了下,家里到处都检查了撒了药，今天开始出现了部分死的虫子，期待过几天的效果~~~</p>
                        </div>
                    </div>
                    <div className="evaluate-layout">
                        <div className="eva-icon"><Icon type="user-add" /></div>
                        <div className="eva-content">
                            <h2 className="eva-title">申女士(17****0354)  <span>2017-09-01  服务类型:灭蟑螂单次</span></h2>
                            <p className="eva-text">服务评价:服务必须夸奖-下,本来约的29号晚上的，因为有事临时取消了，客服莎莎很nice的又给另外约了个时间，工程师来的时候还给我电话确认了下,家里到处都检查了撒了药，今天开始出现了部分死的虫子，期待过几天的效果~~~</p>
                        </div>
                    </div>
                    <Pagination current={this.state.current} onChange={this.onChange.bind(this)} total={50} />

                    <Row type="flex" justify="center" className="govern-case-layout">
                        <Col className="case-item" span={6}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
                        </Col>
                        <Col className="case-item" span={6}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
                        </Col>
                        <Col className="case-item" span={6}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
                        </Col>
                        <Col className="case-item" span={6}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
                        </Col>
                    </Row>
                </div>
            
            </div>
        )
    }
}

export default PlaceDetail