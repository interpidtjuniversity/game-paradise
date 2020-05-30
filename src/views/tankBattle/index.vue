<template>
    <div class="container">
        <h2 class="title">坦克大战 F5刷新</h2>
        <div style="margin-bottom:20px">
            <button class="restart" @click="init()">重新开始</button>
            <button class="restart" @click="back()">返回主页</button>
        </div>
        <div class="main clearfix">
            <div id="canvasDiv" >
                <canvas id="wallCanvas" style="position: absolute"></canvas>
                <canvas id="tankCanvas" style="position: absolute"></canvas>
                <canvas id="grassCanvas" style="position: absolute"></canvas>
                <canvas id="overCanvas" style="position: absolute"></canvas>
                <canvas id="stageCanvas" style="position: absolute"></canvas>
                <img src="./images/tankAll.gif">
            </div>
        </div>
    </div>
</template>

<script>
    import './js/jquery.min.js';
    import './js/Helper.js';
    import './js/const.js';
    import './js/keyboard.js';
    import './js/level.js';
    import './js/crackAnimation.js';
    import './js/prop.js';
    import './js/bullet.js';
    import './js/tank.js';
    import './js/num.js';
    import './js/menu.js';
    import './js/map.js';
    import './js/Collision.js';
    import './js/stage.js';
    import './js/main.js';
    import './css/default.css';
    import Vue from 'vue';
    import {initAll} from '@/views/tankBattle/js/main';
    export default Vue.extend({
        name: 'tankBattle',
        methods:{
            init() {
                location.reload();
            },
            back() {
                this.$router.push('/game-paradise');
            }
        }
    });
</script>

<style scoped>
    #canvasDiv canvas{
        position:absolute;
    }
</style>
