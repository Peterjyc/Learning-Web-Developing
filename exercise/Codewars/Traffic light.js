function updateLight(current) {

    const lights = ['green', 'yellow', 'red']

    return lights[lights.indexOf(current) + 1] || lights[0]
  }
