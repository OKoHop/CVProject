import CVPage from 'pages/CVPage/CVPage';
import MyProjects from 'pages/MyProgects/MyProjects';
import NotFound from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { About } from 'pages/About/About';

export const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<CVPage />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
