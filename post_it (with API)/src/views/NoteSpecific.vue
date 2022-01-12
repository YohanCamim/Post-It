<template>
<div>
    <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-purple-500">
        My specific note</h1>
    <button v-on:click="goBack" class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-800 hover:to-green-600 text-white font-bold py-2 px-4 rounded-full ">Go back to all notes</button>
    <div class="flex items-center justify-center ">
        <div v-if="this.$store.state.message" class="m-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error: </strong> 
            <span class="block sm:inline">{{ this.$store.state.message }}</span>
        </div>
        <div v-else>
            <SpecificNoteItem v-on:remove="removeItem" v-bind:note="note" v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <ModaleEdit v-bind:note="note" v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
        </div>
    </div>
</div>
</template>


<script>
import SpecificNoteItem from '@/components/SpecificNoteItem.vue'
import ModaleEdit from '@/components/ModaleEdit.vue'


export default ({
    name: 'NoteSpecific',
    data() {
        return {
            revele: false,
            // notes: JSON.parse(localStorage.getItem('Notes')),
            // note: JSON.parse(localStorage.getItem('Notes')).find(objet => objet.id == this.$route.params.id)
        }
    },
    components: {
        SpecificNoteItem,
        ModaleEdit
    },
    mounted() {
        this.$store.dispatch('getNote', this.$route.params.id)
    },
    computed: {
        note() {
            return this.$store.state.note
        },
        message() {
            return this.$store.state.message
        }
    },
    methods: {
        goBack: function() {
            this.$router.push("/")
        },
        removeItem: function(id) {
            this.$store.dispatch('goDelete', id)
            this.$router.push('/')

        },
        refreshStorageDelete: function() {
            this.notes = JSON.parse(localStorage.getItem('Notes'))
        },
        toggleModale: function() {
            this.revele = !this.revele
        },
    }
})
</script>
