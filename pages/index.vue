<script setup>
import { addDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore'

const { $modelsRef } = useNuxtApp();
const todos = useCollection($modelsRef);
console.log(todos);
// const todos = useCollection(collection(db, 'todos'))
function addData(){
  try {
    addDoc(models, {
        name: 'Prise de la Bastill'
      });

   } catch (error) {
    console.error('Error writing document: ', error)
  }
  
};

</script>


<template >
<div class="bg-gray-50">
  <h1 class="text-3xl font-bold underline">
      Todo App
    </h1>
  <button @click.prevent="addData()">Test</button>
  <div class="playground container mx-auto flex mb-4">
    <div class="tasks w-1/3 bg-sky-500 opacity-30">
      <div class="task">
        <p v-for="todo in todos" :key="todo.id">{{ todo.name }}</p>
       
      </div>
    </div>
    <div class="tasks w-1/3">
    <div class="task">
      <p>task1</p>
      <p>task2</p>
      <p>task3</p>
    </div>
    </div>
    <div class="tasks w-1/3">
    <div class="task">
      <p>task1</p>
      <p>task2</p>
      <p>task3</p>
    </div>
    </div>
  </div>
</div>
</template>
