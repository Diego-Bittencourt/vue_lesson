<template>
    <div class="wrap">
        <h1 v-if="index">Past User</h1>
        <h1 v-else>Current User</h1>
        <h2> Name: {{ name }}
        </h2>
        <h3> Age: {{ age }}
        </h3>
        <hr>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        index: {
            type: String,
            required: false,
            default: "0"
        }
    }
    
}
</script>
