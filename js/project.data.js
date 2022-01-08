/* ********************************************************** */
// Projects Details Data Object
/* ********************************************************** */

let projectDetails = [
  {
    id: 1,
    name: "GDSC JGEC Website",
    repo: "gdscjgec/gdscjgec",
    desc: "Official Website for GDSC JGEC, and which is open source 🤩.",

    viewLink: "https://gdscjgec.github.io/",
    repoLink: "https://github.com/gdscjgec/gdscjgec.github.io",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 2,
    name: "Image Editor",
    repo: "gdscjgec/Image-Editor",
    desc: "Open Source Web based Image Editor.",

    viewLink: "https://gdscjgec.github.io/Image-Editor",
    repoLink: "https://github.com/gdscjgec/Image-Editor",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 3,
    name: "ML Gallery",
    repo: "gdscjgec/ML-Gallery",
    desc:
      "A Special Open-Source Repository for all kinds of Data Science and Machine Learning Projects! Contribute your EDA Case Studies, ML Models, Deep Learning Algo, and fun Computer Vision ideas!",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdscjgec/ML-Gallery",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 4,
    name: "Pictionary",
    repo: "gdscjgec/Pictionary",
    desc: "Ever heard about a Picture based Dictionary? , it's here!",

    viewLink: "https://gdscjgec.github.io/Pictionary",
    repoLink: "https://github.com/gdscjgec/Pictionary",

    viewtarget: "_blank",
    repotarget: "_blank",
  },
  {
    id: 5,
    name: "UpTrend",
    repo: "gdscjgec/UpTrend",
    desc: "One place destination to check trending data across websites.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdscjgec/UpTrend",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 6,
    name: "GuruCool",
    repo: "gdscjgec/GuruCool",
    desc: "Productivity Solution for Educators and Students.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdscjgec/GuruCool",

    viewtarget: "_self",
    repotarget: "_blank",
  },
  {
    id: 7,
    name: "Rhythm-Finder",
    repo: "gdscjgec/Rhythm-Finder",
    desc: "ML-powered Music Recommendation Engine.",

    viewLink: "javascript:void(0)",
    repoLink: "https://github.com/gdscjgec/Rhythm-Finder",

    viewtarget: "_self",
    repotarget: "_blank",
  },
];

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectDiv = document.querySelector(".projects_contents");

Object.values(projectDetails).map((val) => {
  projectDiv.innerHTML += `
        <!-- Project ${val.id} -->
        <div class="project_card">
            <h2>${val.name}</h2>
            <a href="${val.repoLink}" class="repo">${val.repo}</a>
            <p>${val.desc}</p>
            <div class="links">
                <a href="${val.viewLink}" target="${val.viewtarget}">Preview</a>
                <a href="${val.repoLink}" target="${val.repotarget}">Repository</a>
            </div>
        </div>
    `;
});
