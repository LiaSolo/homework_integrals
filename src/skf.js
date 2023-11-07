import {
    leftRectangle,
    rightRectangle,
    middleRectangle,
    Simpson,
    threeEight,
    trapezoid,
} from "./formulas";

export function Calculation(func, top, bottom, partition) {
    //const response = calculations(bottom, top, partition)
    let lr = 0;
    let rr = 0;
    let mr = 0;
    let tr = 0;
    let simp = 0;
    let tv = 0;
    let counter = 0;
    let bh = 0;
    const h = (top - bottom) / partition;
    while (counter < partition) {
        counter++;
        bh = bottom + h;
        lr += leftRectangle(func, bottom, bh);
        rr += rightRectangle(func, bottom, bh);
        mr += middleRectangle(func, bottom, bh);
        tr += trapezoid(func, bottom, bh);
        simp += Simpson(func, bottom, bh);
        tv += threeEight(func, bottom, bh);
        bottom += h;
    }
    return [lr, rr, mr, tr, simp, tv];
}
