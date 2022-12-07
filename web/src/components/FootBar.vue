<template>
    <div class="foot-bar">
        <div class="text-info">
            <div class="foot-left">
                <div class="top-box">
                    <img src="@/assets/images/logo.png" class="logo-img">
                    <p class="top-list">火火の留言墙时光</p>
                </div>
            </div>
            <p class="top-p">
                这是一个留言墙项目，是我更着教程着手做的第一个全栈项目
            </p>
            <p class="top-p">
                我本身很喜欢留言墙这个理念
            </p>
            <p class="top-p">
                同时也希望借此机会能够提升到我的能力，了解开发的过程，见广，见广
            </p>
            <p class="top-p">
                感谢<a>yike逸刻</a>提供的教学支持
            </p>
        </div>
        <div class="person-info">
            <div class="top-box">
                <p class="top-list">友情链接</p>
            </div>
            <a class="blog" href="https://www.aqpower.cn">Hello_1382</a>
            <a class="blog" href="https://aqpower.cn/2022/11/03/%E7%95%99%E8%A8%80%E5%A2%99%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3%E2%9C%8F%EF%B8%8F/">留言墙开发文档✏️</a>
        </div>
        <div class="img-info">
            <img class="qqinfo-img" src="../assets/images/qqinfo.jpg">
            <p class="img-intro">QQ with me!</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="less" scoped>
.foot-bar {
    display: flex;
    width: 100%;
    height: 180px;
    background: @gray-1;
    justify-content: space-around;
    padding-top: 20px;
    box-sizing: border-box;
    margin-top: 40px;

    
    .top-box {
        height: 35px;
        display: flex;
        align-items: center;
        .top-list {
            font-size: 16px;
            color: @gray-3;
            font-weight: 600;
        }
    }

    .text-info {
        width: 500px;
        .logo-img {
            margin-right: 5px;
            height: 30px;
        }
        .top-p {
            color: @gray-3;

            a {
                color: @gray-3;
                font-weight: 600;
            }
        }
    }

    .person-info {
        display: flex;
        flex-direction: column;
        p {
            font-size: 16px;
            font-weight: 600;
            color: @gray-3;
        }

        .blog {
            color: @gray-3;
        }
    }

    .img-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .qqinfo-img {
            height: 100px;
        }

        .img-intro {
            margin-top: 9px;
            color: @gray-10;
        }
    }
}
</style>