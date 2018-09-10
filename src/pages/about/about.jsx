import React, { Component } from 'react'
import './about.less'
import { Row, Col } from 'antd'
import case1 from '../../images/case1.png'
import partner from '../../images/partner.png'

class About extends Component {
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
                <div className="common-banner about-banner"></div>
                <div className="content-layout">
                    <div className="common-title">企业介绍</div>
                    <Row type="flex" justifity="center" className="about-top-content">
                        <Col span={10} className="about-top-left">
                            <div className="about-logo"></div>
                            <p className="about-slogan-text">致力于家庭环保一站式服务 健康服务 安全环保</p>
                        </Col>
                        <Col span={14} className="about-top-right">
                            <p>韦爱环保隶属于长沙凯佳环境科技有限公司专为家庭、企业上门提供消杀虫害服务，具备长沙市有害生物防制服务协会资质、是长沙有害生物防治协会会员单位，享有正规行业资质，拟门的服务被广泛应用在大厦、美容院、医院、学校、政府机关、宾馆、饭店、工厂、超市、家庭、公园等诸多领域。公司致力于开发高环保、高品质的卫生杀虫、和有害生物防治服务工作。韦爱基于互联网的思维模式，以高速、高效、高感受服务理念服务于每一个客户，同时借此机会，改善服务行业的服务标准，提升服务质量，为客户提积多劝口快速标准化，透明化服务体质，同时也轰封伶流服务体系的变革。我盯］的服务宗旨是：我盯 1 以月及务快速，响应讯谏为前提，为您解决烦劳二以工作高效，灭虫见效为目的，为您解决后顾之优；以耐例洲青、服务细心为态度，带给您舒合的感受。</p>
                        </Col>
                    </Row>

                    {/* <div className="common-title">资质证书</div>
                    <Row type="flex" justify="center" className="certificate-layout">
                        <Col className="certificate-item" span={6}>
                            <div className="certificate-content">
                                <img src={zs} alt="证书"  className="certificate-img"/>
                                <div className="certificate-title"><p>案例标题</p></div>
                            </div>
                        </Col>
                        <Col className="certificate-item" span={6}>
                            <div className="certificate-content">
                                <img src={zs} alt="证书"  className="certificate-img"/>
                                <div className="certificate-title"><p>案例标题</p></div>
                            </div>
                        </Col>
                        <Col className="certificate-item" span={6}>
                            <div className="certificate-content">
                                <img src={zs} alt="证书"  className="certificate-img"/>
                                <div className="certificate-title"><p>案例标题</p></div>
                            </div>
                        </Col>
                        <Col className="certificate-item" span={6}>
                            <div className="certificate-content">
                                <img src={zs} alt="证书"  className="certificate-img"/>
                                <div className="certificate-title"><p>案例标题</p></div>
                            </div>
                        </Col>
                    </Row> */}

                    <div className="common-title">服务优势</div>
                    <p className="common-text-content">让客户满意是我们工作的目标，不断超越客户的期待，并保持对这个行业的热爱。韦爱公司定位于家庭环保应用服务提供商，我们立志把最好的技术通过韦爱以最简单的方式提供给客户，为您的提供最简单的解决方案韦爱将通过不懈努力成为客户在信息化领域值得信任、有价值的长期合作伙伴。利用安全环保的手段为您解决家庭卫生问题</p>
                    <Row type="flex" justify="center" className="about-advantage">
                        <Col span={6}>
                            <div className="about-advantage-item about-advantage-img0"></div>
                        </Col>
                        <Col span={6}>
                            <div className="about-advantage-item about-advantage-img1"></div>
                        </Col>
                        <Col span={6}>
                            <div className="about-advantage-item about-advantage-img2"></div>
                        </Col>
                        <Col span={6}>
                            <div className="about-advantage-item about-advantage-img3"></div>
                        </Col>
                    </Row>
                    <div className="common-title">合作客户</div>
                    <div className="partner-layout">
                        <img src={partner} alt="合作伙伴"/>
                    </div>
                    
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

export default About