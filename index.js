function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
  rankedLists[i].innerHTML = (i + n).toString()
}

}

function deepestChild() {
  const deepChild = document.getElementById('grand-node')
  const deeperChild = deepChild.children[0];

  const test1 = deeperChild.querySelector('div')
  const test2 = test1.querySelector('div')
  const test3 = test2.querySelector('div')

  return test3
}
