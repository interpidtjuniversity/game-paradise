

<template>
    <div style="margin-bottom:20px">
        <br>
        <span>龟龟游戏, 乐享开怀</span><br><br><br><br>
        <button class="restart" @click="gotoFunEliminate">开心消消乐</button>
        <button class="restart" @click="gotoTankBattle">坦克大战</button>
        <button class="restart" @click="goto2048">二零四八</button>
        <div class="canvas">
            <div class="sky"></div>
            <div class="stars">
                <div class="falling-stars">
                    <div class="star-fall"></div>
                    <div class="star-fall"></div>
                    <div class="star-fall"></div>
                    <div class="star-fall"></div>
                </div>
                <div class="small-stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
                <div class="medium-stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
            </div>
            <div class="mountains"></div>
            <div class="sun"></div>
            <div class="glowflies">
                <div class="glowfly"></div>
                <div class="glowfly"></div>
                <div class="glowfly"></div>
                <div class="glowfly"></div>
                <div class="glowfly"></div>
                <div class="glowfly"></div>
                <div class="glowfly"></div>
                <div class="glowfly"></div>
            </div>
            <div class="tent">
                <div class="upper"></div>
                <div class="bottom"></div>
                <div class="shadow"></div>
                <div class="line"></div>
                <div class="door"></div>
                <div class="door-part"></div>
                <div class="door-part two"></div>
            </div>
            <div class="trees">
                <div class="tree"></div>
                <div class="tree"></div>
                <div class="tree"></div>
                <div class="tree"></div>
            </div>
            <div class="floor"></div>
        </div>
    </div>

</template>

<script lang="ts">
    import './home.css';
    import Vue from 'vue';
    import router from '@/router';
    export default Vue.extend({
        name: 'Home',
        methods:{
            gotoFunEliminate(): void {
                this.$router.push('/funEliminate');
            },
            gotoTankBattle(): void{
                this.$router.push('/tankBattle');
            },
            goto2048(): void{
                this.$router.push('/game2048');
            }
        }
    });

</script>
