import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts Manager</title>
      </Helmet>
      <div className={css.homePageContainer}>
        <h1 className={css.title}>Welcome to Phonebook!</h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
