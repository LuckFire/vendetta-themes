import { readFileSync, writeFileSync } from 'node:fs';
const { semanticColors, rawColors } = JSON.parse(readFileSync('./src/colors.json'))

// TODO: Add missing schema info
writeFileSync('./.vscode/JSON_Schema/vendetta-theme.json', JSON.stringify({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": "Vendetta Theme Schema",
    "description": "A schema for Vendetta themes.",
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "description": { "type": "string" },
        "authors": {
            "type": "array",
            "items": {
                "name": { "type": "string" },
                "id": { "type": "number" }
            }
        },
        "semanticColors": {
            "type": "object",
            "properties": {
                ...Object.assign({}, ...Object.keys(semanticColors).map((key) => ({
                    [key]: {
                        "type": "array",
                        "items": { "type": "string", "format": "color" }
                    }
                })))
            }
        },
        "rawColors": {
            "type": "object",
            "properties": {
                ...Object.assign({}, ...Object.keys(rawColors).map((key) => ({
                    [key]: { "type": "string", "format": "color" }
                })))
            }
        }
    },
    "required": [ "name", "authors" ]
}, null, 4))