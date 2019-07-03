import React, { Component } from 'react'
import styles from './signin.css'

import { ProductConsumer } from '../../../context/context'

import { Link } from 'react-router-dom'

const initialState = {
  email: '', 
  password: ''
}

export default class Signin extends Component {
  state = initialState

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState( initialState );
    console.log(this.state)
  }
  render() {
    // console.log(this.state)
    return (
      <ProductConsumer>
        {
          val => {
            const {dash, signIn, handleChange, error } = val
            {/* console.log(dash) */}
            {/* const { signIn } = val */}
            return(
              <React.Fragment>
                <div className={styles.Signin}>
                  { error ? <span style={{color: 'red',fontSize: '0.8rem'}}>{error.msg}</span> : null }
                  
                  <h2 style={{margin: '30px 0'}}>Login Your Account.</h2>
                  <form className={styles.Form} onSubmit={(e) => signIn(e)}>

                  <div className={styles.Inputgroup}>
                    <input type="email" onChange={(e) => handleChange(e)} name="email" id="myemail"/>
                    <span>Email</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="password" onChange={(e) => handleChange(e)} name="password" id="mypass"/>
                    <span>Password</span>
                  </div>



                    <div className={styles.Forgot}>
                      <label htmlFor="">
                        <input type="checkbox" name="remember" id=""/> Remember me
                      </label>
                      <p>Forgot Password ?</p>
                    </div>
                    
                    <button type='submit' onClick={dash ? this.props.history.push('/dashboard') :  null} className={styles.Login}>LOGIN</button>
                    {/* <button type='submit' className={styles.Login}>LOGIN</button> */}
                    
                  </form>

                  <div style={{margin: '20px 0'}}>
                      <h4>or Login with social networks.</h4>
                      <div className={styles.Social}>
                        <i className={['fab fa-facebook-f', styles.Blue].join(' ')}/>
                        <i className={['fab fa-twitter', styles.Sky].join(' ')}/>
                        <i className={['fab fa-google-plus-g', styles.Red].join(' ')}/>
                        <i className={['fab fa-instagram', styles.Orange].join(' ')}/>
                      </div>
                      
                      <h6>Doesn't have account <Link to='/signup' style={{color: '#FC8019', textDecoration: 'none'}}>Sign Up</Link></h6>
                  </div>

                </div>
              </React.Fragment>
            )
          }
        }
      </ProductConsumer>
    )
  }
}

         