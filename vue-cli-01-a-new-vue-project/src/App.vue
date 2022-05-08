<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li><friend-contact></friend-contact></li>
            <li><friend-contact></friend-contact></li>
        </ul>
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
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '987 12345 90',
                    email: 'julie@localhost.com' 
                }
            ]
        }
    }

}
</script>


