"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { HelpCircle, Grid } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabs = ["About Me", "Experiences", "Recommended"];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const updateIndicator = (target: HTMLButtonElement) => {
    setIndicatorStyle({
      left: target.offsetLeft,
      width: target.offsetWidth,
    });
  };

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const targetRef = tabRefs.current[activeIndex];

    if (targetRef) {
      updateIndicator(targetRef);
    }
  }, [activeTab]);

  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(tab);
    const targetRef = tabRefs.current[index];
    if (targetRef) {
      updateIndicator(targetRef);
    }
  };

  const renderContent = () => {
    return (
      <div className="relative h-36 mt-4">
        <p
          className="text-gray-300 h-full overflow-y-auto pr-6 text-sm leading-relaxed"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activeTab === "About Me" && (
            <>
              Hello! My name is <b>Rashid Kamar</b> , and I am a{" "}
              <b>third-year Computer Science & Engineering student</b> at Jamia
              Hamdard University. I am a passionate full-stack software engineer
              with a strong foundation in the JavaScript ecosystem,
              cloud-deployed web applications, and modern web technolog. I
              thrive on building scalable applications with robust
              authentication syst. I'm eager to leverage my skills in cloud
              platforms and emerging technologies in new opportunit.
            </>
          )}

          {activeTab === "Experiences" && (
            <>
              <b>Professional Experience:</b>
              <br />
              <b>Marketing Intern</b> at <b>Physics Wallah</b> (Dec 2024 – Jun
              2025, Noida, UP):
              <br />
              Developed and maintained responsive web applications using
              HTML5/CSS3.
              <br />
              Collaborated with developers and distributed teams to deliver
              web-based marketing solutions.
              <br />
              Applied mathematics and analytical thinking to optimize user
              engagement metrics and business growth initiatives.
              <br />
              <b>Campus Ambassador</b> at <b>Material Library</b> <br />
              (Aug 2023 – Nov 2023, Gurugram, Haryana): <br />
              Successfully onboarded 1,500+ students through digital campaigns.
              <br />
              * Designed and implemented feedback collection systems,
              translating customer requirements into functional improvements.
              <br />
            </>
          )}

          {activeTab === "Recommended" && (
            <>
              <b>Recommendation for Front-End Developer Internship:</b>
              <br />
              Rashid is an ideal candidate for this role. His strong background
              as a full-stack engineer , coupled with proven expertise in{" "}
              <b>Next.js</b>, <b>React.js</b>, and <b>Tailwind CSS</b>, directly
              addresses the core requirements. His project, "Converso AI-Powered
              Chat," demonstrates hands-on experience in building a responsive
              UI with TailwindCSS and interactive capabilities using Vapi Voice
              AI, essential for implementing animations and interactive
              components. He is proficient in JavaScript and has experience
              collaborating across distributed teams, ensuring seamless team
              integration. His ability to build scalable applications is
              confirmed by deploying WebSocket connections for concurrent users
              and optimizing solutions using algorithms. He is well-equipped to
              "Build Cool Stuff" and optimize for "Speed and Scale."
            </>
          )}
        </p>

        <div className="absolute top-0 right-0 h-full w-1 bg-gray-700 rounded-full">
          <div className="bg-gray-500 h-1/4 rounded-full"></div>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full bg-gray-800 border-none p-6 rounded-2xl shadow-2xl relative">
      <div className="absolute top-4 left-4 text-gray-500">
        <HelpCircle className="h-5 w-5" />
      </div>
      <div className="absolute top-28 left-4 -translate-y-1/2 text-gray-500">
        <Grid className="h-5 w-5" />
      </div>

      <div className="flex justify-start pl-12 -mt-2">
        <div className="relative bg-black/20 rounded-xl p-1 flex space-x-0.5 shadow-inner shadow-gray-900/50 border border-gray-700/50">
          <span
            className="absolute top-1 bottom-1 bg-black/50 rounded-lg transition-all duration-300 ease-in-out shadow-lg z-0"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />

          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => handleTabClick(tab, index)}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 relative z-10 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="pl-12 pr-4">{renderContent()}</div>
    </Card>
  );
};

export default Profile;
