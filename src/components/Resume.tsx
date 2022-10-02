import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faEnvelope,
    faLink,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/resume.css';

const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;

const Resume = () => {
    interface ResumeEntryProps {
        company: string;
        position?: string;
        date?: string;
        location?: string;
        link?: {
            url: string;
            text?: string;
        };
        children: JSX.Element | JSX.Element[];
    }

    const ResumeMargin = () => (
        <div className="resume-margin no-mobile">
            <div className="resume-margin-section">
                <div className="title uppercase">
                    {'Contact'}
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">{'E-mail'}</div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">{'Phone'}</div>
                    <FontAwesomeIcon icon={faPhone} />
                    {PHONE_NUMBER}
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">{'Website'}</div>
                    <FontAwesomeIcon icon={faLink} />
                    <a href="https://jamesbaker.site">{'jamesbaker.site'}</a>
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">{'LinkedIn'}</div>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/bakerjm702">{'linkedin.com/in/bakerjm702'}</a>
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">{'GitHub'}</div>
                    <FontAwesomeIcon icon={faGithub} />
                    <a href="https://github.com/bakerj76">{'github.com/bakerj76'}</a>
                </div>
            </div>
            <div className="resume-margin-section">
                <div className="title uppercase">
                    {'Education'}
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">
                        {'University of Nevada, Las Vegas'}
                    </div>
                    <div className="info">{'B.S. in Computer Science'}</div>
                    <div className="info italic">{'Magna cum laude'}</div>
                    <div className="info">{'August 2011 - December 2015'}</div>
                </div>
            </div>
            <div className="resume-margin-section">
                <div className="title uppercase">
                    {'Skills'}
                </div>
                <ul className="info skills-list">
                    <li><span>{'Javascript'}</span></li>
                    <li><span>{'React'}</span></li>
                    <li><span>{'Go'}</span></li>
                    <li><span>{'SQL'}</span></li>
                    <li><span>{'Typescript'}</span></li>
                    <li><span>{'Webpack'}</span></li>
                    <li><span>{'Python'}</span></li>
                    <li><span>{'C#'}</span></li>
                    <li><span>{'Django'}</span></li>
                    <li><span>{'Git'}</span></li>
                    <li><span>{'OpenGL'}</span></li>
                    <li><span>{'Unity'}</span></li>
                </ul>
            </div>
            <div className="resume-margin-section">
                <div className="title uppercase">
                    {'Interests'}
                </div>
                <ul className="info interests-list">
                    <li><span>{'Guitar (18 years)'}</span></li>
                    <li><span>{'Vegan Cooking'}</span></li>
                    <li><span>{'Playing Chess Badly'}</span></li>
                    <li><span>{'Keyboards'}</span></li>
                </ul>
            </div>
        </div>
    );

    const ResumeMobileContact = () => (
        <div className="resume-mobile-contact mobile-only">
            <div className="title uppercase">
                {'Contact'}
            </div>
            <div className="resume-margin-subsection">
                <div className="subtitle uppercase">{'E-mail'}</div>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="resume-margin-subsection">
                <div className="subtitle uppercase">{'Phone'}</div>
                <FontAwesomeIcon icon={faPhone} />
                {PHONE_NUMBER}
            </div>
            <div className="resume-margin-subsection">
                <div className="subtitle uppercase">{'Website'}</div>
                <FontAwesomeIcon icon={faLink} />
                <a href="https://jamesbaker.site">{'jamesbaker.site'}</a>
            </div>
            <div className="resume-margin-subsection">
                <div className="subtitle uppercase">{'LinkedIn'}</div>
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/bakerjm702">{'linkedin.com/in/bakerjm702'}</a>
            </div>
            <div className="resume-margin-subsection">
                <div className="subtitle uppercase">{'GitHub'}</div>
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/bakerj76">{'github.com/bakerj76'}</a>
            </div>
        </div>
    );

    const ResumeMobileSkills = () => (
        <div className="mobile-only">
            <div className="resume-mobile-skills">
                <div className="resume-margin-section">
                    <div className="title uppercase">
                        {'Skills'}
                    </div>
                    <ul className="info skills-list">
                        <li><span>{'Javascript'}</span></li>
                        <li><span>{'React'}</span></li>
                        <li><span>{'Go'}</span></li>
                        <li><span>{'SQL'}</span></li>
                        <li><span>{'Typescript'}</span></li>
                        <li><span>{'Webpack'}</span></li>
                        <li><span>{'Python'}</span></li>
                        <li><span>{'C#'}</span></li>
                        <li><span>{'Django'}</span></li>
                        <li><span>{'Git'}</span></li>
                        <li><span>{'OpenGL'}</span></li>
                        <li><span>{'Unity'}</span></li>
                    </ul>
                </div>
                <div className="resume-margin-section">
                    <div className="title uppercase">
                        {'Interests'}
                    </div>
                    <ul className="info interests-list">
                        <li><span>{'Guitar (18 years)'}</span></li>
                        <li><span>{'Vegan Cooking'}</span></li>
                        <li><span>{'Playing Chess Badly'}</span></li>
                        <li><span>{'Keyboards'}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const ResumeEntry = ({ company, position, date, location, link, children }: ResumeEntryProps) => (
        <div className="entry">
            <div className="header">
                <div className="company">{company}</div>
                {position && (
                    <div className="position">{position}</div>
                )}
                {date && !position && (
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendar} />
                        {date}
                    </div>
                )}
            </div>
            <div className="subheader">
                {location && (
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {location}
                    </div>
                )}
                {date && position && (
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendar} />
                        {date}
                    </div>
                )}
            </div>
            {link && (
                <div>
                    <a href={link.url}>
                        <FontAwesomeIcon icon={faLink} />
                        {link.text}
                    </a>
                </div>
            )}
            {children}
        </div>
    );

    const ResumeBody = () => (
        <div className="resume-body">
            <div id="resume-header" className="uppercase">
                <div>
                    {'James Baker'}
                </div>
                <div id="job-title">
                    {'Full Stack Developer'}
                </div>
            </div>
            <ResumeMobileContact />
            <div className="resume-section">
                <p>
                    {'A dedicated full stack developer with 6 years of experience creating and maintaining real-time web applications for desktop and mobile, '}
                    {'utilizing React, Javascript and Typescript, Go and MySQL/MariaDB. Self-starter with years of experience working remotely. Looking to '}
                    {'learn new technologies and enhance my skills in both backend and frontend development.'}
                </p>
            </div>
            <div className="resume-section">
                <div className="title uppercase">
                    {'Work experience'}
                </div>
                <ResumeEntry
                    company={'Doctype'}
                    position={'Full Stack Developer'}
                    date={'August 2016 - September 2022'}
                    location={'Stolkholm, Sweden (Remote)'}
                >
                    <ul>
                        <li>
                            {'Developed performant, real-time single page web apps for desktop and mobile using React, Javascript/Typescript, Sass/Tailwind CSS, Go, and MySQL/MariaDB.'}
                        </li>
                        <li>
                            {'Created features for and maintained websites such as '}
                            <a href="https://efotboll.se">{'efotboll.se'}</a>
                            {' and '}
                            <a href="https://esportal.se">{'esportal.se'}</a>
                            {', which serviced thousands of concurrent users.'}
                        </li>
                        <li>
                            {'Lead development on '}
                            <a href="https://www.doctype.se/project/gothia-ecup/">{'2018 Gothia eCup'}</a>
                            {' which won the Årets Digitala award (digital of the year) in the Gyllene Hjulet 2018.'}
                        </li>
                        <li>
                            {'Worked with and lead small teams of developers to deliver products and features fast.'}
                        </li>
                        <li>
                            {'Wrote complex algorithms for automatically handling and displaying video game tournaments.'}
                        </li>
                    </ul>
                </ResumeEntry>
                <ResumeEntry
                    company={'UNLV Transportation Research Center'}
                    position={'Software Engineer'}
                    date={'May 2014 - July 2014'}
                    location={'Las Vegas, Nevada'}
                >
                    <ul>
                        <li>
                            {'Utilized Oracle Business Intelligence and SQL to deliver data organized in dashboards.'}
                        </li>
                        <li>
                            {'Collaborated with Nevada Department of Transportation (NDOT) to improve their database.'}
                        </li>
                        <li>
                            {'Trained NDOT employees in Carson City on making dashboards.'}
                        </li>
                    </ul>
                </ResumeEntry>
            </div>
            <div className="resume-section">
                <div className="title uppercase">
                    {'Latest Projects'}
                </div>
                <ResumeEntry
                    company={'This Resume'}
                    date={'October 2022'}
                    link={{ url: 'https://github.com/bakerj76/james-baker', text: 'github.com/bakerj76/james-baker' }}
                >
                    <ul>
                        <li>
                            {'Created using Preact, Typescript, and Vite.'}
                        </li>
                        <li>
                            {'Deployed with DigitalOcean.'}
                        </li>
                    </ul>
                </ResumeEntry>
                <ResumeEntry
                    company={'Trombone Champ Charter'}
                    date={'September 2022'}
                    link={{ url: 'https://github.com/bakerj76/Trombone-Champ-Charter', text: 'github.com/bakerj76/Trombone-Champ-Charter' }}
                >
                    <ul>
                        <li>
                            {'A WYSIWYG charting program for making custom Trombone Champ songs.'}
                        </li>
                        <li>
                            {'Uses C# and Unity.'}
                        </li>
                    </ul>
                </ResumeEntry>
            </div>
            <ResumeMobileSkills />
        </div>
    );

    return (
        <div id="resume">
            <div className="resume-columns">
                <ResumeMargin />
                <ResumeBody />
            </div>
        </div>
    );
};

export default Resume;
