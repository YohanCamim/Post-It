<template>
    <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-purple-500">
        My specific note</h1>
    <button v-on:click="goBack" class="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Go back to all notes</button>
    <div class="flex items-center justify-center ">
        <SpecificNoteItem v-on:remove="removeItem" v-bind:note="note" v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
    </div>
    <ModaleEdit v-on:refresh="refreshStorage" v-bind:note="note" v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
</template>


<script>
import SpecificNoteItem from '@/components/SpecificNoteItem.vue'
import ModaleEdit from '@/components/ModaleEdit.vue'


export default ({
    name: 'NoteSpecific',
    data() {
        return {
            revele: false,
            notes: JSON.parse(localStorage.getItem('Notes')),
            note: JSON.parse(localStorage.getItem('Notes')).find(objet => objet.id == this.$route.params.id)
        }
    },
    components: {
        SpecificNoteItem,
        ModaleEdit
    },
    methods: {
        goBack: function() {
            this.$router.push("/")
        },
        removeItem: function(index) {
            console.log(this.notes)
            var indexTrouve = this.notes.findIndex(objet => objet.id == index)
            this.notes.splice(indexTrouve, 1)
            var json = JSON.stringify(this.notes)
            localStorage.setItem('Notes', json)
            this.notes = localStorage.getItem('Notes')
            this.refreshStorageDelete()
            this.goBack()
        },
        refreshStorage: function() {
            this.notes = JSON.parse(localStorage.getItem('Notes'))
            this.note = JSON.parse(localStorage.getItem('Notes')).find(objet => objet.id == this.$route.params.id)
        },
        refreshStorageDelete: function(){
            this.notes = JSON.parse(localStorage.getItem('Notes'))
        },
        toggleModale: function() {
            this.revele = !this.revele
        },
    }
})
</script>
