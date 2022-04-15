<script lang="ts">
	import Skeleton from "./Skeleton.svelte";
	export let getDate:any;
	export 	let addDate:any;
	export	let deletDate:any;
			let Tasks:any[];
	setTimeout(() => {
		getDate.done((a:any) => {
			Tasks = a;
		})
	}, 5000)
	function addDateEvent(e:any){
		e.preventDefault();
		addDate(e).done((e:any)=> {
			console.log(e);
			getDate.done((a:any) => {
				Tasks = a;
			})
		})
	}
	function deletDateEvent(id:any){
		deletDate(id).done(()=> {
				getDate.done((a:any) => {
					Tasks = a;
			})
		})
	}
</script>
<main>
<div class="container flex flex-row pt-14 m-auto">
	<div class="w-3/6 pr-4 pl-4">
	<h1 class="text-4xl p-3 bg-cyan-700 text-cyan-50 mb-5 rounded-lg hover:bg-lime-700">Too do!</h1>
	<form class="flex flex-col"  on:submit={addDateEvent}>
		<input class="p-2 m-2" type="text" name="task" value="" placeholder="Task"/>
		<input class="p-2 m-2" type="date" name="data" value="" />
		<select name="type" class="p-2 m-2" placeholder="hi">
			<option value="job">job</option>
			<option value="home">home</option>
			<option value="person">person</option>
		</select>
		<input type="submit" name="Add" value="ADD" class="w-2/6 m-auto p-2 bg-cyan-700 hover:bg-lime-700 text-cyan-50 text-lg font-bold"/>
	</form>
	</div>
	<div class="w-3/6 pr-4 pl-4">
	<ul>
		{#if Tasks}
		{#each Tasks as Task,i (Task.id)}
			<li class='text-xl capitalize {Task.type} p-2 mb-2 rounded-xl text-stone-50'>
				<span class="inline-block w-1/6 text-left">
					<input type="checkbox" on:click={deletDateEvent.bind(null,Task.id)}/>
				</span>
				<span class="text-center inline-block w-2/6">{Task.task}</span>
				<span class="inline-block w-2/6 text-right">{Task.data}</span>
			</li>
			{/each}
		{:else}
			<Skeleton num={5}/>
		{/if}	
	</ul>
</div>
</main>
<style class="postcss">
.job{
	@apply bg-teal-600;
}
.home{
	@apply bg-yellow-600;
}
.person {
	@apply bg-green-600;
}
</style>
