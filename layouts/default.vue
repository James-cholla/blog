<template>

    <div class="parent">
        <div id="layouts" :style="`background-image: url(${bg}); filter: blur(${load}px);`">

        </div>

        <main :class="`${show?'animate__slideInDown':'hidden'} animate__animated`">
            <aside id="aside">
                <NuxtLogo></NuxtLogo>
                <AsideNavBar></AsideNavBar>
                <FootNav></FootNav>
            </aside>

            <div id="main">
                <header>

                </header>

                <div id="content">
                    <nuxt />
                </div>
            </div>
        </main>

        <footer :class="`${show?'animate__slideInUp':'hidden'} animate__animated`" id="footer"> <FooterBar></FooterBar> </footer>

    </div>
</template>

<script>
export default {
    data() {
        return {
            bg: "",
            load: 99,
            show: false
        };
    },
    methods: {
        blurring(imgSrc) {
            let img = new Image();
            img.src = imgSrc;
            this.bg = img.src;
            let int = setInterval(() => {
                if (this.load == 0) {
                    clearInterval(int);
                    this.show = true;
                }
                this.load--;
            }, 30);
        }
    },
    mounted() {
        const That = this;
        fetch("https://api.vvhan.com/api/girl?type=json").then(Response => {
            if (Response.ok) {
                return Response.json();
            }
        }).then(res => {
            this.blurring(res.imgurl);
        });
    }
}

</script>

<style scoped>
.parent {
    height: 100vh;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}

.amint {
    transition: .3s ease-in-out;
}

.hidden {
    opacity: 0;
}

.show {
    opacity: 1;
}
</style>