const state = {
    ctaCards: [
        {
            heading: 'Get Online Week',
            subheading: 'Lorem ipsum dolor sit amet',
            button_text: 'Read more',
            button_url: '/get-involved'
        },
        {
            heading: 'Learn my way',
            subheading: 'Lorem ipsum dolor sit amet',
            button_text: 'Read more',
            button_url: '/insights'
        },
        {
            heading: 'Make it click',
            subheading: 'Lorem ipsum dolor sit amet',
            button_text: 'Read more',
            button_url: '/our-network'
        },
        {
            heading: 'Digital you',
            subheading: 'Lorem ipsum dolor sit amet',
            button_text: 'Read more',
            button_url: '/the-digital-divide'
        }
    ]
};

const getters = {
    allCtaCards: (state) => state.ctaCards
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
