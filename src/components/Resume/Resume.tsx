import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faEnvelope,
    faLink,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import FormattedList from './FormattedList';

import '@/assets/styles/resume.css';

const EMAIL = import.meta.env.VITE_EMAIL;
const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;

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

const Resume = () => {
    const SkillsList = () => (
        <FormattedList
            className="info skills-list"
            elements={[
                'Javascript',
                'React',
                'Go',
                'SQL',
                'Typescript',
                'Webpack',
                'Python',
                'C#',
                'Django',
                'Git',
                'OpenGL',
                'Unity',
            ]}
        />
    );

    const InterestsList = () => (
        <FormattedList
            className="info interests-list"
            elements={[
                'Guitar (18 years)',
                'Vegan Cooking',
                'Playing Chess Badly',
                'Mechanical Keyboards',
            ]}
        />
    );

    const ResumeMargin = () => (
        <div className="resume-margin no-mobile">
            <div className="resume-margin-section">
                <div className="title uppercase">{'Contact'}</div>
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
                    <a href="https://www.linkedin.com/in/bakerjm702">
                        {'linkedin.com/in/bakerjm702'}
                    </a>
                </div>
                <div className="resume-margin-subsection">
                    <div className="subtitle uppercase">{'GitHub'}</div>
                    <FontAwesomeIcon icon={faGithub} />
                    <a href="https://github.com/bakerj76">
                        {'github.com/bakerj76'}
                    </a>
                </div>
            </div>
            <div className="resume-margin-section">
                <div className="title uppercase">{'Education'}</div>
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
                <div className="title uppercase">{'Skills'}</div>
                <SkillsList />
            </div>
            <div className="resume-margin-section">
                <div className="title uppercase">{'Interests'}</div>
                <InterestsList />
            </div>
        </div>
    );

    const ResumeMobileContact = () => (
        <div className="resume-mobile-contact mobile-only">
            <div className="title uppercase">{'Contact'}</div>
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
                <a href="https://www.linkedin.com/in/bakerjm702">
                    {'linkedin.com/in/bakerjm702'}
                </a>
            </div>
            <div className="resume-margin-subsection">
                <div className="subtitle uppercase">{'GitHub'}</div>
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/bakerj76">
                    {'github.com/bakerj76'}
                </a>
            </div>
        </div>
    );

    const ResumeMobileEducation = () => (
        <div className="resume-section mobile-only">
            <div className="title uppercase">{'Education'}</div>
            <div className="entry">
                <div className="header">
                    <div className="company uppercase">
                        {'University of Nevada, Las Vegas'}
                    </div>
                </div>
                <div className="info">{'B.S. in Computer Science'}</div>
                <div className="info italic">{'Magna cum laude'}</div>
                <div className="info">{'August 2011 - December 2015'}</div>
            </div>
        </div>
    );

    const ResumeMobileSkills = () => (
        <div className="mobile-only">
            <div className="resume-mobile-skills">
                <div className="resume-margin-section">
                    <div className="title uppercase">{'Skills'}</div>
                    <SkillsList />
                </div>
                <div className="resume-margin-section">
                    <div className="title uppercase">{'Interests'}</div>
                    <InterestsList />
                </div>
            </div>
        </div>
    );

    const ResumeEntry = ({
        company,
        position,
        date,
        location,
        link,
        children,
    }: ResumeEntryProps) => (
        <div className="entry">
            <div className="header">
                <div className="company">{company}</div>
                {position && <div className="position">{position}</div>}
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
                <div>{'James Baker'}</div>
                <div id="job-title">{'Full Stack Developer'}</div>
            </div>
            <ResumeMobileContact />
            <div className="resume-section">
                <p>
                    {'A dedicated full stack developer with 11+ years of software development ' +
                        'and 6 years of professional experience crafting and maintaining ' +
                        'real-time web applications for desktop and mobile, utilizing React, ' +
                        `Javascript and Typescript, Go and MySQL/MariaDB. I'm a self-starter ` +
                        'with years of experience working remotely and a love for coding. ' +
                        'Looking to learn new full stack development techniques, tech stacks, ' +
                        'and languages; and enhance my skills in both backend and frontend ' +
                        'development.'}
                </p>
            </div>
            <div className="resume-section">
                <div className="title uppercase">{'Work experience'}</div>
                <ResumeEntry
                    company={'Doctype'}
                    position={'Full Stack Developer'}
                    date={'August 2016 - September 2022'}
                    location={'Stockholm, Sweden (Remote)'}
                >
                    <ul>
                        <li>
                            {
                                'Developed performant, real-time single page web apps for desktop and mobile using React, Javascript/Typescript, Sass/Tailwind CSS, Go, and MySQL/MariaDB.'
                            }
                        </li>
                        <li>
                            {
                                'Created features for and maintained websites such as '
                            }
                            <a href="https://efotboll.se">{'efotboll.se'}</a>
                            {' and '}
                            <a href="https://esportal.se">{'esportal.se'}</a>
                            {
                                ', which service 1000 - 5000 concurrent users daily.'
                            }
                        </li>
                        <li>
                            {'Led development on '}
                            <a href="https://www.doctype.se/project/gothia-ecup/">
                                {'2018 Gothia eCup'}
                            </a>
                            {
                                ' which won the Årets Digitala award (digital of the year) in the Gyllene Hjulet 2018.'
                            }
                        </li>
                        <li>
                            {
                                'Led multiple teams of developers, including UI/UX designers, mobile app developers, and other frontend and backend developers.'
                            }
                        </li>
                        <li>
                            {
                                'Delivered products and features quickly, such as:'
                            }
                            <ul>
                                <li>
                                    {
                                        'Content Management System for partner collaboration pages'
                                    }
                                </li>
                                <li>
                                    {
                                        'Bracket displaying and automatic round generation for round-robin, single-elimination and Swiss tournaments'
                                    }
                                </li>
                                <li>
                                    {
                                        'Multistage tournaments (such as automatically handling round-robin seasons to single-elimination finals)'
                                    }
                                </li>
                                <li>{'Real-time Elo-based matchmaking'}</li>
                            </ul>
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
                            {
                                'Utilized Oracle Business Intelligence and SQL to deliver financial data organized in custom reports.'
                            }
                        </li>
                        <li>
                            {
                                'Collaborated with Nevada Department of Transportation (NDOT) to improve their database.'
                            }
                        </li>
                        <li>
                            {
                                'Led a class of 30 NDOT employees in Carson City on making Oracle Business Intelligence dashboards to improve their financial reports.'
                            }
                        </li>
                    </ul>
                </ResumeEntry>
            </div>
            <div className="resume-section">
                <div className="title uppercase">{'Awards'}</div>
                <ResumeEntry
                    company={'Årets Digitala in the Gyllene Hjulet 2018'}
                    date={'2018'}
                    link={{
                        url: 'https://ses.se/nominerade-och-vinnare/vinnare-2018_new12345/gothia-ecup/',
                        text: 'ses.se/nominerade-och-vinnare/vinnare-2018_new12345/gothia-ecup/',
                    }}
                >
                    <ul>
                        <li>
                            {'An award for best digital for the site '}
                            <a href="https://www.doctype.se/project/gothia-ecup/">
                                {'2018 Gothia eCup'}
                            </a>
                            {
                                ', in which I led design. A tournament website for the video game FIFA 18. Collaborated with FIFA and Coca-Cola.'
                            }
                        </li>
                    </ul>
                </ResumeEntry>
            </div>
            <div className="resume-section">
                <div className="title uppercase">
                    {'Latest Personal Projects'}
                </div>
                <ResumeEntry
                    company={'This Resume'}
                    date={'October 2022'}
                    link={{
                        url: 'https://github.com/bakerj76/james-baker',
                        text: 'github.com/bakerj76/james-baker',
                    }}
                >
                    <ul>
                        <li>{'Created using Preact, Typescript, and Vite.'}</li>
                        <li>
                            {
                                'Responsive design; can be viewed on desktop or mobile.'
                            }
                        </li>
                        <li>{'Has light and dark themes.'}</li>
                        <li>{'Deployed with DigitalOcean.'}</li>
                    </ul>
                </ResumeEntry>
                <ResumeEntry
                    company={'Trombone Champ Charter'}
                    date={'September 2022'}
                    link={{
                        url: 'https://github.com/bakerj76/Trombone-Champ-Charter',
                        text: 'github.com/bakerj76/Trombone-Champ-Charter',
                    }}
                >
                    <ul>
                        <li>
                            {
                                'A What You See Is What You Get (WYSIWYG) charting program for making custom songs for the video game Trombone Champ.'
                            }
                        </li>
                        <li>{'Reads and writes .tmb files from the game.'}</li>
                        <li>{'Uses C# and Unity.'}</li>
                    </ul>
                </ResumeEntry>
                <ResumeEntry
                    company={'Discord Bot'}
                    date={'December 2020'}
                    link={{
                        url: 'https://github.com/bakerj76/Discord-Bot',
                        text: 'github.com/bakerj76/Discord-Bot',
                    }}
                >
                    <ul>
                        <li>
                            {
                                'A bot for my Discord channel that handles straw polls and manages YouTube playlists.'
                            }
                        </li>
                        <li>
                            {
                                'Utilizes the discord.py API wrapper and discord.py Cogs for easy-to-code commands.'
                            }
                        </li>
                        <li>{'Uses Python and SQLite.'}</li>
                    </ul>
                </ResumeEntry>
            </div>
            <ResumeMobileEducation />
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
