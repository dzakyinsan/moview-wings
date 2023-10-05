import React from "react";
import { Layout, Menu } from 'antd';
const { Header: Headers } = Layout;

function Header() {
  return (
    <Headers
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Headers>
  )
}
export default Header;
