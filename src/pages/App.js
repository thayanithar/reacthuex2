import React from 'react';
import NavBar from '../components/components/Navbar'
import MainPage from '../components/components/MainPage'
import Buttons from '../components/core/Buttons'
import Card from '../components/layouts/publicLayouts'
import theme from '../theme/theme'
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <NavBar/>
          <MainPage/>
          <Buttons/>
          <Card/>
     </ThemeProvider>
    </div>
  );
}

export default App;
