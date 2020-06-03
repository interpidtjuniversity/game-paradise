<template>
    <div class="game" style="height: 750px">
        <h2 class="title" style="margin-top: 10px; margin-bottom: 32px">2048 👆👇👈👉控制移动                                       若显示有错误请F5刷新页面</h2>
        <div>
            <button class="restart" id = "restartBtn">重新开始</button>
            <button class="restart" @click="back()">返回主页</button>
        </div>
        <p class="game-message"></p>
        <div class="game-2048-board">
            <div data-row="0" data-col="0" class="cell cell-0-0"><i></i></div>
            <div data-row="0" data-col="1" class="cell cell-0-1"><i></i></div>
            <div data-row="0" data-col="2" class="cell cell-0-2"><i></i></div>
            <div data-row="0" data-col="3" class="cell cell-0-3"><i></i></div>
            <div data-row="0" data-col="4" class="cell cell-0-4"><i></i></div>


            <div data-row="1" data-col="0" class="cell cell-1-0"><i></i></div>
            <div data-row="1" data-col="1" class="cell cell-1-1"><i></i></div>
            <div data-row="1" data-col="2" class="cell cell-1-2"><i></i></div>
            <div data-row="1" data-col="3" class="cell cell-1-3"><i></i></div>
            <div data-row="1" data-col="4" class="cell cell-1-4"><i></i></div>

            <div data-row="2" data-col="0" class="cell cell-2-0"><i></i></div>
            <div data-row="2" data-col="1" class="cell cell-2-1"><i></i></div>
            <div data-row="2" data-col="2" class="cell cell-2-2"><i></i></div>
            <div data-row="2" data-col="3" class="cell cell-2-3"><i></i></div>
            <div data-row="2" data-col="4" class="cell cell-2-4"><i></i></div>

            <div data-row="3" data-col="0" class="cell cell-3-0"><i></i></div>
            <div data-row="3" data-col="1" class="cell cell-3-1"><i></i></div>
            <div data-row="3" data-col="2" class="cell cell-3-2"><i></i></div>
            <div data-row="3" data-col="3" class="cell cell-3-3"><i></i></div>
            <div data-row="3" data-col="4" class="cell cell-3-4"><i></i></div>

            <div data-row="4" data-col="0" class="cell cell-4-0"><i></i></div>
            <div data-row="4" data-col="1" class="cell cell-4-1"><i></i></div>
            <div data-row="4" data-col="2" class="cell cell-4-2"><i></i></div>
            <div data-row="4" data-col="3" class="cell cell-4-3"><i></i></div>
            <div data-row="4" data-col="4" class="cell cell-4-4"><i></i></div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import './css/2048.css'
    import './js/jquery-2.1.1.min';
    import './js/2048.js'
    export default Vue.extend({
        name: 'game2048',
        methods:{

            back(){
                this.$router.push('/game-paradise');
            }
        }
    });
</script>

<style scoped>

</style>
