export class SourcesKbService {
  private kb = {
    'solution01.js': `/*
 edit code below
>> ¯\\_(ツ)_/¯ <<
 edit code below
*/
function sayHello() {
  console.log('Hello Worm');
}

sayHello(); // Hi there!`,
    'solution02.js': `function testHello() {
  sayHello() // see whom greeting is addressed to;
}
`
  };

  getSources(id: string): {id: string, source: string} {
    return this.kb[id];
  }

  setSources(id: string, sources: string): void {
    this.kb[id] = sources;
  }

  getAvailableIds(): string[] {
    return Object.keys(this.kb);
  }
}

