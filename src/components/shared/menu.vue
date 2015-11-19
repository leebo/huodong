<template>
  <nav class="bar bar-tab">
    <a class="tab-item" v-link="{ path: '/home', activeClass: 'active' }">
      <span class="icon icon-home"></span>
      <span class="tab-label">首页</span>
    </a>
    <a class="tab-item" v-link="{ path: '/rank', activeClass: 'active'  }">
      <span class="icon icon-gift"></span>
      <span class="tab-label">排名</span>
    </a>
    <a class="tab-item" v-link="{ path: '/apply', activeClass: 'active'  }">
      <span class="icon icon-star"></span>
      <span class="tab-label">报名</span>
    </a>
    <a class="tab-item" v-link="{ path: '/tips', activeClass: 'active'  }">
      <span class="icon icon-message"></span>
      <span class="tab-label">说明</span>
    </a>
  </nav>
</template>
