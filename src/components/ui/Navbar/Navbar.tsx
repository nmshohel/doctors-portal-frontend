"use client"
import React from 'react';
import {  Layout, Menu, theme,Typography  } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const Navbar = ({items}:{items:{key:number,label:string,href:string}[]}) => {
const pathname=usePathname()

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
        <Menu disabledOverflow
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
      </Header>

    </Layout>
  );
};

export default Navbar;