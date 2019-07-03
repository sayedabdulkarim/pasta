import React, { Component } from 'react'
import styles from './signup.css'

import { Link } from 'react-router-dom'

export default class Signup extends Component {
  signup = (e) => {
    e.preventDefault()
    this.props.history.push('/')
  }
  clear = (e) => {
    this.props.history.push('/')
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.Signup} >
            <i onClick={this.clear} className="fas fa-times"></i>
            
            <div className={styles.Signuptext}>
              <div>
                <h2>Sign up</h2>
                <span>or <a href="#/signin">login to your account</a></span>
              </div>
                <div style={{width: '20%'}}>
                  <img src="../../../swiggyimg/signup.webp" style={{width: '100%'}} alt=""/>
                </div>
            </div>
            
            <div className={styles.Signupform}>
                <form action="" onSubmit={this.signup}>
                  <div className={styles.Inputgroup}>
                    <input type="number" name="number" id=""/>
                    <span>Phone number</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="text" name="name" id=""/>
                    <span>Name</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="email" name="email" id=""/>
                    <span>Email</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="password" name="password" id=""/>
                    <span>Password</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="submit" value='CONTINUE'/>
                    <p style={{fontSize: '0.7rem'}}>By creating an account, I accept the <strong style={{color: 'blue'}}>Terms & Conditions</strong></p>
                  </div>
                </form>  
            </div>
                

        </div>
      </React.Fragment>
    )
  }
}
