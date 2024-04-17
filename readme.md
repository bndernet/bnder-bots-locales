# Bnder Bots locales

This is a repository for all translations of Bnder Bots, including [Task Manager](https://bnder.net/task), [Knowledge Manager](https://bnder.net/knowledge) and [Calendar Manager](https://bnder.net/calendar).

## Structure

The parent directories are the short codes of the languages including two json files:
- slash_command.json: Contains the translations shown in the discord slash command ui (command descriptions, option descriptions, etc.)
- translations.json: Contains the translations used in the bots when responding to commands

### Arguments

Some messages contain arguments that are replaced with the actual values when the message is sent. These arguments are represented by double curly braces, for example `{{argument}}`. When translating these messages, make sure to keep the argument placeholder names.

## Contributing

To contribute, simply create a pull request with your changes. The changes will be reviewed and merged if they are correct.

## Currently Supported languages

- Bulgarian (bg)
- German (de)
- English (en)
- Spanish (es-es)
- French (fr)
- Portuguese (brazilian) (pt-br)
- Russian (ru)
- Turkish (tr)