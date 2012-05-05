# racovi

racovi is a gem to register initialization code for your javascript which is executed only for the current controller and view.

I created that to easily deploy what is explain in [this blog post](http://blog.harakys.com/blog/2011/09/05/javascript-initializers-to-your-views-with-rails-3-dot-1-and-coffeescript/).

racovi is based on the javascript event stack [Hevents](https://github.com/yarmand/hevents).

# Usage

## Prepare your Rails layout

Put the helper function ``init_view_js`` wherever you want in your layouts, it will add a ``$(document).ready(…)`` section calling initializer code for the current controller and the current view.

for example

	/** application.html.haml **/
	…
	= init_view_js
	…
	
## Prepare your application.js

add these line to your ``app/assets/javascript/application.js``

	//= require hevents
	//= require racovi

## Register an initializer code

use ``register_init(names,fun)`` in your controller or view js files

	/** assets/javascript/persons.js **/
	…
	Racovi.register_init('persons', function(){
	  console.log('hello from Person controller')
	});
	…
_

	/** assets/javascript/persons.js.coffee **/
	…
	Racovi.register_init 'persons', () ->
	  console.log('hello from Person controller')
	…
	
### register initializer for multiple views

	/** assets/javascript/persons.js.coffee **/
	...
	Racovi.register_init ['persons_new','persons_edit'], () ->
	  console.log('editing a Person')
	…

### cumulative initializer for complex views
If you have complex view GUI distributed on multiple sources files, independent from each others, you can register multiple time the same initializer name, all registered functions will be called.

	/** assets/javascript/sidebar.js.coffee **/
	…
	Racovi.register_init 'persons', () ->
		('#persons_menu').show()
	…
	/** assets/javascript/persons.js.coffee **/
	...
	Racovi.register_init 'persons', () ->
	  console.log('hello from Person controller')
	...

# TODO

* automatically add ``hevents`` and ``racovi`` in application.js
* automatically add ``init_view_js`` to layouts
	
# Contributing to racovi
 
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Rakefile, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

# Copyright

Copyright (c) 2012 yann ARMAND under MIT See LICENSE.txt for
further details.

