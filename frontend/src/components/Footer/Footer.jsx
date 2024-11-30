import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      &copy; {new Date().getFullYear()} goit-react-hw-08-phonebook by:
      ArdevazSign
    </footer>
  );
};
