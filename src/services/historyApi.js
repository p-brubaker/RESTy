export default {
    get() {
        return JSON.parse(localStorage.getItem('HISTORY'));
    },

    set(newHistory) {
        localStorage.setItem('HISTORY', JSON.stringify(newHistory));
    },

    choose(index) {
        return JSON.parse(localStorage.getItem('HISTORY'))[index];
    },

    has(method, url) {
        const history = this.get() || [];
        let result = false;
        history.forEach((item) => {
            if (item.method === method && item.url === url) {
                result = true;
            }
        });
        return result;
    },
};
