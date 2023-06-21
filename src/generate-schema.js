import { readFileSync, writeFileSync } from 'node:fs';
const { semanticColors, rawColors } = JSON.parse(readFileSync('./src/colors.json'))

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
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "id": {
                        "type": [ "string", "number" ]
                    }
                }
            }
        },
        "background": {
            "type": "object",
            "properties": {
                "blur": { "type": "integer" },
                "url": { "type": "string" },
                "alpha": { "type": "integer" }
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