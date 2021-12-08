import React from 'react'
import { Field, reduxForm, submit } from 'redux-form'
import { createdField, Input } from '../Common/FormControls'
import { required } from '../utilits/Validators/validators'
import { login } from '../redux/authReducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { compose } from 'redux'
import styles from '../Common/FormControl.module.css'
import Button from '../shared/Button/Button'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <ul>
          <li>email: mikaan12367@gmail.com </li>
          <li>password: free123</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
                className={styles.inputLoginForm}
                placeholder={'Email'}
                name={'email'}
                component={Input}
                validate={[required]}
            />
          </div>
          <div>
            <Field
                className={styles.inputLoginForm}
                placeholder={'Password'}
                name={'password'}
                component={Input}
                type={'password'}
                validate={[required]}
            />
          </div>
          <div className={styles.rememberMe}>
            <Field
                component={Input}
                name={'rememberMe'}
                type={'checkbox'}/>
            Remember me
          </div>

          {captchaUrl && <img src={captchaUrl} />}
          {captchaUrl && createdField({
            placeholder: 'Symbols from image',
            name: 'captcha',
            validators: [required],
            component: Input
          })}

          {error && (
              <div className={styles.formSummaryError}>
                {error}
              </div>
          )}
          <div>
            <Button type={submit} text='Login'>Login</Button>
          </div>
        </form>
      </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    login(email, password, rememberMe, captcha)
  }

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})
export default compose(
    connect(mapStateToProps, { login }),
)(Login)