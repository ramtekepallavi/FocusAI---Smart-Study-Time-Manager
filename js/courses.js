// Course Data
let courses = [
  {name: "Mathematics", category: "Academic", desc: "Algebra, Geometry basics"},
  {name: "Science", category: "Academic", desc: "Physics and Chemistry concepts"},
  {name: "Programming", category: "Technical", desc: "HTML, CSS, JavaScript"},
  {name: "Time Management", category: "Skill", desc: "Improve productivity"},
  {name: "AI Basics", category: "Technical", desc: "Introduction to AI"},
  {name: "Communication Skills", category: "Skill", desc: "Improve speaking skills"}
];

// Display Courses
function displayCourses(data) {
  let container = document.getElementById("courseList");
  container.innerHTML = "";

  if(data.length === 0){
    container.innerHTML = "<p>No courses found</p>";
    return;
  }

  data.forEach((course, index) => {
    container.innerHTML += `
      <div class="bg-white p-4 shadow rounded hover:shadow-lg transition">
        <h3 class="font-bold text-lg">${course.name}</h3>
        <p class="text-gray-600 mt-1">${course.desc}</p>
        <span class="text-sm text-blue-600">${course.category}</span>

        <div class="mt-3 flex justify-between items-center">
          <button onclick="enrollCourse(${index})"
            class="bg-green-500 text-white px-3 py-1 rounded">
            Enroll
          </button>

          <button onclick="viewCourse('${course.name}')"
            class="bg-blue-500 text-white px-3 py-1 rounded">
            View
          </button>
        </div>
      </div>
    `;
  });
}

// Search
function searchCourse() {
  let search = document.getElementById("search").value.toLowerCase();

  let filtered = courses.filter(c =>
    c.name.toLowerCase().includes(search)
  );

  displayCourses(filtered);
}

// Filter
function filterCategory(category) {
  if(category === "All"){
    displayCourses(courses);
    return;
  }

  let filtered = courses.filter(c => c.category === category);
  displayCourses(filtered);
}

// Enroll
function enrollCourse(index) {
  let enrolled = JSON.parse(localStorage.getItem("enrolled")) || [];

  enrolled.push(courses[index]);

  localStorage.setItem("enrolled", JSON.stringify(enrolled));

  alert("Enrolled Successfully 👍");
}

// View Course Details
function viewCourse(name) {
  alert("Opening " + name + " course 📚");
}

// Load on start
displayCourses(courses);