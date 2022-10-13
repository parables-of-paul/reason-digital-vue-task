const state = {
    menuItems: [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'What We Do',
            url: '/about'
        },
        {
            text: 'The Digital Divide',
            url: '/digital-divide'
        },
        {
            text: 'Get Involved',
            url: '/get-involved'
        },
        {
            text: 'Our Network',
            url: '/our-network'
        },
        {
            text: 'Insights',
            url: '/insights'
        }

    ]
};

const getters = {
    allMenuItems: (state) => state.menuItems
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
