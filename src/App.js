import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-total">
          <header className="App-header">
            <div className="bar">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="navbar">
              <div className="title">
                <p className="title-front">Lingo</p>
                <p className="title-end">|Language school</p>
              </div>
              <div className="link">
                <div>Home</div>
                <div>Our School</div>
                <div>Fees</div>
                <div>Book a Class</div>
              </div>
            </div>
          </header>
          <main className="main">
            <div className="slogan">
              <div className="slogan-space"></div>
              <div className="slogan-text">
                <p className="slogan-text-big">Those who know nothing of foreign languages,
                know nothing of their own.”</p>
                <p className="slogan-text-small">Johann Wolfgang von Goethe</p>
              </div>
              <div className="slogan-space"></div>
            </div>

            <div className="many-block">
              <div className="level1">
                <div className="level1-left">
                  <div className="level1-left1">About</div>
                  <div className="level1-left2">
                    <span className="text-title">About</span><br /><br />
                    <span>I'm a paragraph, Click here to add your own text and edit me. 
                      I'm a great place for you to tell a story and let your users know a little  more about you.</span>
                  </div>
                </div>
                <div className="level1-right">
                  <div className="level1-right1">Study at any level, from beginner to export.</div>
                  <div className="level1-right2">
                    <span className="text-title">Classes</span><br /><br />
                    <span>I'm a paragraph, Click here to add your own text and edit me. 
                      I'm a great place for you to tell a story and let your users know a little  more about you.</span>
                  </div>
                </div>
              </div>
              <div className="level2"></div>
            </div>

          </main>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;
