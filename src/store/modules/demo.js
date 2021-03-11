const state = {
    demo: '',
};

const getters = {
    getDemo() {
        return state.demo;
    },
};

const actions = {};

const mutations = {
    setDemo(state, data) {
        //设置参数
        state.demo = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};