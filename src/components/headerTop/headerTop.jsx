import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import './headerTop.less'
import logo from '../../images/logo.png'
import { Row, Col,Icon } from 'antd'
import {
    Link
} from 'react-router-dom'

class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top">
                <Row>
                    <Col span={4}>
                        <a><img src={logo} alt="韦爱" className="logo" /></a>
                    </Col>
                    <Col span={16} offset={4}>
                        <Row type="flex" align="middle" justify="end" className="nav-item-layout">
                            <Col span={3} className="nav-item">
                                <Link to="/" className="nav-text">
                                    <Icon type="home" className="nav-icon" />
                                    首页
                                </Link>
                            </Col>
                            <Col span={3} className="nav-item">
                                <Link to="/govern" className="nav-text">
                                    <Icon type="home" className="nav-icon" />
                                    虫害防治
                                </Link>
                            </Col>
                            <Col span={3} className="nav-item">
                                <Link to="/case" className="nav-text">
                                    <Icon type="appstore-o" className="nav-icon" />
                                    服务案例
                                </Link>
                            </Col>
                            <Col span={3} className="nav-item">
                                <Link to="/place" className="nav-text">
                                    <Icon type="file-unknown" className="nav-icon" />
                                    服务场所
                                </Link>
                            </Col>
                            <Col span={3} className="nav-item">
                                <Link to="/problems" className="nav-text">
                                    <Icon type="file-unknown" className="nav-icon" />
                                    常见问题
                                </Link>
                            </Col>
                            <Col span={3} className="nav-item">
                                <Link to="/about" className="nav-text">
                                    <Icon type="usergroup-add" className="nav-icon" />
                                    关于我们
                                </Link>
                            </Col>
                            {/* <Col span={3} className="nav-item">
                                <Link to="/news" className="nav-text">
                                    <Icon type="copy" className="nav-icon" />
                                    新闻资讯
                                </Link>
                            </Col> */}
                            {/* <Col span={3}>
                                <Link to="/" className="nav-text">
                                    <Icon type="home" className="nav-icon" />
                                    首页
                                </Link>
                            </Col> */}
                        </Row>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(HeaderTop)