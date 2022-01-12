<template>
    <div class="">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-purple-500">All of my notes</h1>
        <button v-on:click="toggleModale" class="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-800 hover:to-purple-600  text-white font-bold py-2 px-4 rounded-full">New note</button>
         <button v-on:click="clearNote" class="bg-gradient-to-r from-red-400 to-red-600  hover:from-red-800 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full m-4">Clear note</button>
        <div class="flex justify-center items-center flex-wrap">
            <div v-bind:key="note.id" v-for="note in notes">
                <NoteItem v-on:remove="removeItem" v-on:edit="editForm" v-bind:note="note"></NoteItem>
            </div>
        </div>
        <Modale v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
    
    
    </div>
</template>

<script>
import Modale from '@/components/Modale.vue'
import NoteItem from '@/components/NoteItem.vue'

export default {
    name: 'Notes',
    data() {
        return {
            revele: false,
        }
    },
    components: {
        Modale,
        NoteItem
    },
    mounted() {
        this.$store.dispatch('getNotes')
    },
    computed: {
        notes() {
            return this.$store.state.notes
        }
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele
        },
        removeItem: function(id) {
            this.$store.dispatch('goDelete', id)

        },
        editForm: function(id) {
            this.$router.push("/notes/" + id)
        },
        clearNote: function(){
        this.$store.state.notes.forEach(note => {
           this.$store.dispatch('goDelete', note._id)
            
        });
        }
    }

}
</script>

