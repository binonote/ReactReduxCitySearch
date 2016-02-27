'use strict';

export default function(state = null, action) {
  switch(action.type) {
    case 'ZIP_CHANGE':
      return action.zip;
  }
  return state;
}
