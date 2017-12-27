/* eslint-disable import/prefer-default-export */

import { CHANGE_SELECTION } from '../constants';

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected },
  };
}
