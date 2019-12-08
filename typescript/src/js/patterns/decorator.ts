'use strict';

let facade = console;

class Componentt {
  constructor() {
  }

  Operation() {
  }
}

class ConcreteComponent extends Componentt {
  constructor() {
    super()
    facade.log('ConcreteComponent created')
  }

  Operation() {
    facade.log('o o');
  }
}

class Decorator extends Componentt {
  constructor(public component: any) {
    super();
    this.component = component;
    facade.log('Decorator created');
  }

  Operation() {
    this.component.Operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  addedState: any;
  constructor(public component: any, public sign: any) {
    super(component);
    this.addedState = sign;
    facade.log('ConcreteDecoratorA created');
  }

  Operation() {
    super.Operation();
    facade.log(this.addedState);
  }
}

class ConcreteDecoratorB extends Decorator {
  addedState: any;
  constructor(public component: any, public sign: any) {
    super(component);
    this.addedState = sign;
    facade.log('ConcreteDecoratorA created');
  }

  Operation() {
    super.Operation();
    facade.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState);
  }

  AddedBehavior() {
    this.Operation()
    facade.log('|........|');
  }
}

function init_Decorator() {
  var component = new ConcreteComponent();
  var decoratorA = new ConcreteDecoratorA(component, '!!!');
  var decoratorB = new ConcreteDecoratorB(component, '.');
  facade.log('component: ');
  component.Operation();
  facade.log('decoratorA: ');
  decoratorA.Operation();
  facade.log('decoratorB: ');
  decoratorB.AddedBehavior();
}

init_Decorator();