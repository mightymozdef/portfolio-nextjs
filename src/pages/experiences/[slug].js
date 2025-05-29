import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { experiences as experiencesData } from "../../utils/data";

const ExperienceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundExperience = experiencesData.find((exp) => exp.slug === slug);
      setExperience(foundExperience);
    }
  }, [slug]);

  if (!experience) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold">{experience.title}</h1>
      <div className="mt-4">
        <p>{experience.description}</p>
      </div>
    </Layout>
  );
}