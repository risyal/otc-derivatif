import React from 'react';
import {
    LeftSquareOutlined,
    RightSquareOutlined
} from '@ant-design/icons';
import Button from 'antd/lib/button';

const TopHeader = ({ collapsed, siderClick, header }) => {
    const { Header } = header;
    return (
        <Header className="site-layout-background">
            <Button type="primary" onClick={siderClick} className="trigger">
                {React.createElement(collapsed ? RightSquareOutlined : LeftSquareOutlined)}
            </Button>
        </Header>
    )
};

export default TopHeader;
