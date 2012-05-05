module Racovi
  module ViewHelpers
    def init_view_js()
      javascript_tag "$(document).ready( function() { Racovi.#{controller.controller_name}();Racovi.#{controller.controller_name}_#{controller.action_name}();})"
    end
  end
end
