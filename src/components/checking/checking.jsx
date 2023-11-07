import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'
import './checking.css'
import { leftRectangle, rightRectangle, middleRectangle, Simpson, threeEight, trapezoid } from '../../formulas';


const Checking = (props) => {
    return (
        <div className="Checking">
            <div>
                Функция: <InlineMath math={`f(x)=${props.functionString}`} />
            </div>
            <div>
                Первообразная, посчитанная ручками:{" "}
                <InlineMath math={`F(x)=${props.antiderivativeString}`} />
            </div>
            <div>
                Точный результат:{" "}
                <InlineMath
                    math={`F(${props.top})-F(${props.bottom})=${
                        props.antiderivative(props.top) -
                        props.antiderivative(props.bottom)
                    }`}
                />
            </div>
            <hr />
            <div>
                КФ левого прямоугольника:{" "}
                <InlineMath
                    math={`${leftRectangle(
                        props.function,
                        props.bottom,
                        props.top
                    )}`}
                />
            </div>
            <div>
                КФ правого прямоугольника:{" "}
                <InlineMath
                    math={`${rightRectangle(
                        props.function,
                        props.bottom,
                        props.top
                    )}`}
                />
            </div>
            <div>
                КФ среднего прямоугольника:{" "}
                <InlineMath
                    math={`${middleRectangle(
                        props.function,
                        props.bottom,
                        props.top
                    )}`}
                />
            </div>
            <div>
                КФ трапеции:{" "}
                <InlineMath
                    math={`${trapezoid(
                        props.function,
                        props.bottom,
                        props.top
                    )}`}
                />
            </div>
            <div>
                КФ Симпсона:{" "}
                <InlineMath
                    math={`${Simpson(props.function, props.bottom, props.top)}`}
                />
            </div>
            <div>
                КФ 3/8:{" "}
                <InlineMath
                    math={`${threeEight(
                        props.function,
                        props.bottom,
                        props.top
                    )}`}
                />
            </div>
        </div>
    );
}

export default Checking