export default {
  install (Vue) {
    Vue.directive('maxlength', {
      bind: function (el,binding) {
        let maxlength_ = binding.value;
        if ( !maxlength_ || isNaN(maxlength_) ) {
          maxlength_ = 1000;
        }else {
          maxlength_ = parseInt(maxlength_);         
        }
        if (!el.tagName.match(/input|textarea/i)) {
          return
        }
        el.addEventListener('input', (e) => {
          e.stopPropagation()
          let value_ = e.target.value;
          let target_ = e.target;
          if(value_ && value_.length > maxlength_ ) {
            target_.value = value_.substring(0,maxlength_);
          }
        })

      },
      update: function (el, oldValue) {

      },
      unbind: function (el) {

      }
    })
  }
}
