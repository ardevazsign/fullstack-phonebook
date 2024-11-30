import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

// todo / Controlled form component vs Uncontrolled form component
// todo / Controlled = data is controlled by state
//  todo / Uncontolled = data is controlled by the DOM

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.signupHolder}>
        <h2>Register</h2>
        <div>
          <label className={css.label}> </label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label className={css.label}> </label>
          <input type="email" name="emeil" placeholder="Email" />
        </div>
        <div>
          <label className={css.label}> </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit" className={css.registerFormBtn}>
          Sign Up
        </button>
      </div>
    </form>
  );
};
