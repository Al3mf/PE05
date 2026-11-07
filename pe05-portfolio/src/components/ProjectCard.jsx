function ProjectCard({ title, description, imageUrl }) {
  return (
    <article className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard