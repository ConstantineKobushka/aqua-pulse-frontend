import { useId, useState } from 'react';

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Container from '../Container/Container';

import styles from './AuthForm.module.css';

const AuthForm = ({ type }) => {
  const isSignUp = type === 'signup';

  const initialValues = isSignUp
    ? { email: '', password: '', repeatPassword: '' }
    : { email: '', password: '' };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password length must be at least 8 characters')
      .max(64, 'Password length mustn`t be bigger 64 characters')
      .required('Password is required'),

    repeatPassword: isSignUp
      ? Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Repeat password is required')
      : Yup.string().notRequired(),
  });

  const onFormSubmit = values => {
    if (isSignUp) {
      const { repeatPassword, ...userData } = values;
      console.log(repeatPassword);
      console.log(userData);
    } else {
      console.log(values);
    }
  };

  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();

  const [visibleFields, setVisibleFields] = useState({
    password: false,
    repeatPassword: false,
  });

  const togglePasswordVisibility = fieldName => {
    setVisibleFields(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
          >
            <Form className={styles.form}>
              <label className={styles.label} htmlFor={emailId}>
                Enter your email
              </label>
              <div className={styles.fieldWrapper}>
                <Field
                  className={styles.input}
                  type="email"
                  name="email"
                  id={emailId}
                  placeholder="Email"
                  autoComplete="email"
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="span"
                />
              </div>

              <label className={styles.label} htmlFor={passwordId}>
                Enter your password
              </label>
              <div className={styles.fieldWrapper}>
                <div className={styles.inputBox}>
                  <Field
                    className={styles.input}
                    type={visibleFields.password ? 'text' : 'password'}
                    name="password"
                    id={passwordId}
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button
                    className={styles.toggleButton}
                    type="button"
                    onClick={() => togglePasswordVisibility('password')}
                  >
                    <svg className={styles.svg} width="15" height="14">
                      <use
                        href={`./icons/icons-sprite.svg#${visibleFields.password ? 'eye-slash' : 'eye'}`}
                      ></use>
                    </svg>
                  </button>
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="password"
                  component="span"
                />
              </div>

              {isSignUp && (
                <>
                  <label className={styles.label} htmlFor={repeatPasswordId}>
                    Repeat password
                  </label>
                  <div className={styles.fieldWrapper}>
                    <div className={styles.inputBox}>
                      <Field
                        className={styles.input}
                        type={
                          visibleFields.repeatPassword ? 'text' : 'password'
                        }
                        name="repeatPassword"
                        id={repeatPasswordId}
                        placeholder="Repeat Password"
                        autoComplete="new-password"
                      />
                      <button
                        className={styles.toggleButton}
                        type="button"
                        onClick={() =>
                          togglePasswordVisibility('repeatPassword')
                        }
                      >
                        <svg className={styles.svg} width="15" height="14">
                          <use
                            href={`./icons/icons-sprite.svg#${
                              visibleFields.repeatPassword ? 'eye-slash' : 'eye'
                            }`}
                          ></use>
                        </svg>
                      </button>
                    </div>
                    <ErrorMessage
                      className={styles.error}
                      name="repeatPassword"
                      component="span"
                    />
                  </div>
                </>
              )}

              <button className={styles.submitButton} type="submit">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </Form>
          </Formik>
          {isSignUp ? (
            <Link className={styles.link} to="/signin">
              Sign in
            </Link>
          ) : (
            <Link className={styles.link} to="/signup">
              Sign up
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AuthForm;
