<script>
import Cat from '@/components/cat.vue';

export default {
    components: { 
        Cat 
    }
};
</script>

<template>
    <div class="wrapper">
        <div class="header">
            <h1>Example Page</h1>
        </div>
        <div>
            <Cat example="Example prop"/>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 24px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>