import React, { useState } from "react"
import classes from './App.module.scss'
import { Link, Outlet } from "react-router-dom"
import About from '@/pages/about/About'
import avatarPng from '@/assets/Logo_menu.png'
import avatarJpg from '@/assets/start.jpg'
import Calendar from '@/assets/st.svg'

export const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(prev => prev + 1)

    // if (__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    // if (__ENV__ === 'development') {
    //     return <div>ISDEVELOPMENTMODE</div>
    // }

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={avatarPng} alt="" />
                <img width={100} height={100} src={avatarJpg} alt="" />
            </div>
            <div>
                <Calendar className={classes.icon} width={100} height={100} />
            </div>
            <Link to={'/about'}>-about-</Link>
            <br />
            <Link to={'/shop'}>-shop-</Link>
            <br />
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>+</button>
            <About />
        </div>
    )
}