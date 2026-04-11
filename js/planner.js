function generatePlan(){
  let subject = document.getElementById("subject").value;
  let hours = document.getElementById("hours").value;

  let plan = `Study ${subject} for ${hours} hours daily`;
  document.getElementById("result").innerText = plan;
}