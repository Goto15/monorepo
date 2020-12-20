class Node
  attr_accessor :children, :value

  def initialize(value)
    @value = value
    @children = []
  end
end

def BFS(node, output = [], level = 0)
  return if node.nil?

  results = []
  queue = [[node, 0]]

  while queue.any?
    node, level = queue.shift
    results[level] ||= []
    results[level] << node.value

    node.children.each do |child|
      queue << [child , level+1]
    end
  end

  return results
end

# Tests 
# node1 = Node.new(1)
# node2 = Node.new(2)
# node3 = Node.new(3)
# node4 = Node.new(4)
# node5 = Node.new(5)
# node6 = Node.new(6)

# node1.children << node2
# node2.children << node3 << node4
# node4.children << node5
# node5.children << node6

# puts(BFS(node1))