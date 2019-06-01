function choice(items) {
  return items[Math.floor(Math.random() * Math.floor(15))];
}

function remove(items, item) {
  var index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
    return items;
  }
}

export { choice, remove };
