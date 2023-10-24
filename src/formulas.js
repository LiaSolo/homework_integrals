
export function f(x){
    return Math.sin(x) - x*x/2
}

export function fString(x){
    return '\\sin(x) - \\frac {x^2} 2'
}

export function F(x){
    return -Math.cos(x) - x*x*x/6
}

export function FString(){
    return '-\\cos(x) - \\frac {x^3} 6'
}

export function leftRectangle(func, bottom, top) {
    return (top-bottom)*func(bottom)
}

export function rightRectangle(func, bottom, top) {
    return (top-bottom)*func(top)
}

export function middleRectangle(func, bottom, top) {
    return (top-bottom)*func((bottom + top)/2)
}

export function trapezoid(func, bottom, top) {
    return (top - bottom)/2 * (func(bottom) + func(top))
}

export function Simpson(func, bottom, top) {
    return (top - bottom)/6 * (func(bottom) + 4*func((top + bottom)/2) + func(top))
}

export function threeEight(func, bottom, top) {
    const h = (top - bottom)/3
    return (top - bottom) * (1/8 * func(bottom) + 3/8 * func(bottom + h) +
    3/8 * func(bottom + 2*h) + 1/8 * func(top))
}