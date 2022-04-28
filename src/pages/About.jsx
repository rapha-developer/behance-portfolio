import Header from "../components/Header"
import Poster from "../components/Poster"

function About() {
    return (
        <section className="about">
            <Header />
            <Poster title="About us" />
            
            {/* <div className="about__head">
                <div className="about__introduction">
                    <span className="about__component--left"></span>
                    <h1 className="about__title">about us</h1>
                    <span className="about__component--right"></span>
                </div>
                <p className="about__history">Home ~ About Us</p>
            </div> */}


            <div className="about__body">
                <div className="container">
                    <div className="profile__row">
                        <div className="profile__column profile__column--info">
                            <h2 className="profile__title">hello world!</h2>
                            <h3 className="profile__name">I'm a leonard</h3>
                            <p className="profile__desc">I’m a web designer / developer based on envato. I have a passion for web design and love to create for web and mobile devices.</p>

                            <div className="skills__item">
                                <h4 className="skills__title">ux/ui design</h4>
                            </div>
                        </div>
                        <div className="profile__column">
                            <img src="http://themes.g5plus.net/orion/minimal-portfolio/wp-content/uploads/2016/10/portfolio-minimal-04-570x780.jpg" alt="" />
                        </div>
                    </div>
                </div>

            <div className="profile__stats">
                <div className="stats__item">
                    <h3 className="stats__number">90 +</h3>
                    <p className="stats__category">user follow</p>
                </div>
                <div className="stats__item">
                    <h3 className="stats__number">120 +</h3>
                    <p className="stats__category">happy clients</p>
                </div>
                <div className="stats__item">
                    <h3 className="stats__number">50 +</h3>
                    <p className="stats__category">web awards</p>
                </div>
                <div className="stats__item">
                    <h3 className="stats__number">240 +</h3>
                    <p className="stats__category">cups of coffe</p>
                </div>
            </div>
            
            </div>


            
        </section>
    )
}
export default About