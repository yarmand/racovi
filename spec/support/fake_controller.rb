
class FakeController
  include Racovi::ViewHelpers
 
  attr_accessor :controller,:controller_name, :action_name

  @@instance = FakeController.new

  def self.init(controller,action)
    @@instance.controller = @@instance
    @@instance.controller_name = controller
    @@instance.action_name = action
    @@instance
  end

  private_class_method :new
end

