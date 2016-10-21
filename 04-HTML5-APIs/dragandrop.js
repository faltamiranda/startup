window.onload = function () {function handleFileSelect(evt) {
   evt.stopPropagation();
   evt.preventDefault();

   let files = evt.dataTransfer.files;
   let reader = new FileReader();
   reader.onload = function(event) {
        document.getElementById('drop_zone').value = event.target.result;
   }
   reader.readAsText(files[0],"UTF-8");
 }

 function handleDragOver(evt) {
   evt.stopPropagation();
   evt.preventDefault();
   evt.dataTransfer.dropEffect = 'copy';
 }

 let dropZone = document.getElementById('drop_zone');
 dropZone.addEventListener('dragover', handleDragOver, false);
 dropZone.addEventListener('drop', handleFileSelect, false);
}
