<template>
    <h1>COMPONENTE 1</h1>
    <p>Olá {{ variavel3 }}! {{ variavel1 }} + {{ variavel2 }} = {{ sum }}</p>
    <p>{{ msg }}</p>
</template>

<script>
export default {
    data() {
        return {
            variavel1: 10,
            variavel2: 20,
            variavel3: 'Paulo'
        };
    },
    computed: {
        sum() {
            return this.variavel1 + this.variavel2;
        }
    },
    props: {
        msg: String
    }
};
</script>