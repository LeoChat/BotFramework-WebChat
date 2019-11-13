// This is adopted from event-target-shim@5.0.1 under MIT License.
// The source code is copied here because the original package does not support ES5 browsers.
// Webpack assumes all code under node_modules are correctly transpiled to ES5.
// But since this package did not transpile, thus, the output bundle will contains non-ES5 code which break older browsers.

/* eslint-disable */

/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Toru Nagashima
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */

var privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */

var wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */

function pd(event) {
  var retv = privateData.get(event);
  console.assert(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */

function setCancelFlag(data) {
  if (data.passiveListener != null) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error('Unable to preventDefault inside passive event listener invocation.', data.passiveListener);
    }

    return;
  }

  if (!data.event.cancelable) {
    return;
  }

  data.canceled = true;

  if (typeof data.event.preventDefault === 'function') {
    data.event.preventDefault();
  }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */

/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */

function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget: eventTarget,
    event: event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: false,
    stopped: false,
    immediateStopped: false,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  }); // https://heycam.github.io/webidl/#Unforgeable

  Object.defineProperty(this, 'isTrusted', {
    value: false,
    enumerable: true
  }); // Define accessors

  var keys = Object.keys(event);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];

    if (!(key in this)) {
      Object.defineProperty(this, key, defineRedirectDescriptor(key));
    }
  }
} // Should be enumerable, but class methods are not enumerable.

