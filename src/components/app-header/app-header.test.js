import React from 'react';
import {configure, shallow} from 'enzyme';

import AppHeader from './app-header.jsx';

configure({
    adapter: new Adapter()
})

describe('<App/>', () =>{
    it('Should header text', ()=>{
        const wrapper = shallow(<AppHeader/>);
        expect(wrapper.find('.app-header').text()).toEqual('')
    })
})