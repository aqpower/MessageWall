<template>
    <div class="foot-bar">
        <div class="text-info">
            <div class="foot-left">
                <div class="top-box">
                    <p class="top-list">JG🍊X</p>
                </div>
            </div>
            <p class="top-p">
                这是一个温馨的留言墙，来访的每一位朋友都可以在这里留下些什么
            </p>
            <p class="top-p">
                随心所欲地记录下此刻的心情吧！
            </p>
            <p class="top-p">
                大家的心意最后编织在一起呈现出来，会是一件很美好的事情的
            </p>
            <p class="top-p">
                我通过完成这个项目学习到了很多知识与技巧，感谢 <a>yike逸刻</a> 提供的教学支持
            </p>
        </div>
        <div class="person-info">
            <div class="top-box">
                <p class="top-list">友情链接</p>
            </div>
            <a class="blog" href="https://www.aqpower.cn">Hello_1382(Blog)</a>
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
    height: 100%;
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
            color: @gray-10;
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
                color: @gray-10;
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