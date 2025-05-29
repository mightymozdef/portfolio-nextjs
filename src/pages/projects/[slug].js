import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import { projects as projectsData } from '../../utils/data'

const ProjectDetail = () => {
  const router = useRouter()
  const { slug } = router.query
  const [project, setProject] = useState(null)

  useEffect(() => {
    if (slug) {
      const foundProject = projectsData.find((proj) => proj.slug === slug)
      setProject(foundProject)
    }
  }, [slug])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold'>{project.title}</h1>
      <ProjectCard project={project} />
    </Layout>
  )
}

export default ProjectDetail
