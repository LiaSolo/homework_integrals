import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'
import './answerRunge.css'
import { Calculation } from "../../skf";


const AnswerRunge = (props) => {
    const f = props.f
    const fString = props.fString
    const F = props.F
    const FString = props.FString
    const l = props.param
    const values = Calculation(f, props.top, props.bottom, props.partition);
    const values2 = Calculation(f, props.top, props.bottom, props.partition * l); 
    const lr = (l*values2[0] - values[0])/(l-1)
    const rr = (l * values2[1] - values[1]) / (l - 1);
    const mr = (l*l * values2[2] - values[2]) / (l*l - 1);
    const t = (l*l * values2[3] - values[3]) / (l*l - 1);
    const s = (l**4 * values2[4] - values[4]) / (l**4 - 1);
    const te = (l**4 * values2[5] - values[5]) / (l**4 - 1);
    const computedF = F(props.top) - F(props.bottom)
    return (
        <div className="AnswerRunge">
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
                Уточнение CКФ левого прямоугольника:{" "}
                <InlineMath math={`${lr}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - lr)}`} />
            </div>
            <hr />
            <div>
                Уточнение CКФ правого прямоугольника:{" "}
                <InlineMath math={`${rr}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - rr)}`} />
            </div>
            <hr />
            <div>
                Уточнение CКФ среднего прямоугольника:{" "}
                <InlineMath math={`${mr}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - mr)}`} />
            </div>
            <hr />
            <div>
                Уточнение CКФ трапеции: <InlineMath math={`${t}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - t)}`} />
            </div>
            <hr />
            <div>
                Уточнение CКФ Симпсона: <InlineMath math={`${s}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - s)}`} />
            </div>
            <hr />
            <div>
                Уточнение CКФ 3/8: <InlineMath math={`${te}`} />
            </div>
            <div>
                Погрешность: <InlineMath math={`${Math.abs(computedF - te)}`} />
            </div>
        </div>
    );
}

export default AnswerRunge