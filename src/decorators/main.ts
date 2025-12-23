function Logger(value: Function, context: ClassDecoratorContext) {
  console.log(`[LOG]: Class ${String(context.name)} was defined!`)
}

@Logger
class UserService {
  constructor() {
    console.log('UserService instance created.')
  }
}

new UserService()
