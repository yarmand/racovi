require 'racovi/helpers'

module Racovi
  class Railtie < Rails::Railtie
    initializer "racovi.helpers" do |app|
      ActionView::Base.send :include, ViewHelpers
    end
  end 
end
