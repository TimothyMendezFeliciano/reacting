import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import AxolotlPage from "./pages/axolotl";
import PokemonPage from "./pages/Pokemons";
import Home from "./pages/home";
import { Container, Row } from "react-bootstrap";
import TutorialCard from "./components/ui/TutorialCard";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Switch>
            <Route path="/" exact={true}>
              <TutorialCard>
                <Home></Home>
              </TutorialCard>
            </Route>
            <Route path="/axolotl">
              <AxolotlPage></AxolotlPage>
            </Route>
            <Route path="/pokemon">
              <PokemonPage></PokemonPage>
            </Route>
          </Switch>
        </Row>
      </Container>
    </Layout>
  );
}

export default App;
