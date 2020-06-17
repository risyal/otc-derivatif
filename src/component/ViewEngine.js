import React, { useState } from 'react';
import Layout from 'antd/lib/layout/';
import Navigation from './common/Navigation';
import HeaderHalaman from './common/TopHeader';

const { Footer, Content } = Layout;

function ViewEngine() {
    const [collapsed, SetCollapsed] = useState(false);
    const siderClick = () => {
        SetCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Navigation collapsed={collapsed}>
            </Navigation>
            <Layout >
                <HeaderHalaman
                    collapsed={collapsed}
                    siderClick={siderClick}
                    header={Layout}
                >
                </HeaderHalaman>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 500,
                    }}
                >
                    Content
                    </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </Layout>
    )
}

export default ViewEngine;