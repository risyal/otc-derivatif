import React from 'react'
import Menu from 'antd/lib/menu';
import ListMenu from '../config/ListMenu';
import Sider from 'antd/lib/layout/Sider';

const { SubMenu } = Menu;

function Navigation(props) {
    //console.log(props.collapsed);
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} width="220"
            className="sider-top">
            <div className="logo" />
            <Menu className="sidemenu" mode="inline" defaultSelectedKeys={['1']} >
                {ListMenu.map(function (menuItem) {
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
    )
}

export default Navigation
