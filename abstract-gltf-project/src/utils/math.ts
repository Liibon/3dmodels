export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

export function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}