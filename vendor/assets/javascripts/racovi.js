(function(){
  var Racovi = Hevents.new();
  Racovi.register_init = function(names, fun) {
    Racovi.bind(names,fun);
  };
  window.Racovi = Racovi
})();
