import PropTypes from "prop-types";

const ProjectCard = ({ title, tags, projectLink, classes = "" }) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-all ${classes}`}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4">GitHub Project</p>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((label, key) => (
          <span
            key={key}
            className="h-8 text-sm text-zinc-300 bg-zinc-700 px-3 grid items-center rounded-md"
          >
            {label}
          </span>
        ))}
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
};

export default ProjectCard;
