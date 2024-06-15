var uniqueIDV, firstNameV, middleNameV, surNameV, addressV, emailV;

function readForm() {
  uniqueIDV = document.getElementById("UniqueID").value;
  firstNameV = document.getElementById("FirstName").value;
  middleNameV = document.getElementById("MiddleName").value;
  surNameV = document.getElementById("SurName").value;
  addressV = document.getElementById("Address").value;
  emailV = document.getElementById("Email").value;
  console.log(uniqueIDV, firstNameV, middleNameV, surNameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + uniqueIDV)
    .set({
      uniqueID: uniqueIDV,
      firstName: firstNameV,
      middleName: middleNameV,
      surName: surNameV,
      address: addressV,
      email: emailV,
    });
  alert("Data Inserted");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + uniqueIDV)
    .on("value", function (snap) {
      document.getElementById("UniqueID").value = snap.val().uniqueID;
      document.getElementById("FirstName").value = snap.val().firstName;
      document.getElementById("MiddleName").value = snap.val().middleName;
      document.getElementById("SurName").value = snap.val().surName;
      document.getElementById("Address").value = snap.val().address;
      document.getElementById("Email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + uniqueIDV)
    .update({
      firstName: firstNameV,
      middleName: middleNameV,
      surName: surNameV,
      address: addressV,
      email: emailV,
    });
    Swal.fire("Data Inserted!");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("student/" + uniqueIDV)
    .remove();
  alert("Data Deleted");
  document.getElementById("UniqueID").value = "";
  document.getElementById("FirstName").value = "";
  document.getElementById("MiddleName").value = "";
  document.getElementById("SurName").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
