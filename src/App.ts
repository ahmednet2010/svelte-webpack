import $ from "jquery";
// @ts-ignore
import App from './App.svelte';
import "./App.scss";
const url = "http://localhost:3000/tasks";
let app
interface Data {
	id:number,
	status:any[],
	type:string,
	task:string,
	 data:string
}
$(($:any)=>{
	const getDate:{} =  (order=false) => $.ajax({url: `${url}${order? "?_sort=data":""}`})
	const deletDate:{} = (i:number) =>$.ajax({url:`${url}/${i}`,method:"DELETE"})
	const addDate:{} = (e:Data) => $.ajax({
		type:"POST",
		url:url,
		data:{
			status:e.status,
			type:e.type,
			task:e.task,
			data:e.data,
			id:Date.now()
		},
		dataType:"json",
		traditional:true
	}).done((e:any) => console.log(e))
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