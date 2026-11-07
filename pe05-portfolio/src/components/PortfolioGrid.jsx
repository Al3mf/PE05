import ProjectCard from './ProjectCard'

function PortfolioGrid({ projects }) {
  return (
    <section className="portfolio-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </section>
  )
}

export default PortfolioGrid