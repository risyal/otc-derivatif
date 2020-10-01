import React from "react";
import auth from "./auth";
import ImgLogo from '../../src/img/site-logo.png';
import {
    Row,
    Col
} from 'antd';
import {
    UserOutlined,
    LockTwoTone,
    FileTextTwoTone
} from '@ant-design/icons';

export const LandingPage = props => {
    return (
        <div className="body">
            {/* <h1>Landing Page</h1>
            <button
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/otc-derivatif");
                    });
                }}
            >
                Login
            </button> */}

            <div className="containerHome">
                <span className="logoHome">CCP SBNT</span>
            </div>

            <section id="log" className="containerHome">
                {/* <div className="row"> */}
                <Row>
                    <Col span={12} id="one">
                    {/* <div className="col-lg-6" id="one"> */}
                        <h2 className="h2">Welcome to</h2>
                            <h6 className="h6">
                                Central Counterparty Untuk Transaksi Derivatif Suku Bunga dan 
                                <br />Nilai Tukar Over-The-Counter
                            </h6>
                    {/* </div> */}
                    </Col>

                    <Col span={12}>
                    {/* <div className="col-lg-6"> */}
                        <div className="login-content">
                            <form>
                                <img src={ImgLogo} className="logokpei"></img>
                            </form>
                            <div className="input-div one">
                                <div className="i">
                                    <UserOutlined style={{ color: '#52c41a'}}/>
                                </div>
                                <div className="div">
                                    <input placeholder="Username" type="text" className="input " />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <LockTwoTone twoToneColor="#52c41a"/>
                                </div>
                                <div className="div">
                                    <input placeholder="Password" type="password" className="input" />
                                </div>
                            </div>
                            <div className="input-div file">
                                <div className="i">
                                    <FileTextTwoTone twoToneColor="#52c41a"/>
                                </div>
                                <div>
                                    <span>Key File</span>
                                </div>
                                <div></div>
                                <div className="div choose-file">
                                    <input type="file" className="form-control-file" />
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    auth.login(() => {
                                        props.history.push("/otc-derivatif");
                                    });
                                }}
                                className="btn-home"
                            >
                                Login
                            </button>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    );
};
