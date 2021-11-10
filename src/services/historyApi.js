export default (() => {
    return {
        get() {
            return JSON.parse(localStorage.getItem('HISTORY'));
        },

        set(newHistory) {
            localStorage.setItem('HISTORY', JSON.stringify(newHistory));
        },

        choose(index) {
            return JSON.parse(localStorage.getItem('HISTORY'))[index];
        },
    };
})();
