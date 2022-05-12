/*global chrome*/
import { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
	//-- State that holds the URL
	const [url, setUrl] = useState("");

	//-- Use the Chrome API to get the URL of the active tab.
	useEffect(() => {
		chrome.tabs.query({ currentWindow: true, active: true }, function(
			tabs
		) {
			//-- Set the URL to the state variable holding the URL
			setUrl(tabs[0].url);
		});
	}, []);
	return (
		<div className="App">
			<h1>Boilerplate!</h1>
			<Button
				variant="outlined"
				onClick={() => {
					navigator.clipboard.writeText(url);
				}}
			>
				Copy Sharable URL
			</Button>
		</div>
	);
}

export default App;
