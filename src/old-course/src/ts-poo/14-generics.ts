import { Dog } from "./08-protected";

function getValue<myType>(value: myType) {
  return value;
}

getValue<string>("Hello World");
getValue<number>(123);
getValue<boolean>(true);
const manchas = new Dog("Manchas", "Brandon");
getValue<Dog>(manchas);