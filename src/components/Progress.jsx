import React from 'react';

export const Progress = (props) => {
  const { val, name } = props;

  const divStyle = {
    display: 'flex',
    width: '90%',
    height: '5px',
    backgroundColor: 'grey',
    marginTop: '10px',
  };

  const blueStyle = {
    backgroundColor: '#6CB4EE',
    width: `${val}%`,
    height: '100%',
    transition: 'width 0.3s ease-in-out',
  };

  const h4Style = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  };

  const percentStyle = {
    color: '#6CB4EE',
    fontWeight: 'bold',
  };

  const spanStyle = {
    width: '95vh',
  }

  return (
    <div>
      <h4 style={h4Style}>
        <span style = {spanStyle}>{name}</span> {/* Wrapping name in a span for flexibility */}
        <span style={percentStyle}>{val}%</span>
      </h4>
      <div style={divStyle}>
        <div style={blueStyle}></div>
      </div>
    </div>
  );
};

