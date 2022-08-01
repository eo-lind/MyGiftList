import { Card, CardBody, Button } from "reactstrap";
import "./Custom.css"


const Home = () => {

  return (
      <>
          <h2 className="page-header">Welcome to MyGiftList!</h2>
          <div className="home-main-container">
              <Card className="home-card">
                  <CardBody>list gifts</CardBody>
              </Card>
              <Card className="home-card">
                  <CardBody>list recipients</CardBody>
              </Card>
          </div>
      </>
  )
}

export default Home