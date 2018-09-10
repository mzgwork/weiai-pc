import React, { Component } from 'react'
import './govern.less'
import { Row, Col, Icon, Pagination } from 'antd'
import case1 from '../../images/case1.png'

class Govern extends Component {
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
                <div className="common-banner govern-banner"></div>
                <div className="content-layout">
                    <div className="common-title">服务场所</div>
                    <Row type="flex" justifity="center">
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon0"></div>
                            <p className="serve-project-text">灭蟑螂</p>
                        </Col>
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon1"></div>
                            <p className="serve-project-text">灭老鼠</p>
                        </Col>
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon2"></div>
                            <p className="serve-project-text">灭苍蝇</p>
                        </Col>
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon3"></div>
                            <p className="serve-project-text">灭蚊子</p>
                        </Col>
                    </Row>
                    <Row type="flex" justifity="center">
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon4"></div>
                            <p className="serve-project-text">灭跳蚤</p>
                        </Col>
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon5"></div>
                            <p className="serve-project-text">甲醛处理</p>
                        </Col>
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon6"></div>
                            <p className="serve-project-text">灭蚂蚁</p>
                        </Col>
                        <Col span={6} className="serve-project-item">
                            <div className="serve-project-icon7"></div>
                            <p className="serve-project-text">灭白蚁</p>
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

export default Govern