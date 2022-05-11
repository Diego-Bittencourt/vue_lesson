<template>
    <div class="wrap">
        <h2> Name: {{ name }}
        </h2>
        <h3> Age: {{ age }}
        </h3>
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
        }
    }
    
}
</script>
