<template>
    <h1>COMPONENTE 1</h1>
    <h1>{{ msg }}</h1>
</template>
<script>
export default {
    name: 'ComponenteUm',
    props: {
        msg: String
    }
}
</script>