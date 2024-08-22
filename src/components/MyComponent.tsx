import { DButton, DIcon, DInput, DInputSelect, DStepper } from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useState } from 'react';

export default function MyComponent() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (

    <div>

      {currentStep < 4 && (
        <div>
          <h1> Account Setup </h1>
          <DStepper
            currentStep={currentStep}
            options={[
              {
                label: 'What is your name?',
                value: 1,
              },
              {
                label: 'Your email',
                value: 2,
              },
              {
                label: 'Account profile',
                value: 3,
              },
            ]}
            vertical
          />
        </div>

      )}

      {currentStep === 1 && (
        <div>
          <DInput label="Name" placeholder="Your name here" />
          <DButton onClick={nextStep} text="Next" className={classNames('mt-4')} />
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <DInput label="Email" />
          <DButton onClick={nextStep} text="Next" className={classNames('mt-4')} />
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <DInputSelect
            hint="Define your profile based on your needs"
            id="companyProfile"
            label="Account profile"
            options={[
              {
                label: 'Person',
                value: '1',
              },
              {
                label: 'Company',
                value: '2',
              }
            ]}
          />
          <DButton onClick={nextStep} text="Finish" className={classNames('mt-4')} />
        </div>
      )}

      {currentStep === 4 && (

        <div className="text-center">
          <DIcon icon="check" size="50px" theme="success" hasCircle />
          <h2>Account ready! </h2>
          <p>You can start working now.</p>
        </div>
      )}

    </div>
  );
}
