import React from 'react';

import './AnExample.scss';

function AnExample({ name = 'jaebaebae' }) {
	return <div className="an-example">This is an example by {name}</div>;
}

export default AnExample;
