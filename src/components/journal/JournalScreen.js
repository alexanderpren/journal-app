import React from "react";
import Sidebar from "./Sidebar";
export const JournalScreen = () => {
	return (
		<div className="journal__main-content">
			<Sidebar />
			<div>
				<h1>Main Content</h1>
			</div>
		</div>
	);
};
