<template>
    <div class="foot-bar">
        <div class="text-info">
            <div class="foot-left">
                <div class="top-box">
                    <p class="top-list">JGðX</p>
                </div>
            </div>
            <p class="mobileMsg">
                ææºç«¯ç¹ä¾ï¼å¤ä¸æ»å æ¬¡ä¼ææåå¦^_^ï¼ä¹è®¸ï¼å¶å®æ¯æä¼åä¸è¡ï¼å¤ä¸æ»å æ¬¡è¯´ä¸å®è½å¤è§¦åè·åæ´å¤Messageï¼ä¸åææºææä¹ä¸ä¸æ ·
                <br/><br/>
            </p>
            <p class="top-p">
                è¿æ¯ä¸ä¸ªæ¸©é¦¨ççè¨å¢ï¼æ¥è®¿çæ¯ä¸ä½æåé½å¯ä»¥å¨è¿éçä¸äºä»ä¹
            </p>
            <p class="top-p">
                éå¿ææ¬²å°è®°å½ä¸æ­¤å»çå¿æå§ï¼
            </p>
            <p class="top-p">
                å¤§å®¶çå¿ææåç¼ç»å¨ä¸èµ·åç°åºæ¥ï¼ä¼æ¯ä¸ä»¶å¾ç¾å¥½çäºæç
            </p>
            <p class="top-p">
                æéè¿å®æè¿ä¸ªé¡¹ç®å­¦ä¹ å°äºå¾å¤ç¥è¯ä¸æå·§ï¼æè°¢ <a>yikeé¸å»</a> æä¾çæå­¦æ¯æ
            </p>
        </div>
        <div class="person-info">
            <div class="top-box">
                <p class="top-list">åæé¾æ¥</p>
            </div>
            <a class="blog" href="https://www.aqpower.cn">Hello_1382(Blog)</a>
            <a class="blog"
                href="https://aqpower.cn/2022/11/03/%E7%95%99%E8%A8%80%E5%A2%99%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3%E2%9C%8F%EF%B8%8F/">çè¨å¢å¼åææ¡£âï¸</a>
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

    /*å®ä¹ç«å± css*/
    @media screen and (orientation:portrait) and (max-device-width:600px) and (max-device-height:900px) {

        flex-direction: column;
        box-sizing: border-box;

        .text-info {
            width: 100% !important;
            margin-bottom: 1rem;
            .mobileMsg{
                display:block !important;
                color: @gray-3;
            }
        }

        .person-info {
            margin-bottom: 1rem;
        }

        .img-info {
            display: none !important;
        }
    }

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

        .mobileMsg {
                display: none;
            }
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