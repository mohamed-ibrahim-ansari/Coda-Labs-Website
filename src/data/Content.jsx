import Atul from "../Images/atul-limmited-blog.png";
import Lupin from "../Images/Lupin-Limited-Blog.png";
import Wipro from "../Images/Wipro-Limted-Blog.png";
import Stopwatch from "../Icons/stopwatch.png";
import Person from "../Icons/person.png";
import Comment from "../Icons/comment.png";
const PropertyContent = [
  {
    id: 1,

    title: "ATUL LIMITED - GUJARAT INDIA",
    description: {
      date: "Jan 20,2021",
      tinyname: "ATUL LIMITED",
      comment: "12 comments",
    },
    icon: Stopwatch,
    icon2: Person,
    icon3: Comment,
    image: Atul,
    content:
      "One of the Largest Integrated Chemical  Companies in  India,\n First Private sector  company inuagrated by then prime  minister in 1952.",
    button: "Read More",
  },

  {
    id: 2,

    title: "LUPIN LIMITED - MUMBAI INDIA",
    description: {
      date: "Feb 20,2022",
      tinyname: "LUPIN LIMITED",
      comment: "15 comments",
    },
    icon: Stopwatch,
    icon2: Person,
    icon3: Comment,
    image: Lupin,
    content:
      "Lupin Limited is a multi national pharmaceutical company based in Mumbai, Maharashtra, India.It is one of the largest generic pharmaceutical companies by revenue globally. ",
    button: "Read More",
  },

  {
    id: 3,

    image: Wipro,
    title: "WIPRO LIMITED - BANGALORE INDIA",
    description: {
      date: "mar 20,2022",
      tinyname: "WIPRO LIMITED",
      comment: "28 comments",
    },
    icon: Stopwatch,
    icon2: Person,
    icon3: Comment,
    content:
      " WIPRO - A leading global information technology, consulting and business process services company. Wipro's capabilities range across cloud computing, digital transformation, data analytics, and other technology consulting services to customers.",
    button: "Read More",
  },
];
export default PropertyContent;
