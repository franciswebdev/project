
abstract class MyAbstractClass {
  prop: string;
  constructor(prop: string = "N/A") {
    this.prop = prop;
  }

  abstract tellMe(): void;
}

class MyClass extends MyAbstractClass {
  propChild: string;
  constructor(propChild: string = "Child") {
    super("Child const");
    this.propChild = propChild;
  }

  tellMe(): void {
    console.log("prop", this.prop);
  }

  tellThat(): void {
    console.log("tell that", this.propChild);
  }
}

let aClass: MyAbstractClass = new MyClass("Yeet");

aClass.tellMe();
aClass.tellThat();