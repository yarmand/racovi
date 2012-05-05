require File.expand_path(File.dirname(__FILE__) + '/spec_helper')

describe "View Helpers" do
  it "should put javascript init calls" do
    controller = FakeController.init("foo","bar")
    output = controller.init_view_js()
    fail unless output =~ /Racovi.foo()/
    fail unless output =~ /Racovi.foo_bar()/
  end
end

describe "Racovi" do
  it "fails" do
    fail "hey buddy, you should probably rename this file and start specing for real"
  end
end
