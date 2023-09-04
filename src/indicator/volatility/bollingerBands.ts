// Copyright (c) 2022 Onur Cinar. All Rights Reserved.
// https://github.com/cinar/indicatorts

import { add, multiplyBy, subtract } from '../../helper/numArray';
import { sma } from '../trend/sma';
import { mstd } from './mstd';

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
 * Upper Band = BB_PERIOD SMA + 2 (BB_PERIOD Std)
 * Lower Band = BB_PERIOD SMA - 2 (BB_PERIOD Std)
 *
 * @param closings closing values.
 * @return bollinger bands.
 */
export function bollingerBands(closings: number[], BB_PERIOD: number): BollingerBands {
  const std2 = multiplyBy(2, mstd(BB_PERIOD, closings));
  const middleBand = sma(BB_PERIOD, closings);
  const upperBand = add(middleBand, std2);
  const lowerBand = subtract(middleBand, std2);

  return {
    upperBand,
    middleBand,
    lowerBand,
  };
}
