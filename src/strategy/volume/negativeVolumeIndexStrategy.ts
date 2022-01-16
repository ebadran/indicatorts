// Copyright (c) 2022 Onur Cinar. All Rights Reserved.
// https://github.com/cinar/indicatorts

import {ema} from '../../indicator/trend/ema';
import {negativeVolumeIndex, NVI_DEFAULT_PERIOD} from '../../indicator/volume/negativeVolumeIndex';
import {Action} from '../action';
import {Asset} from '../asset';

/**
 * The negative volume index strategy uses the nvi values that are generated by
 * the Negative Volume Index (NVI) indicator function to provide a BUY action
 * when nvi is less than its 255-period EMA, and a SELL action when it is
 * greather than its 255-period EMA, otherwise a HOLD action.
 *
 * @param asset asset object.
 * @returns strategy actions.
 */
export function negativeVolumeIndexStrategy(asset: Asset): Action[] {
  const nvi = negativeVolumeIndex(
      asset.closings,
      asset.volumes,
  );

  const nvi255 = ema(NVI_DEFAULT_PERIOD, nvi);

  const actions = new Array<Action>(nvi.length);

  for (let i = 0; i < actions.length; i++) {
    if (nvi[i] < nvi255[i]) {
      actions[i] = Action.BUY;
    } else if (nvi[i] > nvi255[i]) {
      actions[i] = Action.SELL;
    } else {
      actions[i] = Action.HOLD;
    }
  }

  return actions;
}
