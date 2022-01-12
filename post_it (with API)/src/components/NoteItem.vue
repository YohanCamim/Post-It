<template>
    <div class="boiteitem max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 border-solid border-4 border-gray-700 m-8">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{note.title}}</div>
            <p class="text-gray-700 text-base">
                {{note.content.slice(0,42)}}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex flex-col">
    
            <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">ID: {{note._id}}</span>
    
        </div>
        <button v-on:click="$emit('remove',note._id)" class="bg-gradient-to-r from-red-400 to-red-600  hover:from-red-800 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full m-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg></button>
    <button  v-on:click="$emit('edit',note._id)" class="bg-gradient-to-r from-blue-400 to-blue-600  hover:from-blue-800 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full m-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
  <path fill-rule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clip-rule="evenodd" />
</svg></button>
    </div>
</template>

<script>
export default {
    name: "NoteItem",
    props: ['note']
}
</script>


<style scoped>

</style>