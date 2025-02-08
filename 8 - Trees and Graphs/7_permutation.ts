class Permutation {
  static permutations: String[];
  static builder: String[];

  static generatePermutations(text: String): String[] {
    this.createBuilder(text);
    this.permutations = [];
    this.generateBuilderPermutations();
    return this.permutations;
  }

  private static createBuilder(text: String) {
    const builder: String[] = [];
    for (let i = 0; i < text.length; i++) {
      builder.push(text[i]);
      this.builder = builder;
    }
  }

  private static generateBuilderPermutations(index = 0) {
    if (index === this.builder.length - 1) {
      this.permutations.push(this.builder.join(""));

      return;
    }

    for (let i = index; i < this.builder.length; i++) {
      this.swapBuilder(i, index);
      this.generateBuilderPermutations(index + 1);
      this.swapBuilder(index, i);
    }
  }

  private static swapBuilder(from: number, to: number) {
    const temp = this.builder[from];
    this.builder[from] = this.builder[to];
    this.builder[to] = temp;
  }
}
