let tasks = ["Buy milk", "Go to class", "Drink coffee", "Eat a banana"];
let archived = [];

document.addEventListener("init", function (event) {
  clearLister();
  var page = event.target;

  if (page.id === "page1") {
    //page.querySelector('#push-button').onclick = function() {
    //document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Archived'}});
    // };
  } else if (page.id === "page2") {
    page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  }
});

let fillLister = () => {
  tasks.forEach((task) => {
    let newItem = document.createElement("ons-list-item");
    let textnode = document.createTextNode(`${task}`);
    newItem.appendChild(textnode);
    lister.insertBefore(newItem, lister.childNodes[2]);
  });
};
