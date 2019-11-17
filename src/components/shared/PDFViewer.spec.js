import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import PDFViewer from './PDFViewer';

describe('PDFViewer', () => {
  beforeEach(() => {});

  it('should render', () => {
    const props = {
      url: '../../images/wireframes/Oddjobdashboard.pdf',
      id: 123
    };
    const wrapper = mount(
      <Router>
        <PDFViewer {...props} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot(wrapper);
  });
});
