<template>
    <div class="common-layout">
        <el-container class="container">
            <el-aside width="80px" class="aside">
                <va-affix :offset-top="120">
                    <div>
                        <Logo></Logo>
                        <AsideNav></AsideNav>
                    </div>
                </va-affix>
            </el-aside>
            <el-container class="content">
                <va-affix :offset-top="0">
                    <el-header class="header">
                        <Header></Header>
                    </el-header>
                </va-affix>
                <el-main class="main">
                    <slot />
                </el-main>
            </el-container>

            <el-aside width="280px" class="raside">
                <Logo></Logo>
                <AsideNav></AsideNav>
            </el-aside>
        </el-container>
        <p class="footer w-full leading-8 py-1">版权©</p>
    </div>
</template>

<script>

</script>

<style scoped>
.common-layout {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: relative;
    padding-bottom: 40px;
}

.container {
    width: 65%;
    margin-top: 60px;
    border-radius: 6px 6px 0 0;
    flex: none;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.234);
}
.content{
    flex-direction: column !important;
}

.main {
    border-top: 1px solid #ebebeb;
    min-height: calc(100vh - 200px);
}

.footer {
    font-size: 14px;
    color: #b4b4b4;
    position: absolute;
    bottom: 0;
    text-align: center;
}

.aside {
    border-right: 1px solid #e9e9e9;
    overflow: inherit;
    padding-top: 40px;
}

.raside {
    border-left: 1px solid #e9e9e9;
}

.header {
    backdrop-filter: blur(10px);
    background: #ffffff13;
    height: 80px;
    
}
</style>