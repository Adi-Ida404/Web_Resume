import React from 'react';

const flex1 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    marginTop: '70vh',
    textShadow: '2px 2px 2px rgba(0,0,0,0.6)'
}
const flex2 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  color: '#F0F8FF',
  textShadow: '2px 3px 4px rgba(0,0,0,0.6)'
};

const text = {
  zIndex: 5,
  position: 'relative',
  bottom: 0,
  color: 'white', // To ensure the text is visible against the background image
  textAlign: 'center', // Center align the text
  textShadow: '3px 3px 1px rgba(0,0,0,0.6)'

};

const divStyle = {
  backgroundImage: 'url("https://imgs.search.brave.com/vZmolgXICtTS3MTsHFZCJOTt2LRKZ7mTf7UHzAEmAic/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/ODQ1MTU5OTE2NDct/YzU3NjBmY2VjZmM3/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1URjhmRzFoYkdW/OFpXNThNSHg4TUh4/OGZEQT0.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '104vh',
  position: 'relative'
};

export const Photo = (props) => {
  return (
    <div style={divStyle}>
      <div style={text}>
        <div style={flex1} >
          <h1>Aditya Singh Rawat</h1>
        </div>
        <div style={flex2}>
          <h4>MERN Developer</h4>
        </div>
      </div>
    </div>
  );
};

export default Photo;
