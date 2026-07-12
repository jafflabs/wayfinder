const locations = [
  "Kalamazoo", "Portage", "Battle Creek", "Brighton", "Howell",
  "Novi", "Wixom", "Ann Arbor", "Auburn Hills", "Troy", "South Lyon",
  "Plymouth", "Livonia", "Rochester Hills", "Lansing", "Detroit Metro"
];

const families = [
  {
    name: "Systems / Analyst",
    emoji: "📈",
    hint: "systems analyst, systems engineer, technical analyst",
    titles: ["Entry Level Systems Analyst", "Associate Systems Engineer", "Technical Analyst"]
  },
  {
    name: "Data / Analytics",
    emoji: "▥",
    hint: "data analyst, reporting analyst, operations analyst",
    titles: ["Junior Data Analyst", "Reporting Analyst", "Operations Analyst"]
  },
  {
    name: "Engineering / Design",
    emoji: "⚙",
    hint: "engineering technician, design support, engineering associate",
    titles: ["Engineering Technician", "Engineering Associate", "Design Technician"]
  },
  {
    name: "Test / Quality",
    emoji: "✓",
    hint: "test technician, quality analyst, validation",
    titles: ["Test Technician", "Quality Analyst", "Validation Technician"]
  },
  {
    name: "Manufacturing",
    emoji: "▰",
    hint: "manufacturing analyst, process technician, operations",
    titles: ["Manufacturing Analyst", "Process Technician", "Manufacturing Engineering Technician"]
  },
  {
    name: "Research",
    emoji: "⚗",
    hint: "lab technician, research assistant, instrumentation",
    titles: ["Lab Technician", "Research Assistant", "Instrumentation Technician"]
  },
  {
    name: "IT / Support",
    emoji: "▣",
    hint: "technical support, applications specialist, systems support",
    titles: ["Technical Support Analyst", "Applications Specialist", "Systems Support Specialist"]
  },
  {
    name: "Operations",
    emoji: "♟",
    hint: "operations analyst, coordinator, process improvement",
    titles: ["Operations Analyst", "Operations Coordinator", "Process Improvement Analyst"]
  },
  {
    name: "Aerospace / Defense",
    emoji: "🚀",
    hint: "aerospace technician, systems support, engineering associate",
    titles: ["Aerospace Technician", "Systems Engineer Associate", "Engineering Support Specialist"]
  },
  {
    name: "Energy / Environment",
    emoji: "◒",
    hint: "energy analyst, environmental testing, utility operations",
    titles: ["Energy Analyst", "Environmental Test Technician", "Utility Operations Analyst"]
  },
  {
    name: "Finance / Business",
    emoji: "$",
    hint: "business analyst, risk analyst, quantitative support",
    titles: ["Business Analyst", "Risk Analyst", "Quantitative Analyst Assistant"]
  },
  {
    name: "Education / Teaching",
    emoji: "▱",
    hint: "substitute teaching, tutor, education technology",
    titles: ["Substitute Teacher", "STEM Tutor", "Education Program Assistant"]
  }
];

