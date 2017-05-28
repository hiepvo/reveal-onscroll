/**
 * Created by hiepvo on 3/29/17.
 */
(function(){
  var init        = {};
  var didScroll   = false;
  window.onscroll = scrollPos;
  var default_h   = 326;

  function scrollPos(){
    didScroll    = true;
    var sections = document.getElementsByClassName("cp-section");

    var j   = 0,
        arr = [],
        len = sections && sections.length || 0;

    var vpHeight = window.innerHeight;
    for(j; j < len; j++){
      var vpPosition = sections[j].getBoundingClientRect();

      if(vpPosition.top <= vpHeight / 2){
        sections[j].style.height          = default_h + 'px';
        sections[j].style.transitionDelay = j * 0.2 + 's';
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

