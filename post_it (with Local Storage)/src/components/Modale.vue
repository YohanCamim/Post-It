<template>
    <transition name="fade">
        <div class="bloc-modale" v-if="revele">
            <div class="overlay" v-on:click="toggleModale"></div>
            <div class="modale">
                <button v-on:click="toggleModale" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full btn-modale">X</button>
                <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-500">Add a new note</h4>
                <form @submit.prevent='addNote' class="w-full max-w-sm">
                    <div class="flex-column items-center border-b border-teal-500 py-2 m-2">
                        <input v-model="titleNote" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Titre" aria-label="Full name">
                    </div>
                    <textarea v-model="descriptionNote" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none m-2" rows="11"></textarea>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                </form>
    
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modale',
    props: ['revele', 'toggleModale'],
    data() {
        return {
            titleNote: null,
            descriptionNote: null,
            arrayNotes: JSON.parse(localStorage.getItem('Notes')),
        }
    },
    methods: {
        addNote: function() {
            if (this.titleNote == null || this.descriptionNote == null) {
                alert("Note incomplete")
            } else {
                this.arrayNotes = JSON.parse(localStorage.getItem('Notes'))
                if (!localStorage.getItem('Notes')) { this.arrayNotes = [] }
                var d = new Date()
                let mins = ('0' + d.getMinutes()).slice(-2);
                let day = ('0' + d.getDate()).slice(-2);
                let month = d.getMonth() + 1
                let trueMonth = ('0' + month).slice(-2);
                this.arrayNotes.push({
                    id: Math.random().toString(36).substr(2, 5),
                    title: this.titleNote,
                    content: this.descriptionNote,
                    created_at: trueMonth + '-' + day + '-' + d.getFullYear() + ' | ' + d.getHours() + ':' + mins,
                    updated_at: 'Never updated'

                })
                var json = JSON.stringify(this.arrayNotes)
                localStorage.setItem('Notes', json)
                this.toggleModale()
                this.$emit('refresh')
            }
        }

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
