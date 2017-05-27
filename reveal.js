/**
 * Created by hiepvo on 3/29/17.
 */
(function(){
  var init = {};
  var didScroll   = false;
  window.onscroll = scollPos;

  function scollPos(){
    didScroll = true;
    var arr   = document.getElementsByClassName("cp-section");

    var body = document.body;
    var doc  = document.documentElement;
    // (2) Calculate the page scroll.
    // All browsers except IE<9 support `pageXOffset/pageYOffset`, and in IE when DOCTYPE is set,
    // the scroll can be taken from documentElement(<html>), otherwise from `body` - so we take what we can.
    var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
    var i         = 0, len = arr && arr.length || 0;
    for(i; i < len; i++){
      if(scrollTop - arr[i].offsetTop > 150){
        addClass(arr[i], 'active');
      }
    }

  }

  setInterval(function(){
    if(didScroll){
      didScroll = false;
    }
  }, 100);


  function hasClass(el, className){
    if(el.classList)
      return el.classList.contains(className);
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className){
    if(el.classList)
      el.classList.add(className);
    else if(!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className){
    if(el.classList)
      el.classList.remove(className);
    else if(hasClass(el, className)){
      var reg      = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ')
    }
  }


  window.init = init;

})
(window);

