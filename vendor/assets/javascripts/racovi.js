(function(){
  window.Racovi = new Hevents();
  Racovi.register_init = function(names, fun) {
    Racovi.bind(names,fun);
  };
}();
