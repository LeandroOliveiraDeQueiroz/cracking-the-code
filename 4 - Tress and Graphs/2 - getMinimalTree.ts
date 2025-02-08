function getMinimalTree<T>(array: T[]) {
  return makeMinimalTree(array, 0, array.length - 1);
}

function makeMinimalTree<T>(array: T[], start: number, end: number) {
  if (start > end) return null;

  const mid = start + Math.floor((end - start) / 2); //Overflow prevent
  const node = new MyNode<T>(array[mid]);

  node.left = makeMinimalTree(array, start, mid - 1);
  node.right = makeMinimalTree(array, mid + 1, end);

  return node;
}

class MyNode<T> {
  value: T;
  left: MyNode<T> | null;
  right: MyNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = this.right = null;
  }
}
