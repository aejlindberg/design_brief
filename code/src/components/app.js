import React from "react"

class App extends React.Component {

  render() {
    return (
<div className="App">
  <div className="navBar">
    <a href=""><span>Home</span></a>
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
        <h2>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we&apos;ve got you covered.</h2>
        <button>Get started</button>
        <button id="whiteButton">Learn more</button>
      </div>
      <img src="/images/medium-image.png" alt="trees and flowers"/>
    </div>

    <div className="grid">

      <div className="gridBox">
        <div className="gridBoxLeft">
          <img src="/images/medium-image-puff-1.jpeg" alt="playground"/>
        </div>
        <div className="gridBoxRight">
          <div className="gridBoxText">
            <h2>The Boy Who Tamed The Sea</h2>
            <p>At 5:30 am, on any morning I can handle it. I&apos;ll slip out of the dark mouth of my covers and creep through the silver light of early...</p>
          </div>
          <div className="writerBox">
            <div className="writerImage">
              <img src="/images/writer-1.png" alt="Carl Moore" />
            </div>
            <div className="writerText">
              <p>Carl Moore<br></br><span>Oct 27 &ensp; 8 min read</span></p>
            </div>
          </div>
          <div className="writerBookmark">
            <img src="/images/bookmark.png" alt="bookmark icon" />
          </div>
        </div>
      </div>

      <div className="gridBox">
        <div className="gridBoxLeft">
          <img src="/images/medium-image-puff-2.png" alt="transport"/>
        </div>
        <div className="gridBoxRight">
          <div className="gridBoxText">
            <h2>The Role of Human Emotions in the Future of Transport</h2>
            <p>Getting from A to B is about to feel very different</p>
          </div>
          <div className="writerBox">
            <div className="writerImage">
              <img id="writer" src="/images/writer-2.jpeg" alt="Ben Bland" />
            </div>
            <div className="writerText">
              <p>Ben Bland<br></br><span>Nov 1 &ensp; 7 min read</span></p>
            </div>
          </div>
          <div className="writerBookmark">
            <img id="bookmark" src="/images/bookmark.png" alt="bookmark icon" />
          </div>
        </div>
      </div>

      <div className="gridBox">
        <div className="gridBoxLeft">
          <img src="/images/medium-image-puff-4.jpeg" alt="The march of the losers"/>
        </div>
        <div className="gridBoxRight">
          <div className="gridBoxText">
            <h2>The March of the Losers</h2>
            <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king</p>
          </div>
          <div className="writerBox">
            <div className="writerImage">
              <img id="writer" src="/images/writer-3.jpeg" alt="Henry Wismayer" />
            </div>
            <div className="writerText">
              <p>Henry Wismayer<br></br><span>Nov 10 &ensp; 8 min read</span></p>
            </div>
          </div>
          <div className="writerBookmark">
            <img id="bookmark" src="/images/bookmark.png" alt="bookmark icon" />
          </div>
        </div>
      </div>

      <div className="gridBox">
        <div className="gridBoxLeft">
          <img src="/images/medium-image-puff-3.png" alt="The Burning Season"/>
        </div>
        <div className="gridBoxRight">
          <div className="gridBoxText">
            <h2>The Burning Season</h2>
            <p>You cannot save everything when the fires come to Northern California</p>
          </div>
          <div className="writerBox">
            <div className="writerImage">
              <img id="writer" src="/images/writer-4.jpeg" alt="Lindsey Smith" />
            </div>
            <div className="writerText">
              <p>Lindsey Smith<br></br><span>Nov 9 &ensp; 31 min read</span></p>
            </div>
          </div>
          <div className="writerBookmark">
            <img id="bookmark" src="/images/bookmark.png" alt="bookmark icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
}

export default App
