import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Rating from './Rating';
import styles from './styles.module.css';

describe('<Rating />', function () {
	it('fills the percentage as style', () => {
		let wrapper = shallow(<Rating percentage={0.10} />)
		expect(wrapper.find(`.${styles.top}`))
	});
	it('renders bottom and top star meters')
});