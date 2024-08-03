<template>
    <header class="top-bar">
        Welcome, <b>{{ username }}</b> - <a href="#" @click="logout">
        <font-awesome-icon :icon="['fas','power-off']"/>
        Logout</a>
    </header>
</template>

<script>
import axios from 'axios';
import {useRouter} from "vue-router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: 'TopBar',
    components: {FontAwesomeIcon},
    props: {
        username: {
            type: String,
            default: 'Dialog Title'
        },
    },
    setup() {
        const router = useRouter();

        const logout = async () => {
            try {
                await axios.post('/logout');
                window.location.reload(); // Redirect to login page or homepage
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        return {
            logout,
        };
    }

};
</script>

<style scoped>
.top-bar {
    background-color: #4a5568;
    color: white;
    padding: 1rem;
    text-align: right;
    height: 50px;
    font-size: 12px;
}
</style>
