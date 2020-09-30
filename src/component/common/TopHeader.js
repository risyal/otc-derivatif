import React from 'react';
import {
    LeftSquareOutlined,
    RightSquareOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

const TopHeader = ({ collapsed, siderClick, header }) => {
    const { Header } = header;
    return (
        <Header className="site-header">
            <button onClick={siderClick} className="trigger">
                {collapsed ?
                    (<MenuUnfoldOutlined />) :
                    (<MenuFoldOutlined />)
                }
            </button>
        </Header>
    )
};

export default TopHeader;
