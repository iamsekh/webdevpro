import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string; // Correctly typed as a string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <div>
      <h1>Projects</h1>
      {/* Your project rendering logic here */}
    </div>
  );
};

export default Projects;
