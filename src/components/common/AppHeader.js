// import { Menu } from "antd";
import { Anchor } from "antd";
const { Link } = Anchor;
const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          {" "}
          <i className="fab fa-airbnb"></i>{" "}
          <a href="http://localhost:3000/">Demo</a>{" "}
        </div>
        {/* <Menu mode="horizontal" defaultSelectedKeys={["Home"]}>
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="About">About</Menu.Item>
          <Menu.Item key="Features">Features</Menu.Item>
          <Menu.Item key="HowItWork">How It Work</Menu.Item>
          <Menu.Item key="FAQ">FAQ</Menu.Item>
          <Menu.Item key="Pricing">Pricing</Menu.Item>
          <Menu.Item key="Contact">Contact</Menu.Item>
        </Menu> */}
        <Anchor targetOffset="65">
          <Link href="#Hero"   title="Home"/>
          <Link href="#About" title="About"/>
          <Link href="#Features" title="Features"/>
          <Link href="#Work" title="How It Work"/>
          <Link href="#FAQ" title="FAQ"/>
          <Link href="#Price" title="Pricing"/>
          <Link href="#Contact" title="Contact"/>
         

        </Anchor>
      </div>
    </div>
  );
};
export default AppHeader;
