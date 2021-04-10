import "./common.css";

//ANCHOR buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
	button.addEventListener("mousedown", cancelDefault)
);

function cancelDefault(e) {
	e.preventDefault();
}

//ANCHOR setting up the service worker

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then((registration) => {
				console.log("SW registered: ", registration);
			})
			.catch((registrationError) => {
				console.log("SW registration failed: ", registrationError);
			});
	});
}

//ANCHOR setting up HMR for the dev server.
if (module.hot) {
	module.hot.accept();
}
