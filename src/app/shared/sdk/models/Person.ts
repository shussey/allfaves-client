/* tslint:disable */

declare var Object: any;
export interface PersonInterface {
  firstname: string;
  lastname: string;
  ageyears?: number;
  sexmf?: string;
  id?: string;
}

export class Person implements PersonInterface {
  firstname: string;
  lastname: string;
  ageyears: number;
  sexmf: string;
  id: string;
  constructor(instance?: PersonInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Person`.
   */
  public static getModelName() {
    return "Person";
  }
}
