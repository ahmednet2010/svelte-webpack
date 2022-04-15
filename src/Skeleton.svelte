<script lang="ts">
    export let num:number = 1;
</script>
<div>    
   {@html '<div class="w-full bg-slate-400 p-5 rounded-xl skeleton mb-5"></div>'.repeat(num)}
</div>
<style lang="postcss">
</style>