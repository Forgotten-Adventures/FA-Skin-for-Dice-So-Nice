// Font preloader to ensure FA-Windlass font is loaded before dice setup
async function preloadFAFont() {
  try {
    // Create a font face and load it
    const font = new FontFace('FA-Windlass', 'url(modules/fa-dsn-skin/fonts/FA-Windlass.otf)');
    await font.load();
    document.fonts.add(font);
    
    return true;
  } catch (error) {
    return false;
  }
}

// Check if FA-Windlass font is available
function isFAFontAvailable() {
  return document.fonts.check('16px FA-Windlass');
}

Hooks.on('diceSoNiceReady', (dice3d) => {
  // Start font preloading but don't block dice setup
  preloadFAFont().then(() => {
    console.log("FA-Windlass font loaded successfully");
  }).catch(() => {
    console.warn("FA-Windlass font loading failed, using fallback");
  });
  
  // Add our custom FA systems with proper grouping
  dice3d.addSystem({ id: "fa-flat", name: "FA - Logo" }, "default");
  dice3d.addSystem({ id: "fa-colorable", name: "FA - Colorable" }, "default");

  // === DICE PRESETS WITH FA LOGOS ===

  // Font glyph character for FA logo (adjust this character as needed)
  const FA_LOGO_GLYPH = "Ľ"; // Common convention - replace with actual glyph character

  // Add dice presets for image-based systems
  try {
    dice3d.addDicePreset({
      type: "d20",
      labels: [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "modules/fa-dsn-skin/images/FA_Icon_d20.webp"
      ],
      bumpMaps: [
        "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "modules/fa-dsn-skin/images/FA_default_d20_bump_in.webp"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    dice3d.addDicePreset({
      type: "d12",
      labels: [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    dice3d.addDicePreset({
      type: "d10",
      labels: [
        "1", "2", "3", "4", "5", "6", "7", "8", "9","10"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    dice3d.addDicePreset({
      type: "d8",
      labels: [
        "1", "2", "3", "4", "5", "6", "7", "8"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    dice3d.addDicePreset({
      type: "d6",
      labels: [
        "1", "2", "3", "4", "5","6"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    dice3d.addDicePreset({
      type: "d4",
      labels: [
        "1", "2", "3","4"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

     dice3d.addDicePreset({
      type: "d2",
      labels: [
        "1", "modules/fa-dsn-skin/images/FA_Icon.webp"
      ],
      bumpMaps: [
        "", "modules/fa-dsn-skin/images/FA_default_bump_in.webp"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    dice3d.addDicePreset({
      type: "d100",
      labels: [
        "10", "20", "30", "40", "50", "60", "70", "80", "90","100"
      ],
      system: "fa-flat",
      font: "FA-Windlass"
    });

    console.log("FA dice presets added successfully for fa-flat");
  } catch (error) {
    console.error("Error adding FA dice presets for fa-flat:", error);
  }

  // === FA-COLORABLE SYSTEM (FONT GLYPH BASED) ===
  // Delay this system setup slightly to ensure font is ready
  setTimeout(() => {
    // This system uses font glyphs instead of images, making it fully colorable
    try {
      dice3d.addDicePreset({
        type: "d20",
        labels: [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19",
          FA_LOGO_GLYPH
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      dice3d.addDicePreset({
        type: "d12",
        labels: [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12"
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      dice3d.addDicePreset({
        type: "d10",
        labels: [
          "1", "2", "3", "4", "5", "6", "7", "8", "9","10"
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      dice3d.addDicePreset({
        type: "d8",
        labels: [
          "1", "2", "3", "4", "5", "6", "7", "8"
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      dice3d.addDicePreset({
        type: "d6",
        labels: [
          "1", "2", "3", "4", "5","6"
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      dice3d.addDicePreset({
        type: "d4",
        labels: [
          "1", "2", "3","4"
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

       dice3d.addDicePreset({
        type: "d2",
        labels: [
          "1", FA_LOGO_GLYPH
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      dice3d.addDicePreset({
        type: "d100",
        labels: [
          "10", "20", "30", "40", "50", "60", "70", "80", "90","100"
        ],
        system: "fa-colorable",
        font: "FA-Windlass"
      });

      console.log("FA colorable dice presets added successfully with font glyph");
    } catch (error) {
      console.error("Error adding FA colorable dice presets:", error);
    }
  }, 500); // 500ms delay to ensure font is loaded

  // === FA FONT COLORSETS ===
  
  dice3d.addColorset({
    name: 'FA Classic',
    description: "FA Classic",
    category: "Forgotten Adventures",
    texture: "fire",
    material: "metal",
    background: "#6f1616",
    foreground: '#ffffff',
    outline: '#000000',
    edge: '#bb2a2a',
    font: "FA-Windlass"
  });

  dice3d.addColorset({
    name: 'FA Royal Gold',
    description: "FA Royal Gold",
    category: "Forgotten Adventures",
    texture: "fire",
    material: "metal",
    background: "#2c2c2c",
    foreground: '#d4af37',
    outline: '#1a1a1a',
    font: "FA-Windlass"
  });

  dice3d.addColorset({
    name: 'FA Monochrome',
    description: "FA Monochromatic",
    category: "Forgotten Adventures",
    texture: "metal",
    material: "metal",
    background: "#ffffff",
    foreground: '#000000',
    outline: '#ffffff',
    font: "FA-Windlass"
  });

  dice3d.addColorset({
    name: 'FA Royal Blue',
    description: "FA Royal Blue",
    category: "Forgotten Adventures",
    texture: "fire",
    material: "metal",
    background: "#1e3a8a",
    foreground: '#93c5fd',
    outline: '#1e40af',
    font: "FA-Windlass"
  });

  dice3d.addColorset({
    name: 'FA Royal Green',
    description: "FA Royal Green",
    category: "Forgotten Adventures",
    texture: "fire",
    material: "metal",
    background: "#166534",
    foreground: '#86efac',
    outline: '#15803d',
    font: "FA-Windlass"
  });

  dice3d.addColorset({
    name: 'FA Royal Purple',
    description: "FA Royal Purple",
    category: "Forgotten Adventures",
    texture: "fire",
    material: "metal",
    background: "#6b21a8",
    foreground: '#d8b4fe',
    outline: '#7c3aed',
    font: "FA-Windlass"
  });

  console.log("FA Dice module loaded successfully with all dice types!");
});