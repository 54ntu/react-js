import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/Theme'

function App() {

  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <h1 className=" p-4 text-3xl font-bold rounded-lg bg-green-600">
          hello
        </h1>
      </ThemeProvider>
    </>
  );
}

export default App
