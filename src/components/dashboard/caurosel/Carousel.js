import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './Carousel.css';

const useStyles = makeStyles({
  root: {
    Width: 100,
    flexGrow: 1,
    height: 172,
  },
});
export default function DotsMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <MobileStepper
        variant='dots'
        steps={0}
        position='static'
        activeStep={activeStep}
        className={classes.root}
        className='height'
        nextButton={
          <>
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          </>
        }
        backButton={
          <>
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
            <div className='carousel'>
              <div>
                <div className='featured'>Featured</div>
                <div className='learn'>
                  Learn how to value your contributions
                </div>
              </div>
              <div>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud dolore magna ali.
                </p>
                <a href='#'>Learn More&nbsp;&rarr;</a>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
