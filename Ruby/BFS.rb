def BFS(node, output = [], level = 0)
  return if node.nil?

  results = []
  # Create the queue from the passed in node
  queue = [[node, level]]

  while queue.any?
    # Add the node and it's level to the queue
    node, level = queue.shift
    results[level] ||= []
    results[level] << node.value

    node.children.each do |child|
      queue << [child , level+1]
    end
  end

  return results
end