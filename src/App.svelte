<script lang="ts">
	import FormTodo from "./FormTodo.svelte";
	import TodoList from "./TodoList.svelte";
	export let getDate:any;
	export 	let addDate:any;
	export	let deletDate:any;
			let Tasks:any[];
	setTimeout(() => {
		getDate().done((a:any) => {
			Tasks = a;
		})
	}, 5000)
	function sortEvent() {
		getDate(true).done((a:any) => Tasks = a)
	}
	function addDateEvent(e:CustomEvent){
		addDate(e.detail).done(()=>getDate().done((a:any) => Tasks = a))
	}
	function deletDateEvent(id:CustomEvent){
		deletDate(id.detail).done(()=> getDate().done((a:any) =>Tasks = a))
	}
</script>
<main>
<div class="container flex flex-row pt-14 m-auto">
	<div class="w-3/6 pr-4 pl-4" >
		<h1 class="text-4xl p-3 bg-cyan-700 text-cyan-50 mb-5 rounded-lg hover:bg-lime-700">Too do!</h1>
		<FormTodo on:addDate={addDateEvent}/>
	</div>
	<div class="w-3/6 pr-4 pl-4">
		<TodoList Tasks={Tasks} on:addDelet={deletDateEvent} on:click={sortEvent}/>
	</div>
</main>
