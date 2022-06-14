import * as React from 'react';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { DefaultPalette } from '@fluentui/react/lib/Theme';
import { Ribbon } from './components/Ribbon';
import { NavHeader } from './components/NavHeader';
import './App.css';

const appStyles = mergeStyles({
  backgroundColor: DefaultPalette.neutralLighter,
});

function App() {
  return (
    <div className={`App ${appStyles}`}>
      <NavHeader />
      <Ribbon />
    </div>
  );
}

export default App;
