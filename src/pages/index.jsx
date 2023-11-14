import { useState } from "react";
import "./style.css";
import Answer from "../components/answer/answer";
import Answer2 from "../components/answer2/answer2";
import Checking from "../components/checking/checking";
import Checking2 from "../components/checking2/checking2";
import {
    deg0,
    deg0String,
    deg1,
    deg1String,
    deg2,
    deg2String,
    deg3,
    deg3String,
    deg4,
    deg4String,
    deg5,
    deg5String,
} from "../polynoms";
import {
    F1,
    F1String,
    f1,
    f1String,
    F2,
    F2String,
    f2,
    f2String,
    F3,
    F3String,
    f3,
    f3String,
} from "../formulas";
import { TError } from "../components/TError/TError";
import AnswerRunge from "../components/answerRunge/answerRunge";

export const Main = () => {
    const [begin, setBegin] = useState(0);
    const handleChangeBegin = (event) => {
        setBegin(Number(event.target.value));
    };

    const [end, setEnd] = useState(Math.PI);
    const handleChangeEnd = (event) => {
        setEnd(Number(event.target.value));
    };

    const [param, setParam] = useState(2);
    const handleChangeParam = (event) => {
        setParam(Number(event.target.value));
    };

    const [partition, setPartition] = useState(1);
    const handleChangePartition = (event) => {
        setPartition(Number(event.target.value));
    };

    const [isShowCheck, setShowCheck] = useState(true);
    const handleShowClick = () => {
        setShowCheck(!isShowCheck);
    };

    const [isShowAltern, setShowAltern] = useState(true);
    const handleAlternClick = () => {
        setShowAltern(!isShowAltern);
    };

    const h = (end - begin) / partition;
    const hl = h / param;
    return (
        <div className="Main">
            <header>
                Приближенное вычисление интеграла по квадратурным формулам
            </header>
            <div>
                Введите начало отрезка:{" "}
                <input value={begin} onChange={handleChangeBegin}></input>
            </div>
            <div>
                Введите конец отрезка:{" "}
                <input value={end} onChange={handleChangeEnd}></input>
            </div>
            <div>
                (4.2) Введите, на сколько частей разбить отрезок:{" "}
                <input
                    value={partition}
                    onChange={handleChangePartition}
                ></input>
                {" =>"} шаг = {h}
            </div>
            <div>
                (4.3) Введите, во сколько раз увеличить количество частей для
                уточнения:{" "}
                <input value={param} onChange={handleChangeParam}></input>
            </div>
            <div>
                {"=>"} количество промежутков = {partition * param} и шаг = {hl}
            </div>
            <div className="displayFlex">
                <div>Проверка</div>
                <button className="show" onClick={handleShowClick}>
                    {isShowCheck ? "Скрыть" : "Показать"}
                </button>
            </div>
            {isShowCheck && (
                <div className="displayFlex">
                    <div>
                        4.1
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
                    </div>
                    <div>
                        4.2
                        <Checking2
                            function={deg0}
                            functionString={deg0String()}
                            antiderivative={deg1}
                            antiderivativeString={deg1String()}
                            bottom={begin}
                            top={end}
                            partition={partition}
                        />
                        <Checking2
                            function={deg1}
                            functionString={deg1String()}
                            antiderivative={deg2}
                            antiderivativeString={deg2String()}
                            bottom={begin}
                            top={end}
                            partition={partition}
                        />
                        <Checking2
                            function={deg2}
                            functionString={deg2String()}
                            antiderivative={deg3}
                            antiderivativeString={deg3String()}
                            bottom={begin}
                            top={end}
                            partition={partition}
                        />
                        <Checking2
                            function={deg3}
                            functionString={deg3String()}
                            antiderivative={deg4}
                            antiderivativeString={deg4String()}
                            bottom={begin}
                            top={end}
                            partition={partition}
                        />
                        <Checking2
                            function={deg4}
                            functionString={deg4String()}
                            antiderivative={deg5}
                            antiderivativeString={deg5String()}
                            bottom={begin}
                            top={end}
                            partition={partition}
                        />
                    </div>
                    <div>
                        4.3
                        <Checking2
                            function={deg0}
                            functionString={deg0String()}
                            antiderivative={deg1}
                            antiderivativeString={deg1String()}
                            bottom={begin}
                            top={end}
                            partition={partition * param}
                        />
                        <Checking2
                            function={deg1}
                            functionString={deg1String()}
                            antiderivative={deg2}
                            antiderivativeString={deg2String()}
                            bottom={begin}
                            top={end}
                            partition={partition * param}
                        />
                        <Checking2
                            function={deg2}
                            functionString={deg2String()}
                            antiderivative={deg3}
                            antiderivativeString={deg3String()}
                            bottom={begin}
                            top={end}
                            partition={partition * param}
                        />
                        <Checking2
                            function={deg3}
                            functionString={deg3String()}
                            antiderivative={deg4}
                            antiderivativeString={deg4String()}
                            bottom={begin}
                            top={end}
                            partition={partition * param}
                        />
                        <Checking2
                            function={deg4}
                            functionString={deg4String()}
                            antiderivative={deg5}
                            antiderivativeString={deg5String()}
                            bottom={begin}
                            top={end}
                            partition={partition * param}
                        />
                    </div>
                </div>
            )}

            <div>Непроверка</div>
            <div className="displayFlex">
                <div>
                    4.1
                    <Answer top={end} bottom={begin} />
                </div>
                <div>
                    4.2
                    <Answer2
                        top={end}
                        bottom={begin}
                        partition={partition}
                        f={f1}
                        fString={f1String()}
                        F={F1}
                        FString={F1String()}
                    />
                </div>
                <div>
                    4.3
                    <Answer2
                        top={end}
                        bottom={begin}
                        partition={partition * param}
                        f={f1}
                        fString={f1String()}
                        F={F1}
                        FString={F1String()}
                    />
                </div>
                <div>
                    Метод Рунге-Ромберга
                    <AnswerRunge
                        top={end}
                        bottom={begin}
                        partition={partition}
                        param={param}
                        f={f1}
                        fString={f1String()}
                        F={F1}
                        FString={F1String()}
                    />
                </div>
            </div>
            <div>Теоретическая погрешность</div>
            <TError bottom={0} top={Math.PI} step={h} />
            <div className="displayFlex">
                <div>
                    Альтернативные функции для вычисления интеграла по СКФ
                </div>
                <button className="show" onClick={handleAlternClick}>
                    {isShowAltern ? "Скрыть" : "Показать"}
                </button>
            </div>

            {isShowAltern && (
                <div className="displayFlex">
                    <div>
                        4.2
                        <Answer2
                            top={end}
                            bottom={begin}
                            partition={partition}
                            f={f2}
                            fString={f2String()}
                            F={F2}
                            FString={F2String()}
                        />
                        <Answer2
                            top={end}
                            bottom={begin}
                            partition={partition}
                            f={f3}
                            fString={f3String()}
                            F={F3}
                            FString={F3String()}
                        />
                    </div>
                    <div>
                        4.3
                        <Answer2
                            top={end}
                            bottom={begin}
                            partition={partition * param}
                            f={f2}
                            fString={f2String()}
                            F={F2}
                            FString={F2String()}
                        />
                        <Answer2
                            top={end}
                            bottom={begin}
                            partition={partition * param}
                            f={f3}
                            fString={f3String()}
                            F={F3}
                            FString={F3String()}
                        />
                    </div>
                    <div>
                        Метод Рунге-Ромберга
                        <AnswerRunge
                            top={end}
                            bottom={begin}
                            partition={partition}
                            param={param}
                            f={f2}
                            fString={f2String()}
                            F={F2}
                            FString={F2String()}
                        />
                        <AnswerRunge
                            top={end}
                            bottom={begin}
                            partition={partition}
                            param={param}
                            f={f3}
                            fString={f3String()}
                            F={F3}
                            FString={F3String()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
