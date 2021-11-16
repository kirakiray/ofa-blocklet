define(async () => {
    ofa.onState.loading = () => {
        return `
        <link rel="stylesheet" href="/css/public.css">
        <div style="display:flex;justify-content:center;align-items:center;width:100%;height:100%;font-size:14px;color:#aaa;">
            <i class="loading_icon"></i>
        </div>`;
    }

    return {
        data: {
            // 添加的首页
            home: "pages/main -p"
        },
        proto: {
            // shareHash 的 get 和 set 一定要成对应关系，并且必须同时出现
            // 显示出来的hash
            get shareHash() {
                console.log("get share hash => ", this.currentPage.src);
                return this.currentPage.src;
            },
            // 通过外部 shareHash 进入的app
            // 用于地址栏直接载入地址用
            set shareHash(hash) {
                if (hash) {
                    // 直接添加
                    this.router.push(hash);
                    // this.router.splice(0, 10, hash);
                }
            }
        },
        // 初始化完成
        ready() {
            // load("@lib/router/auto.js").then(init => {
            if (location.pathname == '/test-app.html') {
                return;
            }
            load("js/router/auto.js").then(init => {
                init(this);
            });

            // 可通过 location.hash 获取分享数据，并添加到路由
            // 如果在ready添加了router，那么 home 和 set shareHash 将不会被触发
        }
    }
});