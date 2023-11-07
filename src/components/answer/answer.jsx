import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'
import './answer.css'
import { F1, F1String, f1, f1String } from '../../formulas';
import { leftRectangle, rightRectangle, middleRectangle, Simpson, threeEight, trapezoid } from '../../formulas';


const Answer = (props) => {
    const computedF = F1(props.top) - F1(props.bottom)
    const lR = leftRectangle(f1, props.bottom, props.top)
    const rR = rightRectangle(f1, props.bottom, props.top)
    const mR = middleRectangle(f1, props.bottom, props.top)
    const t = trapezoid(f1, props.bottom, props.top)
    const S = Simpson(f1, props.bottom, props.top)
    const tV = threeEight(f1, props.bottom, props.top)
    return (
        <div className="Answer">
            <div>
                Функция: <InlineMath math={`f(x)=${f1String()}`} />
            </div>
            <div>
                Первообразная, посчитанная ручками:{" "}
                <InlineMath math={`F(x)=${F1String()}`} />
            </div>
            <div>
                Точный результат:{" "}
                <InlineMath
                    math={`F(${props.top})-F(${props.bottom})=${computedF}`}
                />
            </div>
            <hr />
            <div>
                КФ левого прямоугольника: <InlineMath math={`${lR}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - lR)}`} />
            </div>
            <hr />
            <div>
                КФ правого прямоугольника: <InlineMath math={`${rR}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - rR)}`} />
            </div>
            <hr />
            <div>
                КФ среднего прямоугольника: <InlineMath math={`${mR}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - mR)}`} />
            </div>
            <hr />
            <div>
                КФ трапеции: <InlineMath math={`${t}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - t)}`} />
            </div>
            <hr />
            <div>
                КФ Симпсона: <InlineMath math={`${S}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - S)}`} />
            </div>
            <hr />
            <div>
                КФ 3/8: <InlineMath math={`${tV}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - tV)}`} />
            </div>
        </div>
    );
}

export default Answer