Page(async ({ load }) => {
    await load("/comps/transactions-show -p");

    return {
        data: {
            loading: false,
            err: "",
            blockData: {
                block_index: "",
                // 时间
                time: "",
                tx: []
            }
        },
        proto: {
            async loadHashData() {
                this.loading = true;

                try {
                    let d = await fetch(`https://blockchain.info/rawblock/${this.query.hash}`, { mode: 'cors' });
                    // let d = await fetch(`pages/hashShow/test.json`, { mode: 'cors' });

                    if (d.status == 404) {
                        throw "404";
                    }

                    d = await d.json();

                    console.log("data => ", d);

                    Object.assign(this.blockData, d);

                    // this.shadow.$("transactions-show").txData = d.tx;
                } catch (err) {
                    this.err = err;
                }

                this.loading = false;
            },
            toUsDoll(str) {
                let sdata = String(str);
                return sdata.split("").reverse().map((e, i) => {
                    if ((i + 1) % 3 == 0 && (sdata.length - 1) != i) {
                        return "," + e;
                    }
                    return e;
                }).reverse().join('')
            },
            get time() {
                if (!this.blockData.time) {
                    return null;
                }

                return new Date(parseInt(this.blockData.time + "000")).toLocaleString();
            },
            get ver() {
                if (!this.blockData.ver) {
                    return null;
                }

                return "0x" + this.blockData.ver.toString(16);
            },
            get fee() {
                if (!this.blockData.fee) {
                    return null;
                }

                return this.blockData.fee / 100000000 + " BTC"
            },
        },
        ready() {
            this.loadHashData();
        }
    };
});