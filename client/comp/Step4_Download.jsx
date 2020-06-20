// node packages
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// css style
import { Button } from 'react-bootstrap'
import { StepIcon, SingleStepContainer } from './style.jsx';

export default function Step4_Download({ step, pageControlOnClick }) {
  let iconTheme = (step === 4) ? "material-icons" : "material-icons-outlined";

  let downloadOnClick = () => {
    axios.get('/api/v1/file')
      .then(() => {
        window.open('/api/v1/file');
        pageControlOnClick();
      })
      .catch((e) => console.log(e));
  }

  return (
    <SingleStepContainer>
      <h5><StepIcon className={iconTheme} instList={true}>looks_4</StepIcon>Download File</h5>
      <Button variant="outline-info" size="sm" onClick={downloadOnClick}>Download File</Button>
    </SingleStepContainer>
  );
}

Step4_Download.propTypes = {
  step: PropTypes.number,
  pageControlOnClick: PropTypes.func
}