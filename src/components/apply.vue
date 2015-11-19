<template>
<div class="content">
  <div class="list-block">
    <ul>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">姓名</div>
            <div class="item-input">
              <input type="text" placeholder="Your name">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">邮箱</div>
            <div class="item-input">
              <input type="email" placeholder="E-mail">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">密码</div>
            <div class="item-input">
              <input type="password" placeholder="Password" class="">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">性别</div>
            <div class="item-input">
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
      </li>
      <!-- Date -->
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">生日</div>
            <div class="item-input">
              <input type="date" placeholder="Birth day" value="2014-04-30">
            </div>
          </div>
        </div>
      </li>
      <!-- Switch (Checkbox) -->
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">开关</div>
            <div class="item-input">
              <div class="label-switch">
                <input type="checkbox">
                <div class="checkbox"></div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="align-top">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title label">文本域</div>
            <div class="item-input">
              <textarea></textarea>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <div class="row">
      <div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>
      <div class="col-50"><a href="#" class="button button-big button-fill button-success">提交</a></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  components: {
  },
  ready: function(){
    this.$data.title = "活动报名"
  }
}
</script>
