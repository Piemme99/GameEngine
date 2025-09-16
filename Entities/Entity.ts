let entityIdCounter = 0;

export default class Entity {
  public id: number;
  private components: Map<string, any>;

  constructor() {
    this.id = entityIdCounter++;
    this.components = new Map();
  }

  addComponent<T>(name: string, component: T): void {
    this.components.set(name, component);
  }

  getComponent<T>(name: string): T | undefined {
    return this.components.get(name);
  }

  hasComponent(name: string): boolean {
    return this.components.has(name);
  }
}
