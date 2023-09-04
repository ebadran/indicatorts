/**
 * Bollinger bands result object.
 */
export interface BollingerBands {
    upperBand: number[];
    middleBand: number[];
    lowerBand: number[];
}
/**
 * Bollinger Bands.
 *
 * Middle Band = BB_PERIOD SMA.
 * Upper Band = BB_PERIOD SMA + STD_PERIOD (BB_PERIOD Std)
 * Lower Band = BB_PERIOD SMA - STD_PERIOD (BB_PERIOD Std)
 *
 * @param closings closing values.
 * @return bollinger bands.
 */
export declare function bollingerBands(closings: number[], BB_PERIOD: number, STD_PERIOD: number): BollingerBands;
