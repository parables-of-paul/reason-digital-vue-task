const state = {
    helpFormInputsIam: [
        {
            label: 'an individual',
            value: 'individual'
        },
        {
            label: 'a business',
            value: 'business'
        },
        {
            label: 'a non-profit organisation',
            value: 'npo'
        }
    ],
    helpFormInputsWants: [
        {
            label: 'to learn',
            value: 'learn'
        },
        {
            label: 'to find funding',
            value: 'funding'
        },
        {
            label: 'to network',
            value: 'network'
        }
    ]
};

const getters = {
    allHelpFormInputsIam: (state) => state.helpFormInputsIam,
    allHelpFormInputsWants: (state) => state.helpFormInputsWants
};

const actions = {
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
