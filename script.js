let medications = [];
let bloodPressureReadings = [];
let exercises = [];
let foods = [];
let meditations = [];

function addMedication() {
  const medicationName = document.getElementById("medicationName").value;
  const medicationTime = document.getElementById("medicationTime").value;

  medications.push({ name: medicationName, time: medicationTime });
  updateMedicationList();

  // Clear input fields
  document.getElementById("medicationName").value = "";
  document.getElementById("medicationTime").value = "";
}

function addBloodPressure() {
  const patientName = document.getElementById("bloodPressureName").value;
  const systolic = document.getElementById("systolicInput").value;
  const diastolic = document.getElementById("diastolicInput").value;

  bloodPressureReadings.push({ name: patientName, systolic: systolic, diastolic: diastolic });
  updateBloodPressureList();

  // Clear input fields
  document.getElementById("bloodPressureName").value = "";
  document.getElementById("systolicInput").value = "";
  document.getElementById("diastolicInput").value = "";
}

function addExercise() {
  const exercise = document.getElementById("exerciseInput").value;

  exercises.push(exercise);
  updateExerciseList();

  // Clear input field
  document.getElementById("exerciseInput").value = "";
}

function addFood() {
  const food = document.getElementById("foodInput").value;

  foods.push(food);
  updateFoodList();

  // Clear input field
  document.getElementById("foodInput").value = "";
}

function addMeditation() {
  const meditation = document.getElementById("meditationInput").value;

  meditations.push(meditation);
  updateMeditationList();

  // Clear input field
  document.getElementById("meditationInput").value = "";
}

function updateMedicationList() {
  const medicationList = document.getElementById("medicationList");
  medicationList.innerHTML = "";

  medications.forEach((medication) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${medication.name} - ${medication.time}`;
    medicationList.appendChild(listItem);
  });
}

function updateBloodPressureList() {
  const bloodPressureList = document.getElementById("bloodPressureList");
  bloodPressureList.innerHTML = "";

  bloodPressureReadings.forEach((reading) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Patient: ${reading.name}, Systolic: ${reading.systolic}, Diastolic: ${reading.diastolic}`;
    bloodPressureList.appendChild(listItem);
  });
}

function updateExerciseList() {
  const exerciseList = document.getElementById("exerciseList");
  exerciseList.innerHTML = "";

  exercises.forEach((exercise) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = exercise;
    exerciseList.appendChild(listItem);
  });
}

function updateFoodList() {
  const foodList = document.getElementById("foodList");
  foodList.innerHTML = "";

  foods.forEach((food) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = food;
    foodList.appendChild(listItem);
  });
}

function updateMeditationList() {
  const meditationList = document.getElementById("meditationList");
  meditationList.innerHTML = "";

  meditations.forEach((meditation) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = meditation;
    meditationList.appendChild(listItem);
  });
}
