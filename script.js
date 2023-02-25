let tableData = [];

const tbody = document.getElementById("tbody");
const addRowBtn = document.getElementById("add-row-btn");
const saveBtn = document.getElementById("save-btn");

let idCount = 1;

addRowBtn.addEventListener("click", () => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${idCount}</td>
    <td><input type="text" class="student-name-input"></td>
    <td><input type="text" class="student-roll-input"></td>
    <td><input type="text" class="subject-input"></td>
    <td><input type="text" class="marks-input"></td>
    <td><input type="text" class="marked-by-input"></td>
    <td><button class="save_btn">save</button></td>
  `;
  tbody.appendChild(tr);
  idCount++;
});

saveBtn.addEventListener("click", () => {
  const rows = tbody.getElementsByTagName("tr");
  let newRowData = {};

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    newRowData = {
      id: cells[0].textContent,
      student_name: cells[1].querySelector(".student-name-input").value.trim(),
      student_roll: cells[2].querySelector(".student-roll-input").value.trim(),
      subject: cells[3].querySelector(".subject-input").value.trim(),
      marks: cells[4].querySelector(".marks-input").value.trim(),
      markedBy: cells[5].querySelector(".marked-by-input").value.trim()
    };

    // validate input fields
    if (Object.values(newRowData).some(value => !value)) {
      alert("Please fill in all fields");
      return;
    }
    if (isNaN(newRowData.marks)) {
      alert("Please enter a valid number for marks");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newRowData.markedBy)) {
      alert("Please enter a valid email address for markedBy");
      return;
    }
  }

  tableData.push(newRowData);
  console.log("New row added to tableData: ", tableData);
  console.log("HTML table updated with new row");
});
