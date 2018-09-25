import React from 'react';

import './AnotherExample.scss';

function AnotherExample({ name = 'jaebaebae' }) {
	return (
		<div className="another-example">This is another example by {name}</div>
	);
}

export default AnotherExample;