const starterTitles = [
  "Entry Level Systems Analyst", "Associate Systems Engineer", "Junior Data Analyst",
  "Engineering Technician", "Test Technician", "Quality Analyst", "Lab Technician",
  "Research Assistant", "Operations Analyst", "Manufacturing Analyst", "Field Service Engineer",
  "Technical Support Analyst", "Instrumentation Technician", "Validation Technician",
  "Aerospace Technician", "STEM Tutor", "Applications Specialist", "Process Improvement Analyst"
];
/*
const popularSearches = [
  "entry level systems analyst brighton mi",
  "junior data analyst remote",
  "test engineer entry level michigan",
  "engineering technician jobs michigan",
  "research assistant physics",
  "quality engineer entry level",
  "lab technician jobs",
  "operations analyst entry level"
];
*/
const companies = [
  { name: "Stryker", location: "Kalamazoo / Portage", focus: "Medical technology, engineering, quality, manufacturing", search: "Stryker careers Kalamazoo entry level engineering analyst" },
  { name: "Pfizer", location: "Kalamazoo", focus: "Pharmaceutical manufacturing, lab, quality, validation", search: "Pfizer Kalamazoo careers lab technician quality validation" },
  { name: "Zoetis", location: "Kalamazoo", focus: "Animal health, lab, manufacturing, quality", search: "Zoetis Kalamazoo careers lab quality manufacturing" },
  { name: "Toyota R&D", location: "Ann Arbor / Saline", focus: "Automotive research, testing, systems, engineering support", search: "Toyota research development Ann Arbor entry level systems test engineering" },
  { name: "Hyundai America Technical Center", location: "Ann Arbor area", focus: "Automotive testing, development, engineering support", search: "Hyundai America Technical Center careers Ann Arbor entry level" },
  { name: "Magna", location: "Novi / Troy area", focus: "Automotive systems, manufacturing, quality, process", search: "Magna careers Novi Troy entry level engineering quality analyst" },
  { name: "Bosch", location: "Plymouth / Farmington Hills", focus: "Mobility systems, engineering, testing, analytics", search: "Bosch careers Plymouth Michigan entry level systems analyst engineering" },
  { name: "Roush", location: "Livonia", focus: "Engineering services, prototyping, testing, aerospace/automotive", search: "Roush careers Livonia entry level engineering technician test" },
  { name: "General Dynamics Land Systems", location: "Sterling Heights", focus: "Defense systems, systems engineering, test, manufacturing", search: "General Dynamics Land Systems careers Michigan entry level systems engineer" },
  { name: "Consumers Energy", location: "Jackson / Michigan", focus: "Energy, utility operations, analytics, technical support", search: "Consumers Energy careers entry level analyst engineering Michigan" },
  { name: "DTE Energy", location: "Detroit Metro", focus: "Energy, operations, analytics, engineering support", search: "DTE Energy careers entry level analyst engineering Michigan" },
  { name: "KLA", location: "Ann Arbor", focus: "Semiconductor tools, engineering, data, systems, manufacturing", search: "KLA Ann Arbor careers entry level engineering analyst" }
];

const programSearches = [
  ["Systems Engineering MS online", "online MS systems engineering physics bachelor's"],
  ["Aerospace Engineering MS online", "online MS aerospace engineering physics bachelor's"],
  ["Applied Physics MS online", "online MS applied physics"],
  ["Data Science MS online", "online MS data science physics bachelor's"],
  ["Operations Research MS online", "online MS operations research"]
];

const programCards = [
  {
    school: "Georgia Tech Online",
    program: "14 Online MS Programs, also Certicates - Explore",
    note: "Strong benchmark for <b>affordable, flexible, reputable</b> online graduate study for technical STEM.",
    url: "https://pe.gatech.edu/degrees#tab-master-of-science-degrees",
    search: "Georgia Tech online tuition"
  },
  {
    school: "UCF Online",
    program: "MS Systems Engineering - Explore Other Options Too",
    note: "A direct applied-systems option. Compare prerequisites, cost per credit, and engineering fit.",
    url: "https://www.ucf.edu/online/degree/systems-engineering-msse/",
    search: "UCF online MS systems engineering tuition"
  },
  {
  school: "Michigan Teaching Pathways",
  program: "Secondary Science & Physics Teaching",
  note: "If teaching becomes your direction, first explore Michigan's certification pathways. Compare alternative certification, MAT programs, and online graduate options before choosing a university.",
  url: "https://www.michigan.gov/mde/services/ed-serv/educator-recruitment/new-michigan-teachers/becoming-a-michigan-teacher",
  search: "Michigan online MAT secondary science physics teacher certification"
  }
];

const defaultTasks = [
  { text: "Research applied science paths", done: false },
  { text: "Research Michigan teaching paths", done: false},
  { text: "Update resume", done: false },
  { text: "Save 5 interesting job postings, note benefits, timing, and ed-assist", done: false },
];

let selectedLocation = localStorage.getItem("wf_location") || localStorage.getItem("lp_location") || "Brighton";
let selectedFamily = localStorage.getItem("wf_family") || localStorage.getItem("lp_family") || "Systems / Analyst";

function qs(query) {
  return document.querySelector(query);
}

