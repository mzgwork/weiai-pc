import React,{ Component } from 'react'
import './home.less'
import { Row, Col } from 'antd'
import p1 from '../../images/place1.png'
import company from '../../images/company.png'

class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="main">
                <div className="common-banner home-banner"></div>
                <div className="content-layout">
                    <div className="common-title">家庭 企业服务项目（虫害防治）</div>
                    <div>
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
                    </div>
                    <div className="common-title">服务场所</div>
                    <Row type="flex" justifity="center">
                        <Col span={8}>
                            <img src={p1} className="card-img" alt="标题"/>
                            <p className="card-text">服务场所标题</p>
                        </Col>
                        <Col span={8}>
                            <img src={p1} className="card-img" alt="标题"/>
                            <p className="card-text">服务场所标题</p>
                        </Col>
                        <Col span={8}>
                            <img src={p1} className="card-img" alt="标题"/>
                            <p className="card-text">服务场所标题</p>
                        </Col>
                    </Row>
                    <div className="place-icon-layout">
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img0"></div>
                            <p className="palce-icon-text">家庭社区</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img1"></div>
                            <p className="palce-icon-text">餐厅行业</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img2"></div>
                            <p className="palce-icon-text">写字楼办公室</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img3"></div>
                            <p className="palce-icon-text">超市卖场</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img4"></div>
                            <p className="palce-icon-text">物流仓储</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img5"></div>
                            <p className="palce-icon-text">娱乐场所美容院</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img6"></div>
                            <p className="palce-icon-text">学校医院</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img7"></div>
                            <p className="palce-icon-text">其他行业</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img8"></div>
                            <p className="palce-icon-text">食品厂工厂</p>
                        </div>
                        <div className="place-icon-item">
                            <div className="place-icon place-icon-img9"></div>
                            <p className="palce-icon-text">更多服务</p>
                        </div>
                    </div>
                    <div className="common-title">服务案例</div>
                    <Row type="flex" justify="center" className="case-layout">
                        <Col span={11}>
                            <img src={p1} className="case-card-img" alt="标题"/>
                            <h2 className="case-card-title">案例标题</h2>
                            <p className="case-card-text">案例描述案例描述案例描述案例描述</p>
                        </Col>
                        <Col span={12} justify="end">
                            <Row type="flex" justify="start" className="case-layout-right">
                                <Col span={12}>
                                    <img src={p1} className="case-layout-right-img" alt="标题" />
                                    <h2 className="case-layout-right-title">案例标题</h2>
                                    <p className="case-layout-right-text">案例描述案例描述案例描述案例描述</p>
                                </Col>
                                <Col span={12}>
                                    <img src={p1} className="case-layout-right-img" alt="标题" />
                                    <h2 className="case-layout-right-title">案例标题</h2>
                                    <p className="case-layout-right-text">案例描述案例描述案例描述案例描述</p>
                                </Col>
                                <Col span={12}>
                                    <img src={p1} className="case-layout-right-img" alt="标题" />
                                    <h2 className="case-layout-right-title">案例标题</h2>
                                    <p className="case-layout-right-text">案例描述案例描述案例描述案例描述</p>
                                </Col>
                                <Col span={12}>
                                    <img src={p1} className="case-layout-right-img" alt="标题" />
                                    <h2 className="case-layout-right-title">案例标题</h2>
                                    <p className="case-layout-right-text">案例描述案例描述案例描述案例描述</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* <div className="common-title">中标新闻</div>
                    <Carousel effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel> */}
                </div>
                <div className="company-layout">
                    <div className="common-title">公司简介</div>
                    <div className="company-layout-content">
                        <Row type="flex">
                            <Col span={11}><img src={company} alt="标题" /></Col>
                            <Col span={13} className="company-right">
                                <p>韦爱环保隶属于长沙凯佳环境科技有限公司专为家庭、企业上门提供消杀虫害服务，具备长沙市有害生物防制服务协会资质、是长沙有害生物防治协会会员单位，享有正规行业资质，我们的服务被广泛应用在大厦、  美容院、  医院、学校、  政府机关、宾馆、饭店、工厂、超市、家庭、  公园等诸多领域。  公司致力于开发高环保、高品质的卫生杀虫、和有言生物防治服务工作。  凯佳基于互联网的思维模式，以高速、高效、高感受服务理念服务于每一个客户，同时借此机会，改善服务行业的服务标准，提升服务质量，为客户提供更加快速标准化。透明化服务体质，同时也是对传统服务体系的变革。  我们的服务宗旨是:我们以服务快速，响应迅速为前提，为您解决烦劳;以工作高效，灭虫见效为目的，为您解决后顾之忧;以耐心热情、服务细心为态度，带给您舒心的感受。</p>
                                <Row type="flex" justify="start" className="company-right-flag">
                                    <Col span={12} className="company-right-item">服务30家上市公司</Col>
                                    <Col span={12} className="company-right-item">服务领袖行业逾100个</Col>
                                    <Col span={12} className="company-right-item">24小时上门服务 </Col>
                                    <Col span={12} className="company-right-item">互联网结合线下服务体系完善</Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home