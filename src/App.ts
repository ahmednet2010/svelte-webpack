import $ from "jquery";
// @ts-ignore
import App from './App.svelte';
import "./App.scss";
const url = "http://localhost:3000/tasks";
let app
$(($:any)=>{
	const getDate:{} =  (order=false) => $.ajax({url: `${url}${order? "?_sort=data":""}`})
	const deletDate:{} = (i:number) =>$.ajax({url:`${url}/${i}`,method:"DELETE"})
	const addDate:{} = (e:any) => $.ajax({
		type:"POST",
		url:url,
		data:{
			id:Date.now(),
			task:e.target["task"].value,
			data:e.target["data"].value,
			type:e.target["type"].value,
		}
	})
	app = new App({
		target: document.body,
		props: {
			getDate,
			addDate,
			deletDate
		}
	});
})

export default app;