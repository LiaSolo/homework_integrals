import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./checking2.css";
import { Calculation } from "../../skf";

const Checking2 = (props) => {
    const bottom = props.bottom;
    const top = props.top;
    const partition = props.partition;
    const values = Calculation(props.function, top, bottom, partition);
    /*console.log(
        props.antiderivative(props.top) - props.antiderivative(props.bottom) - values[0]
    );*/

    return (
        <div className="Checking2">
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
                    math={`F(${top})-F(${bottom})=${
                        props.antiderivative(top) -
                        props.antiderivative(bottom)
                    }`}
                />
            </div>
            <hr />
            <div>
                CКФ левого прямоугольника: <InlineMath math={`${values[0]}`} />
            </div>
            <div>
                CКФ правого прямоугольника: <InlineMath math={`${values[1]}`} />
            </div>
            <div>
                CКФ среднего прямоугольника:{" "}
                <InlineMath math={`${values[2]}`} />
            </div>
            <div>
                CКФ трапеции: <InlineMath math={`${values[3]}`} />
            </div>
            <div>
                CКФ Симпсона: <InlineMath math={`${values[4]}`} />
            </div>
            <div>
                CКФ 3/8: <InlineMath math={`${values[5]}`} />
            </div>
        </div>
    );
};

export default Checking2;
