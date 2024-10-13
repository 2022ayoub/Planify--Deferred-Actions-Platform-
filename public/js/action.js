//  ============================= 

let list = document.querySelectorAll(".navigation li");

function removeHoveredClass() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
}

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("clicked");
  });
  this.classList.add("clicked"); 
}

list.forEach((item) => {
  item.addEventListener("mouseover", removeHoveredClass);
  item.addEventListener("click", activeLink);
});





// ==============================================================================

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
// ========================================================================
var timeoutIds=[];

function scheduleReminder(){
  var title= document.getElementById("titleAction").value;
  var description= document.getElementById("DescriptionAction").value;
  var dateAct= document.getElementById("DateAction").value;
  var timeAct= document.getElementById("TimeAction").value;


  var dateTimeString= dateAct + " "+timeAct;
  var scheduledTime=new Date(dateTimeString);
  var currentTime=new Date();
  var timeDifference =scheduledTime - currentTime;

  if(timeDifference > 0){
      addReminder(title,description,dateTimeString);

      var timeoutId = setTimeout(function(){
          document.getElementById("notificationSound").play();
          var notification=new Notification(title,{
              body:description,
              requireInteraction:true,
          });
      },timeDifference);
      timeoutIds.push(timeoutId);
  }
  else{
      alert("the scheduler time is in the past");
  }
}

let compteur=1;
function addReminder(title,description,dateTimeString){

  const pere=document.getElementById("bigcontainer");
  const nouveauDiv = document.createElement('div');
  nouveauDiv.className = 'table tableAction';
  nouveauDiv.id = 'divAction' + compteur;
// ===================================================================================
  const table = document.createElement('table');
  table.border = "1";
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  tbody.id = 'bodyOfAddAction' + compteur; 
  const trHead = document.createElement('tr');
  const thTitles = ["Title", "Description", "Date & Time", "Action"];
  thTitles.forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);
  table.appendChild(tbody);
  nouveauDiv.appendChild(table);


// ====================================================================================
  pere.appendChild(nouveauDiv);
  compteur++;

  var tableBody=document.getElementById(tbody.id);
  var row = tableBody.insertRow();

  var titleCell =row.insertCell(0);
  var descriptionCell =row.insertCell(1);
  var dateTimeCell =row.insertCell(2);
  var actionCell =row.insertCell(3);

  var index=compteur-1;
  titleCell.innerHTML=title;
  descriptionCell.id="textDescription"+index;
  descriptionCell.innerHTML=description;
  dateTimeCell.innerHTML=dateTimeString;
  // actionCell.innerHTML="<button onclick='deleteReminder(this);'>Delete</button>";
  actionCell.innerHTML = `
      <button style='margin-right:8px;' onclick='modifyDescription(${index});'>Edit</button>
      <button onclick='deleteReminder(this);'>Delete</button>
  `;
}
// =====================================================
function deleteReminder(button){
  var row = button.closest("tr");
  var index= row.rowIndex;
  clearTimeout(timeoutIds[index-1]);
  timeoutIds.splice(index-1,1);
  const divToRemove = button.closest('.tableAction');
  divToRemove.parentNode.removeChild(divToRemove);
}
function modifyDescription(index) {
  let descriptionSpan = document.getElementById('textDescription' + index);
  if (!descriptionSpan) {
      alert('Description element not found.');
      return;
  }
  let currentDescription = descriptionSpan.textContent;
  let newDescription = prompt("Modify Description:", currentDescription);
  if (newDescription !== null && newDescription !== undefined) {
      descriptionSpan.textContent = newDescription;
  }
}
