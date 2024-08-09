import './App.css'

function App() {
  return (
    <div className="app-container">
      <Calculator />
    </div>
  )
}

function Calculator() {
  return (
    <div className="calculator">
      <Header />
      <Display />
      <Controls />
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <h4>Calculator</h4>
      <ThemeSwitcher />
    </div>
  )
}

function ThemeSwitcher() {
  return (
    <div className="theme-switcher">
      <p>THEME</p>
      <div className="theme-options">
        <div className="theme-numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <button className="theme-button">
          <a href="/light-theme.html">
            <img src="/images/Oval.svg" alt="Theme Toggle"/>
          </a>
        </button>
      </div>
    </div>
  )
}

function Display() {
  return (
    <div className="display">
      <h1></h1>
    </div>
  )
}

function Controls() {
  return (
    <div className="controls">
      <div className="button-grid">
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button button-delete">DEL</button>
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button button-add">+</button>
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button button-subtract">-</button>
        <button className="button button-dot">.</button>
        <button className="button">0</button>
        <button className="button button-divide">/</button>
        <button className="button button-multiply">*</button>
      </div>
      <div className="controls-end">
        <a className="reset-button" href="#">RESET</a>
        <a className="equals-button" href="#">=</a>
      </div>
    </div>
  )
}

export default App
