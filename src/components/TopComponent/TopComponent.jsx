import myPhoto from '../../images/photo.jpg';
import { Ul, H1, P } from './TopComponent.styled';

export const TopComponent = () => {
  return (
    <section className="topComponent">
      <div className="container">
        <Ul>
          <li>
            <img src={myPhoto} alt={`My foto`} width={150} height={200} />
          </li>
          <li>
            <H1>Nikita Kozin</H1>
            <P>Junior FullStack Developer</P>
          </li>
        </Ul>
      </div>
    </section>
  );
};
