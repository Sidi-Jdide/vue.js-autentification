<template>
    <div class="container">
        <div class="screen">
            <div class="screen__content">
                <form class="login" @submit.prevent="login" ref="form">
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input v-model="username"  class="login__input" placeholder="User name / Email" required>
                    </div>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input v-model="password"   type="password" class="login__input" placeholder="Password" required>
                    </div>
                    <button type="submit" class="button login__submit">
                        <span class="button__text">Login</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>
                </form>
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await fetch('http://127.0.0.1:8080/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.email,
                        password: this.password,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la connexion');
                }

                const data = await response.json();

                this.$store.dispatch('login', { user: data.user, token: data.token });

                this.$router.push('/dashboard');
            } catch (error) {
                console.error('Login failed', error);
                alert('Échec de la connexion. Veuillez vérifier vos identifiants.');
            }
        },
    },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');



.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.screen {
    background: linear-gradient(90deg, #5D54A4, #7C78B8);
    position: relative;
    height: 600px;
    width: 460px;
    box-shadow: 0px 0px 24px #5C5696;
}

.screen__content {
    z-index: 1;
    position: relative;
    height: 100%;
}

.screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
}

.screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
}

.screen__background__shape1 {
    height: 520px;
    width: 520px;
    background: #FFF;
    top: -50px;
    right: 120px;
    border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #6C63AC;
    top: -172px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #5D54A4, #6A679E);
    top: -24px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape4 {
    height: 400px;
    width: 200px;
    background: #7E7BB9;
    top: 420px;
    right: 50px;
    border-radius: 60px;
}

.login {
    width: 320px;
    padding: 30px;
    padding-top: 156px;
}

.login__field {
    padding: 20px 0px;
    position: relative;
}

.login__icon {
    position: absolute;
    top: 30px;
    color: #7875B5;
}

.login__input {
    border: none;
    border-bottom: 2px solid #D1D1D4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 700;
    width: 75%;
    transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
    outline: none;
    border-bottom-color: #6A679E;
}

.login__submit {
    background: #4C489D;
    font-size: 14px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #D4D3E8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    color: white;
    box-shadow: 0px 2px 2px #5C5696;
    cursor: pointer;
    transition: .2s;
}



</style>