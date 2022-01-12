<template>
    <div class="boiteitem max-w-lg w-3/4 rounded overflow-hidden shadow-lg bg-yellow-300 border-solid border-4 border-gray-700 m-8">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{note.title}}</div>
            <p class="text-gray-700 text-base">
                {{note.content}}
            </p>
        </div>
        <div class="px-40 pt-4 pb-2 flex flex-col">
            <p class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2">Created at:</p>
            <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">{{note.created_at}}</span>
            <p class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2">Last update:</p>
            <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">{{note.updated_at}}</span>
            <p class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2">ID:</p>
            <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">{{note.id}}</span>
    
        </div>
    
        <button v-on:click="$emit('remove',note.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></button>
        <button v-on:click="toggleModale" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg></button>
    </div>
</template>

<script>
export default {
    name: "SpecificNoteItem",
    props: ['note', 'toggleModale'],
}
</script>