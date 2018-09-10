import React, { Component } from 'react'
import './problems.less'
import { Row, Col, Pagination } from 'antd'
import case1 from '../../images/case1.png'

class Problems extends Component {
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
                <div className="common-banner problems-banner"></div>
                <div className="content-layout">
                    <div className="common-title">常见问题</div>
                    
                    <div className="problem-item-layout">
                        <div>
                            <span className="problem-icon-q">Q</span>
                            <span className="proble-item-q">日常生活中怎么解决蚊虫叮咬的问题？</span>
                        </div>
                        <div className="proble-item-a">
                            <div className="problem-icon-left">
                                <span className="problem-icon-a">A</span>
                            </div>
                            <span className="proble-item-text">生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。</span>
                        </div>
                    </div>
                    <div className="problem-item-layout">
                        <div>
                            <span className="problem-icon-q">Q</span>
                            <span className="proble-item-q">日常生活中怎么解决蚊虫叮咬的问题？</span>
                        </div>
                        <div className="proble-item-a">
                            <div className="problem-icon-left">
                                <span className="problem-icon-a">A</span>
                            </div>
                            <span className="proble-item-text">生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。</span>
                        </div>
                    </div>
                    <div className="problem-item-layout">
                        <div>
                            <span className="problem-icon-q">Q</span>
                            <span className="proble-item-q">日常生活中怎么解决蚊虫叮咬的问题？</span>
                        </div>
                        <div className="proble-item-a">
                            <div className="problem-icon-left">
                                <span className="problem-icon-a">A</span>
                            </div>
                            <span className="proble-item-text">生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。生活里面家里难免会出现一些烦心事，蚊虫叮咬人就是最令大家头疼的事情，最主要的是蚊虫叮咬 很可能会造成传染病，而且本身也会十分的痒痒今天我给大家一些生活经验，让大家远离蚊虫烦恼。</span>
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

export default Problems