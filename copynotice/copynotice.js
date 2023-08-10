// // ---- Veu + Element 样式弹窗：https://www.fomal.cc/posts/2d7ac914.html
// // 在你想要弹出弹窗的js代码中加入如下代码即可触发弹窗
// new Vue({
//     data: function () {
//         this.$notify({
//             title: "你已被发现😜",
//             message: "小伙子，扒源记住要遵循GPL协议！",
//             position: 'top-left',
//             offset: 50,
//             showClose: true,
//             type: "warning",
//             duration: 5000
//         });
//     }
// })   // 因为这部分下面“复制提醒已经设置了，所以这里注释掉了”

// ------- 按键防抖：https://www.fomal.cc/posts/2d7ac914.html#按键防抖
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "复制成功!",
                    message: "若要转载最好保留原文链接哦🌹",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})