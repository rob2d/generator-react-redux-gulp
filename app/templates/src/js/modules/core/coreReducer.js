import { REFRESH_WINDOW_DIMENSIONS } from './coreActions';

// getWindowWidth & getWindowHeight was
// adapted from http://stackoverflow.com/a/8876069/1291659
var getViewportWidth = function() {
  return (
    Math.max(window.document.documentElement.clientWidth, window.innerWidth) ||
    0
  );
};

var getViewportHeight = function() {
  return (
    Math.max(
      window.document.documentElement.clientHeight,
      window.innerHeight
    ) || 0
  );
};

const initialState = {
  language: "en",
  viewportWidth: getViewportWidth(),
  viewportHeight: getViewportHeight(),
  appMenuOpen: false // for mobile views
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case REFRESH_WINDOW_DIMENSIONS:
      let viewportWidth = getViewportWidth(),
        viewportHeight = getViewportHeight();

      if (
        state.viewportWidth !== viewportWidth ||
        state.viewportHeight !== viewportHeight
      ) {
        // override width/height which will refresh app view
        return Object.assign({ ...state }, { viewportWidth, viewportHeight });
      } else return state; //otherwise do not mutate
    default:
      break;
  }

  return state;
};

export default reducer;
