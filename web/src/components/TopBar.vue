<template>
    <div class="top-bar">
        <div class="logo">
            <img src="@/assets/images/logo.png" class="logo-img">
            <p class="logo-name">火火の留言墙时光</p>
        </div>
        <div class="menu">
            <hh-button-vue :nom="id == 0 ? 'cprimary' : 'csecondary'" class="menu-message" @click="changeWall(0)">留言墙
            </hh-button-vue>
            <hh-button-vue :nom="id == 1 ? 'cprimary' : 'csecondary'" class="menu-photo" @click="changeWall(1)">照片墙
            </hh-button-vue>
        </div>
        <div class="user">
            <div class="user-head"></div>
        </div>
    </div>
</template>

<script>
import HhButtonVue from './HhButton.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        HhButtonVue,
    },
    computed: {
        id() {
            return this.$route.query.id;
        }
    },
    methods: {
        //切换
        changeWall(e) {
            this.$router.push({
                query: { id: e },
            })
        }
    }
}
</script>

<style lang="less" scoped>
.top-bar {
    width: 100%;
    height: 52px;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;

    .logo {
        display: flex;
        align-items: center;
        width: 220px;

        .logo-name {
            font-size: 20px;
            color: @gray-1;
            font-weight: 600;
            padding-left: 10px;
        }

        .logo-img {
            height: 36px;
        }
    }

    .menu {
        .menu-message {
            margin-right: 24px;
        }
    }

    .user {
        width: 200px;

        .user-head {
            float: right;
            border-radius: 50%;
            height: 36px;
            width: 36px;
            background-image: linear-gradient(180deg, #7BE7FF 2%, #1E85E2 100%);
        }
    }
}
</style>