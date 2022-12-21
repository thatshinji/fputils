const curried = (func) => {
  const len = func.length
  const partial = (func, argsList, argsLen) => {
    if(argsList.length > argsLen) {
      return func(...argsList)
    }
    return (...args) => {
      return partial(func, [...argsList, ...args], argsLen)
    }
  }

  return partial(func, [], len)
}

export default curried