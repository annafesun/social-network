import React from 'react'
import styles from './FormControl.module.css'
import { Field } from 'redux-form'

export const Textarea = ({ input, meta, ...props }) => {
  const showError = meta.touched && meta.error

  return (
      <div className={styles.formControls + ' ' + (showError ? styles.error : '')}>
        <textarea {...input} {...props} />
        <div>
          {showError && <span>{meta.error}</span>}
        </div>
      </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const showError = meta.touched && meta.error

  return (
      <div className={styles.formControls + ' ' + (showError ? styles.error : '')}>
        <input {...input} {...props} />
        <div>
          {showError && <span>{meta.error}</span>}
        </div>
      </div>
  )
}

export const Checkbox = ({ input, meta, ...props }) => {
  const showError = meta.touched && meta.error

  return (
      <div className={styles.formControls + ' ' + (showError ? styles.error : '')}>
        <input type="checkbox" {...input} {...props} />
        <div>
          {showError && <span>{meta.error}</span>}
        </div>
      </div>
  )
}


export const createdField = ({placeholder, name, validators, component, props = {}, text = ''}) =>(
  <div>
    <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
    />{text}
  </div>
)




