import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const { handleChangeVariant, handleChangeTheme } = useTheme();
  const { theme, variant, toggleTheme, toggleVariant } = useContext(ThemeContext);
  console.log({ theme, variant });

  return (
    <div className='App'>
      <ThemeProvider>
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <button onClick={toggleVariant}>toggle variant</button>
        <button onClick={toggleTheme}>toggle theme</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
