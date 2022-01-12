import { createStore } from 'vuex'

const store = createStore({

    state: {
        // Acces grace a this.$store.state

        notes: [],
        noteAPI: {}
    },
    mutations: {
        setNotes(state, notes) {
            state.notesAPI = notes
        },

        setNote(state, note) {
            state.noteAPI = note
        }
    },
    actions: {
        getNotes({commit}) {
            const url = 'http://5.135.119.239:3090/notes'

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then((data) => {
                    console.log(data)
                    commit('setNotes', data.notes)
                })
            })
        },
        getNote({commit}, id) {
            const url = 'http://5.135.119.239:3090/notes'+ id

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then((data) => {
                commit('setNote', data.note)
                })
            })
        }
    }
}
)


export default store