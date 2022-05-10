<template>
    <active-user>
        <div class="comp1wrap">
            <h2>Nome: {{ userName }} </h2>
            <h3> Age: {{userAge}} </h3>
        </div>
    </active-user>
</template>

<script>

export default {
    data() {
        return {
            userName: "",
            userAge: ""
    }
    }  
};
</script>
