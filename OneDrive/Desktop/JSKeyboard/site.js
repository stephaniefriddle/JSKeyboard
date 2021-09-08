const keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        //Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
    },

    _createKeys() {

    },

    _triggerEvent(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    _toggleCapsLock() {
        console.log("Caps Lock Toggled!");
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    }
};

window.addEventListener("DOMContentLoaded", function() {
    KeyboardEvent.init();
});