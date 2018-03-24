const state = {
  nav : {
    open : false
  }
};

const getters  = {
  navOpen : state => state.nav.open
};

const mutations = {
  toggleNav(state, open) {
    state.nav.open = open
  }
};

const actions = {

};


export default  {
  state,
  mutations,
  actions,
  getters
}
