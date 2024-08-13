// // App.js
// import React from 'react';
// import AppRouter from './Router';
// import { UserProvider } from './components/UserContext';

// function App() {
//   return (
//     <div className="App">
//       <UserProvider>
//       <AppRouter />
//       </UserProvider>
//     </div>
//   );
// }

// export default App;

// App.js


import React from 'react';
import AppRouter from './Router';
import { UserProvider } from './components/UserContext';
import ProductProvider from './components/ProductContext'; // Import the ProductProvider
import ChatBotPopup from './components/ChatBotPopup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider> {/* Wrap AppRouter with ProductProvider */}
          <AppRouter />
          <ChatBotPopup></ChatBotPopup>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
