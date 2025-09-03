'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  const result = {};

  const rules = sourceString.split(';').filter((rule) => rule.trim() !== '');

  rules.forEach((rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
