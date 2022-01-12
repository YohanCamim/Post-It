<template>
    <div class="">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-purple-500">All of my notes</h1>
        <button v-on:click="toggleModale" class="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full">New note</button>
        <button v-on:click="toggleModaleClear" class="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full m-4">Clear note</button>
        <div class="flex justify-center items-center flex-wrap">
            <div v-bind:key="note.id" v-for="note in notes">
                <NoteItem v-on:remove="removeItem" v-on:edit="editForm" v-bind:note="note"></NoteItem>
            </div>
        </div>
        <Modale v-on:refresh="refreshStorage" v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
    <ModaleClear v-on:refresh="refreshStorage" v-bind:reveleClear="reveleClear" v-bind:toggleModaleClear="toggleModaleClear"/>
    
    </div>
</template>

<script>
import Modale from '@/components/Modale.vue'
import NoteItem from '@/components/NoteItem.vue'
import ModaleClear from '@/components/ModaleClear.vue'

export default {
    name: 'Notes',
    data() {
        return {
            revele: false,
            reveleClear: false,
            notes: JSON.parse(localStorage.getItem('Notes'))
        }
    },
    components: {
        Modale,
        ModaleClear,
        NoteItem
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele
        },
        toggleModaleClear: function() {
            this.reveleClear = !this.reveleClear
        },
        refreshStorage: function() {
            this.notes = JSON.parse(localStorage.getItem('Notes'))
        },
        removeItem: function(index) {
            console.log(this.notes)
            var indexTrouve = this.notes.findIndex(objet => objet.id == index)
            this.notes.splice(indexTrouve, 1)
            var json = JSON.stringify(this.notes)
            localStorage.setItem('Notes', json)
            this.notes = localStorage.getItem('Notes')
            this.refreshStorage()
        },
        editForm: function(id) {
            this.$router.push("/notes/" + id)
        }
    }

}
</script>

