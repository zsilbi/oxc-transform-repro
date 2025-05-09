function MyTSClassDecorator() {
  return (target: unknown) => {
    console.log("MyTSClassDecorator called");
  };
}

class Dependency {}

@MyTSClassDecorator()
export class RegularClass {
  constructor(dependency: Dependency) {}
}

@MyTSClassDecorator()
export abstract class AbstractClass {
  constructor(dependency: Dependency) {}
}
