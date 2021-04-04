import './Header.scss'
import { Link } from 'gatsby'
import { Logo } from './Logo'
import { Menu } from './Menu'
import React from 'react'

export const Header = () => (
  <header className="Header">
    <Link to="/">
      <Logo />
    </Link>
    <Menu />
  </header>
)
