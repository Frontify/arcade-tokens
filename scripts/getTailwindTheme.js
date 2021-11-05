const getJsTree = ({ node, dictionary }) => {
  const isToken = node.hasOwnProperty("value");
  let tree = {};

  if (isToken) {
    const reference = dictionary.getReferences(node.original.value)[0];
    return `var(--${reference.name})`;
  }
  for (key in node) {
    tree[key] = getJsTree({
      node: node[key],
      dictionary,
    });
  }

  return tree;
};

module.exports = ({ tokens, dictionary }) => {
  const tree = getJsTree({ node: tokens, dictionary });
  return tree;
};
