window.onload = function () {
 let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

 dataBase = indexedDB.open("DataBase", 1);

 dataBase.onupgradeneeded = function (e) {
   let db = event.target.result;
   object = db.createObjectStore("textData", { keyPath : 'text' ,autoIncrement : true });
   object.createIndex('textIndex', 'text', { unique : false });
 };

 dataBase.onsuccess = function (e) {
   console.log("IndexedDB  loaded")
 };

 dataBase.onerror = function (e)  {
   console.log("IndexedDB  cant load")
 };

}

function saveDataLS(){
  let input = document.getElementById("saveServer");
  localStorage.setItem("dataLS", input.value);
  let storedValue = localStorage.getItem("dataLS");
  console.log("save " +storedValue+" in the database of LocalStorage");
}

function saveDataIDB () {
  let forAdd = document.getElementById("saveServer");
  let active = dataBase.result;
  let data = active.transaction("textData", "readwrite").objectStore("textData");
  let request = data.put( {
    keyPath: 1,
    text: forAdd.value
 });

  request.onerror = function (e) {
                   console.log('error');
                 };

 data.oncomplete = function (e) {
                  document.getElementById("saveServer").value = '';
                  alert('add');
              };
console.log(forAdd.value + " add to the DataBase of IndexedDB");
}

function dataClearLS(){
  let deletedValue = localStorage.getItem("dataLS");
  console.log("delete  "+deletedValue+ " from the database of LocalStorage");
  localStorage.removeItem("dataLS");
  let deletedValueRemove = localStorage.getItem("dataLS");
  console.log("now his value is " + deletedValueRemove);
}

function dataClearIDB(){
  let active = dataBase.result;
  let objectStore = active.transaction("textData", "readwrite").objectStore("textData").clear();
  console.log("delete the DataBase of IndexedDB");
}
