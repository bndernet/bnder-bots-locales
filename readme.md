# Bnder Bots locales

[![image](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white "Discord")](https://bnder.net/discord)
[![image](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white "Website")](https://bnder.net/)

This is a repository for all translations of Bnder Bots, including [Task Manager](https://bnder.net/task), [Knowledge Manager](https://bnder.net/knowledge) and [Calendar Manager](https://bnder.net/calendar).

## Structure

The parent directories are the short codes of the languages including two json files:
- slash_command.json: Contains the translations shown in the discord slash command ui (command descriptions, option descriptions, etc.)
- translations.json: Contains the translations used in the bots when responding to commands
- TSLocalizationKeys.ts: Contains the keys and parameters used in other systems. Every language directory contains this file with translated texts

### Arguments

Some messages contain arguments that are replaced with the actual values when the message is sent. These arguments are represented by double curly braces, for example `{{argument}}`. When translating these messages, make sure to keep the argument placeholder names.

### Formatting options of arguments

Some arguments contain formatting options, for example "length100". These options can be used in an argument by using the following scheme: `{argument, option}` for example `{{name, length100}}`. When translating these messages, make sure to keep the argument placeholder names and the formatting options.

**Supported formatting options:**
- `length100`: Truncates the argument if it is longer than 100 characters.

## Contributing

To contribute, simply create a pull request with your changes. The changes will be reviewed and merged if they are correct.

## Currently Supported languages

- Bulgarian (bg)
- German (de)
- English (en)
- Spanish (es-es)
- French (fr)
- Hindi (hi)
- Portuguese (brazilian) (pt-br)
- Russian (ru)
- Turkish (tr)
- Japanese (ja)