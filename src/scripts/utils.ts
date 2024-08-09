export class ExecutableScript {
  actions: (() => void)[] = [];

  execute = () => {
    this.actions.forEach((action) => {
      action();
    });
  };
}
