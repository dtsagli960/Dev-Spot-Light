function Resume({ resume, proficiencies }) {
    return (
      <div>
        <p><a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a></p>
        <h3>Proficiencies:</h3>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Resume;
  