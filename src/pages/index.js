import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../components/header"
import Contact from "./contact"
import About from "./about"
import Portfolio from "./portfolio"

import '../styles/styles.css'
import Button from 'react-bootstrap/Button'
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

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          content: <Header headerText="Welcome"/>, id: 1,
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

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors,
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });

      return {
        fullpages: [...fullpages],
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
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
          zIndex: 100,
        }}
      >
        <ul className="actions">
          <li>
            <Button variant="primary" onClick={() => this.handleAddSection()}>Add Section</Button>
            <button onClick={() => this.handleRemoveSection()}>
              Remove Section
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Change background colors
            </button>
            <button onClick={() => this.moveSectionDown()}>
              Move Section Down
            </button>
          </li>
        </ul>
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