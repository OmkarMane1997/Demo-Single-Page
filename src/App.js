import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import AppFooter from "./components/common/AppFooter";
import AppHeader from "./components/common/AppHeader";
import Home from "./viwes/Home";
const { Header, Content,Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
