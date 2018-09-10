import React, { Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import './case.less'
import p1 from '../../images/place1.png'

class Case extends Component {
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
                <div className="content-layout">
                    <div className="common-title">行业案例</div>
                    <Row type="flex" justify="start" className="commoon-news-list">
                        <Col span={8} className="commoon-news-item">
                            <img src={p1} alt="中标新闻" className="commoon-news-img"></img>
                            <h2 className="commoon-news-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <p className="commoon-news-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                            <div className="tag">品牌营销网站 地产行业</div>
                        </Col>
                        <Col span={8} className="commoon-news-item">
                            <img src={p1} alt="中标新闻" className="commoon-news-img"></img>
                            <h2 className="commoon-news-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <p className="commoon-news-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                            <div className="tag">品牌营销网站 地产行业</div>
                        </Col>
                        <Col span={8} className="commoon-news-item">
                            <img src={p1} alt="中标新闻" className="commoon-news-img"></img>
                            <h2 className="commoon-news-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <p className="commoon-news-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                            <div className="tag">品牌营销网站 地产行业</div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="start" className="commoon-news-list">
                        <Col span={8} className="commoon-news-item">
                            <img src={p1} alt="中标新闻" className="commoon-news-img"></img>
                            <h2 className="commoon-news-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <p className="commoon-news-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                            <div className="tag">品牌营销网站 地产行业</div>
                        </Col>
                        <Col span={8} className="commoon-news-item">
                            <img src={p1} alt="中标新闻" className="commoon-news-img"></img>
                            <h2 className="commoon-news-title">法国产酒区儿童患癌率升高 疑与使用杀虫剂有关</h2>
                            <p className="commoon-news-desc">法国酿酒重镇波尔多附近的普雷尼亚克村近年儿童患癌症案急增，比率是全国平均水平5倍</p>
                            <div className="tag">品牌营销网站 地产行业</div>
                        </Col>
                    </Row>
                    <Pagination current={this.state.current} onChange={this.onChange.bind(this)} total={50} />
                </div>
            </div>
        )
    }
}

export default Case