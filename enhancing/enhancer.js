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
  if (item.enhancement <= 14){
    const newItem ={...item, durability: item.durability -5}
    return newItem
  } else if (item.enhancement >= 15){
    const newItem = {...item, durability: item.durability -10}
    return newItem
  }
    else if (item.enhancement > 16){
      const newItem = {...item, durability: item.durability- 10, enhancement: item.enhancement - 1}
    }



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
