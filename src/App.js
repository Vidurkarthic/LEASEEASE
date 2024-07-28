// App.js
import React from 'react';
import AppRouter from './Router';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;
