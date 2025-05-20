import { useParams, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const storyData = {
  "rebuilding-hope": {
    title: "Rebuilding Hope After the Floods",
    author: "Rajesh Kumar",
    role: "Community Leader",
    location: "Kerala, India",
    date: "August 2024",
    mainImage: assets.flood,
    summary: "In August 2024, devastating floods struck Kerala. VolunteerPulse mobilized hundreds of volunteers to provide relief, rebuild homes, and restore hope.",
    impactStats: [
      { label: "Homes Rebuilt", value: "120+" },
      { label: "Volunteers", value: "350" },
      { label: "Families Helped", value: "450+" },
    ],
    content: [
      {
        heading: "The Challenge",
        text: "When the floods hit, entire neighborhoods were submerged. Many families lost their homes and access to basic necessities. The community was in urgent need of coordinated help."
      },
      {
        heading: "How VolunteerPulse Responded",
        text: "Within hours, requests for help were posted on VolunteerPulse. Our platform matched these requests with local and remote volunteers. Supplies, food, and medical aid were delivered, and teams began rebuilding efforts."
      },
      {
        heading: "Impact",
        text: "Over 120 homes were rebuilt and more than 450 families received support. The collaboration between volunteers, local leaders, and donors showcased the true power of community."
      },
      {
        heading: "A Personal Note",
        text: "“I never imagined so many people would come together for us. VolunteerPulse gave us hope when we had none.” — Priya, flood survivor"
      }
    ],

  },
  "community-rebuilt": {
    title: "Community Rebuilt",
    author: "Rajesh",
    role: "Community Leader",
    location: "Bihar, India",
    date: "June 2024",
    mainImage: assets.community,
    summary: "After devastating floods, volunteers rebuilt homes and infrastructure, restoring hope and safety.",
    impactStats: [
      { label: "Homes Restored", value: "80+" },
      { label: "Volunteers", value: "200" },
      { label: "Villages Helped", value: "15" },
    ],
    content: [
      {
        heading: "The Crisis",
        text: "Floods destroyed vital infrastructure. The community faced a shortage of clean water, food, and shelter."
      },
      {
        heading: "Volunteer Action",
        text: "VolunteerPulse volunteers coordinated with local authorities to distribute relief materials and begin reconstruction."
      },
      {
        heading: "Lasting Impact",
        text: "Villages now have stronger, safer homes and better disaster preparedness thanks to the efforts of volunteers."
      }
    ],

  },
  "healthcare-support": {
    title: "Healthcare Support",
    author: "Dr. Meera",
    role: "Medical Volunteer",
    location: "Assam, India",
    date: "July 2024",
    mainImage: assets.doctor,
    summary: "Medical volunteers provided critical care and counseling to disaster survivors, improving recovery outcomes.",
    impactStats: [
      { label: "Patients Treated", value: "600+" },
      { label: "Medical Volunteers", value: "45" },
      { label: "Medical Camps", value: "12" },
    ],
    content: [
      {
        heading: "Medical Emergency",
        text: "Flooding led to outbreaks of waterborne diseases. Immediate medical attention was needed."
      },
      {
        heading: "Volunteer Doctors",
        text: "Doctors and nurses volunteered through VolunteerPulse, setting up camps and treating hundreds of patients."
      },
      {
        heading: "Community Healing",
        text: "Not just physical care, but also counseling and emotional support helped survivors recover."
      }
    ],

  }
};

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const story = storyData[id];

  if (!story) {
    return <div className="text-center py-20 text-2xl">Story not found.</div>;
  }

  return (
    <section className="w-full min-h-screen py-12 px-2">
      <div className="max-w-4xl mx-auto overflow-hidden">
        {/* Back Button */}
        <Link to="/" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 p-4">
          ← Back to homepage
        </Link>
        {/* Main Image */}
        <img src={story.mainImage} alt={story.title} className="w-full h-64 object-cover" />
        {/* Header */}
        <div className="px-8 py-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{story.title}</h1>
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
            <span>By <span className="font-semibold">{story.author}</span>, {story.role}</span>
            <span>📍 {story.location}</span>
            <span>🗓️ {story.date}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{story.summary}</p>
          {/* Impact Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            {story.impactStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center bg-blue-50 rounded-lg px-6 py-4 shadow">
                <span className="text-2xl font-extrabold text-blue-700">{stat.value}</span>
                <span className="text-gray-600 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
          {/* Story Content Sections */}
          <div className="space-y-8">
            {story.content.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-semibold mb-2 text-blue-800">{section.heading}</h2>
                <p className="text-gray-800">{section.text}</p>
              </div>
            ))}
          </div>
          {/* Gallery */}
          
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryDetail;
