export function f1(x) {
    return Math.sin(x) - (x * x) / 2;
}

export function f1String(x) {
    return "\\sin(x) - \\frac {x^2} 2";
}

export function F1(x) {
    return -Math.cos(x) - (x * x * x) / 6;
}

export function F1String() {
    return "-\\cos(x) - \\frac {x^3} 6";
}

export function f2(x) {
    return Math.cos(x) ** 2 + x * Math.exp(x);
}

export function f2String(x) {
    return "\\cos^2(x) + xe^x ";
}

export function F2(x) {
    return Math.sin(2 * x) / 4 + (x - 1) * Math.exp(x) + x / 2;
}

export function F2String() {
    return "\\frac {\\sin(2x)} 4 + (x - 1)e^x + \\frac x 2";
}

export function f3(x) {
    return Math.exp(Math.sqrt(x)) / Math.sqrt(x) + Math.log(x) / x ** 2;
}

export function f3String(x) {
    return "\\frac {e^{\\sqrt x}} {\\sqrt x} + \\frac {\\ln(x)} {x^2}";
}

export function F3(x) {
    return -((Math.log(x) - 2 * x * Math.exp(Math.sqrt(x)) + 1) / x);
}

export function F3String() {
    return "-\\frac {\\ln(x)-2xe^{\\sqrt x} + 1} x";
}

export function leftRectangle(func, bottom, top) {
    return (top - bottom) * func(bottom);
}

export function rightRectangle(func, bottom, top) {
    return (top - bottom) * func(top);
}

export function middleRectangle(func, bottom, top) {
    return (top - bottom) * func((bottom + top) / 2);
}

export function trapezoid(func, bottom, top) {
    return ((top - bottom) / 2) * (func(bottom) + func(top));
}

export function Simpson(func, bottom, top) {
    return (
        ((top - bottom) / 6) *
        (func(bottom) + 4 * func((top + bottom) / 2) + func(top))
    );
}

export function threeEight(func, bottom, top) {
    const h = (top - bottom) / 3;
    return (
        (top - bottom) *
        ((1 / 8) * func(bottom) +
            (3 / 8) * func(bottom + h) +
            (3 / 8) * func(bottom + 2 * h) +
            (1 / 8) * func(top))
    );
}
