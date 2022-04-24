<script lang="ts">
    import Skeleton from "./Skeleton.svelte";
    import { createEventDispatcher } from 'svelte';
    export let Tasks:any[];
    const dispatch = createEventDispatcher();
    function deletDateEvent(id:number){
        dispatch("addDelet",id);
    }
</script>

<ul>
    {#if Tasks}
    {#each Tasks as Task (Task.id)}
        <li class='text-xl wowowo capitalize {Task.type} p-2 mb-2 rounded-xl text-stone-50'>
            <span class="text-center inline-block w-2/6">{Task.task}</span>
            <span class="text-center inline-block w-2/6">
                {#if Task.status}
                {#each Task.status as status,index (index)}
                    <span class="inline text-sm {status}">{status}</span>
                {/each}
                {/if}
            </span>
            <span class="inline-block w-1/6 text-center" on:click|self>{Task.data}</span>
            <span class="inline-block w-auto text-right">
                Delete
                <input type="checkbox" on:click={deletDateEvent.bind(null,Task.id)}/>
            </span>
            
        </li>
        {/each}
    {:else}
        <Skeleton num={5}/>
    {/if}	
</ul>

<style>

</style>