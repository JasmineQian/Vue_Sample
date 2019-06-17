<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">捐赠方式</div>
        <div class="card-body">
        <h4 class="card-title">捐赠方式</h4>
        <p class="card-rext">我们的捐赠方式支持支付宝和微信扫码支付，支付的金额用以购买服务器</p>
         <router-link to="/about/donate/wechat">微信捐赠</router-link>
         <router-link to="/about/donate/alipay">支付宝捐赠</router-link>


        <router-view></router-view>
        </div>
    </div>
</template>

