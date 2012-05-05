
/*
#
 Hevents micro framework implement an instanciable event stack
 Projects home : http://github.com/yarmand/hevents
 Version: 0.6

 Copyright 2012, Yann ARMAND
 Licenced under the BSD License.
*/

/* we begin with defining out module depending of our runtime (amd,node or DOM)
*/

(function() {

  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      /* amd
      */
      define(factory);
      return true;
    } else {
      /* DOM
      */
      window.Hevents = factory();
      return true;
      /*
          if(typeof(top.Hevents) != 'undefined')
            console.log("binding top.Hevents to current window")
            window.Hevents = top.Hevents
            return
          console.log("binding current window Hevents to top window")
          top.Hevents = Hevents
      */
    }
  })(function() {
    /* From http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
    */
    var bind_one, fromPrototype, remove_from_chain, unbind_all_one;
    fromPrototype = function(prototype, object) {
      var newObject;
      newObject = Object.create(prototype);
      for(prop in object)
      {
        if(object.hasOwnProperty(prop))
          newObject[prop] = object[prop];
      };
      return newObject;
    };
    remove_from_chain = function(list, fun) {
      if (typeof list === 'undefined') return;
      if (list.current === fun) return list.next;
      list.next = remove_from_chain(list.next, fun);
      return list;
    };
    bind_one = function(object, name, fun) {
      var previously_registered;
      previously_registered = object[name];
      object[name] = function() {
        if (typeof previously_registered !== 'undefined') {
          previously_registered.call();
        }
        return fun.call();
      };
      object[name].current = fun;
      return object[name].next = previously_registered;
    };
    unbind_all_one = function(object, name) {
      return object[name] = void 0;
    };
    /*
        following is exported
    */
    return fromPrototype(Array, {
      "new": function() {
        return Object.create(this);
      },
      bind: function(names, fun) {
        var self;
        if (typeof names.forEach !== 'undefined') {
          self = this;
          names.forEach(function(name) {
            return bind_one(self, name, fun);
          });
        } else {
          bind_one(this, names, fun);
        }
        return fun;
      },
      bind_before: function(names, fun) {
        return console.log('bind_before() :not yet implemented');
      },
      bind_after: function(names, fun) {
        return console.log('bind_after() :not yet implemented');
      },
      call: function(name) {
        if (typeof this[name] !== 'undefined') return this[name]();
      },
      unbind_all: function(names) {
        var self;
        if (typeof names.forEach !== 'undefined') {
          self = this;
          return names.forEach(function(name) {
            return unbind_all_one(self, name);
          });
        } else {
          return unbind_all_one(this, names);
        }
      },
      unbind_all_before: function(names) {
        return console.log('unbind_all_before() :not yet implemented');
      },
      unbind_all_after: function(name) {
        return console.log('unbind_all_after() :not yet implemented');
      }
    });
  });

}).call(this);
