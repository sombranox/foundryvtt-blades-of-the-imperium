/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Base templates
    "systems/blades-in-the-dark/templates/actor-sheet.html",
    "systems/blades-in-the-dark/templates/crew-sheet.html",
    "systems/blades-in-the-dark/templates/faction-sheet.html",
    "systems/blades-in-the-dark/templates/npc-sheet.html",

    // Actor Sheet Partials
    "systems/blades-in-the-dark/templates/parts/coins.html",
    "systems/blades-in-the-dark/templates/parts/attributes.html",
    "systems/blades-in-the-dark/templates/parts/turf-list.html",
    "systems/blades-in-the-dark/templates/parts/cohort-block.html",
    "systems/blades-in-the-dark/templates/parts/factions.html",
    "systems/blades-in-the-dark/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
