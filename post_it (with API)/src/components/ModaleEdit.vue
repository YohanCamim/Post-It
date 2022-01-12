<template>
    <transition name="fade">
        <div class="bloc-modale" v-if="revele">
            <div class="overlay" v-on:click="toggleModale"></div>
            <div class="modale">
                <button v-on:click="toggleModale" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full btn-modale">X</button>
                <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-500">Edit a new note</h4>
                <form @submit.prevent='editNote(note._id)' class="w-full max-w-sm">
                    <div class="flex-column items-center border-b border-teal-500 py-2 m-2">
                        <input v-model="newtitleNote" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Titre" aria-label="Full name">
                    </div>
                    <textarea placeholder="Content" v-model="newdescriptionNote" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none m-2" rows="11"></textarea>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ModaleEdit',
    props: ['revele', 'toggleModale', 'note'],
    data() {
        return {
            newdescriptionNote: null,
            newtitleNote: null
        }

    },
    methods: {
        editNote: function(id) {
            if (this.newtitleNote == null || this.newdescriptionNote == null) {
                alert("Note incomplete")
            } else {
                const url = "http://5.135.119.239:3090/notes/" + id

                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: this.newtitleNote,
                        content: this.newdescriptionNote
                    })
                }).then((res) => {
                    if (res.ok) {
                        this.toggleModale()
                        this.$store.dispatch('getNote', id)
                    }
                })
            }
        }
    },
    computed: {
        noteUp() {
            return this.$store.state.note

        }
    },
    beforeUpdate() {

        this.newdescriptionNote = this.note.content
        this.newtitleNote = this.note.title

    }


}
</script>

<style>
.bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: white;
    color: #2c3e50;
    padding: 50px;
    position: fixed;
}

.btn-modale {
    position: absolute;
    top: 10px;
    left: 10px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
}
</style>
