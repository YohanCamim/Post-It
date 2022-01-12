<template>
    <transition name="fade">
        <div class="bloc-modale" v-if="reveleClear">
            <div class="overlay" v-on:click="toggleModaleClear"></div>
            <div class="modale">
                <button v-on:click="toggleModaleClear" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full btn-modale">X</button>
                <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-500">Are you really want to clean all notes ?</h4>
                <form @submit.prevent="clearNote">
                    <button class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">Yes Clear !</button>
                </form>
    
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ModaleClear',
    props: ['reveleClear', 'toggleModaleClear'],
    methods: {
        clearNote: function() {
            localStorage.removeItem('Notes')
            this.$emit('refresh')
            this.toggleModaleClear()

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
