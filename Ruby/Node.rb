class Node
  attr_accessor :children, :value

  def initialize(value)
    @value = value
    @children = []
  end
end