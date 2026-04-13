function enrollCourse(btn) {
  btn.innerText = "Enrolled ✅";
  btn.classList.remove("bg-yellow-400");
  btn.classList.add("bg-green-500", "text-white");
}

function deleteCourse(btn) {
  const card = btn.closest(".course-card");
  card.remove();
}