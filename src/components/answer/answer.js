import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'
import './answer.css'
import { F, FString, f, fString } from '../../formulas';
import { leftRectangle, rightRectangle, middleRectangle, Simpson, threeEight, trapezoid } from '../../formulas';


const Answer = (props) => {
    const computedF = F(props.top) - F(props.bottom)
    const lR = leftRectangle(f, props.bottom, props.top)
    const rR = rightRectangle(f, props.bottom, props.top)
    const mR = middleRectangle(f, props.bottom, props.top)
    const t = trapezoid(f, props.bottom, props.top)
    const S = Simpson(f, props.bottom, props.top)
    const tV = threeEight(f, props.bottom, props.top)
    return (
        <div className="Answer">
            <div>Функция: <InlineMath math={`f(x)=${fString()}`} /></div>
            <div>Первообразная, посчитанная ручками: <InlineMath math={`F(x)=${FString()}`} /></div>
            <div>Точный результат: <InlineMath math={`F(${props.top})-F(${props.bottom})=${computedF}`} /></div> 
            <div>КФ левого прямоугольника: <InlineMath math={`${lR}`} /></div>
            <div>Невязка: <InlineMath math={`${Math.abs(computedF - lR)}`} /></div>
            <div>КФ правого прямоугольника: <InlineMath math={`${rR}`} /></div>
            <div>Невязка: <InlineMath math={`${Math.abs(computedF - rR)}`} /></div>
            <div>КФ среднего прямоугольника: <InlineMath math={`${mR}`} /></div>
            <div>Невязка: <InlineMath math={`${Math.abs(computedF - mR)}`} /></div>
            <div>КФ трапеции: <InlineMath math={`${t}`} /></div>
            <div>Невязка: <InlineMath math={`${Math.abs(computedF - t)}`} /></div>
            <div>КФ Симпсона: <InlineMath math={`${S}`} /></div>
            <div>Невязка: <InlineMath math={`${Math.abs(computedF - S)}`} /></div>
            <div>КФ 3/8: <InlineMath math={`${tV}`} /></div>
            <div>Невязка: <InlineMath math={`${Math.abs(computedF - tV)}`} /></div>
        </div>
    )
}

export default Answer