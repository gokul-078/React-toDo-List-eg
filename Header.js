
// This below header arrow function is created by inbuilt react setup - step:1 - ctrl+alt+r step:2 - type rafce

import React from 'react';

const Header = () => {

  const internalCss = {color: 'blue',
    textAlign: 'center',
    textDecoration: 'underline'
  }

  return (
    <main>
        <h1 style={{color:'red', textAlign:'center'}}>This line is Inline CSS</h1>
        <h2 style={internalCss}>This line is Internal CSS</h2>
    </main>
  )
}
// Above we used inline CSS concept for 'h1' tag.
// Above we used internal Css concept for 'h2' tag

export default Header;
