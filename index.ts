import { Email } from "./models/Email";

export function sendTS(email: Email): void {
  global.window.open(
    `mailto:${email.mailto}?subject=${email.subject}&body=${email.body}`
  );
}

export function sendJS(email): void {
  global.window.open(
    `mailto:${email.mailto}?subject=${email.subject}&body=${email.body}`
  );
}

export function tryPropsDecorator(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol): void {
    console.log("tryPropsDecorator target::", target);
  };
}

export function tryMethodDecorator(): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): void {
    console.log("tryMethodDecorator target::", target);
    console.log("propertyKey::", propertyKey);
    console.log("descriptor::", descriptor);
    alert(`${String(propertyKey)} method is called`);
  };
}
