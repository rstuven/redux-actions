'use strict';

exports.__esModule = true;
exports['default'] = createAction;
function identity(t) {
  return t;
}

function createAction(type, payloadCreator, metaCreator) {
  var finalPayloadCreator = typeof payloadCreator === 'function' ? payloadCreator : identity;

  function actionCreator() {
    var action = {
      type: type,
      payload: finalPayloadCreator.apply(undefined, arguments)
    };

    if (typeof metaCreator === 'function') action.meta = metaCreator.apply(undefined, arguments);

    return action;
  }

  actionCreator.toString = function () {
    return type;
  };

  return actionCreator;
}

module.exports = exports['default'];