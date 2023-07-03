import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import Routes from './routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import './App.css';
import LoginPage from './pages/LoginPage';

const theme = createTheme({
  direction: 'rtl',
});

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props: any) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

interface User {
  username: string;
  token: string;
}

export const UserContext = createContext<User | undefined>(undefined);

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const checkIfValid = async () => {
      const isValid = false; // check if token is valid
      if (isValid) {
        setUser({
          username: localStorage.username,
          token: localStorage.token,
        });
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
      }
    }

    if (!user && localStorage.token && localStorage.username) {
        checkIfValid();
    }
}, [user]);

const getRoutes = () => {
  return user?.username ? (<Routes/>) : (<LoginPage/>);
}
  
  return (
    <div className="App">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <UserContext.Provider value={user}>
              {getRoutes()}
          </UserContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
