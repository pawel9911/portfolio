interface ProjectDescriptionProps {
  data: {
    name: string;
    category: string;
    tools: string[];
    description: string;
  };
}

export const ProjectDescription = ({
  data: { name, tools, description },
}: ProjectDescriptionProps) => {
  return (
    <code className="body1">
      <div>
        <span className="mr-2 text-secondary">const</span>
        <span className="mr-2">project</span>
        <span className="mr-2 text-secondary">=</span>
        <span>&#123;</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span>name: </span>
        <span className="text-contrast">"{name}"</span>
        <span>,</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span>tools: </span>
        <span>[</span>
        {tools.map((tool, i) => (
          <span key={i} className="text-contrast">
            "{tool}"
            <span className="text-white">
              {tools.length - 1 !== i ? ", " : ""}
            </span>
          </span>
        ))}
        <span>],</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span>description: </span>
        <span className="text-contrast">"{description}"</span>
        <span>,</span>
      </div>
      <div>
        <span>&#125;</span>
      </div>
    </code>
  );
};
