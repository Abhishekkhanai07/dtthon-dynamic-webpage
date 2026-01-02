const assets = [
  {
    title: "Technical Project Management",
    type: "video",
    content: "https://www.youtube.com/embed/TiMRwri1xJ8",
    description: "Alignment, Scope of Agility, Specific Accountable, Staggering Approach"
  },
  {
    title: "Threadbuild",
    type: "text",
    description: "Watch the video and build threads while watching."
  },
  {
    title: "Structure Your Pointers",
    type: "text",
    description: "Write a 400–500 word article from your thread."
  },
  {
    title: "4SA Method",
    type: "link",
    content: "https://dtthon.deepthought.education/sharer",
    description: "Explore more using the 4SA method."
  }
];

const grid = document.getElementById("assetGrid");

assets.forEach(asset => {
  const card = document.createElement("div");
  card.className = "asset-card";

  card.innerHTML = `
    <div class="asset-header">
      <span>${asset.title}</span>
      <span>▼</span>
    </div>
    <div class="asset-body">
      <p>${asset.description}</p>
      ${
        asset.type === "video"
          ? `<iframe src="${asset.content}"></iframe>`
          : ""
      }
    </div>
  `;

  card.querySelector(".asset-header").onclick = () => {
    card.classList.toggle("active");
  };

  grid.appendChild(card);
});
