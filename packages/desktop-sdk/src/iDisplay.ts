import { IRectangle } from "./iRectangle";

export interface IDisplay {
    /**
     * Bounds of the display
     */
    readonly bounds: IRectangle;

    /**
     * Unique identifier associated with the display.
     */
    readonly id: number;

    /**
     * Can be 0, 90, 180, 270, represents screen rotation in clock-wise degrees.
     */
    readonly rotation: number;

    /**
     * Output device's pixel scale factor.
     */
    readonly scaleFactor: number;

    /**
     * Working area of the display.
     */
    readonly workArea: IRectangle;
}
