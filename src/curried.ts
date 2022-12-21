const curried = (func: any) => {
  const len = func.length
  const partial = (func: any, argsList:any[], argsLen: number) => {
    if(argsList.length >= argsLen) {
      return func(...argsList)
    }
    return (...args: any) => {
      return partial(func, [...argsList, ...args], argsLen)
    }
  }

  return partial(func, [], len)
}

export default curried