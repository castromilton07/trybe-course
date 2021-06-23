import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Image from './Image';
// import Coldplay from './Coldplay';
// import User from './User';
// import Customer from './Customer';
// import Shopping from './Shopping';
import Greeting from './Greeting';

ReactDOM.render(
  <React.StrictMode>
    {/* <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" /> */}
    {/* <Coldplay /> */}
    {/* <User /> */}
    {/* <Customer /> */}
    {/* <Shopping /> */}
    <Greeting name="Milton" lastName="Castro" />
  </React.StrictMode>,
  document.getElementById('root')
);
