function Portfolio({ projects }) {
    return (
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Portfolio;
  