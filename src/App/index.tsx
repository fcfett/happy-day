import React from 'react';
import './styles.scss';

import Calendar from '../components/Calendar';

const App = () => {
  return (
    <div id="app">
      <header></header>
      <main>
        <Calendar />
      </main>
    </div>
  );
};

export default App;
