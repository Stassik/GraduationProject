<template>
    <main class="main-container">
        <h1>This is an {{ $route.params.mark }} Page</h1>
        <router-view></router-view>
    </main>
</template>
<script>
export default {
    name: 'ModelsPage'
}
</script>
<style>
    
</style>