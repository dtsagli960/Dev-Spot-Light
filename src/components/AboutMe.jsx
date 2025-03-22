function AboutMe({ bio }) {
  return (
    <div>
      <p>{bio.description}</p>
      <p><strong>Hobbies:</strong> {bio.hobbies}</p>
    </div>
  );
}

export default AboutMe;
