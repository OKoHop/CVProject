import About from 'pages/About/About';
import MyProjects from 'pages/MyProgects/MyProjects';
import NotFound from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