function googleUrl(phrase) {
  return `https://www.google.com/search?q=${encodeURIComponent(phrase)}`;
}

function renderSelects() {
  const locationSelect = qs("#locationSelect");
  const familySelect = qs("#familySelect");
  if (!locationSelect || !familySelect) return;

  locationSelect.innerHTML = locations.map(loc =>
    `<option value="${loc}" ${loc === selectedLocation ? "selected" : ""}>${loc}, MI</option>`
  ).join("");

  familySelect.innerHTML = families.map(fam =>
    `<option value="${fam.name}" ${fam.name === selectedFamily ? "selected" : ""}>${fam.name}</option>`
  ).join("");

  locationSelect.onchange = () => {
    selectedLocation = locationSelect.value;
    localStorage.setItem("wf_location", selectedLocation);
    renderSearches();
  };

  familySelect.onchange = () => {
    selectedFamily = familySelect.value;
    localStorage.setItem("wf_family", selectedFamily);
    renderFamilies();
    renderSearches();
  };
}

function renderFamilies() {
  const container = qs("#families");
  if (!container) return;
  container.innerHTML = "";

  families.forEach(family => {
    const card = document.createElement("div");
    card.className = "job-card" + (family.name === selectedFamily ? " selected" : "");
    card.innerHTML = `
      <span class="emoji">${family.emoji}</span>
      <div><strong>${family.name}</strong><span>${family.hint}</span></div>
    `;
    card.onclick = () => {
      selectedFamily = family.name;
      localStorage.setItem("wf_family", selectedFamily);
      renderSelects();
      renderFamilies();
      renderSearches();
      location.hash = "#explore";
    };
    container.appendChild(card);
  });
}

