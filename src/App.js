import './App.css';
import { useState } from 'react'; 
import pizzaImage from './images/Pizza.avif';

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(prev => prev + 1);
  }
  function decrement() {
    setCounter(prev => prev - 1);
  }
  return (
    <>
    <div>
        <img className="pizza" src={pizzaImage} alt="image"/>
        <h1>Пепперони</h1>
        <p>Ничего лишнего! Томатный соус, колбаски</p>
        <p>Пепперони и Моцарелла</p>
        <form className='forma'>
          <select id="diametr" className="diametr">
            <option value="" disabled selected hidden>Диаметр</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
          </select>
        </form>
        
    </div>
    <h1>от 550 рублей</h1>
    <div className='quantity'>
      <button onClick={increment} className="btn_plus">+</button>
      <span className='pole'>{counter}</span>
      <button onClick={decrement} className="btn_minus">-</button>
    </div>
    </>
  );
}

export default App;
