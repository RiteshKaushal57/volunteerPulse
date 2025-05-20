import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const stories = [
  {
    id: "rebuilding-hope",
    title: "Rebuilding Hope After the Floods",
    author: "Rajesh Kumar",
    mainImage: assets.flood,
    summary: "VolunteerPulse mobilized hundreds of volunteers to provide relief, rebuild homes, and restore hope in Kerala.",
  },
  {
    id: "community-rebuilt",
    title: "Community Rebuilt",
    author: "Rajesh, Community Leader",
    mainImage: assets.community,
    summary: "Volunteers helped rebuild homes and infrastructure after devastating floods, restoring hope and safety.",
  },
  {
    id: "healthcare-support",
    title: "Healthcare Support",
    author: "Dr. Meera",
    mainImage: assets.doctor,
    summary: "Medical volunteers provided critical care and counseling to disaster survivors, improving recovery outcomes.",
  },
];

const SuccessStories = () => (
  <section className="w-full py-20 bg-white" id="success-stories">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Success Stories & Impact</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {stories.map(story => (
          <Link
            key={story.id}
            to={`/blogs/${story.id}`}
            className="bg-gray-50 rounded-lg shadow p-6 flex flex-col hover:scale-105 transition-transform"
          >
            <img
              src={story.mainImage}
              alt={story.title}
              className="rounded-md mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-700 flex-grow">{story.summary}</p>
            <span className="mt-4 text-sm text-gray-500 italic">— {story.author}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
