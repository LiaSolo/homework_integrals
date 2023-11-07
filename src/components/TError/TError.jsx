import './TError.css'
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const TError = (props) => {

    return (
        <div className="TError">
            <div>
                <InlineMath math={`f(x)=\\sin(x)-\\frac {x^2} 2`} />
            </div>
            <div>
                Рассматриваемый промежуток <InlineMath math={`[0,\\pi]`} />
            </div>
            <div>
                Шаг разбиения <InlineMath math={`${props.step}`} />
            </div>
            <hr />
            <div>
                <InlineMath math={`f'(x)=\\cos(x)-x`} />
                <div>|Max value| = 1</div>
            </div>
            <hr />
            <div>
                <InlineMath math={`f''(x)=-\\sin(x)-1`} />
                <div>|Max value| = 1</div>
            </div>
            <hr />
            <div>
                <InlineMath math={`f''''(x)=\\sin(x)`} />
                <div>|Max value| = 1</div>
            </div>
            <hr />
            <div>
                СКФ левого и правого прямоугольника:{" "}
                <InlineMath math={`${(1 / 2) * Math.PI * props.step}`} />
            </div>
            <div>
                СКФ среднего прямоугольника:{" "}
                <InlineMath math={`${(1 / 24) * Math.PI * props.step**2}`} />
            </div>
            <div>
                СКФ трапеции:{" "}
                <InlineMath math={`${(1 / 12) * Math.PI * props.step**2}`} />
            </div>
            <div>
                СКФ Симпсона:{" "}
                <InlineMath math={`${(1 / 2880) * Math.PI * props.step**4}`} />
            </div>
        </div>
    );
}