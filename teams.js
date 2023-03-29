const teamLeaderForm = document.getElementById("team-leader-form");
const teamCards = document.getElementById("team-cards");
const teamLeaders = [];

teamLeaderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const middleName = document.getElementById("middle-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const teamPosition = document.getElementById("team-position").value;

  const leaderDetails = {
    firstName,
    middleName,
    lastName,
    email,
    phone,
    gender,
    teamPosition,
    members: [],
  };
  teamLeaders.push(leaderDetails);

  const memberCard = document.createElement("div");
  memberCard.classList.add("member-card");
  memberCard.innerHTML = `
    <h2>Team Leader: ${leaderDetails.firstName} ${leaderDetails.middleName} ${leaderDetails.lastName}</h2>
    <p>Email: ${leaderDetails.email}</p>
    <p>Phone: ${leaderDetails.phone}</p>
    <p>Position: ${leaderDetails.teamPosition}</p>
    <p>Gender: ${leaderDetails.gender}</p>
  `;

  const form = document.createElement("form");
  const memberName = document.createElement("input");
  memberName.placeholder = "Member Name";
  memberName.type = "text";
  memberName.name = "memberName";

  const memberEmail = document.createElement("input");
  memberEmail.placeholder = "Member Email";
  memberEmail.type = "email";
  memberEmail.name = "memberEmail";

  const selectElement = document.createElement("select");
  const inputElements = form.querySelectorAll('input[type="text"]');
  inputElements.forEach((input) => {
    const optionElement = document.createElement("option");
    optionElement.value = input.value;
    optionElement.textContent = input.placeholder;
    selectElement.appendChild(optionElement);
  });
  form.appendChild(memberName);
  form.appendChild(memberEmail);
  form.appendChild(selectElement);

  // add form and select element to the member card
  memberCard.appendChild(form);
  memberCard.appendChild(selectElement);

  // add member card to the team cards container
  teamCards.appendChild(memberCard);

  const memberForm = memberCard.querySelector("form");
  const memberList = document.createElement("ul");
  memberForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const memberName = memberForm.querySelector("#member-name").value;
    const memberEmail = memberForm.querySelector("#member-email").value;
    const memberPhone = memberForm.querySelector("#member-phone").value;

    leaderDetails.members.push({ name: memberName, email: memberEmail, phone: memberPhone });
    const memberItem = document.createElement("li");
    memberItem.textContent = `${memberName} - ${memberEmail} - ${memberPhone}`;
    memberList.appendChild(memberItem);
    memberForm.reset();
  });

  // add member list to the form
  form.appendChild(memberList);
});

