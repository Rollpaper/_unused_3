import * as React from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';

import './App.css';

const AppComponent: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export const App = connect()(AppComponent);
