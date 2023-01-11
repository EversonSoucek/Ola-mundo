import styles from './MenuLink.module.css'

import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function MenuLink({ children, to }) {
    const localizacao = useLocation()
    return (
        <NavLink className={`
                ${styles.link}
                ${localizacao.pathname === to ? styles.linkdestacado : ''}
                `
        } to={to}>{children}</NavLink>
    )
}
