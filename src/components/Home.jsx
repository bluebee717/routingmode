import React from 'react'
import "../Home.css"

const Home = () => {
  return (
    <div className='containers'>
        <div className="heroText">
            <h1 className='heading'>Lorem ipsum dolor sit amet.</h1>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam esse, accusamus ipsum nisi asperiores incidunt laboriosam illum facilis veniam eveniet excepturi ut doloribus quasi. Officiis numquam molestiae voluptas quae consequatur.</p>
            <button className="btn btn-success">Click me</button>
        </div>
        <div className="heroImg">
            {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fspacee.jpg&f=1&nofb=1&ipt=3e0e95fcb176e03a79a72acebaaf15e82ca31f8e89f894c232ec1460681e8bbf&ipo=images" alt="hero-image" className='spaceImage' /> */}
        </div>
    </div>
  )
}

export default Home