Event.prototype = {
  /**
   * The type of this event.
   * @type {string}
   */
  get type() {
    return pd(this).event.type;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get target() {
    return pd(this).eventTarget;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get currentTarget() {
    return pd(this).currentTarget;
  },

  /**
   * @returns {EventTarget[]} The composed path of this event.
   */
  composedPath: function composedPath() {
    var currentTarget = pd(this).currentTarget;

    if (currentTarget == null) {
      return [];
    }

    return [currentTarget];
  },

  /**
   * Constant of NONE.
   * @type {number}
   */
  get NONE() {
    return 0;
  },

  /**
   * Constant of CAPTURING_PHASE.
   * @type {number}
   */
  get CAPTURING_PHASE() {
    return 1;
  },

  /**
   * Constant of AT_TARGET.
   * @type {number}
   */
  get AT_TARGET() {
    return 2;
  },

  /**
   * Constant of BUBBLING_PHASE.
   * @type {number}
   */
  get BUBBLING_PHASE() {
    return 3;
  },

  /**
   * The target of this event.
   * @type {number}
   */
  get eventPhase() {
    return pd(this).eventPhase;
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopPropagation: function stopPropagation() {
    var data = pd(this);
    data.stopped = true;

    if (typeof data.event.stopPropagation === 'function') {
      data.event.stopPropagation();
    }
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopImmediatePropagation: function stopImmediatePropagation() {
    var data = pd(this);
    data.stopped = true;
    data.immediateStopped = true;

    if (typeof data.event.stopImmediatePropagation === 'function') {
      data.event.stopImmediatePropagation();
    }
  },

  /**
   * The flag to be bubbling.
   * @type {boolean}
   */
  get bubbles() {
    return Boolean(pd(this).event.bubbles);
  },

  /**
   * The flag to be cancelable.
   * @type {boolean}
   */
  get cancelable() {
    return Boolean(pd(this).event.cancelable);
  },

  /**
   * Cancel this event.
   * @returns {void}
   */
  preventDefault: function preventDefault() {
    setCancelFlag(pd(this));
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   */
  get defaultPrevented() {
    return pd(this).canceled;
  },

  /**
   * The flag to be composed.
   * @type {boolean}
   */
  get composed() {
    return Boolean(pd(this).event.composed);
  },

  /**
   * The unix time of this event.
   * @type {number}
   */
  get timeStamp() {
    return pd(this).timeStamp;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   * @deprecated
   */
  get srcElement() {
    return pd(this).eventTarget;
  },

  /**
   * The flag to stop event bubbling.
   * @type {boolean}
   * @deprecated
   */
  get cancelBubble() {
    return pd(this).stopped;
  },

  set cancelBubble(value) {
    if (!value) {
      return;
    }

    var data = pd(this);
    data.stopped = true;

    if (typeof data.event.cancelBubble === 'boolean') {
      data.event.cancelBubble = true;
    }
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   * @deprecated
   */
  get returnValue() {
    return !pd(this).canceled;
  },

  set returnValue(value) {
    if (!value) {
      setCancelFlag(pd(this));
    }
  },

  /**
   * Initialize this event object. But do nothing under event dispatching.
   * @param {string} type The event type.
   * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
   * @param {boolean} [cancelable=false] The flag to be possible to cancel.
   * @deprecated
   */
  initEvent: function initEvent() {
    // Do nothing.
  }
}; // `constructor` is not enumerable.

Object.defineProperty(Event.prototype, 'constructor', {
  value: Event,
  configurable: true,
  writable: true
}); // Ensure `event instanceof window.Event` is `true`.

if (typeof window !== 'undefined' && typeof window.Event !== 'undefined') {
  Object.setPrototypeOf(Event.prototype, window.Event.prototype); // Make association for wrappers.

  wrappers.set(window.Event.prototype, Event);
}
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */

function defineRedirectDescriptor(key) {
  return {
    get: function get() {
      return pd(this).event[key];
    },
    set: function set(value) {
      pd(this).event[key] = value;
    },
    configurable: true,
    enumerable: true
  };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */

function defineCallDescriptor(key) {
  return {
    value: function value() {
      var event = pd(this).event;
      return event[key].apply(event, arguments);
    },
    configurable: true,
    enumerable: true
  };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */

function defineWrapper(BaseEvent, proto) {
  var keys = Object.keys(proto);

  if (keys.length === 0) {
    return BaseEvent;
  }
  /** CustomEvent */

  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }

  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: {
      value: CustomEvent,
      configurable: true,
      writable: true
    }
  }); // Define accessors.

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];

    if (!(key in BaseEvent.prototype)) {
      var descriptor = Object.getOwnPropertyDescriptor(proto, key);
      var isFunc = typeof descriptor.value === 'function';
      Object.defineProperty(
        CustomEvent.prototype,
        key,
        isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key)
      );
    }
  }

  return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */

function getWrapper(proto) {
  if (proto == null || proto === Object.prototype) {
    return Event;
  }

  var wrapper = wrappers.get(proto);

  if (wrapper == null) {
    wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
    wrappers.set(proto, wrapper);
  }

  return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */

function wrapEvent(eventTarget, event) {
  var Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */

function isStopped(event) {
  return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */

function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */

function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */

function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */

var listenersMap = new WeakMap(); // Listener types

var CAPTURE = 1;
var BUBBLE = 2;
var ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */

function isObject(x) {
  return x !== null && _typeof(x) === 'object'; //eslint-disable-line no-restricted-syntax
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */

function getListeners(eventTarget) {
  var listeners = listenersMap.get(eventTarget);

  if (listeners == null) {
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  }

  return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */

function defineEventAttributeDescriptor(eventName) {
  return {
    get: function get() {
      var listeners = getListeners(this);
      var node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          return node.listener;
        }

        node = node.next;
      }

      return null;
    },
    set: function set(listener) {
      if (typeof listener !== 'function' && !isObject(listener)) {
        listener = null; // eslint-disable-line no-param-reassign
      }

      var listeners = getListeners(this); // Traverse to the tail while removing old value.

      var prev = null;
      var node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          // Remove old value.
          if (prev !== null) {
            prev.next = node.next;
          } else if (node.next !== null) {
            listeners.set(eventName, node.next);
          } else {
            listeners.delete(eventName);
          }
        } else {
          prev = node;
        }

        node = node.next;
      } // Add new value.

      if (listener !== null) {
        var newNode = {
          listener: listener,
          listenerType: ATTRIBUTE,
          passive: false,
          once: false,
          next: null
        };

        if (prev === null) {
          listeners.set(eventName, newNode);
        } else {
          prev.next = newNode;
        }
      }
    },
    configurable: true,
    enumerable: true
  };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */

function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(eventTargetPrototype, 'on'.concat(eventName), defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */

function defineCustomEventTarget(eventNames) {
  /** CustomEventTarget */
  function CustomEventTarget() {
    EventTarget.call(this);
  }

  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: true,
      writable: true
    }
  });

  for (var i = 0; i < eventNames.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
  }

  return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */

function EventTarget() {
  /*eslint-disable consistent-return */
  if (this instanceof EventTarget) {
    listenersMap.set(this, new Map());
    return;
  }

  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    return defineCustomEventTarget(arguments[0]);
  }

  if (arguments.length > 0) {
    var types = new Array(arguments.length);

    for (var i = 0; i < arguments.length; ++i) {
      types[i] = arguments[i];
    }

    return defineCustomEventTarget(types);
  }

  throw new TypeError('Cannot call a class as a function');
  /*eslint-enable consistent-return */
} // Should be enumerable, but class methods are not enumerable.

EventTarget.prototype = {
  /**
   * Add a given listener to this event target.
   * @param {string} eventName The event name to add.
   * @param {Function} listener The listener to add.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  addEventListener: function addEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    if (typeof listener !== 'function' && !isObject(listener)) {
      throw new TypeError("'listener' should be a function or an object.");
    }

    var listeners = getListeners(this);
    var optionsIsObj = isObject(options);
    var capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
    var listenerType = capture ? CAPTURE : BUBBLE;
    var newNode = {
      listener: listener,
      listenerType: listenerType,
      passive: optionsIsObj && Boolean(options.passive),
      once: optionsIsObj && Boolean(options.once),
      next: null
    }; // Set it as the first node if the first node is null.

    var node = listeners.get(eventName);

    if (node === undefined) {
      listeners.set(eventName, newNode);
      return;
    } // Traverse to the tail while checking duplication..

    var prev = null;

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        // Should ignore duplication.
        return;
      }

      prev = node;
      node = node.next;
    } // Add it.

    prev.next = newNode;
  },

  /**
   * Remove a given listener from this event target.
   * @param {string} eventName The event name to remove.
   * @param {Function} listener The listener to remove.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  removeEventListener: function removeEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    var listeners = getListeners(this);
    var capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
    var listenerType = capture ? CAPTURE : BUBBLE;
    var prev = null;
    var node = listeners.get(eventName);

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }

        return;
      }

      prev = node;
      node = node.next;
    }
  },

  /**
   * Dispatch a given event.
   * @param {Event|{type:string}} event The event to dispatch.
   * @returns {boolean} `false` if canceled.
   */
  dispatchEvent: function dispatchEvent(event) {
    if (event == null || typeof event.type !== 'string') {
      throw new TypeError('"event.type" should be a string.');
    } // If listeners aren't registered, terminate.

    var listeners = getListeners(this);
    var eventName = event.type;
    var node = listeners.get(eventName);

    if (node == null) {
      return true;
    } // Since we cannot rewrite several properties, so wrap object.

    var wrappedEvent = wrapEvent(this, event); // This doesn't process capturing phase and bubbling phase.
    // This isn't participating in a tree.

    var prev = null;

    while (node != null) {
      // Remove this listener if it's once
      if (node.once) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
      } else {
        prev = node;
      } // Call this listener

      setPassiveListener(wrappedEvent, node.passive ? node.listener : null);

      if (typeof node.listener === 'function') {
        try {
          node.listener.call(this, wrappedEvent);
        } catch (err) {
          if (typeof console !== 'undefined' && typeof console.error === 'function') {
            console.error(err);
          }
        }
      } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === 'function') {
        node.listener.handleEvent(wrappedEvent);
      } // Break if `event.stopImmediatePropagation` was called.

      if (isStopped(wrappedEvent)) {
        break;
      }

      node = node.next;
    }

    setPassiveListener(wrappedEvent, null);
    setEventPhase(wrappedEvent, 0);
    setCurrentTarget(wrappedEvent, null);
    return !wrappedEvent.defaultPrevented;
  }
}; // `constructor` is not enumerable.

Object.defineProperty(EventTarget.prototype, 'constructor', {
  value: EventTarget,
  configurable: true,
  writable: true
}); // Ensure `eventTarget instanceof window.EventTarget` is `true`.

if (typeof window !== 'undefined' && typeof window.EventTarget !== 'undefined') {
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports.default = EventTarget;
module.exports = EventTarget;
module.exports.EventTarget = module.exports['default'] = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlcm5hbC9ldmVudC10YXJnZXQtc2hpbS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInByaXZhdGVEYXRhIiwiV2Vha01hcCIsIndyYXBwZXJzIiwicGQiLCJldmVudCIsInJldHYiLCJnZXQiLCJjb25zb2xlIiwiYXNzZXJ0Iiwic2V0Q2FuY2VsRmxhZyIsImRhdGEiLCJwYXNzaXZlTGlzdGVuZXIiLCJlcnJvciIsImNhbmNlbGFibGUiLCJjYW5jZWxlZCIsInByZXZlbnREZWZhdWx0IiwiRXZlbnQiLCJldmVudFRhcmdldCIsInNldCIsImV2ZW50UGhhc2UiLCJjdXJyZW50VGFyZ2V0Iiwic3RvcHBlZCIsImltbWVkaWF0ZVN0b3BwZWQiLCJ0aW1lU3RhbXAiLCJEYXRlIiwibm93IiwiZW51bWVyYWJsZSIsImtleXMiLCJpIiwibGVuZ3RoIiwia2V5IiwiZGVmaW5lUmVkaXJlY3REZXNjcmlwdG9yIiwicHJvdG90eXBlIiwidHlwZSIsInRhcmdldCIsImNvbXBvc2VkUGF0aCIsIk5PTkUiLCJDQVBUVVJJTkdfUEhBU0UiLCJBVF9UQVJHRVQiLCJCVUJCTElOR19QSEFTRSIsInN0b3BQcm9wYWdhdGlvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJ1YmJsZXMiLCJCb29sZWFuIiwiZGVmYXVsdFByZXZlbnRlZCIsImNvbXBvc2VkIiwic3JjRWxlbWVudCIsImNhbmNlbEJ1YmJsZSIsInJldHVyblZhbHVlIiwiaW5pdEV2ZW50IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3aW5kb3ciLCJzZXRQcm90b3R5cGVPZiIsImRlZmluZUNhbGxEZXNjcmlwdG9yIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkZWZpbmVXcmFwcGVyIiwiQmFzZUV2ZW50IiwicHJvdG8iLCJDdXN0b21FdmVudCIsImNhbGwiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpc0Z1bmMiLCJnZXRXcmFwcGVyIiwid3JhcHBlciIsImdldFByb3RvdHlwZU9mIiwid3JhcEV2ZW50IiwiV3JhcHBlciIsImlzU3RvcHBlZCIsInNldEV2ZW50UGhhc2UiLCJzZXRDdXJyZW50VGFyZ2V0Iiwic2V0UGFzc2l2ZUxpc3RlbmVyIiwibGlzdGVuZXJzTWFwIiwiQ0FQVFVSRSIsIkJVQkJMRSIsIkFUVFJJQlVURSIsImlzT2JqZWN0IiwieCIsImdldExpc3RlbmVycyIsImxpc3RlbmVycyIsIlR5cGVFcnJvciIsImRlZmluZUV2ZW50QXR0cmlidXRlRGVzY3JpcHRvciIsImV2ZW50TmFtZSIsIm5vZGUiLCJsaXN0ZW5lclR5cGUiLCJsaXN0ZW5lciIsIm5leHQiLCJwcmV2IiwiZGVsZXRlIiwibmV3Tm9kZSIsInBhc3NpdmUiLCJvbmNlIiwiZGVmaW5lRXZlbnRBdHRyaWJ1dGUiLCJldmVudFRhcmdldFByb3RvdHlwZSIsImRlZmluZUN1c3RvbUV2ZW50VGFyZ2V0IiwiZXZlbnROYW1lcyIsIkN1c3RvbUV2ZW50VGFyZ2V0IiwiRXZlbnRUYXJnZXQiLCJNYXAiLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcHRpb25zIiwib3B0aW9uc0lzT2JqIiwiY2FwdHVyZSIsInVuZGVmaW5lZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50Iiwid3JhcHBlZEV2ZW50IiwiZXJyIiwiaGFuZGxlRXZlbnQiLCJkZWZhdWx0IiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7OztBQUtBOzs7O0FBRUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7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QUFQLENBQW1CckUsU0FBaEU7QUFDRDs7QUFFRGxDLE9BQU8sQ0FBQ2tHLG9CQUFSLEdBQStCQSxvQkFBL0I7QUFDQWxHLE9BQU8sQ0FBQ3VHLFdBQVIsR0FBc0JBLFdBQXRCO0FBQ0F2RyxPQUFPLENBQUNzSCxPQUFSLEdBQWtCZixXQUFsQjtBQUVBZ0IsTUFBTSxDQUFDdkgsT0FBUCxHQUFpQnVHLFdBQWpCO0FBQ0FnQixNQUFNLENBQUN2SCxPQUFQLENBQWV1RyxXQUFmLEdBQTZCZ0IsTUFBTSxDQUFDdkgsT0FBUCxDQUFlLFNBQWYsSUFBNEJ1RyxXQUF6RDtBQUNBZ0IsTUFBTSxDQUFDdkgsT0FBUCxDQUFla0csb0JBQWYsR0FBc0NBLG9CQUF0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgYWRvcHRlZCBmcm9tIGV2ZW50LXRhcmdldC1zaGltQDUuMC4xIHVuZGVyIE1JVCBMaWNlbnNlLlxuLy8gVGhlIHNvdXJjZSBjb2RlIGlzIGNvcGllZCBoZXJlIGJlY2F1c2UgdGhlIG9yaWdpbmFsIHBhY2thZ2UgZG9lcyBub3Qgc3VwcG9ydCBFUzUgYnJvd3NlcnMuXG5cbi8vIFdlYnBhY2sgYXNzdW1lcyBhbGwgY29kZSB1bmRlciBub2RlX21vZHVsZXMgYXJlIGNvcnJlY3RseSB0cmFuc3BpbGVkIHRvIEVTNS5cbi8vIEJ1dCBzaW5jZSB0aGlzIHBhY2thZ2UgZGlkIG5vdCB0cmFuc3BpbGUsIHRodXMsIHRoZSBvdXRwdXQgYnVuZGxlIHdpbGwgY29udGFpbnMgbm9uLUVTNSBjb2RlIHdoaWNoIGJyZWFrIG9sZGVyIGJyb3dzZXJzLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiFcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBUb3J1IE5hZ2FzaGltYVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAYXV0aG9yIFRvcnUgTmFnYXNoaW1hIDxodHRwczovL2dpdGh1Yi5jb20vbXlzdGljYXRlYT5cbiAqIEBjb3B5cmlnaHQgMjAxNSBUb3J1IE5hZ2FzaGltYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gcm9vdCBkaXJlY3RvcnkgZm9yIGZ1bGwgbGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByaXZhdGVEYXRhXG4gKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0LlxuICogQHByb3BlcnR5IHt7dHlwZTpzdHJpbmd9fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50UGhhc2UgVGhlIGN1cnJlbnQgZXZlbnQgcGhhc2UuXG4gKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0fG51bGx9IGN1cnJlbnRUYXJnZXQgVGhlIGN1cnJlbnQgZXZlbnQgdGFyZ2V0LlxuICogQHByb3BlcnR5IHtib29sZWFufSBjYW5jZWxlZCBUaGUgZmxhZyB0byBwcmV2ZW50IGRlZmF1bHQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHN0b3BwZWQgVGhlIGZsYWcgdG8gc3RvcCBwcm9wYWdhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaW1tZWRpYXRlU3RvcHBlZCBUaGUgZmxhZyB0byBzdG9wIHByb3BhZ2F0aW9uIGltbWVkaWF0ZWx5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbnxudWxsfSBwYXNzaXZlTGlzdGVuZXIgVGhlIGxpc3RlbmVyIGlmIHRoZSBjdXJyZW50IGxpc3RlbmVyIGlzIHBhc3NpdmUuIE90aGVyd2lzZSB0aGlzIGlzIG51bGwuXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGltZVN0YW1wIFRoZSB1bml4IHRpbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogUHJpdmF0ZSBkYXRhIGZvciBldmVudCB3cmFwcGVycy5cbiAqIEB0eXBlIHtXZWFrTWFwPEV2ZW50LCBQcml2YXRlRGF0YT59XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBwcml2YXRlRGF0YSA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogQ2FjaGUgZm9yIHdyYXBwZXIgY2xhc3Nlcy5cbiAqIEB0eXBlIHtXZWFrTWFwPE9iamVjdCwgRnVuY3Rpb24+fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgd3JhcHBlcnMgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIEdldCBwcml2YXRlIGRhdGEuXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IHRvIGdldCBwcml2YXRlIGRhdGEuXG4gKiBAcmV0dXJucyB7UHJpdmF0ZURhdGF9IFRoZSBwcml2YXRlIGRhdGEgb2YgdGhlIGV2ZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGQoZXZlbnQpIHtcbiAgY29uc3QgcmV0diA9IHByaXZhdGVEYXRhLmdldChldmVudCk7XG4gIGNvbnNvbGUuYXNzZXJ0KHJldHYgIT0gbnVsbCwgXCIndGhpcycgaXMgZXhwZWN0ZWQgYW4gRXZlbnQgb2JqZWN0LCBidXQgZ290XCIsIGV2ZW50KTtcbiAgcmV0dXJuIHJldHY7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNzZXQtdGhlLWNhbmNlbGVkLWZsYWdcbiAqIEBwYXJhbSBkYXRhIHtQcml2YXRlRGF0YX0gcHJpdmF0ZSBkYXRhLlxuICovXG5mdW5jdGlvbiBzZXRDYW5jZWxGbGFnKGRhdGEpIHtcbiAgaWYgKGRhdGEucGFzc2l2ZUxpc3RlbmVyICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gcHJldmVudERlZmF1bHQgaW5zaWRlIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgaW52b2NhdGlvbi4nLCBkYXRhLnBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWRhdGEuZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRhdGEuY2FuY2VsZWQgPSB0cnVlO1xuICBpZiAodHlwZW9mIGRhdGEuZXZlbnQucHJldmVudERlZmF1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBkYXRhLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jaW50ZXJmYWNlLWV2ZW50XG4gKiBAcHJpdmF0ZVxuICovXG4vKipcbiAqIFRoZSBldmVudCB3cmFwcGVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0IG9mIHRoaXMgZGlzcGF0Y2hpbmcuXG4gKiBAcGFyYW0ge0V2ZW50fHt0eXBlOnN0cmluZ319IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCB0byB3cmFwLlxuICovXG5mdW5jdGlvbiBFdmVudChldmVudFRhcmdldCwgZXZlbnQpIHtcbiAgcHJpdmF0ZURhdGEuc2V0KHRoaXMsIHtcbiAgICBldmVudFRhcmdldCxcbiAgICBldmVudCxcbiAgICBldmVudFBoYXNlOiAyLFxuICAgIGN1cnJlbnRUYXJnZXQ6IGV2ZW50VGFyZ2V0LFxuICAgIGNhbmNlbGVkOiBmYWxzZSxcbiAgICBzdG9wcGVkOiBmYWxzZSxcbiAgICBpbW1lZGlhdGVTdG9wcGVkOiBmYWxzZSxcbiAgICBwYXNzaXZlTGlzdGVuZXI6IG51bGwsXG4gICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKVxuICB9KTtcblxuICAvLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNVbmZvcmdlYWJsZVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2lzVHJ1c3RlZCcsIHsgdmFsdWU6IGZhbHNlLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4gIC8vIERlZmluZSBhY2Nlc3NvcnNcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIShrZXkgaW4gdGhpcykpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIGRlZmluZVJlZGlyZWN0RGVzY3JpcHRvcihrZXkpKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2hvdWxkIGJlIGVudW1lcmFibGUsIGJ1dCBjbGFzcyBtZXRob2RzIGFyZSBub3QgZW51bWVyYWJsZS5cbkV2ZW50LnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoaXMgZXZlbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gcGQodGhpcykuZXZlbnQudHlwZTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBvZiB0aGlzIGV2ZW50LlxuICAgKiBAdHlwZSB7RXZlbnRUYXJnZXR9XG4gICAqL1xuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiBwZCh0aGlzKS5ldmVudFRhcmdldDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBvZiB0aGlzIGV2ZW50LlxuICAgKiBAdHlwZSB7RXZlbnRUYXJnZXR9XG4gICAqL1xuICBnZXQgY3VycmVudFRhcmdldCgpIHtcbiAgICByZXR1cm4gcGQodGhpcykuY3VycmVudFRhcmdldDtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybnMge0V2ZW50VGFyZ2V0W119IFRoZSBjb21wb3NlZCBwYXRoIG9mIHRoaXMgZXZlbnQuXG4gICAqL1xuICBjb21wb3NlZFBhdGgoKSB7XG4gICAgY29uc3QgY3VycmVudFRhcmdldCA9IHBkKHRoaXMpLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGN1cnJlbnRUYXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gW2N1cnJlbnRUYXJnZXRdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb25zdGFudCBvZiBOT05FLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IE5PTkUoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnN0YW50IG9mIENBUFRVUklOR19QSEFTRS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBDQVBUVVJJTkdfUEhBU0UoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnN0YW50IG9mIEFUX1RBUkdFVC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBBVF9UQVJHRVQoKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnN0YW50IG9mIEJVQkJMSU5HX1BIQVNFLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IEJVQkJMSU5HX1BIQVNFKCkge1xuICAgIHJldHVybiAzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IG9mIHRoaXMgZXZlbnQuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZXZlbnRQaGFzZSgpIHtcbiAgICByZXR1cm4gcGQodGhpcykuZXZlbnRQaGFzZTtcbiAgfSxcblxuICAvKipcbiAgICogU3RvcCBldmVudCBidWJibGluZy5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpO1xuXG4gICAgZGF0YS5zdG9wcGVkID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIGRhdGEuZXZlbnQuc3RvcFByb3BhZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3RvcCBldmVudCBidWJibGluZy5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpO1xuXG4gICAgZGF0YS5zdG9wcGVkID0gdHJ1ZTtcbiAgICBkYXRhLmltbWVkaWF0ZVN0b3BwZWQgPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgZGF0YS5ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRhdGEuZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZmxhZyB0byBiZSBidWJibGluZy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYnViYmxlcygpIHtcbiAgICByZXR1cm4gQm9vbGVhbihwZCh0aGlzKS5ldmVudC5idWJibGVzKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGZsYWcgdG8gYmUgY2FuY2VsYWJsZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgY2FuY2VsYWJsZSgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihwZCh0aGlzKS5ldmVudC5jYW5jZWxhYmxlKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VsIHRoaXMgZXZlbnQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgcHJldmVudERlZmF1bHQoKSB7XG4gICAgc2V0Q2FuY2VsRmxhZyhwZCh0aGlzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmbGFnIHRvIGluZGljYXRlIGNhbmNlbGxhdGlvbiBzdGF0ZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgZGVmYXVsdFByZXZlbnRlZCgpIHtcbiAgICByZXR1cm4gcGQodGhpcykuY2FuY2VsZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmbGFnIHRvIGJlIGNvbXBvc2VkLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBjb21wb3NlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihwZCh0aGlzKS5ldmVudC5jb21wb3NlZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSB1bml4IHRpbWUgb2YgdGhpcyBldmVudC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB0aW1lU3RhbXAoKSB7XG4gICAgcmV0dXJuIHBkKHRoaXMpLnRpbWVTdGFtcDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHRhcmdldCBvZiB0aGlzIGV2ZW50LlxuICAgKiBAdHlwZSB7RXZlbnRUYXJnZXR9XG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBnZXQgc3JjRWxlbWVudCgpIHtcbiAgICByZXR1cm4gcGQodGhpcykuZXZlbnRUYXJnZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmbGFnIHRvIHN0b3AgZXZlbnQgYnViYmxpbmcuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0IGNhbmNlbEJ1YmJsZSgpIHtcbiAgICByZXR1cm4gcGQodGhpcykuc3RvcHBlZDtcbiAgfSxcbiAgc2V0IGNhbmNlbEJ1YmJsZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpO1xuXG4gICAgZGF0YS5zdG9wcGVkID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIGRhdGEuZXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRhdGEuZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBmbGFnIHRvIGluZGljYXRlIGNhbmNlbGxhdGlvbiBzdGF0ZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBnZXQgcmV0dXJuVmFsdWUoKSB7XG4gICAgcmV0dXJuICFwZCh0aGlzKS5jYW5jZWxlZDtcbiAgfSxcbiAgc2V0IHJldHVyblZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgc2V0Q2FuY2VsRmxhZyhwZCh0aGlzKSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoaXMgZXZlbnQgb2JqZWN0LiBCdXQgZG8gbm90aGluZyB1bmRlciBldmVudCBkaXNwYXRjaGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2J1YmJsZXM9ZmFsc2VdIFRoZSBmbGFnIHRvIGJlIHBvc3NpYmxlIHRvIGJ1YmJsZSB1cC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbY2FuY2VsYWJsZT1mYWxzZV0gVGhlIGZsYWcgdG8gYmUgcG9zc2libGUgdG8gY2FuY2VsLlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaW5pdEV2ZW50KCkge1xuICAgIC8vIERvIG5vdGhpbmcuXG4gIH1cbn07XG5cbi8vIGBjb25zdHJ1Y3RvcmAgaXMgbm90IGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCB7XG4gIHZhbHVlOiBFdmVudCxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB3cml0YWJsZTogdHJ1ZVxufSk7XG5cbi8vIEVuc3VyZSBgZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuRXZlbnRgIGlzIGB0cnVlYC5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXZlbnQucHJvdG90eXBlLCB3aW5kb3cuRXZlbnQucHJvdG90eXBlKTtcblxuICAvLyBNYWtlIGFzc29jaWF0aW9uIGZvciB3cmFwcGVycy5cbiAgd3JhcHBlcnMuc2V0KHdpbmRvdy5FdmVudC5wcm90b3R5cGUsIEV2ZW50KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gcmVkaXJlY3QgYSBnaXZlbiBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgUHJvcGVydHkgbmFtZSB0byBkZWZpbmUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlc2NyaXB0b3J9IFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIHJlZGlyZWN0IHRoZSBwcm9wZXJ0eS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlZGlyZWN0RGVzY3JpcHRvcihrZXkpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gcGQodGhpcykuZXZlbnRba2V5XTtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgcGQodGhpcykuZXZlbnRba2V5XSA9IHZhbHVlO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gY2FsbCBhIGdpdmVuIG1ldGhvZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgUHJvcGVydHkgbmFtZSB0byBkZWZpbmUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlc2NyaXB0b3J9IFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGNhbGwgdGhlIG1ldGhvZCBwcm9wZXJ0eS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZUNhbGxEZXNjcmlwdG9yKGtleSkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlKCkge1xuICAgICAgY29uc3QgZXZlbnQgPSBwZCh0aGlzKS5ldmVudDtcbiAgICAgIHJldHVybiBldmVudFtrZXldLmFwcGx5KGV2ZW50LCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgbmV3IHdyYXBwZXIgY2xhc3MuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBCYXNlRXZlbnQgVGhlIGJhc2Ugd3JhcHBlciBjbGFzcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgcHJvdG90eXBlIG9mIHRoZSBvcmlnaW5hbCBldmVudC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGRlZmluZWQgd3JhcHBlciBjbGFzcy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVdyYXBwZXIoQmFzZUV2ZW50LCBwcm90bykge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvdG8pO1xuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQmFzZUV2ZW50O1xuICB9XG5cbiAgLyoqIEN1c3RvbUV2ZW50ICovXG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50VGFyZ2V0LCBldmVudCkge1xuICAgIEJhc2VFdmVudC5jYWxsKHRoaXMsIGV2ZW50VGFyZ2V0LCBldmVudCk7XG4gIH1cblxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VFdmVudC5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogQ3VzdG9tRXZlbnQsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfVxuICB9KTtcblxuICAvLyBEZWZpbmUgYWNjZXNzb3JzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghKGtleSBpbiBCYXNlRXZlbnQucHJvdG90eXBlKSkge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG4gICAgICBjb25zdCBpc0Z1bmMgPSB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlLFxuICAgICAgICBrZXksXG4gICAgICAgIGlzRnVuYyA/IGRlZmluZUNhbGxEZXNjcmlwdG9yKGtleSkgOiBkZWZpbmVSZWRpcmVjdERlc2NyaXB0b3Ioa2V5KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ3VzdG9tRXZlbnQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSB3cmFwcGVyIGNsYXNzIG9mIGEgZ2l2ZW4gcHJvdG90eXBlLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBwcm90b3R5cGUgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIGdldCBpdHMgd3JhcHBlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIHdyYXBwZXIgY2xhc3MuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRXcmFwcGVyKHByb3RvKSB7XG4gIGlmIChwcm90byA9PSBudWxsIHx8IHByb3RvID09PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuIEV2ZW50O1xuICB9XG5cbiAgbGV0IHdyYXBwZXIgPSB3cmFwcGVycy5nZXQocHJvdG8pO1xuICBpZiAod3JhcHBlciA9PSBudWxsKSB7XG4gICAgd3JhcHBlciA9IGRlZmluZVdyYXBwZXIoZ2V0V3JhcHBlcihPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pKSwgcHJvdG8pO1xuICAgIHdyYXBwZXJzLnNldChwcm90bywgd3JhcHBlcik7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbi8qKlxuICogV3JhcCBhIGdpdmVuIGV2ZW50IHRvIG1hbmFnZW1lbnQgYSBkaXNwYXRjaGluZy5cbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IFRoZSBldmVudCB0YXJnZXQgb2YgdGhpcyBkaXNwYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUaGUgZXZlbnQgdG8gd3JhcC5cbiAqIEByZXR1cm5zIHtFdmVudH0gVGhlIHdyYXBwZXIgaW5zdGFuY2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB3cmFwRXZlbnQoZXZlbnRUYXJnZXQsIGV2ZW50KSB7XG4gIGNvbnN0IFdyYXBwZXIgPSBnZXRXcmFwcGVyKE9iamVjdC5nZXRQcm90b3R5cGVPZihldmVudCkpO1xuICByZXR1cm4gbmV3IFdyYXBwZXIoZXZlbnRUYXJnZXQsIGV2ZW50KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGltbWVkaWF0ZVN0b3BwZWQgZmxhZyBvZiBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIGdldC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgZmxhZyB0byBzdG9wIHByb3BhZ2F0aW9uIGltbWVkaWF0ZWx5LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNTdG9wcGVkKGV2ZW50KSB7XG4gIHJldHVybiBwZChldmVudCkuaW1tZWRpYXRlU3RvcHBlZDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgZXZlbnQgcGhhc2Ugb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBzZXQgY3VycmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZXZlbnRQaGFzZSBOZXcgZXZlbnQgcGhhc2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50UGhhc2UoZXZlbnQsIGV2ZW50UGhhc2UpIHtcbiAgcGQoZXZlbnQpLmV2ZW50UGhhc2UgPSBldmVudFBoYXNlO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCB0YXJnZXQgb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBzZXQgY3VycmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fG51bGx9IGN1cnJlbnRUYXJnZXQgTmV3IGN1cnJlbnQgdGFyZ2V0LlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFyZ2V0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gIHBkKGV2ZW50KS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldDtcbn1cblxuLyoqXG4gKiBTZXQgYSBwYXNzaXZlIGxpc3RlbmVyIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdG8gc2V0IGN1cnJlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbnxudWxsfSBwYXNzaXZlTGlzdGVuZXIgTmV3IHBhc3NpdmUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldFBhc3NpdmVMaXN0ZW5lcihldmVudCwgcGFzc2l2ZUxpc3RlbmVyKSB7XG4gIHBkKGV2ZW50KS5wYXNzaXZlTGlzdGVuZXIgPSBwYXNzaXZlTGlzdGVuZXI7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gTGlzdGVuZXJOb2RlXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICogQHByb3BlcnR5IHsxfDJ8M30gbGlzdGVuZXJUeXBlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhc3NpdmVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb25jZVxuICogQHByb3BlcnR5IHtMaXN0ZW5lck5vZGV8bnVsbH0gbmV4dFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtXZWFrTWFwPG9iamVjdCwgTWFwPHN0cmluZywgTGlzdGVuZXJOb2RlPj59XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBsaXN0ZW5lcnNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBMaXN0ZW5lciB0eXBlc1xuY29uc3QgQ0FQVFVSRSA9IDE7XG5jb25zdCBCVUJCTEUgPSAyO1xuY29uc3QgQVRUUklCVVRFID0gMztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgZ2l2ZW4gdmFsdWUgaXMgYW4gb2JqZWN0IG9yIG5vdC5cbiAqIEBwYXJhbSB7YW55fSB4IFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7IC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxufVxuXG4vKipcbiAqIEdldCBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0IHRvIGdldC5cbiAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCBMaXN0ZW5lck5vZGU+fSBUaGUgbGlzdGVuZXJzLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKGV2ZW50VGFyZ2V0KSB7XG4gIGNvbnN0IGxpc3RlbmVycyA9IGxpc3RlbmVyc01hcC5nZXQoZXZlbnRUYXJnZXQpO1xuICBpZiAobGlzdGVuZXJzID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ3RoaXMnIGlzIGV4cGVjdGVkIGFuIEV2ZW50VGFyZ2V0IG9iamVjdCwgYnV0IGdvdCBhbm90aGVyIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gbGlzdGVuZXJzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgdGhlIGV2ZW50IGF0dHJpYnV0ZSBvZiBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBnZXQgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIEByZXR1cm5zIHtQcm9wZXJ0eURlc2NyaXB0b3J9IFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmaW5lRXZlbnRBdHRyaWJ1dGVEZXNjcmlwdG9yKGV2ZW50TmFtZSkge1xuICByZXR1cm4ge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzKTtcbiAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZS5saXN0ZW5lclR5cGUgPT09IEFUVFJJQlVURSkge1xuICAgICAgICAgIHJldHVybiBub2RlLmxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgc2V0KGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdChsaXN0ZW5lcikpIHtcbiAgICAgICAgbGlzdGVuZXIgPSBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIC8vIFRyYXZlcnNlIHRvIHRoZSB0YWlsIHdoaWxlIHJlbW92aW5nIG9sZCB2YWx1ZS5cbiAgICAgIGxldCBwcmV2ID0gbnVsbDtcbiAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZS5saXN0ZW5lclR5cGUgPT09IEFUVFJJQlVURSkge1xuICAgICAgICAgIC8vIFJlbW92ZSBvbGQgdmFsdWUuXG4gICAgICAgICAgaWYgKHByZXYgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnNldChldmVudE5hbWUsIG5vZGUubmV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZXZlbnROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldiA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgbmV3IHZhbHVlLlxuICAgICAgaWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSB7XG4gICAgICAgICAgbGlzdGVuZXIsXG4gICAgICAgICAgbGlzdGVuZXJUeXBlOiBBVFRSSUJVVEUsXG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgb25jZTogZmFsc2UsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBpZiAocHJldiA9PT0gbnVsbCkge1xuICAgICAgICAgIGxpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBuZXdOb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9O1xufVxuXG4vKipcbiAqIERlZmluZSBhbiBldmVudCBhdHRyaWJ1dGUgKGUuZy4gYGV2ZW50VGFyZ2V0Lm9uY2xpY2tgKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFRhcmdldFByb3RvdHlwZSBUaGUgZXZlbnQgdGFyZ2V0IHByb3RvdHlwZSB0byBkZWZpbmUgYW4gZXZlbnQgYXR0cmJpdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIHRvIGRlZmluZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBkZWZpbmVFdmVudEF0dHJpYnV0ZShldmVudFRhcmdldFByb3RvdHlwZSwgZXZlbnROYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudFRhcmdldFByb3RvdHlwZSwgYG9uJHtldmVudE5hbWV9YCwgZGVmaW5lRXZlbnRBdHRyaWJ1dGVEZXNjcmlwdG9yKGV2ZW50TmFtZSkpO1xufVxuXG4vKipcbiAqIERlZmluZSBhIGN1c3RvbSBFdmVudFRhcmdldCB3aXRoIGV2ZW50IGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBldmVudE5hbWVzIEV2ZW50IG5hbWVzIGZvciBldmVudCBhdHRyaWJ1dGVzLlxuICogQHJldHVybnMge0V2ZW50VGFyZ2V0fSBUaGUgY3VzdG9tIEV2ZW50VGFyZ2V0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRXZlbnRUYXJnZXQoZXZlbnROYW1lcykge1xuICAvKiogQ3VzdG9tRXZlbnRUYXJnZXQgKi9cbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnRUYXJnZXQoKSB7XG4gICAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIEN1c3RvbUV2ZW50VGFyZ2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBDdXN0b21FdmVudFRhcmdldCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICBkZWZpbmVFdmVudEF0dHJpYnV0ZShDdXN0b21FdmVudFRhcmdldC5wcm90b3R5cGUsIGV2ZW50TmFtZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIEN1c3RvbUV2ZW50VGFyZ2V0O1xufVxuXG4vKipcbiAqIEV2ZW50VGFyZ2V0LlxuICpcbiAqIC0gVGhpcyBpcyBjb25zdHJ1Y3RvciBpZiBubyBhcmd1bWVudHMuXG4gKiAtIFRoaXMgaXMgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgQ3VzdG9tRXZlbnRUYXJnZXQgY29uc3RydWN0b3IgaWYgdGhlcmUgYXJlIGFyZ3VtZW50cy5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgY2xhc3MgQSBleHRlbmRzIEV2ZW50VGFyZ2V0IHt9XG4gKiAgICAgY2xhc3MgQiBleHRlbmRzIEV2ZW50VGFyZ2V0KFwibWVzc2FnZVwiKSB7fVxuICogICAgIGNsYXNzIEMgZXh0ZW5kcyBFdmVudFRhcmdldChcIm1lc3NhZ2VcIiwgXCJlcnJvclwiKSB7fVxuICogICAgIGNsYXNzIEQgZXh0ZW5kcyBFdmVudFRhcmdldChbXCJtZXNzYWdlXCIsIFwiZXJyb3JcIl0pIHt9XG4gKi9cbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICAvKmVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgRXZlbnRUYXJnZXQpIHtcbiAgICBsaXN0ZW5lcnNNYXAuc2V0KHRoaXMsIG5ldyBNYXAoKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSkge1xuICAgIHJldHVybiBkZWZpbmVDdXN0b21FdmVudFRhcmdldChhcmd1bWVudHNbMF0pO1xuICB9XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHR5cGVzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0eXBlc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmluZUN1c3RvbUV2ZW50VGFyZ2V0KHR5cGVzKTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTtcbiAgLyplc2xpbnQtZW5hYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG59XG5cbi8vIFNob3VsZCBiZSBlbnVtZXJhYmxlLCBidXQgY2xhc3MgbWV0aG9kcyBhcmUgbm90IGVudW1lcmFibGUuXG5FdmVudFRhcmdldC5wcm90b3R5cGUgPSB7XG4gIC8qKlxuICAgKiBBZGQgYSBnaXZlbiBsaXN0ZW5lciB0byB0aGlzIGV2ZW50IHRhcmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBhZGQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBhZGQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnx7Y2FwdHVyZT86Ym9vbGVhbixwYXNzaXZlPzpib29sZWFuLG9uY2U/OmJvb2xlYW59fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlzdGVuZXIuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QobGlzdGVuZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ2xpc3RlbmVyJyBzaG91bGQgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3QuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzKTtcbiAgICBjb25zdCBvcHRpb25zSXNPYmogPSBpc09iamVjdChvcHRpb25zKTtcbiAgICBjb25zdCBjYXB0dXJlID0gb3B0aW9uc0lzT2JqID8gQm9vbGVhbihvcHRpb25zLmNhcHR1cmUpIDogQm9vbGVhbihvcHRpb25zKTtcbiAgICBjb25zdCBsaXN0ZW5lclR5cGUgPSBjYXB0dXJlID8gQ0FQVFVSRSA6IEJVQkJMRTtcbiAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgbGlzdGVuZXIsXG4gICAgICBsaXN0ZW5lclR5cGUsXG4gICAgICBwYXNzaXZlOiBvcHRpb25zSXNPYmogJiYgQm9vbGVhbihvcHRpb25zLnBhc3NpdmUpLFxuICAgICAgb25jZTogb3B0aW9uc0lzT2JqICYmIEJvb2xlYW4ob3B0aW9ucy5vbmNlKSxcbiAgICAgIG5leHQ6IG51bGxcbiAgICB9O1xuXG4gICAgLy8gU2V0IGl0IGFzIHRoZSBmaXJzdCBub2RlIGlmIHRoZSBmaXJzdCBub2RlIGlzIG51bGwuXG4gICAgbGV0IG5vZGUgPSBsaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGlzdGVuZXJzLnNldChldmVudE5hbWUsIG5ld05vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYXZlcnNlIHRvIHRoZSB0YWlsIHdoaWxlIGNoZWNraW5nIGR1cGxpY2F0aW9uLi5cbiAgICBsZXQgcHJldiA9IG51bGw7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUubGlzdGVuZXIgPT09IGxpc3RlbmVyICYmIG5vZGUubGlzdGVuZXJUeXBlID09PSBsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgLy8gU2hvdWxkIGlnbm9yZSBkdXBsaWNhdGlvbi5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcHJldiA9IG5vZGU7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cblxuICAgIC8vIEFkZCBpdC5cbiAgICBwcmV2Lm5leHQgPSBuZXdOb2RlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBnaXZlbiBsaXN0ZW5lciBmcm9tIHRoaXMgZXZlbnQgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtib29sZWFufHtjYXB0dXJlPzpib29sZWFuLHBhc3NpdmU/OmJvb2xlYW4sb25jZT86Ym9vbGVhbn19IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBmb3IgdGhpcyBsaXN0ZW5lci5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzKTtcbiAgICBjb25zdCBjYXB0dXJlID0gaXNPYmplY3Qob3B0aW9ucykgPyBCb29sZWFuKG9wdGlvbnMuY2FwdHVyZSkgOiBCb29sZWFuKG9wdGlvbnMpO1xuICAgIGNvbnN0IGxpc3RlbmVyVHlwZSA9IGNhcHR1cmUgPyBDQVBUVVJFIDogQlVCQkxFO1xuXG4gICAgbGV0IHByZXYgPSBudWxsO1xuICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlLmxpc3RlbmVyID09PSBsaXN0ZW5lciAmJiBub2RlLmxpc3RlbmVyVHlwZSA9PT0gbGlzdGVuZXJUeXBlKSB7XG4gICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgcHJldi5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgIGxpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBub2RlLm5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByZXYgPSBub2RlO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7RXZlbnR8e3R5cGU6c3RyaW5nfX0gZXZlbnQgVGhlIGV2ZW50IHRvIGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYGZhbHNlYCBpZiBjYW5jZWxlZC5cbiAgICovXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgPT0gbnVsbCB8fCB0eXBlb2YgZXZlbnQudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZXZlbnQudHlwZVwiIHNob3VsZCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsaXN0ZW5lcnMgYXJlbid0IHJlZ2lzdGVyZWQsIHRlcm1pbmF0ZS5cbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhpcyk7XG4gICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnQudHlwZTtcbiAgICBsZXQgbm9kZSA9IGxpc3RlbmVycy5nZXQoZXZlbnROYW1lKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB3ZSBjYW5ub3QgcmV3cml0ZSBzZXZlcmFsIHByb3BlcnRpZXMsIHNvIHdyYXAgb2JqZWN0LlxuICAgIGNvbnN0IHdyYXBwZWRFdmVudCA9IHdyYXBFdmVudCh0aGlzLCBldmVudCk7XG5cbiAgICAvLyBUaGlzIGRvZXNuJ3QgcHJvY2VzcyBjYXB0dXJpbmcgcGhhc2UgYW5kIGJ1YmJsaW5nIHBoYXNlLlxuICAgIC8vIFRoaXMgaXNuJ3QgcGFydGljaXBhdGluZyBpbiBhIHRyZWUuXG4gICAgbGV0IHByZXYgPSBudWxsO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGlzIGxpc3RlbmVyIGlmIGl0J3Mgb25jZVxuICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICBpZiAocHJldiAhPT0gbnVsbCkge1xuICAgICAgICAgIHByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbm9kZS5uZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXYgPSBub2RlO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxsIHRoaXMgbGlzdGVuZXJcbiAgICAgIHNldFBhc3NpdmVMaXN0ZW5lcih3cmFwcGVkRXZlbnQsIG5vZGUucGFzc2l2ZSA/IG5vZGUubGlzdGVuZXIgOiBudWxsKTtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZS5saXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUubGlzdGVuZXIuY2FsbCh0aGlzLCB3cmFwcGVkRXZlbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubGlzdGVuZXJUeXBlICE9PSBBVFRSSUJVVEUgJiYgdHlwZW9mIG5vZGUubGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbm9kZS5saXN0ZW5lci5oYW5kbGVFdmVudCh3cmFwcGVkRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBCcmVhayBpZiBgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uYCB3YXMgY2FsbGVkLlxuICAgICAgaWYgKGlzU3RvcHBlZCh3cmFwcGVkRXZlbnQpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgICBzZXRQYXNzaXZlTGlzdGVuZXIod3JhcHBlZEV2ZW50LCBudWxsKTtcbiAgICBzZXRFdmVudFBoYXNlKHdyYXBwZWRFdmVudCwgMCk7XG4gICAgc2V0Q3VycmVudFRhcmdldCh3cmFwcGVkRXZlbnQsIG51bGwpO1xuXG4gICAgcmV0dXJuICF3cmFwcGVkRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgfVxufTtcblxuLy8gYGNvbnN0cnVjdG9yYCBpcyBub3QgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudFRhcmdldC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgdmFsdWU6IEV2ZW50VGFyZ2V0LFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIHdyaXRhYmxlOiB0cnVlXG59KTtcblxuLy8gRW5zdXJlIGBldmVudFRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5FdmVudFRhcmdldGAgaXMgYHRydWVgLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuRXZlbnRUYXJnZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihFdmVudFRhcmdldC5wcm90b3R5cGUsIHdpbmRvdy5FdmVudFRhcmdldC5wcm90b3R5cGUpO1xufVxuXG5leHBvcnRzLmRlZmluZUV2ZW50QXR0cmlidXRlID0gZGVmaW5lRXZlbnRBdHRyaWJ1dGU7XG5leHBvcnRzLkV2ZW50VGFyZ2V0ID0gRXZlbnRUYXJnZXQ7XG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudFRhcmdldDtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudFRhcmdldDtcbm1vZHVsZS5leHBvcnRzLkV2ZW50VGFyZ2V0ID0gbW9kdWxlLmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV2ZW50VGFyZ2V0O1xubW9kdWxlLmV4cG9ydHMuZGVmaW5lRXZlbnRBdHRyaWJ1dGUgPSBkZWZpbmVFdmVudEF0dHJpYnV0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LXRhcmdldC1zaGltLmpzLm1hcFxuIl19
