import "./Experience.scss"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


const timeLineBackground: string = "#054148";
const timeLineColour: string = "#fff";
const timeLineWorkColour: string = "#F7F79E"

const Experience = () => {
    
      return (
         <section className="experience">

            <VerticalTimeline lineColor={timeLineBackground}>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="Apr 2023 - Present"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  >
                  <h3 className="vertical-timeline-element-title"> Brainstation, Vancouver, British Columbia, Canada </h3>
                  <p> Teaching Assistant </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---education"
                  date="Jan 2023 - Apr 2023"
                  iconStyle={{background: timeLineBackground, color: timeLineColour}}
                  icon={<SchoolIcon />}
                  >
                  <h3 className="vertical-timeline-element-title"> Brainstation, Vancouver, British Columbia, Canada </h3>
                  <p> Web Development Diploma </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="Sept 2018 - Present"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  >
                  <h3 className="vertical-timeline-element-title"> Under the GUI, Vancouver, British Columbia, Canada </h3>
                  <p> Coding Instructor </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="May 2017 - Apr 2018"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  >
                  <h3 className="vertical-timeline-element-title"> RBC, Toronto, Ontario, Canada </h3>
                  <p> Software Developer in Test </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---education"
                  date="2013 - 2019"
                  iconStyle={{background: timeLineBackground, color: timeLineColour}}
                  icon={<SchoolIcon />}
                  >
                  <h3 className="vertical-timeline-element-title"> Simon Fraser University, Burnaby, British Columbia, Canada </h3>
                  <p> Bachelors of Applied Science in Software Systems </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="Aug 2016 - Apr 2017"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  >
                  <h3 className="vertical-timeline-element-title"> Best Buy, Vancouver, British Columbia, Canada </h3>
                  <p> Connected Solutions Specialist (Sales) </p>
               </VerticalTimelineElement>

            </VerticalTimeline>
         </section>
     )

}

export default Experience;