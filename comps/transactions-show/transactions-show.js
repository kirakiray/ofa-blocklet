Component(async ({ load }) => {
    await load("../block-transcation -p");

    return {
        data: {
            // 所有交易数据
            txData: [],
            // 展示的数据
            listData: [],
            // 页面总数
            pageCount: 0,
            // 当前页面id
            pageId: 1,
            // 单页的个数
            limit: 10
        },
        watch: {
            // 数据板顶修正页面数等数据
            txData(txData) {
                this.pageCount = Math.ceil(txData.length / this.limit);
                this.pageId = 1;
                this.reloadList();
            },
            pageId() {
                this.reloadList();
            }
        },
        proto: {
            // 重新修正list数据
            reloadList() {
                // 防止同步线程多次触发
                clearTimeout(this._timer);
                this._timer = setTimeout(() => {
                    let start = (this.pageId - 1) * this.limit;
                    console.time("haha");
                    let data = this.txData.slice(start, start + 10)
                    this.listData = data.length ? JSON.parse(JSON.stringify(data)) : [];
                    console.timeEnd("haha");
                }, 1);
            }
        }
    };
});