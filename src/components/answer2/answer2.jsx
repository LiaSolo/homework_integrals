import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'
import './answer2.css'
import { Calculation } from "../../skf";


const Answer2 = (props) => {
    const f = props.f
    const fString = props.fString
    const F = props.F
    const FString = props.FString
    const values = Calculation(f, props.top, props.bottom, props.partition);
    const computedF = F(props.top) - F(props.bottom)
    return (
        <div className="Answer2">
            <div>
                Функция: <InlineMath math={`f(x)=${fString}`} />
            </div>
            <div>
                Первообразная, посчитанная ручками:{" "}
                <InlineMath math={`F(x)=${FString}`} />
            </div>
            <div>
                Точный результат:{" "}
                <InlineMath
                    math={`F(${props.top})-F(${props.bottom})=${computedF}`}
                />
            </div>
            <hr />
            <div>
                CКФ левого прямоугольника: <InlineMath math={`${values[0]}`} />
            </div>
            <div>
                Погрешность:{" "}
                <InlineMath math={`${Math.abs(computedF - values[0])}`} />
            </div>
            <hr />
            <div>
                CКФ правого прямоугольника: <InlineMath math={`${values[1]}`} />
            </div>
            <div>
                Погрешность:{" "}
                <InlineMath math={`${Math.abs(computedF - values[1])}`} />
            </div>
            <hr />
            <div>
                CКФ среднего прямоугольника: <InlineMath math={`${values[2]}`} />
            </div>
            <div>
                Погрешность:{" "}
                <InlineMath math={`${Math.abs(computedF - values[2])}`} />
            </div>
            <hr />
            <div>
                CКФ трапеции: <InlineMath math={`${values[3]}`} />
            </div>
            <div>
                Погрешность:{" "}
                <InlineMath math={`${Math.abs(computedF - values[3])}`} />
            </div>
            <hr />
            <div>
                CКФ Симпсона: <InlineMath math={`${values[4]}`} />
            </div>
            <div>
                Погрешность:{" "}
                <InlineMath math={`${Math.abs(computedF - values[4])}`} />
            </div>
            <hr />
            <div>
                CКФ 3/8: <InlineMath math={`${values[5]}`} />
            </div>
            <div>
                Погрешность:{" "}
                <InlineMath math={`${Math.abs(computedF - values[5])}`} />
            </div>
        </div>
    );
}

export default Answer2