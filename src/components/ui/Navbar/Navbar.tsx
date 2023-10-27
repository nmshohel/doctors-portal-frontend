"use client"
import React, { useState } from 'react';
import {  Button, Drawer, Layout, Menu, theme,Typography  } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const Navbar = ({items}:{items:{key:number,label:string,href:string}[]}) => {
const pathname=usePathname()
const [open, setOpen] = useState(false);
const showDrawer = () => {
  setOpen(true);
};

const onClose = () => {
  setOpen(false);
};
  return (
    <Layout className="layout">
      <Header className="flex items-center">
      <Content>
          <Link href="/">
            <Title level={3}
              className='text-white'
            >
              Doctors Portal
            </Title>
          </Link>
        </Content>
        <Menu 
        className='lg:block hidden'
        disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
 
        </Menu>
        <Button type='primary' className="lg:hidden">
              <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" >
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>

    </Layout>
  );
};

export default Navbar;