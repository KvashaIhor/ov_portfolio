import './Aboutsection.scss';

export const Aboutsection = () => {
    return (
    <>
    <section className="join">
        <section className="about">
        <div className="about__title">
            <h1 className="about__title-writing">ABOUT ME</h1>
        </div>
        <p className="about__description">
        My name is Olena, and I’m a photographer with an artistic approach.<br/>Each of my shots is not just a photo, but a story that will stay with you forever.
        </p>
        <div className="about__photographer"></div>
        <p className="about__years">
            <span className="about__years-number">10</span>
            <span className="about__years-caption">years of experience</span>
        </p>
        </section>
        <div className="what">
        <h1 className="main-title">WHAT DO I BRING?</h1>
        
        <div className="grid">
            <div className="grid-item">
                <div className="item-number">01</div>
                <div className="item-title">AUTHOR'S PROCESSING</div>
                <div className="item-description">Color correction and retouching are included in the cost of shooting</div>
            </div>
            
            <div className="grid-item">
                <div className="item-number item-number-moving">02</div>
                <div className="item-title">INDIVIDUAL APPROACH</div>
                <div className="item-description">For me it's important that every client gets exactly what they want</div>
            </div>
            
            <div className="grid-item">
                <div className="item-number">03</div>
                <div className="item-title">MEETING DEADLINES</div>
                <div className="item-description">I prepare materials in advance and meet deadlines</div>
            </div>
            
            <div className="grid-item">
                <div className="item-number item-number-moving">04</div>
                <div className="item-title">MODERN EQUIPMENT</div>
                <div className="item-description">I work with professional equipment and studio</div>
            </div>

            <div className="grid-item grid-item-5">
            <div className="item-number">05</div>
                <div className="item-title">CREATING ATMOSPHERE</div>
                <div className="item-description">My clients are filled with their atmosphere and emotions</div>
            </div>
        </div>
        
        <div className="grid-2">
            <div className="grid-item full-width">
                <div className="item-number">05</div>
                <div className="item-title">CREATING ATMOSPHERE</div>
                <div className="item-description">My clients are filled with their atmosphere and emotions</div>
            </div>
        </div>
    </div>
  </section>
  </>
    )
}