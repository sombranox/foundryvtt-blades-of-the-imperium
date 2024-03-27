/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Base templates
    "systems/blades-of-the-inquisition/templates/actor-sheet.html",
    "systems/blades-of-the-inquisition/templates/crew-sheet.html",
    "systems/blades-of-the-inquisition/templates/faction-sheet.html",
    "systems/blades-of-the-inquisition/templates/npc-sheet.html",

    // Actor Sheet Partials
    "systems/blades-of-the-inquisition/templates/parts/coins.html",
    "systems/blades-of-the-inquisition/templates/parts/attributes.html",
    "systems/blades-of-the-inquisition/templates/parts/turf-list.html",
    "systems/blades-of-the-inquisition/templates/parts/cohort-block.html",
    "systems/blades-of-the-inquisition/templates/parts/factions.html",
    "systems/blades-of-the-inquisition/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
