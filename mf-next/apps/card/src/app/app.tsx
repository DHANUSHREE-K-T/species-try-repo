
import { Card, CardHeading,CardBody,CardFieldset,ContentBox,CardKey,CardValue
 } from './styledCard';

export function App() {
  return (
    <Card>
      <img
        src="https://www.w3schools.com/css/img_5terre.jpg"
        alt="5 Terre"
        width="100%"
        height="50%"
            />
      <CardHeading>
        <h2>Card</h2>
        <small>Id:111, created 2 years ago</small>
      </CardHeading>
      <CardBody>
            <CardFieldset>
              <ContentBox>
                <CardKey>Statusssssssssssssssssssss</CardKey>
                <CardValue>CardValueeeeeeeeeeeeeeeee</CardValue>
              </ContentBox>
            </CardFieldset>
            <CardFieldset>
              <ContentBox>
                <CardKey>Species</CardKey>
                <CardValue>CardValue</CardValue>
              </ContentBox>
            </CardFieldset>
            <CardFieldset>
              <ContentBox>
                <CardKey>Gender</CardKey>
                <CardValue>CardValue</CardValue>
              </ContentBox>
            </CardFieldset>
            <CardFieldset>
              <ContentBox>
                <CardKey>Origin</CardKey>
                <CardValue>CardValue</CardValue>
              </ContentBox>
            </CardFieldset>
            <CardFieldset>
              <ContentBox>
                <CardKey>Last Location</CardKey>
                <CardValue>CardValue</CardValue>
              </ContentBox>
            </CardFieldset>
          </CardBody>
    </Card>
  );
}

export default App;
