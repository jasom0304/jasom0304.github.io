// 讓文章裡「多按的空行」也會顯示出來。
// Markdown 原本會把好幾行空行當成一行；這裡在段落之間補上對應數量的空白。
export default function remarkBlankLines() {
  return (tree) => {
    const out = [];
    let prev;
    for (const node of tree.children) {
      if (prev?.position && node.position) {
        const blanks = node.position.start.line - prev.position.end.line - 1;
        for (let i = 1; i < blanks; i++) {
          out.push({ type: 'html', value: '<div class="blank-line" aria-hidden="true"></div>' });
        }
      }
      out.push(node);
      prev = node;
    }
    tree.children = out;
  };
}
