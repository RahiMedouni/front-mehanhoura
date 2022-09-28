import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

  // <div>
  //   <AnchorLink href='#things'>Things</AnchorLink>
  //   <AnchorLink href='#stuff'>Stuff</AnchorLink>

  //   <section id='things'>
  //     <h2>Things</h2>
  //   </section>
  //   <section id='stuff'>
  //     <h2>Stuff</h2>
  //   </section>
  // </div>

function GridExample() {
  return (
    <div>
      {/* <section className='aboutus'>
        <div className='Card'>

        </div>
      </section> */}
          <section style={{
            height: 650,
            backgroundColor: "white",
          }} className="firstsection">
            <div style={{
              backgroundColor: "whitesmoke",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 600,
              width: 1200,
              marginLeft: 70,
              border: '2px solid rgba(0, 0, 0, 0.2)',
            }}>
            <div style={{
        backgroundImage: `url("../mehancover.jpeg")`,
        backgroundSize: "cover",
        marginTop: 100,
        marginBottom: 150,
        marginLeft: 100,
        backgroundRepeat: 'no-repeat',
        width: 600,
        height: 400,
        textAlign: "center",
      }}>
            </div>
            <div style={{
        marginTop: 120,
        marginBottom: 150,
        width: 600,
        height: 400,
        textAlign: "center",
      }}>
            <h1>Sarl Mehan Houra</h1>
            </div>
            </div>
        </section>
          </div>
  );
}

export default GridExample;