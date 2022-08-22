import { render } from "@testing-library/react";
import React from "react";
import "../css/stories.css";

const articles = [
    {
        "hed":"Office of Cultural Affairs adopts new arts funding process",
        "led":"The new formula will help to better align funding amounts with what organizations request, Office of Cultural Affairs manager Sarah Dresser said.",
        "href":'https://www.columbiamissourian.com/news/local/office-of-cultural-affairs-adopts-new-arts-funding-process/article_2ccc495c-f4e7-11e7-ae1a-cb15d53ff9e1.html'
    },
    {
        "hed":"'Car Santa' keeps veterans on the road this Christmas season",
        "led":"Cars 4 Heroes surprised a veteran with a car at Logboat Brewing Company Thursday night.",
        "href":'https://www.columbiamissourian.com/news/local/car-santa-keeps-veterans-on-the-road-this-christmas-season/article_c515af64-e6c3-11e7-b36b-cbbefe219d80.html'
    },
    {
        "hed":"Moonshine and Moon Speck are on tap for the eclipse",
        "led":"Local businesses are commemorating the eclipse with commemorative beer and moonshine.",
        "href":'https://www.columbiamissourian.com/news/local/moonshine-and-moon-speck-are-on-tap-for-the-eclipse/article_e9ff941c-82bd-11e7-8c3e-b320dfdeebbc.html'
    },
    {
        "hed":"Whitegate residents receptive to possible neighborhood park",
        "led":"Resident Ryan Welch said the park would help keep kids off the street and give them a place to hang out with one other.",
        "href":'https://www.columbiamissourian.com/news/local/whitegate-residents-receptive-to-possible-neighborhood-park/article_d399918c-ec26-11e7-a217-9fdf5bd9131a.html'
    },
    {
        "hed":"Gift 4 Gun Exchange collects more guns than expected",
        "led":"Event organizer Cory Crosby said the event, which collected 41 guns, was a success.",
        "href":'https://www.columbiamissourian.com/news/local/gift-gun-exchange-collects-more-guns-than-expected/article_e3afd786-e440-11e7-be0e-97a341460881.html'
    },
    {
        "hed":"ECLIPSE: Classroom lessons transfer to first-hand experience for Grant students",
        "led":"Because their school is the site of construction, the Grant students watched the total solar eclipse from the Aslin Administration Building",
        "href":'https://www.columbiamissourian.com/news/k12_education/eclipse-classroom-lessons-transfer-to-first-hand-experience-for-grant/article_ebe3edaa-86be-11e7-8621-d72fe3e6d8ad.html'
    },{
        "hed":"Volunteer hours up 20 percent in fiscal year 2017",
        "led":"Volunteers contributed more than $1 million worth of service. The removal of invasive species was among the most popular activities.",
        "href":'https://www.columbiamissourian.com/news/local/volunteer-hours-up-percent-in-fiscal-year/article_157e5822-e762-11e7-9ab0-93fe334e8df5.html'
    },
    {
        "hed":"Brianna Lennon announces candidacy for Boone County clerk",
        "led":"Lennon, a Democrat, announced her candidacy Wednesday. She was recommended for the clerk's position last year after Wendy Noren's retirement, but Gov. Greitens appointed Republican Taylor Burks.",
        "href":'https://www.columbiamissourian.com/news/local/brianna-lennon-announces-candidacy-for-boone-county-clerk/article_25b7fc9a-f6fb-11e7-842e-7f7689798249.html'
    },
    {
        "hed":"MU campus climate survey results to be shared in public meetings",
        "led":"The survey measured current attitudes, behaviors, standards and practices of employees and students. It was conducted a year ago at all four University of Missouri System campuses.",
        "href":'https://www.columbiamissourian.com/news/higher_education/mu-campus-climate-survey-results-to-be-shared-in-public/article_4f0a8ca4-8e8f-11e7-92fa-2b2546e11b7c.html'
    },
    {
        "hed":"Missouri Task Force 1 expected to leave Texas on Tuesday",
        "led":"The force is expected to return home Wednesday or Thursday after spending 11 days helping rescue operations in the wake of Hurricane Harvey.",
        "href":'https://www.columbiamissourian.com/news/local/missouri-task-force-expected-to-leave-texas-on-tuesday/article_9bd0c2ba-91a5-11e7-8d96-e3c8c2799546.html'
    },
    {
        "hed":"Flu shots now available through Public Health clinic",
        "led":"The Columbia/Boone County Department of Public Health and Human Services is offering flu shots now. For children up to 18, the vaccine is free.",
        "href":'https://www.columbiamissourian.com/news/local/flu-shots-now-available-through-public-health-clinic/article_98d48050-9ca5-11e7-9b27-fb2e3726ae3c.html'
    },
    {
        "hed":"Runge Nature Center offers holiday event",
        "led":"Visitors will have the chance to explore how wild animals build their homes through crafts and activities.",
        "href":'https://www.columbiamissourian.com/news/local/runge-nature-center-offers-holiday-event/article_0164e8f6-e429-11e7-b126-8fe5171a48b5.html'
    },
    {
        "hed":"Boone County Sheriff's Deputy receives award for saving a 2-year-old girl",
        "led":"Deputy Trenton Marshall-Isom received the award and said he hoped that anyone in his situation would do the same thing.",
        "href":'https://www.columbiamissourian.com/news/local/boone-county-sheriff-s-deputy-receives-award-for-saving-a/article_9f8571fc-e69c-11e7-8bd3-132ee7e3135f.html'
    },
    {
        "hed":"Local parks open for ice skating, fishing",
        "led":"Stephens Lake and Cosmo-Bethel Park Lake reached the minimum ice depth of 4 inches and will remain open until temperatures increase and the ice depth decreases.",
        "href":'https://www.columbiamissourian.com/news/local-parks-open-for-ice-skating-fishing/article_d0d3b7de-efe6-11e7-bf2e-db64da3184e7.html'
    },
    {
        "hed":"Department of Conservation earns sustainable forestry certification",
        "led":"The Sustainable Forestry Initiative, a nonprofit organization that promotes sustainable forest management in North America, awarded the certificate.",
        "href":'https://www.columbiamissourian.com/news/local/department-of-conservation-earns-sustainable-forestry-certification/article_a4da4a96-e427-11e7-8b64-33a4c7e14553.html'
    },
    {
        "hed":"Snow is not in the forecast for Christmas Day",
        "led":"Forecasts predict a dry, if cold, Christmas but a snowy Christmas Eve.",
        "href":'https://www.columbiamissourian.com/news/local/snow-is-not-in-the-forecast-for-christmas-day/article_c45d7a86-e5b8-11e7-8095-bb913992d086.html'
    },
    {
        "hed":"Jim Spain picked as MU's interim provost",
        "led":"Dr. Spain will begin serving as interim provost on Feb. 1 and will return to his current position when a new provost is selected.",
        "href":'https://www.columbiamissourian.com/news/local/jim-spain-picked-as-mu-s-interim-provost/article_b7fc8428-e692-11e7-be29-e37ee394d7ab.html'
    },
    {
        "hed":"Kristen Palmer announced as principal recommendation for Two Mile Prairie Elementary",
        "led":"The Columbia School Board is expected to approve the recommendation later this month, district spokeswoman Michelle Baumstark said.",
        "href":'https://www.columbiamissourian.com/news/k12_education/kristen-palmer-announced-as-principal-recommendation-for-two-mile-prairie/article_efc1e186-f58e-11e7-9497-d7b561f5fd76.html'
    }
];

const Story = (props)=>{
    return (
        <div className = "story">
                <div className = "title">
                    <a className = "storylink" href = {props.href}> {props.hed}</a>
                </div>
                <div className = "led">
                    <p>{props.led}</p>
                </div>
                
            </div>
    );
}

const Stories = () =>{
    return (
        <div className="main">
            <div className = "page-intro">
                <p className="title">I was also a reporter for Columbia Missourian, a local newspaper that has been serving its community for more than 100 years. </p>
                <p>As a general assignment reporter, I covered all sorts of news, from an Eclipse {String.fromCodePoint("0x1F31D")}
            {String.fromCodePoint("0x1F31A")} to a local beer that offered a sip of a meteorite {String.fromCodePoint("0x1F37A")}
            {String.fromCodePoint("0x1F31F")} .</p>
            </div>

            <div className = "stories">
                {articles.map((a)=>{
                    return <Story href = {a.href} hed = {a.hed} led = {a.led}/>
                })}
            </div>
        </div>

        
    )
}

export default Stories;