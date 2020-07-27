import React from 'react';
import header from '../styles/Header.module.css';

const Header = () => (
  <div className={header.header}>
    <span>F</span>
    <span className={header.red}>·</span>
    <span>R</span>
    <span className={header.blue}>·</span>
    <span>I</span>
    <span className={header.yellow}>·</span>
    <span>E</span>
    <span className={header.red}>·</span>
    <span>N</span>
    <span className={header.blue}>·</span>
    <span>D</span>
    <span className={header.yellow}>·</span>
    <span>S</span>
    <div>CATALOG</div>
  </div>
);

export default Header;
