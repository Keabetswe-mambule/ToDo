//array to holds tasks
let tasks = [];
//array to holds archived tasks
let archived = [];

//listen to events in the app pages
document.addEventListener("init", function (event) {
  clearLister();
  fillLister();
  var page = event.target;

  if (page.id === "page1") {
    //listen to fab touch on page1
    page.querySelector("#add").onclick = () => {
      //document.querySelector("#myNavigator").pushPage("page2.html", { data: { title: "Archived" } });
      showTemplateDialog();
    };
    page.querySelector("#adda").onclick = () => {
      hideDialog("my-dialog");
    };
  } else if (page.id === "page2") {
    page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  }
});

//fill GUI lister that holds tasks
let fillLister = () => {
  tasks.forEach((task) => {
    let newItem = document.createElement("ons-list-item");
    let textnode = document.createTextNode(`${task}`);
    newItem.appendChild(textnode);
    lister.insertBefore(newItem, lister.childNodes[1]);
  });
};

//clear GUI lister that holds tasks
let clearLister = () => {
  let newItem = document.createElement("ons-list-header");
  let textnode = document.createTextNode("Tasks");
  newItem.appendChild(textnode);
  lister.innerHTML = "";
  lister.appendChild(newItem);
};

//show dialog to add tasks from when called
let showTemplateDialog = () => {
  var dialog = document.querySelector("#my-dialog");

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement("dialog.html", { append: true }).then(function (dialog) {
      dialog.show();
    });
  }
};

//hide dialog and save task to holder array
let hideDialog = (id) => {
  if (
    document.querySelector("#addTask").value != "" &&
    document.querySelector("#addTask").value != " "
  ) {
    document.querySelector(`#${id}`).hide();
    tasks.push(document.querySelector("#addTask").value);
    clearLister();
    fillLister();
    document.querySelector("#addTask").value = "";
    ons.notification.toast("Task Added", { timeout: 1000, animation: "fall" });
  } else {
    ons.notification.toast("Task can not be empty", {
      timeout: 1000,
      animation: "fall",
    });
  }
};
///////update README.md to git repo//////////
