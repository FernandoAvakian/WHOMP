import React from 'react';
import { useForm } from 'react-hook-form';
import { setLoggedIn } from 'js/store/appState/actions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'js/store';
import 'css/formInputs.scss';

const defaultLoginURL =
  ' https://production-api.globalforestwatch.org/auth/login';
const checkLogURL =
  'https://production-api.globalforestwatch.org/auth/check-logged';
const registerURL = 'https://production-api.globalforestwatch.org/auth/sign-up';
const resetURL =
  'https://production-api.globalforestwatch.org/auth/reset-password';

export const EmailLogin = () => {
  const dispatch = useDispatch();
  const [showDefaultLogin, setShowDefaultLogin] = React.useState(true);
  const [showLostPassword, setShowLostPassword] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [registerSuccess, setRegisterSuccess] = React.useState(false);
  const [resetPasswordSuccess, setResetPasswordSuccess] = React.useState(false);
  const [defaultLoginError, setDefaultLoginError] = React.useState<
    boolean | string
  >(false);

  const customColorTheme = useSelector(
    (store: RootState) => store.appSettings.customColorTheme
  );
  const { register, handleSubmit, errors } = useForm();

  type FormType = 'register' | 'default' | 'forgot';

  const handleFormSwitch = (id: FormType): void => {
    setRegisterSuccess(false);
    setDefaultLoginError(false);
    switch (id) {
      case 'register':
        setShowRegister(true);
        setShowDefaultLogin(false);
        setShowLostPassword(false);
        break;
      case 'default':
        setShowRegister(false);
        setShowDefaultLogin(true);
        setShowLostPassword(false);
        break;
      case 'forgot':
        setShowRegister(false);
        setShowDefaultLogin(false);
        setShowLostPassword(true);
        break;
      default:
        setShowRegister(false);
        setShowDefaultLogin(true);
        setShowLostPassword(false);
    }
  };

  const onDefaultSubmit = (data: any): void => {
    fetch(defaultLoginURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        //Early check for error that come in the response object
        if (data.errors && data.errors[0].detail) {
          setDefaultLoginError(data.errors[0].detail);
        }
        //Clear out local storage
        localStorage.clear();

        localStorage.setItem('userToken', data.data.token);

        const bearer = `Bearer ${data.data.token}`;

        fetch(checkLogURL, {
          method: 'GET',
          headers: {
            Authorization: bearer
          }
        })
          .then(res => res.json())
          .then(data => {
            dispatch(setLoggedIn(true));
          })
          .catch(e => console.error(e));
      })
      .catch(e => {
        setDefaultLoginError(e.errors[0].detail);
      });
  };

  const onRegisterSubmit = (data: any): void => {
    const payload = {
      apps: ['gfw'],
      email: data.email,
      password: data.password,
      repeatPassword: data.repeatPassword
    };

    fetch(registerURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors && data.errors[0].detail) {
          setDefaultLoginError(data.errors[0].detail);
        }
        if (data.data && data.data?.id) {
          setRegisterSuccess(true);
        }
      })
      .catch(e => console.error(e));
  };

  const onForgotSubmit = (data: any): void => {
    fetch(resetURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        //Early check for error that come in the response object
        if (data.errors && data.errors[0].detail) {
          setDefaultLoginError(data.errors[0].detail);
          setResetPasswordSuccess(false);
        } else {
          setResetPasswordSuccess(true);
        }
      })
      .catch(e => console.error(e));
  };

  return (
    <div className="email-login-container">
      {showDefaultLogin && (
        <div>
          <form onSubmit={handleSubmit(onDefaultSubmit)}>
            <div className="form-section">
              <label htmlFor="email" className="input-label">
                email *
              </label>
              <input
                className="input-text"
                type="email"
                placeholder="example@globalforestwatch.com"
                name="email"
                ref={register({ required: true })}
              />
              {errors.password && (
                <p className="input-error">This field is required</p>
              )}
            </div>
            <div className="form-section">
              <label htmlFor="password" className="input-label">
                password *
              </label>
              <input
                className="input-text"
                type="password"
                placeholder="********"
                name="password"
                ref={register({ required: true })}
              />
              {errors.password && (
                <p className="input-error">This field is required</p>
              )}
            </div>
            <p
              className="input-forgot-pass"
              onClick={() => handleFormSwitch('forgot')}
            >
              Forgot Password!
            </p>
            {defaultLoginError && (
              <div className="input-error">
                <span>{defaultLoginError}</span>
              </div>
            )}
            <div className="bottom-action">
              <button onClick={() => handleFormSwitch('register')}>
                Not a member? <b>Sign Up!</b>
              </button>
              <input
                className="orange-button form-submit"
                style={{ backgroundColor: customColorTheme }}
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      )}
      {showRegister && (
        <div>
          {!registerSuccess && (
            <form onSubmit={handleSubmit(onRegisterSubmit)}>
              <div className="form-section">
                <label htmlFor="email" className="input-label">
                  email *
                </label>
                <input
                  type="email"
                  className="input-text"
                  placeholder="example@globalforestwatch.com"
                  name="email"
                  ref={register({ required: true })}
                />
                {errors.password && (
                  <p className="input-error">This field is required</p>
                )}
              </div>
              <div className="form-section">
                <label htmlFor="password" className="input-label">
                  password *
                </label>
                <input
                  className="input-text"
                  type="password"
                  placeholder="********"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && (
                  <p className="input-error">This field is required</p>
                )}
              </div>
              <div className="form-section">
                <label htmlFor="password" className="input-label">
                  repeat password *
                </label>
                <input
                  className="input-text"
                  type="password"
                  placeholder="********"
                  name="repeatPassword"
                  ref={register({ required: true })}
                />
                {errors.password && (
                  <p className="input-error">This field is required</p>
                )}
              </div>
              {defaultLoginError && (
                <div className="input-error">
                  <span>{defaultLoginError}</span>
                </div>
              )}
              <div className="bottom-action">
                <button onClick={() => handleFormSwitch('default')}>
                  Already joined? <b>Sign In!</b>
                </button>
                <input
                  className="orange-button form-submit"
                  style={{ backgroundColor: customColorTheme }}
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          )}
          {registerSuccess && (
            <div className="register-success">
              <div className="tree-success"></div>
              <p>
                {
                  "Thank you for registering, please check your email and confirm your account. If it doesn't appear check your spam folder."
                }
              </p>
              <button
                className="orange-button form-submit"
                style={{ backgroundColor: customColorTheme }}
                onClick={() => handleFormSwitch('default')}
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
      {showLostPassword && (
        <div>
          {!resetPasswordSuccess && (
            <>
              <p style={{ marginTop: 0 }}>
                To reset your password, enter your email and follow the
                instructions.
              </p>
              <form onSubmit={handleSubmit(onForgotSubmit)}>
                <div className="form-section">
                  <label htmlFor="email" className="input-label">
                    email *
                  </label>
                  <input
                    className="input-text"
                    type="email"
                    placeholder="example@globalforestwatch.com"
                    name="email"
                    ref={register({ required: true })}
                  />
                  {errors.password && (
                    <p className="input-error">This field is required</p>
                  )}
                </div>
                {defaultLoginError && (
                  <div className="input-error">
                    <span>{defaultLoginError}</span>
                  </div>
                )}
                <div className="bottom-action">
                  <button onClick={() => handleFormSwitch('default')}>
                    Already joined? <b>Sign In!</b>
                  </button>
                  <input
                    type="submit"
                    value="Reset"
                    className="orange-button form-submit"
                    style={{ backgroundColor: customColorTheme }}
                  />
                </div>
              </form>
            </>
          )}
          {resetPasswordSuccess && (
            <div className="register-success">
              <div className="tree-success"></div>
              <p>
                {
                  "Thank you. Please, check your inbox and follow instructions to reset your password. If it doesn't appear check your spam folder."
                }
              </p>
              <button
                className="orange-button form-submit"
                style={{ backgroundColor: customColorTheme }}
                onClick={() => handleFormSwitch('default')}
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};