const DEFAULT_OPTIONS = {};
/**
 * @description listen which selector user is viewing, based on IntersectionObserver
 * @author Yrobot
 * @date 01/06/2021
 * @class SelectorsObserver
 */
class SelectorsObserver {
  constructor({ selectors = [], listener = () => {}, ...options } = {}) {
    this._init();
    this.observer = new IntersectionObserver(this._callback, {
      ...DEFAULT_OPTIONS,
      ...options,
    });
    this.listen(listener);
    if (selectors.length > 0) this.select(selectors);
  }
  _callback = function (entries) {
    entries.reverse().forEach((entry) => {
      const selector = entry?.target?._observer_selector;
      if (selector) {
        this.viewingState[selector] = !!entry?.isIntersecting;
      }
    });
    this._triggerListener();
  }.bind(this);
  _init() {
    this.viewingState = {};
  }
  select(selectors) {
    this._init();
    this.unselect();
    this.selectors = selectors;
    selectors.forEach((selector) => {
      const elem = document.querySelector(selector);
      if (elem) {
        elem._observer_selector = selector;
        this.observer.observe(elem);
      }
    });
    return this;
  }
  listen(listener = () => {}) {
    if (listener.constructor.name === 'Function') {
      this.listener = listener;
    } else {
      throw new Error('SelectorsObserver: listener should pass a function');
    }
  }
  _triggerListener() {
    const viewingList = this.selectors.filter((selector) => this.viewingState[selector]);
    this.listener(viewingList[0]);
  }
  unselect() {
    if (this.selectors) {
      this.selectors.forEach((selector) => {
        const elem = document.querySelector(selector);
        if (elem) {
          this.observer.unobserve(elem);
        }
      });
    }
  }
  disconnect() {
    this.observer.disconnect();
  }
}

export default SelectorsObserver;
