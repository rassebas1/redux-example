import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Route, NavLink, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./views/contact";
import Home from "./views/Home/home";
import Showcase from "./views/showcase";
import Counter from "./components/counter";
import { increment } from "./components/counterSlice";
import { store } from "./store";

interface CounterState {
  value: number;
}
function App() {
  

  const count = useSelector((state: CounterState) => {
    return state;
  });
  useEffect(() => {
    console.log("aja", count.counter.value);

    
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Test</h1>
        <nav>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/showcase">Showcase</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/showcase" element={<Showcase></Showcase>}>
                <Route path=":number" element={<Showcase></Showcase>}></Route>
              </Route>
              <Route path="/contact" element={<Contact></Contact>} />
            </Routes>
          </div>
        </div>

        <button type="button" onClick={() => store.dispatch(increment())}>
          count is: {count.counter.value}
        </button>
        <span>something: {count.counter.value}</span>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
