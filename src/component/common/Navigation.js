import React from 'react'
import Menu from 'antd/lib/menu';
import ListMenu from '../config/ListMenu';
import Sider from 'antd/lib/layout/Sider';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function Navigation(props) {
    //console.log(props.collapsed);
    /*     const [selectedKey, SetSelectedKey] = useState("inquirytrade");
        const handleClick = e => {
            console.log('click ', e.key);
            SetSelectedKey(e.key);
        }; */

    let rootWithNavLink = "/otc-derivatif";
    return (
        <Sider theme="light" trigger={null} collapsible collapsed={props.collapsed}
            width="280"
            style={{
                height: '100vh',
                overflow: 'auto',
            }}>
            <div className="logo" />
            <Menu mode="inline" className="sider-menu" >
                {ListMenu.map(function (menuItem) {
                    if (menuItem.subMenus !== undefined) {
                        return (
                            <SubMenu key={menuItem.key}
                                icon={menuItem.icon} title={menuItem.name}>
                                {
                                    menuItem.subMenus.map(function (subMenu) {
                                        return (
                                            <Menu.Item key={subMenu.key}>
                                                <Link to={rootWithNavLink + subMenu.linkTo}>{subMenu.name}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    } else {
                        return (
                            <Menu.Item key={menuItem.key} icon={menuItem.icon}>

                                <Link to={rootWithNavLink + menuItem.linkTo}>{menuItem.name}
                                </Link></Menu.Item>
                        )
                    }
                })}

            </Menu>
        </Sider>
    )
}

export default Navigation
