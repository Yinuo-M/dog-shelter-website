import dogList from "./dogs.js";

//ANCHOR homepage background images

//ANCHOR buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
	button.addEventListener("mousedown", cancelDefault)
);

function cancelDefault(e) {
	e.preventDefault();
}

//ANCHOR list page dog profiles
let listStatus = {
	done: false,
	index: 0,
	itemsPerPage: 5,
};

function populatePage(list) {
	const startIndex = listStatus.index;
	const endIndex = listStatus.index + listStatus.itemsPerPage;
	const displayList = list.slice(startIndex, endIndex);

	displayList.forEach((dog) => {
		const previewList = document.getElementById("dogs");
		const index = dog.index + 1;
		const html = `
		<li class="dog-preview">
		<img
			width="200"
			height="200"
			src="../../assets/dogs/dog${index}/profile${index}.jpg"
			alt=${dog.alt};
		/>
		<ul class="info-list">
			<li class="location">${dog.location}</li>
			<li class="name">${dog.name}</li>
			<div class="info-wrapper">
				<li class="other-info">
					<span class="other-label">Age:</span> ${dog.age}
				</li>
				<li class="other-info">
					<span class="other-label">Breed:</span> ${dog.breed}
				</li>
			</div>
		</ul>
	</li>
		`;

		previewList.insertAdjacentHTML("beforeend", html);
	});

	if (list.length === endIndex) {
		listStatus.done = true;
	} else {
		listStatus.done = false;
	}
	listStatus.index += listStatus.itemsPerPage - 1;
}

populatePage(dogList);

const loadButton = document.querySelector(".load-more-button");
