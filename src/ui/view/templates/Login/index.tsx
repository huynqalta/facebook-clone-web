import React from 'react'
import classes from "./style.scss"
const Login = () => {
    return (
        <>
            <nav className={classes[ "navbar" ]}>
                <img className={classes[ "logo" ]} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />
                <form className={classes[ "login_form" ]}>
                    <div className={classes[ "email" ]}>
                        <div className={classes[ "font" ]}>
                            Email or Phone
                    </div>
                        <input type="text" name="" />
                    </div>

                    <div className={classes[ "password" ]}>
                        <div className={classes[ "font" ]}>
                            Password
                    </div>
                        <input type="password" name="" />
                    </div>
                    <button className={classes[ "login_btn" ]}>Login</button>
                </form>
            </nav>
            <section>
                <div className="logo_body">
                    <img className="logobody" />
                    <p className="like_font font1">Thank for stopping by!</p>
                    <p className="like_font">We hope to see you again soon.</p>
                </div>
            </section>
        </>

    )
}

export default Login
