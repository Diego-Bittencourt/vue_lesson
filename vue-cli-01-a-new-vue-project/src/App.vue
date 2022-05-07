<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julia',
                    name: 'Julia Jones',
                    phone: '987 12345 90',
                    email: 'julie@localhost.com' 
                }
            ]
        }
    }

}
</script>


