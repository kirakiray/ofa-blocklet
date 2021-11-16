// 展示单条 transcation
Component(async ({ load }) => {

    return {
        data: {
            // 事务数据
            transcation: {}
        },
        proto: {
            // toLink() {
            //     this.page.navigateTo(`pages/hashShow/hashShow.js?hash=${this.transcation.hash}`)
            // }
            toUsDoll(str) {
                let sdata = String(str);
                return sdata.split("").reverse().map((e, i) => {
                    if ((i + 1) % 3 == 0 && (sdata.length - 1) != i) {
                        return "," + e;
                    }
                    return e;
                }).reverse().join('')
            },
            get fee() {
                if (!this.transcation.fee) {
                    return 0;
                }

                return this.transcation.fee / 100000000 + " BTC"
            },
        }
    };
});