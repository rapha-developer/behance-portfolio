import Banner from "../components/Banner"
import ContactInfo from "../components/ContactInfo"
import Footer from "../components/Footer/Footer"
import Blogs from "../components/Grid/Blogs"
import Gallery from "../components/Grid/Gallery"
import Posts from "../components/Grid/Posts"
import LocationMap from "../components/LocationMap"
import Poster from "../components/Poster"
import ProgressBar from "../components/ProgressBar"
import Subject from "../components/Subject"

function Home() {
    const posterData = {
        title: "home section page",
        subtitle: "home"
    }
    const contact = {
        intro: "contact us",
        title: "get in touch",
        contactList: [
            { type: "Email", icon: "fa-regular fa-paper-plane", value:"info.contact@gmail.com" },
            { type: "Phone", icon: "fa-brands fa-github", value: "(00) 123 456 789" },
            { type: "Address", icon: "fa-brands fa-codepen", value: "40 Bacia Street 133/2 NewYork City, US" },
        ]
    }
    const subject = {
        intro: "heLLo woRld!",
        title: "we are agency",
        text: "I’m a web designer / developer based on en-va-to. I have a passion for web design and love to create for web and mobile devices.",
    }
    const progress = [
        {
            label: 'photoShop',
            percent: '90'
        },
        {
            label: 'development',
            percent: '95'
        },
        {
            label: 'design',
            percent: '85'
        },
    ]
    const banner = {
        title: "our blogs",
        subtitle: "latest from"
    }
    const blogs = [
        {
            id: "12345",
            date: "nOvEMbeR 9, 2016",
            title: "Top 3 best Commerce Websites in 2016",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco. Using effective strategies and innovative creative thinking",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/post-04-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/minimum-deterruisset/"
        },
        {
            id: "12346",
            date: "nOvEMbeR 4, 2016",
            title: "Difference between art and design",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco. Using effective strategies and innovative creative thinking",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/10/gallery2-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/per-prima-denique/"
        },
    ]
    const gallery = [
        {
            id: "23456",
            title: "Minimum agostinho",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_07.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/minimum-deterruisset/"
        },
        {
            id: "23457",
            title: "Per prima heart",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_02.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/per-prima-denique/"
        },
        {
            id: "23458",
            title: "Habeas corpus",
            image: "http://themes.g5plus.net/orion/creative-business/wp-content/uploads/2016/10/portfolio_business_05.jpg",
            tags: "Capital",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/habeo-quodsi/"
        },
    ];
    const posts = [
        {
            id: "34567",
            date: "nOvEMbeR 9, 2016",
            title: "Top 3 best Commerce Websites in 2016",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/09/post-04-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/minimum-deterruisset/"
        },
        {
            id: "34568",
            date: "nOvEMbeR 9, 2016",
            title: "The 10 best Web design in November",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-02-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/per-prima-denique/"
        },
        {
            id: "34569",
            date: "nOvEMbeR 8, 2016",
            title: "The 10 best Web design in November",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-03-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/habeo-quodsi/"
        },
        {
            id: "34670",
            date: "nOvEMbeR 7, 2016",
            title: "The 10 best new graphic design tools",
            author: "David Butter",
            text: "Founded in 2014, by designers Leonard, OrionStudio is a global brand and design agency with offices in the creative hubs of London and San Francisco.",
            image: "https://themes.g5plus.net/orion/creative-agency/wp-content/uploads/2016/11/blog-04-646x510.jpg",
            url: "http://themes.g5plus.net/orion/creative-business/portfolio/"
        },
    ];
    return (
        <div className="home">
            <Poster title={posterData.title}
                    subtitle={posterData.subtitle}
            />
            <Banner banner={banner} />
            <div className="container">
                <Subject subject={subject} />
                <ProgressBar progressItems={progress} />
                <ContactInfo contact={contact} />
                <LocationMap />
                <Blogs blogs={blogs} />
                <Gallery gallery={gallery} />
                <Posts posts={posts} />
            </div>
            <Footer />
        </div>
    )
}
export default Home