import { createStore } from 'vuex'

const store = createStore({

    state: {
        // Acces grace a this.$store.state

        notes: [],
        note: {},
        message: ''
    },
    mutations: {
        setNotes(state, notes) {
            state.notes = notes
        },
        setNote(state, note) {
            state.note = note
        },
        setMessage(state, message) {
            state.message = message
        }
    },
    actions: {
        getNotes({ commit }) {
            const url = 'http://5.135.119.239:3090/notes'

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then((data) => {
                    commit('setNotes', data.notes)
                })
            })
        },
        getNote({ commit }, id) {
            const url = 'http://5.135.119.239:3090/notes/' + id

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.status == 200) {
                    res.json().then((data) => {
                        commit('setMessage', null)
                        commit('setNote', data.note)
                    })
                } else {
                    res.json().then((data) => {
                        this.message = data.error.message
                        commit('setMessage', data.error.message)
                    })
                }

            })
        },
        goDelete({ dispatch }, id) {
            const url = 'http://5.135.119.239:3090/notes/' + id

            fetch(url, {
                method: 'DELETE',
                headerrs: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.status == 200) {
                    dispatch('getNotes')
                } else {
                    res.json().then((data) => {
                        this.message = data.error.message
                        console.log(this.message)
                    })
                }
            })
        }
    }
})


export default store