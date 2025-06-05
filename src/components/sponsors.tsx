import atlassianLogo from "@/assets/sponsors/atlassian.svg";
import builderIoLogo from "@/assets/sponsors/builder-io.svg";
import divRiotsLogo from "@/assets/sponsors/div-riots.png";
import githubLogo from "@/assets/sponsors/github.png";
import grammarlyLogo from "@/assets/sponsors/grammarly.svg";
import greatQuestionLogo from "@/assets/sponsors/great-question.svg";
import locofyLogo from "@/assets/sponsors/locofy.svg";
import userTestingLogo from "@/assets/sponsors/user-testing.svg";

const Sponsors = () => {
  const sponsorsOfEvents = [
    {
      id: 1,
      name: "Atlassian",
      logo: atlassianLogo,
      url: "https://www.atlassian.com",
    },
    {
      id: 2,
      name: "Builder.io",
      logo: builderIoLogo,
      url: "https://www.builder.io",
    },
    {
      id: 3,
      name: "Div Riots",
      logo: divRiotsLogo,
      url: "https://www.divriots.com",
    },
    {
      id: 4,
      name: "GitHub",
      logo: githubLogo,
      url: "https://github.com",
    },
    {
      id: 5,
      name: "Grammarly",
      logo: grammarlyLogo,
      url: "https://www.grammarly.com",
    },
    {
      id: 6,
      name: "Great Question",
      logo: greatQuestionLogo,
      url: "https://www.greatquestion.co",
    },
    {
      id: 7,
      name: "Locofy",
      logo: locofyLogo,
      url: "https://www.locofy.ai",
    },
    {
      id: 8,
      name: "UserTesting",
      logo: userTestingLogo,
      url: "https://www.usertesting.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-24">
      <h2 className="font-bold text-5xl text-center mb-16">
        Thank you to our sponsors.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 w-full">
        {sponsorsOfEvents.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-8 object-contain transition-transform hover:scale-105 filter brightness-0 saturate-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
