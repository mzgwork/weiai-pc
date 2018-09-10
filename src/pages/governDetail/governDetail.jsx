import React, { Component } from 'react'
import './governDetail.less'
import { Row, Col, Icon, Pagination } from 'antd'
import case1 from '../../images/case1.png'

class GovernDetail extends Component {
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
                    <div className="common-title">服务流程</div>
                    <Row type="flex" justifity="center" className="flow-content">
                        <Col span={4} className="flow-layout">
                            <div className="flow-img flow-icon0"></div>
                            <p className="flow-text">服务预约</p>
                        </Col>
                        <Col span={4} className="flow-layout">
                            <div className="flow-img flow-icon1"></div>
                            <p className="flow-text">上门勘察</p>
                        </Col>
                        <Col span={4} className="flow-layout">
                            <div className="flow-img flow-icon2"></div>
                            <p className="flow-text">沟通了解</p>
                        </Col>
                        <Col span={4} className="flow-layout">
                            <div className="flow-img flow-icon3"></div>
                            <p className="flow-text">检查虫害</p>
                        </Col>
                        <Col span={4} className="flow-layout">
                            <div className="flow-img flow-icon4"></div>
                            <p className="flow-text">物理化学灭杀</p>
                        </Col>
                        <Col span={4} className="flow-layout">
                            <div className="flow-img flow-icon5"></div>
                            <p className="flow-text">预防治理</p>
                        </Col>
                    </Row>

                    <Row type="flex" justifity="center" align="middle" className="serve-table-title">
                        <Col span={8}>服务内容</Col>
                        <Col span={8}>单次服务</Col>
                        <Col span={8}>包月套餐</Col>
                    </Row>
                    <Row type="flex" justifity="center" align="middle" className="serve-table-content">
                        <Col span={8}>环境检查</Col>
                        <Col span={8} className="right-icon"></Col>
                        <Col span={8} className="right-icon"></Col>
                    </Row>
                    <Row type="flex" justifity="center" align="middle" className="serve-table-content">
                        <Col span={8}>消毒作业</Col>
                        <Col span={8} className="right-icon"></Col>
                        <Col span={8} className="right-icon"></Col>
                    </Row>
                    <Row type="flex" justifity="center" align="middle" className="serve-table-content">
                        <Col span={8}>预防讲解</Col>
                        <Col span={8} className="right-icon"></Col>
                        <Col span={8} className="right-icon"></Col>
                    </Row>
                    <Row type="flex" justifity="center" align="middle" className="serve-table-content">
                        <Col span={8}>免费售后</Col>
                        <Col span={8} className="fault-icon"></Col>
                        <Col span={8} className="right-icon"></Col>
                    </Row>
                    
                    <div className="common-title">防治办法</div>
                    <p className="common-text-content">虫检查床：臭虫是靠吸血为生的寄生虫， 90 ％的臭虫选择都是藏身于宿主的周围，所以，作为昼伏夜出、伯光的臭虫来，床，是第一选择。包括床板、床架、床头、床垫以及床褥剩余 10 ％的旦中洗择也是在床的周围，如：床头柜、沙发、地脚线缝隙、地毯边缘、电源插座、挂画、爆霏氏、电线臭 1 ．说 2 ．等物理防治 1 、物理清除：吸尘清洁和胶带砧粘 2 、丢弃感染的家具及物品 3 、床垫使用床套包封 4 、高温、蒸汽或了氏温处理 S 、设置障碍或陷阱化学防治 1 、滞留喷洒：滞留喊西可用于皇中藏匿点的局部处理，如：裂纪细缝隙、踢脚板沿线、墙壁许接处、门窗框以及家具的内部和背面。 2 、杀虫粉剂：杀虫粉剂适用于谨寸闭的空间，如天花板、地板、墙体孔洞和插座；不适台在空旷的区域或在床体或家具上使用，因为它很容易扩散，在这些地方使用往往弄巧成拙。 3 、喷雾剂：雾剂也可在裂缝和缝隙处使用，还可用于抽屉滑轨及底面、涂料闷彭员处、地毯边缘以及床架。注意：有些气雾剂（不是所有）可以在家具上使用</p>

                    <div className="common-title">消杀现场</div>
                    <Row type="flex" justify="center" className="govern-case-layout">
                        <Col className="case-item" span={8}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
                        </Col>
                        <Col className="case-item" span={8}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
                        </Col>
                        <Col className="case-item" span={8}>
                            <img src={case1} alt="案例"  className="case-img"/>
                            <div className="case-title"><p>案例标题</p></div>
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

export default GovernDetail