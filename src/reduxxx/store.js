let store = {
    _state: {},

    getState() { return this._state },

    _callSubscriber() {
        console.log("State changed");
    },

    observe(observer) {
        this._callSubscriber = observer;
    },

    dispatchEvent() {
        this._callSubscriber(this._state);
    }
}

export default store;
