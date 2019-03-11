module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement <20){
    const newItem = {...item}
    newItem.enhancement = newItem.enhancement + 1
    return newItem
  }
  else {
     const newItem = {...item}
     return newItem
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability <100) {
    const newItem = {...item}
    newItem.durability = 100
    return newItem
  }else {
    const newItem = {...item}
    return newItem
  }

}

function get(item) {
  return { ...item };
}
