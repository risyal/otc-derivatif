import React from 'react';
import {
    LeftSquareOutlined,
    RightSquareOutlined
} from '@ant-design/icons';

const TopHeader = ({ collapsed, siderClick, header }) => {
    const { Header } = header;
    return (
        <Header className="site-header">
            <button onClick={siderClick} className="trigger">
                {collapsed ?
                    (<RightSquareOutlined />) :
                    (<LeftSquareOutlined />)
                }
            </button>
        </Header>
    )
};

export default TopHeader;
