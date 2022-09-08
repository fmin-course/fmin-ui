Component({
  behaviors: [],
  properties: {
    showView: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '南南提醒你'
    },
    content: {
      type: String,
      value: '嘀嘀嘀，请注意'
    }
  },
  data: {

  },
  lifetimes: {
    created() {

    },
    attached() {
      this._updateModalVisiility(false);
    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    onTap() {
      // this._updateModalVisiility(true);
    },

    // TODO  onClickOutSide 自动关闭
    // TODO  支持自定义 slot 类型

    // 取消
    handleModalCancel() {
    //   this.triggerEvent('handleModalCancel', {}, {bubbles: true});
      this._updateModalVisiility(false);
    },

    // 登录
    handleModalLogin() {
      this.triggerEvent('handleModalLogin', {
        hidden: true
      }, {bubbles: true});
      this._updateModalVisiility(false);
    },

    _updateModalVisiility(visibile) {
      this.setData({
        showView: visibile
      });
    }
  },
});
