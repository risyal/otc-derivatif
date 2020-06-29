import React, { useState } from 'react';
import Layout from 'antd/lib/layout/';
import Navigation from './common/Navigation';
import HeaderHalaman from './common/TopHeader';
import RoutePage from './config/RoutePage';
import { BackTop } from 'antd';

const { Footer, Content } = Layout;

function ViewEngine() {
    const [collapsed, SetCollapsed] = useState(false);
    const siderClick = () => {
        SetCollapsed(!collapsed);
    };
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };
    return (

        <Layout className="site-layout">
            <Navigation collapsed={collapsed}>
            </Navigation>
            <Layout className="site-layout">
                <HeaderHalaman
                    collapsed={collapsed}
                    siderClick={siderClick}
                    header={Layout}
                >
                </HeaderHalaman>
                <Content
                    className="content"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 500,
                    }}
                >
                    <RoutePage />
                </Content>
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
                <Footer style={{ 
                    textAlign: 'center',
                    backgroundColor: '#a0d911',
                    color: '#fff',
                    fontSize: '14px',
                }}>
                 PT Kliring Penjaminan Efek Indonesia</Footer>
            </Layout>

        </Layout>
    )
}

export default ViewEngine;