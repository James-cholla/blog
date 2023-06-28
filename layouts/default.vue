<template>
    <div class="common-layout">
        <el-container class="container">
            <el-aside width="80px" class="aside">
                <Logo></Logo>
                <AsideNav></AsideNav>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main><slot /></el-main>
            </el-container>
        </el-container>
        <p class="footer">版权©</p>
    </div>
</template>

<script>

</script>

<style scoped>
.common-layout{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    
    height: 100vh;
}

.container{
    width: 80%;
    height: calc(100vh - 200px);
    margin-top: -80px;
    border-radius: 6px;
    flex: none;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.234);
}

.footer{
    position: absolute;
    bottom: 40px;
    font-size: 14px;
    color: #b4b4b4;
}

.aside{
    border-right: 1px solid #e9e9e9;
    overflow: inherit;
}
</style>