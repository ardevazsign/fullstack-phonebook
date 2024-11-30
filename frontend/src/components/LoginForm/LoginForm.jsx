import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <h2>Login</h2>
      <label className={css.label}>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Enter email..."
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter your email"
          required
        />
      </label>
      <label className={css.label}>
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Please enter your password"
          required
        />
      </label>
      <button className={css.loginFormBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
