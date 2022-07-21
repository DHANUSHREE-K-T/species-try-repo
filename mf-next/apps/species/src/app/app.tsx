import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Searchbar = React.lazy(() => import('searchbar/Module'));

const Card = React.lazy(() => import('card/Module'));

const FilterDropdown = React.lazy(() => import('filter-dropdown/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/searchbar">Searchbar</Link>
        </li>

        <li>
          <Link to="/card">Card</Link>
        </li>

        <li>
          <Link to="/filter-dropdown">FilterDropdown</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="species" />} />

        <Route path="/searchbar" element={<Searchbar />} />

        <Route path="/card" element={<Card />} />

        <Route path="/filter-dropdown" element={<FilterDropdown />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
