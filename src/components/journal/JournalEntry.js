import React from "react";

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: "cover",
					backgroundImage:
						"url(https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop)",
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">a new day</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.
				</p>
			</div>
			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
