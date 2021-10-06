/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

const App = () => {
	return (
		<div
			css={{
				backgroundColor: "red",
				"&:hover": {
					color: "yellow",
				},
			}}
		>
			this is the home page
		</div>
	);
};

export default App;
