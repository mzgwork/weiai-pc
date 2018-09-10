import React, { Component } from 'react'
import './place.less'
import { Row, Col } from 'antd'
import case1 from '../../images/case1.png'
import p1 from '../../images/place1.png'
import { Link } from 'react-router-dom'

class Place extends Component {
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
                    <Row type="flex" justifity="center">
                        <Col span={8}>
                            <Link to="/placeDetail/1">
                                <img src={p1} className="card-img" alt="标题"/>
                                <p className="card-text">服务场所标题</p>
                            </Link>
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
                    <div className="common-title">中标新闻</div>
                    <Row type="flex" justify="center" className="news-scroll-list">
                        <Col span={8} className="news-scroll-item">
                            <img src={p1} alt="中标新闻"></img>
                            <h2 className="news-scroll-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <span className="news-scroll-date">2015.09.29</span>
                            <p className="news-scroll-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                        </Col>
                        <Col span={8} className="news-scroll-item">
                            <img src={p1} alt="中标新闻"></img>
                            <h2 className="news-scroll-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <span className="news-scroll-date">2015.09.29</span>
                            <p className="news-scroll-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                        </Col>
                        <Col span={8} className="news-scroll-item">
                            <img src={p1} alt="中标新闻"></img>
                            <h2 className="news-scroll-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <span className="news-scroll-date">2015.09.29</span>
                            <p className="news-scroll-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                        </Col>
                    </Row>

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

export default Place