import { useState } from 'react'
import styles from './styles.module.css'
import ConfigurationStep1 from '../../components/ConfigurationPage/Step1/Step1';
import ConfigurationStep2 from '../../components/ConfigurationPage/Step2/Step2';
import { useNavigate } from 'react-router-dom';

function ConfigurationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const saveChanges = () => {
    navigate('/dashboard')
  };

  return (
    <div className={styles['ConfigurationPage']}>
      {
        currentStep === 1 && (
          <ConfigurationStep1 nextStep={() => setCurrentStep(2)} />
        )
      }
      {
        currentStep === 2 && (
          <ConfigurationStep2 nextStep={() => saveChanges()} />
        )
      }
    </div>
  )
}

export default ConfigurationPage
