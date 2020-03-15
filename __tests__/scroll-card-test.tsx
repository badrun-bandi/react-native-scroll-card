// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import ScrollCard from '../components/scroll-card/scroll-card';

// import { data } from '../assets/data/data';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create( <ScrollCard title='TEST' data={null} />);
});
