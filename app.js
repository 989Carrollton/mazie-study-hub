(function () {
  "use strict";

  const PASSWORD = "mazie6";
  const GATE_KEY = "mazie_hub_unlocked";

  // ——— Units (data-driven; add more subjects here later) ———
  const UNITS = [
    {
      id: "earth-science",
      title: "Earth Science Lab",
      emoji: "🌍",
      subtitle: "6th Grade · Test 9/15/2026 · Earth systems, interior, minerals & rocks",
      welcome: "Hey Mazie! Pick a mode to get ready for your Earth Science test. You've got this! 💪",
      quizTitle: "Earth Science Quiz",
      readyMsg: "You're ready for that Earth Science test!"
    }
  ];

  let currentUnit = null;

  // ——— Study sections ———
  const SECTIONS = [
    {
      id: "intro",
      title: "What is Earth Science?",
      short: "1. Intro",
      html: `
        <h2>What is Earth Science?</h2>
        <p>Earth Science is the <strong>scientific study of Earth and the universe around it</strong>. It helps us understand volcanoes, weather, resources, oceans, and natural hazards.</p>
        <p>Long ago, people used careful <strong>observation</strong> — China recorded earthquakes (780 B.C.), Greeks cataloged rocks, and the Maya tracked the sky. Later, tools like the <strong>microscope</strong> and <strong>telescope</strong> helped scientists see tiny and distant things. That work grew into the field we call Earth Science.</p>
        <h3>Four main areas</h3>
        <ul>
          <li><strong>Geology</strong> — study of the solid Earth (surface + interior). Often called the “main” Earth Science. Processes, structure, and history.</li>
          <li><strong>Meteorology</strong> — study of the atmosphere and how it makes weather and climate. (Meteorologists do <em>not</em> study meteors!)</li>
          <li><strong>Astronomy</strong> — study of the universe. Included because space objects affect Earth (moon → tides, sun → weather, asteroids → danger).</li>
          <li><strong>Oceanography</strong> — study of Earth’s oceans: composition, how water moves, and how oceans change.</li>
        </ul>
        <h3>Geology specialists</h3>
        <ul>
          <li><strong>Mineralogist</strong> — studies minerals</li>
          <li><strong>Petrologist</strong> — studies rocks and how they form</li>
          <li><strong>Volcanologist</strong> — studies volcanoes</li>
          <li><strong>Seismologist</strong> — studies earthquakes</li>
          <li><strong>Paleontologist</strong> — studies fossils</li>
        </ul>
        <div class="callout">Earth scientists help search for energy, forecast hazards like earthquakes, and monitor ocean temperatures, currents, and life.</div>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Earth Science</strong> — Study of Earth and the universe around it</div>
          <div class="term-row"><strong>Geology</strong> — Study of the solid Earth</div>
          <div class="term-row"><strong>Meteorology</strong> — Atmosphere, weather & climate (not meteors!)</div>
          <div class="term-row"><strong>Astronomy</strong> — Study of the universe / space</div>
          <div class="term-row"><strong>Oceanography</strong> — Study of Earth’s oceans</div>
        </div>
      `
    },
    {
      id: "spheres",
      title: "Earth's System (4 Spheres)",
      short: "2. Spheres",
      html: `
        <h2>Earth's System — Four Spheres</h2>
        <p>A <strong>system</strong> is a group of related parts that interact to form a complex whole. Earth System Science studies Earth as interacting “parts” that exchange <strong>matter and energy</strong>.</p>
        <div class="sphere-grid">
          <div class="sphere-pill"><strong>Atmosphere</strong> Outermost — gases (mainly N₂ & O₂) around Earth; air for life; warms/blankets Earth. <em>Atmo = gas</em></div>
          <div class="sphere-pill"><strong>Biosphere</strong> All living things; where life exists. <em>Bio = life</em></div>
          <div class="sphere-pill"><strong>Geosphere</strong> Largest system — soil, rocks, minerals, continents, ocean floor, and interior. <em>Geo = Earth</em></div>
          <div class="sphere-pill"><strong>Hydrosphere</strong> All water on/under Earth and liquid water in the air. ~97% is salty ocean. <em>Hydro = water</em></div>
        </div>
        <h3>Spheres interact</h3>
        <p>A change in one sphere affects the others — sometimes in helpful ways, sometimes in harmful ways.</p>
        <ul>
          <li><strong>Positive example:</strong> Rain on plants = hydrosphere + biosphere working together.</li>
          <li><strong>2011 Japan tsunami:</strong> Tectonic plates (geosphere) → tidal wave (hydrosphere) → damage to land/people (geosphere/biosphere) → nuclear material into water/air (hydrosphere/atmosphere).</li>
          <li>A volcano erupting CO₂: geosphere causes a change that affects the atmosphere.</li>
        </ul>
        <h3>Practice — which spheres?</h3>
        <div class="practice-box">
          <ul>
            <li>Ocean currents & climates → <strong>H + A</strong></li>
            <li>Plant roots breaking rock → <strong>B + G</strong></li>
            <li>Climber cooled by a breeze → <strong>B + G + A</strong></li>
            <li>Water dissolving minerals forming caves → <strong>H + G</strong></li>
          </ul>
        </div>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>System</strong> — Related parts that interact as a complex whole</div>
          <div class="term-row"><strong>Geosphere</strong> — Solid Earth (largest system)</div>
          <div class="term-row"><strong>Atmosphere</strong> — Layer of gases around Earth</div>
          <div class="term-row"><strong>Hydrosphere</strong> — All of Earth’s water (~97% ocean)</div>
          <div class="term-row"><strong>Biosphere</strong> — All living things</div>
        </div>
      `
    },
    {
      id: "interior",
      title: "Interior of the Earth",
      short: "3. Interior",
      html: `
        <h2>Interior of the Earth</h2>
        <p><strong>Learning target:</strong> Name and describe Earth’s interior layers.</p>
        <div class="callout">Scientists can’t dig deep enough — deepest mines/wells barely scratch the crust (deepest hole ~7.5 miles). They study the interior mainly using <strong>seismic waves</strong> from earthquakes. Waves change <strong>speed and direction</strong> depending on the material: slower through hot melted rock, faster through cold solid rock.</div>
        <p>Temperature and pressure both <strong>increase with depth</strong>. Deep rocks are denser because pressure squeezes them.</p>
        <h3>Layers (shallow → deep)</h3>
        <ul>
          <li><strong>Crust</strong> — Top, <em>thinnest</em>, and <em>coolest</em> layer; holds minerals/resources. Two kinds: <strong>continental</strong> (continents) and <strong>oceanic</strong> (seabed). Only layer humans have explored.</li>
          <li><strong>Mantle</strong> — <em>Thickest</em> layer; hot, flowing rocky material (magma). Moves slowly “like melted chocolate.” Linked to earthquakes & volcanoes. Upper mantle is more solid; lower mantle flows more easily. Humans have never explored it.</li>
          <li><strong>Outer core</strong> — Layer of <strong>liquid metals (nickel & iron)</strong> so hot it stays melted. Flowing metal creates Earth’s <strong>magnetic field</strong> — an invisible shield against harmful solar radiation.</li>
          <li><strong>Inner core</strong> — Solid metal center (iron & nickel). Hotter than the Sun but stays <strong>solid</strong> because of incredible <strong>pressure</strong>.</li>
        </ul>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Seismic waves</strong> — Energy waves that reveal layers by changing speed/direction</div>
          <div class="term-row"><strong>Crust</strong> — Thin outer solid layer (continental + oceanic)</div>
          <div class="term-row"><strong>Mantle</strong> — Thickest rocky layer; magma</div>
          <div class="term-row"><strong>Outer core</strong> — Liquid Ni-Fe; makes magnetic field</div>
          <div class="term-row"><strong>Inner core</strong> — Solid metal center; solid from pressure</div>
        </div>
      `
    },
    {
      id: "minerals",
      title: "Minerals",
      short: "4. Minerals",
      html: `
        <h2>What are Minerals?</h2>
        <p>A <strong>mineral</strong> is a <strong>natural, inorganic solid</strong> with a <strong>unique chemical makeup</strong> and an <strong>orderly crystal structure</strong>.</p>
        <h3>Four questions — ALL must be YES</h3>
        <ul>
          <li>Is it inorganic? (not from living things)</li>
          <li>Does it occur naturally?</li>
          <li>Is it a solid with crystals?</li>
          <li>Does it have a definite chemical composition?</li>
        </ul>
        <div class="callout"><strong>Coal is NOT a mineral</strong> — made of once-living things. Brass, steel, and cubic zirconia are manufactured → not minerals. Iron, quartz, and diamond occur in nature and can be minerals.</div>
        <p>There are 3000+ known minerals, but fewer than <strong>20 rock-forming minerals</strong> make up most of Earth’s crust rocks.</p>
        <h3>Properties used to identify minerals</h3>
        <ul>
          <li><strong>Color</strong> — Easy to see, but <em>unreliable</em> (same mineral can be many colors).</li>
          <li><strong>Streak</strong> — Powder color on a ceramic tile.</li>
          <li><strong>Luster</strong> — How light reflects (metallic, glassy, waxy, pearly…).</li>
          <li><strong>Hardness</strong> — Resist scratching; Mohs scale <strong>1 (soft) → 10 (hard)</strong>.</li>
          <li><strong>Cleavage</strong> — Breaks along smooth, flat surfaces.</li>
          <li><strong>Fracture</strong> — Breaks in irregular or curved shapes.</li>
        </ul>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Mineral</strong> — Natural, inorganic solid; unique chemistry; crystal structure</div>
          <div class="term-row"><strong>Inorganic</strong> — Not made of living things or their remains</div>
          <div class="term-row"><strong>Streak</strong> — Color of the mineral in powder form</div>
          <div class="term-row"><strong>Luster</strong> — How light reflects off a mineral</div>
          <div class="term-row"><strong>Hardness</strong> — How well it resists scratching (1–10)</div>
          <div class="term-row"><strong>Cleavage / Fracture</strong> — Smooth flat breaks vs irregular breaks</div>
        </div>
      `
    },
    {
      id: "rocks",
      title: "Types of Rocks",
      short: "5. Rocks",
      html: `
        <h2>Types of Rocks</h2>
        <p>A <strong>rock</strong> is naturally formed material that makes up solid Earth, made of minerals. Rocks are grouped by <strong>how they form</strong> into three types.</p>
        <h3>Igneous</h3>
        <p>Form when molten rock cools and hardens. <strong>Magma</strong> is below the surface (rises because it’s less dense). <strong>Lava</strong> is magma that erupts onto the surface.</p>
        <ul>
          <li><strong>Intrusive</strong> — Cools slowly underground (thousands of years) → <em>large crystals</em> / coarse-grained.</li>
          <li><strong>Extrusive</strong> — Cools fast on the surface (seconds to months) → <em>tiny or no crystals</em>. Examples: <strong>obsidian</strong> (glass-like), <strong>pumice</strong> (holey, floats!).</li>
        </ul>
        <h3>Sedimentary</h3>
        <p><strong>Sediments</strong> (sand, mud, shells, bits of rock) settle in layers (often lakes/oceans), get deposited, then <strong>compact</strong> and harden over millions of years.</p>
        <ul>
          <li><strong>Sandstone</strong> — compressed sand grains (mainly quartz)</li>
          <li><strong>Limestone</strong> — powdery when processed; used in toothpaste and glass</li>
        </ul>
        <h3>Metamorphic</h3>
        <p>Changed by <strong>heat and pressure</strong> (<em>morph</em> = “to change”). Can form from any igneous or sedimentary rock — without necessarily melting.</p>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Igneous</strong> — From cooling magma/lava</div>
          <div class="term-row"><strong>Intrusive / Extrusive</strong> — Slow underground vs fast on surface</div>
          <div class="term-row"><strong>Sedimentary</strong> — Layered sediments compacted</div>
          <div class="term-row"><strong>Metamorphic</strong> — Changed by heat & pressure</div>
        </div>
      `
    },
    {
      id: "cycle",
      title: "Rock Cycle",
      short: "6. Rock Cycle",
      html: `
        <h2>The Rock Cycle</h2>
        <p>Any rock type can become any other. The rock cycle has <strong>no beginning or end</strong>. It can take hundreds to millions of years. A rock <strong>doesn’t have to pass through every stage</strong>.</p>
        <h3>Example path</h3>
        <p>Igneous → weathering/erosion → sediments → compact → sedimentary → heat/pressure → metamorphic → melt → magma → cool → igneous again!</p>
        <h3>Key processes</h3>
        <ul>
          <li><strong>Cool & harden</strong> — magma/lava → igneous</li>
          <li><strong>Weathering & erosion</strong> — rock → sediments</li>
          <li><strong>Compacting</strong> — sediments → sedimentary</li>
          <li><strong>Heat & pressure</strong> — rock → metamorphic</li>
          <li><strong>Melting</strong> — rock → magma</li>
        </ul>
        <div class="callout">Much of the continental crust has likely passed through the rock cycle many times!</div>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Rock cycle</strong> — Continuous process; rocks change type; no start/end</div>
          <div class="term-row"><strong>Weathering & erosion</strong> — Break rock into sediments</div>
          <div class="term-row"><strong>Melting</strong> — Turns rock into magma</div>
        </div>
      `
    }
  ];

  // ——— Flashcards ———
  const FLASHCARDS = [
    { term: "Earth Science", def: "The study of Earth and of the universe around it." },
    { term: "Geology", def: "Study of the solid Earth — processes, structure, and history (surface + interior)." },
    { term: "Meteorology", def: "Study of the atmosphere and how it determines weather and climate. (Not meteors!)" },
    { term: "Astronomy", def: "Study of the universe; included because space objects affect Earth (tides, weather, asteroids)." },
    { term: "Oceanography", def: "Study of Earth’s oceans — composition, how water moves, and how oceans change." },
    { term: "Mineralogist", def: "Geologist who studies minerals." },
    { term: "Petrologist", def: "Geologist who studies rocks and how they form." },
    { term: "Volcanologist", def: "Geologist who studies volcanoes." },
    { term: "Seismologist", def: "Geologist who studies earthquakes." },
    { term: "Paleontologist", def: "Geologist who studies fossils." },
    { term: "System", def: "A group of many related parts that interact to form a complex whole." },
    { term: "Atmosphere", def: "The layer of gases (air) surrounding Earth — mainly nitrogen and oxygen." },
    { term: "Biosphere", def: "All living things on Earth; parts of Earth where life exists." },
    { term: "Geosphere", def: "The solid part of Earth — rocks, land, soil, minerals, and interior. Largest Earth system." },
    { term: "Hydrosphere", def: "All of Earth’s water. About 97% is salty ocean water." },
    { term: "Mineral", def: "A natural, inorganic solid with a unique chemical makeup and orderly crystal structure." },
    { term: "Inorganic", def: "Not made of living things or their remains." },
    { term: "Streak", def: "The color of a mineral in powder form (tested on ceramic tile)." },
    { term: "Luster", def: "How light reflects off a mineral (metallic, glassy, etc.)." },
    { term: "Hardness", def: "How well a mineral resists scratching (scale 1 soft → 10 hard)." },
    { term: "Cleavage", def: "When a mineral breaks along smooth, flat surfaces." },
    { term: "Fracture", def: "When a mineral breaks in irregular or curved shapes." },
    { term: "Igneous rock", def: "Rock formed when magma or lava cools and hardens." },
    { term: "Magma", def: "Molten rock beneath Earth’s surface." },
    { term: "Lava", def: "Magma that has reached Earth’s surface." },
    { term: "Intrusive igneous", def: "Igneous rock that cooled slowly underground → large crystals." },
    { term: "Extrusive igneous", def: "Igneous rock that cooled quickly on the surface → tiny or no crystals." },
    { term: "Obsidian", def: "Extrusive igneous rock that looks like glass." },
    { term: "Pumice", def: "Extrusive igneous rock full of holes; it can float!" },
    { term: "Sedimentary rock", def: "Rock formed when sediments are compacted in layers over a long time." },
    { term: "Metamorphic rock", def: "Rock changed by heat and pressure (morph = to change)." },
    { term: "Rock cycle", def: "The continuous process by which rocks change from one type to another — no beginning or end." },
    { term: "Crust", def: "Earth’s thin outer solid layer (coolest). Continental + oceanic. Only layer humans have explored." },
    { term: "Mantle", def: "Thickest rocky layer beneath the crust; hot flowing magma-like rock." },
    { term: "Outer core", def: "Liquid metal (nickel & iron) layer; motion creates Earth’s magnetic field." },
    { term: "Inner core", def: "Solid metal center of Earth. Hotter than the Sun but solid due to extreme pressure." },
    { term: "Seismic waves", def: "Energy waves from earthquakes that change speed/direction in different materials — how we “see” Earth’s layers." }
  ];

  // ——— Quiz ———
  // type: 'mc' | 'ms'  (multiple choice | multi-select)
  // answer: index or array of indices
  const QUIZ = [
    {
      type: "mc",
      q: "What is Earth Science?",
      choices: [
        "Only the study of rocks",
        "The study of Earth and the universe around it",
        "The study of plants and animals only",
        "The study of meteors"
      ],
      answer: 1,
      explain: "Earth Science is the scientific study of Earth and the universe around it — volcanoes, weather, oceans, space effects, and more."
    },
    {
      type: "ms",
      q: "Which are the four main areas of Earth Science? (Select all that apply)",
      choices: ["Geology", "Meteorology", "Astronomy", "Oceanography", "Astrology"],
      answer: [0, 1, 2, 3],
      explain: "The four areas are geology, meteorology, astronomy, and oceanography. Astrology is not a science!"
    },
    {
      type: "mc",
      q: "Do meteorologists study meteors?",
      choices: ["Yes — that’s why it’s called meteorology", "No — they study the atmosphere, weather, and climate", "Only during meteor showers", "Yes, and also stars"],
      answer: 1,
      explain: "Meteorologists study the atmosphere and how it determines weather and climate — not meteors!"
    },
    {
      type: "mc",
      q: "Why is astronomy part of Earth Science?",
      choices: [
        "Because Earth is the only planet",
        "Space objects affect Earth (moon → tides, sun → weather, asteroids)",
        "Astronomers dig in the crust",
        "It isn’t — astronomy is separate"
      ],
      answer: 1,
      explain: "Space objects affect Earth: the moon causes tides, the sun drives weather, and asteroids can cause devastation."
    },
    {
      type: "mc",
      q: "A seismologist studies…",
      choices: ["Volcanoes", "Fossils", "Earthquakes", "Minerals"],
      answer: 2,
      explain: "A seismologist is a geologist who studies earthquakes. (Volcanologist → volcanoes; paleontologist → fossils; mineralogist → minerals.)"
    },
    {
      type: "mc",
      q: "Which is the largest Earth system (sphere)?",
      choices: ["Atmosphere", "Biosphere", "Hydrosphere", "Geosphere"],
      answer: 3,
      explain: "The geosphere is the largest — Earth itself: rocks, soil, minerals, continents, ocean floor, and interior."
    },
    {
      type: "mc",
      q: "About what percent of the hydrosphere is salty ocean water?",
      choices: ["About 50%", "About 75%", "About 97%", "About 10%"],
      answer: 2,
      explain: "About 97% of Earth’s water (the hydrosphere) is salty ocean water."
    },
    {
      type: "ms",
      q: "Situation 1: Ocean currents influence climates. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [0, 3],
      explain: "Ocean currents (hydrosphere) and climates (atmosphere) → H + A."
    },
    {
      type: "ms",
      q: "Situation 2: Plant roots crack and break rock. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [1, 2],
      explain: "Living plant roots (biosphere) breaking rock (geosphere) → B + G. Not water or air!"
    },
    {
      type: "ms",
      q: "Situation 3: A climber on a mountain is cooled by a breeze. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [0, 1, 2],
      explain: "Person (biosphere) on mountain (geosphere) cooled by breeze (atmosphere) → B + G + A."
    },
    {
      type: "ms",
      q: "Situation 4: Water dissolves minerals and forms caves. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [2, 3],
      explain: "Water (hydrosphere) dissolving minerals in rock (geosphere) → H + G. Scientists study caves!"
    },
    {
      type: "mc",
      q: "How do scientists mainly learn about Earth’s deep interior?",
      choices: [
        "Digging mines all the way to the mantle",
        "Using seismic waves from earthquakes",
        "Sending robots to the inner core",
        "Looking through very powerful telescopes"
      ],
      answer: 1,
      explain: "We can’t dig deep enough (deepest hole ~7.5 miles). Seismic waves change speed and direction in different materials, revealing the layers."
    },
    {
      type: "mc",
      q: "Order Earth’s layers from shallow (outside) to deep (center):",
      choices: [
        "Mantle → Crust → Inner core → Outer core",
        "Crust → Mantle → Outer core → Inner core",
        "Crust → Outer core → Mantle → Inner core",
        "Inner core → Outer core → Mantle → Crust"
      ],
      answer: 1,
      explain: "Shallow → deep: Crust → Mantle → Outer core → Inner core."
    },
    {
      type: "mc",
      q: "Which layer is the thickest?",
      choices: ["Crust", "Mantle", "Outer core", "Inner core"],
      answer: 1,
      explain: "The mantle is the thickest layer. The crust is the thinnest."
    },
    {
      type: "mc",
      q: "The outer core is made of ______ and creates Earth’s ______.",
      choices: [
        "Solid rock; gravity",
        "Liquid nickel & iron; magnetic field",
        "Gas; atmosphere",
        "Solid iron only; ocean currents"
      ],
      answer: 1,
      explain: "The outer core is liquid nickel and iron. Its flowing metal creates Earth’s magnetic field — a shield against harmful solar radiation."
    },
    {
      type: "mc",
      q: "Why is the inner core solid even though it’s hotter than the Sun?",
      choices: [
        "Because it’s made of ice",
        "Because of extreme pressure",
        "Because it’s the coolest layer",
        "Because water freezes it"
      ],
      answer: 1,
      explain: "Incredible pressure at Earth’s center keeps the iron & nickel inner core solid, even though it’s hotter than the Sun."
    },
    {
      type: "mc",
      q: "Is coal a mineral? Why?",
      choices: [
        "Yes — it’s a solid found in Earth",
        "Yes — it has crystals",
        "No — it’s made of once-living things (organic), so it fails the inorganic test",
        "No — because it’s black"
      ],
      answer: 2,
      explain: "A mineral must be inorganic. Coal comes from once-living plants, so it is NOT a mineral."
    },
    {
      type: "mc",
      q: "Which of these is a mineral?",
      choices: ["Steel", "Cubic zirconia", "Brass", "Quartz"],
      answer: 3,
      explain: "Quartz occurs naturally. Steel, brass, and cubic zirconia are manufactured, so they are not minerals."
    },
    {
      type: "mc",
      q: "Why is color often unreliable for identifying minerals?",
      choices: [
        "Minerals have no color",
        "The same mineral can be more than one color",
        "Color only works underwater",
        "Color changes every day"
      ],
      answer: 1,
      explain: "Color is easy to observe but unreliable — the same mineral can appear in many colors. Streak is more trustworthy."
    },
    {
      type: "mc",
      q: "What is the difference between cleavage and fracture?",
      choices: [
        "Cleavage = irregular breaks; fracture = smooth flat breaks",
        "Cleavage = smooth flat breaks; fracture = irregular or curved breaks",
        "They mean the same thing",
        "Cleavage is about hardness; fracture is about color"
      ],
      answer: 1,
      explain: "Cleavage = breaks along smooth, flat surfaces. Fracture = breaks in irregular or curved shapes."
    },
    {
      type: "mc",
      q: "Intrusive igneous rocks cool ______ underground and have ______ crystals.",
      choices: [
        "quickly; tiny or no",
        "slowly; large",
        "quickly; large",
        "slowly; no"
      ],
      answer: 1,
      explain: "Intrusive = cools slowly underground → large crystals. Extrusive = cools fast on the surface → tiny or no crystals."
    },
    {
      type: "mc",
      q: "Which rock is extrusive, looks like glass, and cools very fast?",
      choices: ["Sandstone", "Pumice", "Obsidian", "Limestone"],
      answer: 2,
      explain: "Obsidian is extrusive igneous rock that looks like glass. Pumice is also extrusive but is holey and can float."
    },
    {
      type: "mc",
      q: "Metamorphic rocks form when rocks are changed by…",
      choices: ["Only melting into lava", "Heat and pressure", "Ocean waves alone", "Freezing water"],
      answer: 1,
      explain: "Metamorphic means “to change.” Heat and pressure change rocks into metamorphic rocks (without necessarily melting)."
    },
    {
      type: "mc",
      q: "In the rock cycle, what happens next if an igneous rock is weathered and eroded?",
      choices: [
        "It instantly becomes metamorphic",
        "It forms sediments that can compact into sedimentary rock",
        "It always melts into magma first",
        "The rock cycle stops"
      ],
      answer: 1,
      explain: "Weathering & erosion break rock into sediments. Those can compact into sedimentary rock. The cycle has no beginning or end!"
    },
    {
      type: "mc",
      q: "Does the rock cycle have a beginning and an end?",
      choices: [
        "Yes — it always starts with magma",
        "Yes — it ends with sedimentary rock",
        "No — any rock type can become any other; a rock needn’t pass through every stage",
        "No — rocks never change"
      ],
      answer: 2,
      explain: "The rock cycle has no beginning or end. Any rock can become any other, and a rock doesn’t have to pass through every stage."
    },
    {
      type: "mc",
      q: "What happens to temperature and pressure as you go deeper into Earth?",
      choices: [
        "Both decrease",
        "Temperature increases; pressure decreases",
        "Both increase",
        "They stay the same"
      ],
      answer: 2,
      explain: "Both temperature and pressure increase with depth. Pressure squeezes rocks so deep rocks are denser."
    },
    {
      type: "mc",
      q: "Hardness of minerals is measured on a scale from…",
      choices: ["0 to 100", "1 (softest) to 10 (hardest)", "A to Z", "Cold to hot"],
      answer: 1,
      explain: "The Mohs-type hardness scale goes from 1 (softest) to 10 (hardest)."
    }
  ];

  // ——— State ———
  let flashOrder = [];
  let flashIndex = 0;
  let flashFlipped = false;
  let knowSet = new Set();
  let learningSet = new Set();

  let quizOrder = [];
  let quizIndex = 0;
  let quizAnswers = []; // { selected, correct, qIndex }
  let quizSelected = [];
  let quizLocked = false;

  // ——— DOM ———
  const $ = (sel) => document.querySelector(sel);
  const gate = $("#gate");
  const app = $("#app");
  const btnHome = $("#btn-home");
  const brandTitle = $("#brand-title");
  const brandSubtitle = $("#brand-subtitle");

  // Gate
  function checkGate() {
    if (sessionStorage.getItem(GATE_KEY) === "1") {
      gate.classList.add("hidden");
      app.classList.remove("hidden");
    }
  }
  $("#gate-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = $("#gate-pw").value.trim();
    if (pw === PASSWORD) {
      sessionStorage.setItem(GATE_KEY, "1");
      $("#gate-error").classList.add("hidden");
      gate.classList.add("hidden");
      app.classList.remove("hidden");
    } else {
      $("#gate-error").classList.remove("hidden");
      $("#gate-pw").value = "";
      $("#gate-pw").focus();
    }
  });

  // ——— Hub / unit branding ———
  function setHubBrand() {
    brandTitle.textContent = "Mazie's Study Hub";
    brandSubtitle.textContent = "Pick a subject to study";
  }

  function setUnitBrand(unit) {
    brandTitle.textContent = unit.emoji + " " + unit.title;
    brandSubtitle.textContent = unit.subtitle;
  }

  function renderUnits() {
    const grid = $("#units-grid");
    grid.innerHTML = "";
    UNITS.forEach((unit) => {
      const btn = document.createElement("button");
      btn.className = "mode-card unit-card";
      btn.type = "button";
      btn.dataset.unit = unit.id;
      btn.innerHTML =
        '<span class="mode-emoji">' + unit.emoji + "</span>" +
        '<span class="mode-title">' + unit.title + "</span>" +
        '<span class="mode-desc">' + unit.subtitle + "</span>";
      btn.addEventListener("click", () => selectUnit(unit.id));
      grid.appendChild(btn);
    });
  }

  function selectUnit(id) {
    const unit = UNITS.find((u) => u.id === id);
    if (!unit) return;
    currentUnit = unit;
    setUnitBrand(unit);
    $("#unit-welcome").textContent = unit.welcome;
    const quizTitle = $("#quiz-intro-title");
    if (quizTitle) quizTitle.textContent = unit.quizTitle || "Quiz";
    showView("unit-home");
  }

  // Navigation
  // views: units (hub) → unit-home (modes) → study | flash | quiz
  function showView(name) {
    ["units", "unit-home", "study", "flash", "quiz"].forEach((v) => {
      const el = $("#view-" + v);
      if (el) el.classList.toggle("hidden", v !== name);
    });
    btnHome.classList.toggle("hidden", name === "units");
  }

  btnHome.addEventListener("click", () => {
    const studyEl = $("#view-study");
    const flashEl = $("#view-flash");
    const quizEl = $("#view-quiz");
    const unitHomeEl = $("#view-unit-home");
    const inMode =
      (studyEl && !studyEl.classList.contains("hidden")) ||
      (flashEl && !flashEl.classList.contains("hidden")) ||
      (quizEl && !quizEl.classList.contains("hidden"));
    if (inMode) {
      showView("unit-home");
      if (currentUnit) setUnitBrand(currentUnit);
    } else if (unitHomeEl && !unitHomeEl.classList.contains("hidden")) {
      currentUnit = null;
      setHubBrand();
      showView("units");
    } else {
      currentUnit = null;
      setHubBrand();
      showView("units");
    }
  });

  document.querySelectorAll(".mode-card[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "study") { initStudy(); showView("study"); }
      else if (mode === "flash") { initFlash(); showView("flash"); }
      else if (mode === "quiz") { initQuizHome(); showView("quiz"); }
    });
  });

  // ——— Study ———
  function initStudy() {
    const nav = $("#study-nav");
    nav.innerHTML = "";
    SECTIONS.forEach((s, i) => {
      const chip = document.createElement("button");
      chip.className = "sec-chip" + (i === 0 ? " active" : "");
      chip.textContent = s.short;
      chip.addEventListener("click", () => {
        nav.querySelectorAll(".sec-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        $("#study-content").innerHTML = s.html;
        window.scrollTo(0, 0);
      });
      nav.appendChild(chip);
    });
    $("#study-content").innerHTML = SECTIONS[0].html;
  }

  // ——— Flashcards ———
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function initFlash() {
    flashOrder = shuffle(FLASHCARDS.map((_, i) => i));
    flashIndex = 0;
    flashFlipped = false;
    knowSet = new Set();
    learningSet = new Set();
    renderFlash();
  }

  function currentFlash() {
    return FLASHCARDS[flashOrder[flashIndex]];
  }

  function renderFlash() {
    const card = currentFlash();
    $("#flash-term").textContent = card.term;
    $("#flash-def").textContent = card.def;
    $("#flashcard").classList.toggle("flipped", flashFlipped);
    $("#flash-progress").textContent = (flashIndex + 1) + " / " + flashOrder.length;
    $("#stat-know").textContent = knowSet.size;
    $("#stat-learning").textContent = learningSet.size;
  }

  function flipCard() {
    flashFlipped = !flashFlipped;
    $("#flashcard").classList.toggle("flipped", flashFlipped);
  }

  $("#flashcard").addEventListener("click", flipCard);
  $("#flashcard").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flipCard(); }
  });

  $("#btn-shuffle").addEventListener("click", () => {
    flashOrder = shuffle(FLASHCARDS.map((_, i) => i));
    flashIndex = 0;
    flashFlipped = false;
    renderFlash();
  });

  $("#btn-prev").addEventListener("click", () => {
    flashIndex = (flashIndex - 1 + flashOrder.length) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });
  $("#btn-next").addEventListener("click", () => {
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });

  $("#btn-know").addEventListener("click", () => {
    const id = flashOrder[flashIndex];
    knowSet.add(id);
    learningSet.delete(id);
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });
  $("#btn-learning").addEventListener("click", () => {
    const id = flashOrder[flashIndex];
    learningSet.add(id);
    knowSet.delete(id);
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });

  // ——— Quiz ———
  function initQuizHome() {
    $("#quiz-start").classList.remove("hidden");
    $("#quiz-play").classList.add("hidden");
    $("#quiz-results").classList.add("hidden");
    $("#quiz-q-count").textContent = QUIZ.length + " questions · mix of multiple choice & multi-select";
  }

  function startQuiz() {
    quizOrder = shuffle(QUIZ.map((_, i) => i));
    quizIndex = 0;
    quizAnswers = [];
    $("#quiz-start").classList.add("hidden");
    $("#quiz-results").classList.add("hidden");
    $("#quiz-play").classList.remove("hidden");
    renderQuestion();
  }

  function currentQ() {
    return QUIZ[quizOrder[quizIndex]];
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const as = a.slice().sort((x, y) => x - y);
    const bs = b.slice().sort((x, y) => x - y);
    return as.every((v, i) => v === bs[i]);
  }

  function renderQuestion() {
    const q = currentQ();
    quizSelected = [];
    quizLocked = false;
    const pct = (quizIndex / quizOrder.length) * 100;
    $("#quiz-bar").style.width = pct + "%";
    $("#quiz-num").textContent = "Question " + (quizIndex + 1) + " of " + quizOrder.length;
    const typeLabel = q.type === "ms" ? "Multi-select — pick all that apply" : "Multiple choice";
    $("#quiz-question").innerHTML = '<span class="q-type">' + typeLabel + "</span><br>" + escapeHtml(q.q);

    const box = $("#quiz-choices");
    box.innerHTML = "";
    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice" + (q.type === "ms" ? " multi" : "");
      btn.dataset.idx = i;
      const letter = String.fromCharCode(65 + i);
      btn.innerHTML = '<span class="marker">' + (q.type === "ms" ? "☐" : letter) + "</span><span>" + escapeHtml(c) + "</span>";
      btn.addEventListener("click", () => onChoice(i, btn));
      box.appendChild(btn);
    });

    $("#quiz-feedback").classList.add("hidden");
    $("#btn-submit-q").classList.remove("hidden");
    $("#btn-submit-q").disabled = false;
    $("#btn-next-q").classList.add("hidden");
  }

  function onChoice(i, btn) {
    if (quizLocked) return;
    const q = currentQ();
    if (q.type === "mc") {
      quizSelected = [i];
      $("#quiz-choices").querySelectorAll(".choice").forEach((el) => el.classList.remove("selected"));
      btn.classList.add("selected");
    } else {
      const pos = quizSelected.indexOf(i);
      if (pos >= 0) {
        quizSelected.splice(pos, 1);
        btn.classList.remove("selected");
        btn.querySelector(".marker").textContent = "☐";
      } else {
        quizSelected.push(i);
        btn.classList.add("selected");
        btn.querySelector(".marker").textContent = "☑";
      }
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  $("#btn-submit-q").addEventListener("click", () => {
    if (quizLocked) return;
    const q = currentQ();
    if (quizSelected.length === 0) {
      $("#quiz-feedback").textContent = "Pick an answer first — you've got this!";
      $("#quiz-feedback").className = "quiz-feedback no";
      $("#quiz-feedback").classList.remove("hidden");
      return;
    }
    quizLocked = true;
    const correctAns = q.type === "mc" ? [q.answer] : q.answer.slice();
    const isCorrect = arraysEqual(quizSelected, correctAns);

    const choiceEls = $("#quiz-choices").querySelectorAll(".choice");
    choiceEls.forEach((el) => {
      const idx = +el.dataset.idx;
      if (correctAns.indexOf(idx) >= 0) el.classList.add("correct");
      if (quizSelected.indexOf(idx) >= 0 && correctAns.indexOf(idx) < 0) el.classList.add("wrong");
    });

    const fb = $("#quiz-feedback");
    if (isCorrect) {
      fb.className = "quiz-feedback ok";
      fb.textContent = "Nice work! ✓ " + q.explain;
    } else {
      fb.className = "quiz-feedback no";
      fb.textContent = "Not quite — keep going! " + q.explain;
    }
    fb.classList.remove("hidden");

    quizAnswers.push({
      qIndex: quizOrder[quizIndex],
      selected: quizSelected.slice(),
      correct: isCorrect
    });

    $("#btn-submit-q").classList.add("hidden");
    $("#btn-next-q").classList.remove("hidden");
    $("#btn-next-q").textContent =
      quizIndex + 1 >= quizOrder.length ? "See Results →" : "Next Question →";
  });

  $("#btn-next-q").addEventListener("click", () => {
    if (quizIndex + 1 >= quizOrder.length) {
      showResults();
    } else {
      quizIndex++;
      renderQuestion();
      window.scrollTo(0, 0);
    }
  });

  function showResults() {
    $("#quiz-play").classList.add("hidden");
    $("#quiz-results").classList.remove("hidden");
    $("#quiz-bar").style.width = "100%";

    const total = quizAnswers.length;
    const right = quizAnswers.filter((a) => a.correct).length;
    const pct = Math.round((right / total) * 100);

    $("#results-score").textContent = right + " / " + total + " (" + pct + "%)";

    const readyMsg = (currentUnit && currentUnit.readyMsg) || "You're ready for that test!";
    let emoji = "🌟", title = "Amazing!", msg = readyMsg;
    if (pct < 60) {
      emoji = "💪"; title = "Keep practicing!";
      msg = "Review the wrong answers below, then try the quiz again. You've got this, Mazie!";
    } else if (pct < 80) {
      emoji = "👍"; title = "Good job!";
      msg = "Solid work! Check the ones you missed, then retry to lock it in.";
    } else if (pct < 100) {
      emoji = "🎉"; title = "Great job!";
      msg = "You're almost perfect — peek at the review, then crush it next time!";
    }

    $("#results-emoji").textContent = emoji;
    $("#results-title").textContent = title;
    $("#results-msg").textContent = msg;

    const review = $("#results-review");
    review.innerHTML = "";
    const wrongs = quizAnswers.filter((a) => !a.correct);
    if (wrongs.length === 0) {
      review.innerHTML = '<p style="text-align:center;color:var(--teal);font-weight:600;">You got every question right! 🏆</p>';
    } else {
      const h = document.createElement("h3");
      h.textContent = "Review missed questions";
      h.style.color = "var(--sand)";
      h.style.marginBottom = "12px";
      review.appendChild(h);

      wrongs.forEach((a) => {
        const q = QUIZ[a.qIndex];
        const correctIdx = q.type === "mc" ? [q.answer] : q.answer;
        const correctText = correctIdx.map((i) => q.choices[i]).join("; ");
        const yourText = a.selected.map((i) => q.choices[i]).join("; ") || "(none)";
        const item = document.createElement("div");
        item.className = "review-item";
        item.innerHTML =
          "<h4>" + escapeHtml(q.q) + "</h4>" +
          "<p>Your answer: " + escapeHtml(yourText) + "</p>" +
          '<p class="correct-ans">Correct: ' + escapeHtml(correctText) + "</p>" +
          '<p class="explain">' + escapeHtml(q.explain) + "</p>";
        review.appendChild(item);
      });
    }
  }

  $("#btn-start-quiz").addEventListener("click", startQuiz);
  $("#btn-retry").addEventListener("click", startQuiz);
  $("#btn-quiz-home").addEventListener("click", () => {
    showView("unit-home");
    if (currentUnit) setUnitBrand(currentUnit);
  });

  // Boot
  checkGate();
  renderUnits();
  setHubBrand();
  showView("units");
})();
