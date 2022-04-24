<script lang="ts">
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
let status:any[] = [];
let type:string;
let task:string;
let data:string;
function handleSumnit() {
  dispatch("addDate",{status, type, task, data});
}
</script>
<form class="flex flex-col"  on:submit|preventDefault={handleSumnit}>
    <input bind:value={task} class="p-2 m-2" type="text" name="task"  placeholder="Task" required/>
    <input bind:value={data} class="p-2 m-2" type="date" name="data" required/>
    <div class="text-center p-2 m-2">
        <label for="Important" class="label-status">
            <input bind:group={status} type="checkbox" id="Important" name="Important" value="Important" />
            <span class="dot rounded-md Important"></span>
            Important

        </label>
        <label for="immediate" class="label-status">
            <input bind:group={status} class="p-2 m-2" type="checkbox" id="immediate" name="immediate" value="immediate" />
            <span class="dot rounded-md immediate"></span>
            immediate
        </label>
        <label for="notUrgent" class="label-status">
            <input bind:group={status} class="p-2 m-2" type="checkbox" id="notUrgent" name="notUrgent" value="notUrgent" />
            <span class="dot rounded-md notUrgent"></span>
            not urgent
        </label>
    </div>
    <select id="type" name="type" class="p-2 m-2" bind:value={type} required>
        <option value="job">job</option>
        <option value="home">home</option>
        <option value="person" selected>person</option>
    </select>
    <input type="submit" name="Add" value="ADD" class="w-2/6 m-auto p-2 bg-cyan-700 hover:bg-lime-700 text-cyan-50 text-lg font-bold"/>
</form>