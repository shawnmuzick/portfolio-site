export function buildCodeNode(node, code) {
  node.textContent = `${code}`;
  hljs.highlightElement(node);
}
