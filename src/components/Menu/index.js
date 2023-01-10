import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink'
import styles from './menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>Inicio</MenuLink>
                <MenuLink to='/sobremim'>Sobremim</MenuLink>
            </nav>
        </header>
    )
}
