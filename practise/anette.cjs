function countCompleted(items) {
  return items.filter(item => 
    item.completed).length;
}

module.exports = { countCompleted };