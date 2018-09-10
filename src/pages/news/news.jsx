import React, { Component } from 'react'
import './news.less'
import { Row, Col, Pagination } from 'antd'
import case1 from '../../images/case1.png'
import news1 from '../../images/news1.png'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
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
                <div className="common-banner news-banner"></div>
                <div className="content-layout">
                    <div className="common-title">中标新闻</div>
                    <Row type="flex" justifity="center" className="news-top">
                        <Col span={12} className="news-top-left">
                            <img src={news1} alt="新闻" />
                        </Col>
                        <Col span={12} className="news-top-right">
                            <h2 className="news-right-title">酒类防窜货系统的作用有哪些</h2>
                            <p className="news-right-date">2018-05-18</p>
                            <p className="news-right-text">白酒在中国具有较大的市场前景，窜货问题一直是白酒行业营销的一个顽疾，不少企业深受其害，然而白酒防窜货管理系统在利用消费者防伪验证查询，和查询到经销商的入库出库扫码以及物流区域信息并
能够根据用户扫码位置判断出是否存在存货现象...</p>
                        </Col>
                    </Row>

                    <Row type="flex" justifity="center" className="news-list-layout">
                        <Col className="news-list-left" span={2}>
                            <div className="news-list-icon">
                                <span className="news-icon-day">13</span>
                                <span className="news-icon-year">2018.01</span>
                            </div>
                        </Col>
                        <Col span={22} className="news-list-right">
                            <h2>酒类防窜货系统的作用有哪些</h2>
                            <p>白酒在中国具有较大的市场前景，窜货问题一直是白酒行业营销的一个顽疾，不少企业深受其害，然而白酒防窜货管理系统在利用消费者防伪验证查询，和查询到经销商的入库出库扫码以及物流区域信息并
能够根据用户扫码位置判断出是否存在存货现象...</p>
                        </Col>
                    </Row>
                    <Row type="flex" justifity="center" className="news-list-layout">
                        <Col className="news-list-left" span={2}>
                            <div className="news-list-icon">
                                <span className="news-icon-day">13</span>
                                <span className="news-icon-year">2018.01</span>
                            </div>
                        </Col>
                        <Col span={22} className="news-list-right">
                            <h2>酒类防窜货系统的作用有哪些</h2>
                            <p>白酒在中国具有较大的市场前景，窜货问题一直是白酒行业营销的一个顽疾，不少企业深受其害，然而白酒防窜货管理系统在利用消费者防伪验证查询，和查询到经销商的入库出库扫码以及物流区域信息并
能够根据用户扫码位置判断出是否存在存货现象...</p>
                        </Col>
                    </Row>
                    <Row type="flex" justifity="center" className="news-list-layout">
                        <Col className="news-list-left" span={2}>
                            <div className="news-list-icon">
                                <span className="news-icon-day">13</span>
                                <span className="news-icon-year">2018.01</span>
                            </div>
                        </Col>
                        <Col span={22} className="news-list-right">
                            <h2>酒类防窜货系统的作用有哪些</h2>
                            <p>白酒在中国具有较大的市场前景，窜货问题一直是白酒行业营销的一个顽疾，不少企业深受其害，然而白酒防窜货管理系统在利用消费者防伪验证查询，和查询到经销商的入库出库扫码以及物流区域信息并
能够根据用户扫码位置判断出是否存在存货现象...</p>
                        </Col>
                    </Row>

                    
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

export default News