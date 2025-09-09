const projects = [
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeather API.",
    link: "#"
  },
  {
    title: "To-Do List",
    description: "Task manager built with JavaScript and localStorage.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "This very website you're viewing!",
    link: "#"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const projectItem = document.createElement("div");
  projectItem.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(projectItem);
});
