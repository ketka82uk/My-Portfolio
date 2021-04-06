import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Welcome from "./welcome"
import Contact from "./contact"
import About from "./about"
import Portfolio from "./portfolio"

import '../styles/styles.scss'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
  * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  */
};

const originalColors = ['#2c497fff', '#e15554ff', '#50b2c0ff', '#f7b801ff'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          content: <Welcome />, id: 1,
        },
        {
          content: <About />, id: 2,
        },
        {
          content: <Portfolio />, id: 3,
        },
        {
          content: <Contact />, id: 4,
        }
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  moveSectionDown() {
    window.fullpage_api.moveSectionDown();
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar-link">
              <Nav.Link href="#welcome">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */

          // Required when using extensions
          pluginWrapper={pluginWrapper}

          // fullpage options
          licenseKey={'4AEC80C9-18894042-B6E03B43-F648E604'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['welcome', 'about', 'portfolio', 'contact']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ content, id }) => (
                <div key={id} className={SEL}>
                  <div>{content}</div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;