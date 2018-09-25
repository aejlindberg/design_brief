import React from "react"

class App extends React.Component {

  render() {
    return (
<div className="App">
  <div className="navBar">
    <a href="">Home</a>
    <a href="">Technology</a>
    <a href="">Creativity</a>
    <a href="">Entrepreneurship</a>
    <a href="">Self</a>
    <a href="">Culture</a>
    <a href="">Digital design</a>
    <a href="">Popular on Medium</a>
    <a href="">Politics</a>
    <a href="">More</a>
    <button>Get started</button>
  </div>

  <div className="mainContainer">
    <div className="topBox">
      <div className="topBoxText">
      <h1>Interesting ideas that set your mind in motion.</h1>
      <h2>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we´ve got you covered.</h2>
      <button>Get started</button>
      <button>Learn more</button>
      </div>
      <img src="/images/medium-image.png" alt="trees and flowers"/>
    </div>

    <div className="grid">
      <div className="gridBox">
        <img src="/images/medium-image-puff-1.jpeg" alt="playground"/>
        <div className="gridBoxText">
          <h2>The Boy Who Tamed The Sea</h2>
          <p>At 5:30 am, on any morning I can handle it. I´ll slip out of the dark mouth of my covers and creep through the silver lig...</p>
        </div>
      </div>

      <div className="gridBox">
        <img src="/images/medium-image-puff-2.png" alt="playground"/>
        <div className="gridBoxText">
          <p>The Role of Human Emotions in the Future of Transport</p>
        </div>
      </div>

      <div className="gridBox">
        <img src="/images/medium-image-puff-4.jpeg" alt="playground"/>
        <div className="gridBoxText">
          <p>The March of the Losers</p>
        </div>
      </div>

      <div className="gridBox">
        <img src="/images/medium-image-puff-3.png" alt="playground"/>
        <div className="gridBoxText">
          <h2>The Burning Season</h2>
          <p>At 5:30 am, on any morning I can handle it. I´ll slip out of the dark mouth of my covers and creep through the silver lig...</p>

        </div>
      </div>

    </div>
  </div>

</div>
    )
  }

}

export default App
