import React from 'react';
import { Icon1, Icon2, Icon3, Icon4 } from "./Icon";

export const Nav = (props) => {
  const ul = {
    margin: '0',
    backgroundColor: 'black',
    color: 'white',
    width: "3%",
    height: "100vh",
    padding: '2vh',
  };

  const li = {
    marginBottom: '5vh',
    listStyleType: 'none'
  };

  const div = {

  }
  
  const icon2 = {
    marginTop: '35vh',
  }

  return (
    <>
      <ul style={ul}>
        <li style={li}><div style ={div}><Icon1 /></div></li>
        <li style={li}><div style = {icon2}><Icon2 /></div></li>
        <li style={li}><div style ={div}><Icon3 /></div></li>
        <li style={li}><div style ={div}><Icon4 /></div></li>
      </ul>
    </>
  );
};

export default Nav;