function renderSearches() {
  const family = families.find(f => f.name === selectedFamily) || families[0];
  const container = qs("#searchOutput");
  if (!container) return;
  container.innerHTML = "";

  family.titles.forEach(title => {
    const phrase = `${title} ${selectedLocation} Michigan`;
    const indeed = `https://www.indeed.com/jobs?q=${encodeURIComponent(title)}&l=${encodeURIComponent(selectedLocation + ", MI")}`;
    const linkedin = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(title)}&location=${encodeURIComponent(selectedLocation + ", Michigan, United States")}`;
    const google = googleUrl(phrase + " jobs");

    const card = document.createElement("div");
    card.className = "search-card";
    card.innerHTML = `
      <strong>${phrase}</strong>
      <p>
        <a href="${indeed}" target="_blank" rel="noopener">Indeed</a> ·
        <a href="${linkedin}" target="_blank" rel="noopener">LinkedIn</a> ·
        <a href="${google}" target="_blank" rel="noopener">Google</a>
      </p>
    `;
    container.appendChild(card);
  });
}

function getLinks() {
  return JSON.parse(localStorage.getItem("wf_links") || localStorage.getItem("lp_links") || "[]");
}

function setLinks(links) {
  localStorage.setItem("wf_links", JSON.stringify(links));
}

function renderLinks() {
  const container = qs("#savedLinks");
  if (!container) return;
  const links = getLinks();
  container.innerHTML = "";

  if (links.length === 0) {
    container.innerHTML = `<p class="tip">No saved links yet. Save anything interesting, even if it is only a maybe.</p>`;
    return;
  }

  links.slice(0, 8).forEach((link, index) => {
    const item = document.createElement("div");
    item.className = "saved-item";
    item.innerHTML = `
      <div>
        <span class="saved-item-type">${link.type || "Item"}</span>
        <a href="${link.url}" target="_blank" rel="noopener">${link.title}</a>
        <div class="tags">${link.tags || "No tags"}</div>
      </div>
      <button class="delete-link" aria-label="Delete saved link">✕</button>
    `;
    item.querySelector("button").onclick = () => {
      const updated = getLinks();
      updated.splice(index, 1);
      setLinks(updated);
      renderLinks();
    };
    container.appendChild(item);
  });
}

function renderTitles() {
  const container = qs("#titleList");
  if (!container) return;
  container.innerHTML = "";
  starterTitles.forEach(title => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "title-pill";
    pill.textContent = title;
    pill.title = `Search Google for ${title}`;
    pill.addEventListener("click", () => {
      window.open(googleUrl(`${title} entry level Michigan physics degree`), "_blank", "noopener");
    });
    container.appendChild(pill);
  });
}

function renderPopularSearches() {
  const el = qs("#popularSearches");
  if (!el) return;
  el.innerHTML = popularSearches
    .map(term => `<li><a href="${googleUrl(term)}" target="_blank" rel="noopener">${term}</a></li>`)
    .join("");
}

function renderCompanies() {
  const container = qs("#companyCards");
  if (!container) return;

  container.innerHTML = companies.map(company => `
    <article class="company-card">
      <h4>${company.name}</h4>
      <p><strong>${company.location}</strong></p>
      <p>${company.focus}</p>
      <a href="${googleUrl(company.search)}" target="_blank" rel="noopener">Search careers</a>
    </article>
  `).join("");
}

function renderProgramSearches() {
  const el = qs("#programSearches");
  if (!el) return;
  el.innerHTML = programSearches
    .map(([label, phrase]) => `<a href="${googleUrl(phrase)}" target="_blank" rel="noopener">${label}</a>`)
    .join("");
}

function renderProgramCards() {
  const container = qs("#programCards");
  if (!container) return;
  container.innerHTML = programCards.map(card => `
    <article class="program-card">
      <h4>${card.school}</h4>
      <strong>${card.program}</strong>
      <p>${card.note}</p>
      <div class="program-actions">
        <a href="${card.url}" target="_blank" rel="noopener">Program page</a>
        <a href="${googleUrl(card.search)}" target="_blank" rel="noopener">Cost search</a>
      </div>
    </article>
  `).join("");
}

function getTasks() {
  return JSON.parse(localStorage.getItem("wf_tasks") || JSON.stringify(defaultTasks));
}

function setTasks(tasks) {
  localStorage.setItem("wf_tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = qs("#taskList");
  if (!taskList) return;

  const tasks = getTasks();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("div");
    row.className = "task-row";

    row.innerHTML = `
      <label>
        <input type="checkbox" ${task.done ? "checked" : ""}>
        <span class="${task.done ? "done" : ""}">${task.text}</span>
      </label>
      <button class="delete-task" type="button" aria-label="Delete task">×</button>
    `;

    row.querySelector("input").addEventListener("change", () => {
      const updated = getTasks();
      updated[index].done = !updated[index].done;
      setTasks(updated);
      renderTasks();
    });

    row.querySelector(".delete-task").addEventListener("click", () => {
      const updated = getTasks();
      updated.splice(index, 1);
      setTasks(updated);
      renderTasks();
    });

    taskList.appendChild(row);
  });
}

function addTask() {
  const input = qs("#newTaskInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const tasks = getTasks();
  tasks.push({ text, done: false });
  setTasks(tasks);
  input.value = "";
  renderTasks();
}

function renderDiscovery() {
  const output = qs("#discoverOutput");
  if (!output) return;

  const location = locations[Math.floor(Math.random() * locations.length)];
  const family = families[Math.floor(Math.random() * families.length)];
  const title = family.titles[Math.floor(Math.random() * family.titles.length)];
  const search = `${title} ${location} Michigan`;

  output.innerHTML = `
    <strong>${location}, MI</strong>
    <span>${family.name}</span>
    <a href="${googleUrl(search + " jobs")}" target="_blank" rel="noopener">${search}</a>
  `;
}

qs("#linkForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const title = qs("#linkTitle").value.trim();
  let url = qs("#linkUrl").value.trim();
  const tags = qs("#linkTags").value.trim();
  const type = qs("#linkType")?.value || "Item";

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const links = getLinks();
  links.unshift({ type, title, url, tags, savedAt: new Date().toISOString() });
  setLinks(links);

  event.target.reset();
  renderLinks();
});

qs("#saveNotes")?.addEventListener("click", () => {
  localStorage.setItem("wf_notes", qs("#notesText").value);
  qs("#saveNotes").textContent = "Saved!";
  setTimeout(() => qs("#saveNotes").textContent = "Save Note", 900);
});

qs("#addTaskBtn")?.addEventListener("click", addTask);
qs("#newTaskInput")?.addEventListener("keydown", event => {
  if (event.key === "Enter") addTask();
});

qs("#discoverBtn")?.addEventListener("click", renderDiscovery);

function exportFile(contents, extension, mimeType) {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const filename = `wayfinder_export_${yyyy}-${mm}-${dd}.${extension}`;

  const blob = new Blob([contents], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function collectExportData() {
  return {
    location: selectedLocation,
    family: selectedFamily,
    notes: qs("#notesText")?.value || "",
    links: getLinks(),
    tasks: getTasks(),
    exportedAt: new Date().toISOString()
  };
}

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function buildTxtExport(data) {
  const lines = [];
  lines.push("WayFinder Export");
  lines.push(`Exported: ${data.exportedAt}`);
  lines.push(`Location: ${data.location}`);
  lines.push(`Selected Family: ${data.family}`);
  lines.push("");
  lines.push("NOTES");
  lines.push(data.notes || "(none)");
  lines.push("");
  lines.push("SAVED ITEMS");
  if (data.links.length === 0) {
    lines.push("(none)");
  } else {
    data.links.forEach((link, i) => {
      lines.push(`${i + 1}. [${link.type || "Item"}] ${link.title}`);
      lines.push(`   URL: ${link.url}`);
      lines.push(`   Tags/Note: ${link.tags || ""}`);
    });
  }
  lines.push("");
  lines.push("NEXT STEPS");
  if (data.tasks.length === 0) {
    lines.push("(none)");
  } else {
    data.tasks.forEach((task, i) => {
      lines.push(`${i + 1}. ${task.done ? "[x]" : "[ ]"} ${task.text}`);
    });
  }
  return lines.join("\\n");
}

function buildCsvExport(data) {
  const rows = [
    ["section", "type", "title_or_text", "url", "tags_or_note", "done", "saved_at"]
  ];

  rows.push(["selection", "Location", data.location, "", "", "", data.exportedAt]);
  rows.push(["selection", "Job Family", data.family, "", "", "", data.exportedAt]);
  rows.push(["notes", "Thinking Space", data.notes, "", "", "", data.exportedAt]);

  data.links.forEach(link => {
    rows.push(["saved_item", link.type || "Item", link.title, link.url, link.tags || "", "", link.savedAt || ""]);
  });

  data.tasks.forEach(task => {
    rows.push(["task", "Next Step", task.text, "", "", task.done ? "true" : "false", ""]);
  });

  return rows.map(row => row.map(csvEscape).join(",")).join("\\n");
}

qs("#exportTxt")?.addEventListener("click", () => {
  exportFile(buildTxtExport(collectExportData()), "txt", "text/plain");
});

qs("#exportCsv")?.addEventListener("click", () => {
  exportFile(buildCsvExport(collectExportData()), "csv", "text/csv");
});

qs("#exportData")?.addEventListener("click", () => {
  exportFile(JSON.stringify(collectExportData(), null, 2), "json", "application/json");
});

qs("#clearData")?.addEventListener("click", () => {
  const ok = confirm("Start a fresh WayFinder workspace?\n\nThis will remove:\n\n• Notes\n• Saved Links\n• Checklist Items\n\nThis only affects this browser.");
  if (!ok) return;
  ["wf_notes", "wf_links", "wf_location", "wf_family", "wf_tasks"].forEach(key => localStorage.removeItem(key));
  selectedLocation = "Brighton";
  selectedFamily = "Systems / Analyst";
  if (qs("#notesText")) qs("#notesText").value = "";
  renderSelects();
  renderFamilies();
  renderSearches();
  renderLinks();
  renderTasks();
});

if (qs("#notesText")) {
  qs("#notesText").value = localStorage.getItem("wf_notes") || localStorage.getItem("lp_notes") || "";
}

renderSelects();
renderFamilies();
renderSearches();
renderLinks();
renderTitles();
renderPopularSearches();
renderCompanies();
renderProgramSearches();
renderProgramCards();
renderTasks();
