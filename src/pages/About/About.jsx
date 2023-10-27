import Contacts from 'components/Contacts/Contacts';
import Education from 'components/Education/Education';
import Hard from 'components/Hard/Hard';
import Languages from 'components/Languages/Languages';
import Soft from 'components/Soft/Soft';
import Summary from 'components/Summary/Summary';
import Work from 'components/Work/Work';

const About = () => {
  return (
    <>
      <h1>Hi this is page About</h1>
      <Summary />
      <Work />
      <Education />
      <Contacts />
      <Hard />
      <Soft />
      <Languages />
    </>
  );
};

export default About;
