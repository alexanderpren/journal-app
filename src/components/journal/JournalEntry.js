import React from 'react';


export const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: "cover",
					backgroundImage: 'url(https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop)',
				}}
			></div>
		</div>
	);
};


