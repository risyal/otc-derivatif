import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

class ViewEngine extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        var menuItems = [
            {
                name: 'Item 1',
                key: '1',
                icon: <UserOutlined />,
                subMenus: [{
                    name: 'Sub Menu 1-2',
                    key: '2',
                }, {
                    name: 'Sub Menu 1-2',
                    key: '3',
                }, {
                    name: 'Sub Menu 1-3',
                    key: '4',
                }]
            },
            {
                name: 'Item 2',
                key: '5',
                icon: <VideoCameraOutlined />
            },
            {
                name: 'Item 3',
                key: '6',
                icon: <UploadOutlined />
            },
            {
                name: 'Item 5',
                key: '7',
                icon: <MailOutlined />
            }
        ]
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu className="test" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {menuItems.map(function (menuItem) {
                            if (menuItem.subMenus !== undefined) {
                                return (
                                    <SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.name}>
                                        {
                                            menuItem.subMenus.map(function (subMenu) {
                                                return (
                                                    <Menu.Item key={subMenu.key}>{subMenu.name}</Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={menuItem.key} icon={menuItem.icon}>{menuItem.name}</Menu.Item>
                                )
                            }
                        })}

                    </Menu>
                </Sider>
                <Layout >
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
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
                    <Footer>
                        asdasdasda
                    </Footer>
                </Layout>

            </Layout>
        )
    }
}

export default ViewEngine;