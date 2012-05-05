require 'racovi/view_helpers'

module Racovi
  class Railtie < Rails::Railtie
    initializer "racovi.view_helpers" do |app|
      ActionView::Base.send :include, ViewHelpers
    end
  end 

  module Rails
    VERSION = "0.1.0"
    class Engine < ::Rails::Engine
    end
  end



end
