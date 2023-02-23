<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <div class="container">
    <router-link class="navbar-brand" style="font-weight: 800" :to="{name: 'home'}">
        <img class="chesslogo" src="../assets/chess.png" alt="">
        国际象棋</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active" style="font-weight: 800" :to="{name: 'home'}">首页</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"  style="font-weight: 800" :to="{name: 'matchduel'}">匹配对局</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" style="font-weight: 800" :to="{name: 'manmachine'}">人机对局</router-link>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" style="font-weight: 800" :to="{name: 'login'}">登录</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" style="font-weight: 800" :to="{name: 'register'}">注册</router-link>
            </li>
        </ul>
    </div>
    </div>
    </nav>    



</template>


<script>
export default{
    name: "NavBar",
}

</script>

<style scoped>

.chesslogo{
    width: 40px;
    height: 40px;
    border-radius:50%;
    border:  solid pink;
}

</style>