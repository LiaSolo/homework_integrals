import { BlockMath, InlineMath } from 'react-katex';
import { useState } from 'react';
import './App.css';
import Answer from './components/answer/answer';
import Checking from './components/cheking/checking';
import { deg0, deg0String, deg1, deg1String, deg2, deg2String, deg3, deg3String, deg4, deg4String, deg5, deg5String } from './polynoms';
import { F, FString, f, fString } from './formulas';

function App() {

  const [begin, setBegin] = useState(0)
  const handleChangeBegin = (event) => {
    setBegin(event.target.value)
  }

  const [end, setEnd] = useState(1)
  const handleChangeEnd = (event) => {
    setEnd(event.target.value)
  }

  const [isShowCheck, setShowCheck] = useState(true)
  const handleShowClick = () => {
    setShowCheck(!isShowCheck)
  }


  return (
    <div className="App">
      <header>Приближенное вычисление интеграла по квадратурным формулам</header>
      <div>Введите начало отрезка: <input value={begin} onChange={handleChangeBegin}></input></div>
      <div>Введите конец отрезка: <input value={end} onChange={handleChangeEnd}></input></div>
      <div className='checkHeader'>
        <div>Проверка</div>    
        <button className='show' onClick={handleShowClick}>
        {isShowCheck ? 'Скрыть' : 'Показать'}
        </button>
      </div>
      {isShowCheck ?
        <div>
          <Checking
            function={deg0}
            functionString={deg0String()}
            antiderivative={deg1}
            antiderivativeString={deg1String()}
            bottom={begin} 
            top={end} 
          />
          <Checking
            function={deg1}
            functionString={deg1String()}
            antiderivative={deg2}
            antiderivativeString={deg2String()}
            bottom={begin} 
            top={end} 
          />
          <Checking
            function={deg2}
            functionString={deg2String()}
            antiderivative={deg3}
            antiderivativeString={deg3String()}
            bottom={begin} 
            top={end} 
          />
          <Checking
            function={deg3}
            functionString={deg3String()}
            antiderivative={deg4}
            antiderivativeString={deg4String()}
            bottom={begin} 
            top={end} 
          />
          <Checking
            function={deg4}
            functionString={deg4String()}
            antiderivative={deg5}
            antiderivativeString={deg5String()}
            bottom={begin} 
            top={end} 
          />
        </div> : ''}
      <div>Непроверка</div>
      <Answer 
        top={end}
        bottom={begin}
      />  
      
    </div>
  );
}

export default App;
