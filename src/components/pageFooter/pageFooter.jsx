import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import './pageFooter.less'
import { Row, Col } from 'antd'
import qrcode from '../../images/qrcode.png'

class pageFooter extends Component {
    render() {
        return (
            <div className="common-footer">
                <div className="home-flag">
                    <Row type="flex">
                        <Col span={6}>
                            <div className="flag-img-layout flag-img0"></div>
                            <h2 className="flag-title">专业人员</h2>
                            <p className="flag-text">培训上岗，技能满分</p>
                        </Col>
                        <Col span={6}>
                            <div className="flag-img-layout flag-img1"></div>
                            <h2 className="flag-title">安全环保</h2>
                            <p className="flag-text">国际进口，药品合格</p>
                        </Col>
                        <Col span={6}>
                            <div className="flag-img-layout flag-img2"></div>
                            <h2 className="flag-title">快速便捷</h2>
                            <p className="flag-text">响应迅速，100%准时</p>
                        </Col>
                        <Col span={6}>
                            <div className="flag-img-layout flag-img3"></div>
                            <h2 className="flag-title">资质齐全</h2>
                            <p className="flag-text">PCO资质防制机构</p>
                        </Col>
                    </Row>
                </div>
                <div className="footer-layout">
                    <div className="footer-content">
                        <Row type="flex" justify="start">
                            <Col span={6}>
                                <h2 className="footer-title">联系我们</h2>
                                <p className="footer-text">
                                    业务电话：徐经理 18874977350<br/>
                                    业务QQ : 491263438<br/>
                                    售前邮箱 : 491263438@qq.com<br/>
                                    售后邮箱 : 2108425204@qq.com
                                </p>
                            </Col>
                            <Col span={12}>
                                <h2 className="footer-title">服务理念</h2>
                                <p className="footer-text">
                                本公司为客户提供全方位的套餐服务，凯佳致力于为客户提供卫生环保生活管家<br/>- -站式家庭灭虫，除甲醛服务，客户可单项选择一项服务或多项;<br/>
        我们将根据客户需求定期拜访维护，定时清洁，守护客户家庭、企业卫生。为客<br/>户创造良好干净卫生舒适的环境是我们一- 直以来的服务理念。
                                </p>
                            </Col>
                            <Col span={6}><img src={qrcode} alt="扫一扫联系我们" /></Col>
                        </Row>
                        <div className="copy-right">长沙市凯佳环境科技有限公司湘ICP备18016855号-1<br/>
        地址:长沙市岳麓区润泽园A区188单元203号房</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(pageFooter)