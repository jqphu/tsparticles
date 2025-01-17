import type { SVGPathElement } from "../pathseg";

export interface ISvgPath {
    element: SVGPathElement;
    length: number;
    path2d?: Path2D;
}
