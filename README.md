# Unicode

This is a work in progress! See below for my notes and thoughts.

## Overview

An application to explore the Unicode Standard.

It should be a fast, responsive, client-side application (SPA) written in JavaScript. All expensive computation is pre-rendered with static-site generation (SSG). Therefore, the application will be quick, but still indexed by search engines (SEO). In addition, the website can be cheaply hosted as static files, with no server-side logic.

The application should contain documentation for the Unicode standard?

Learn about Unicode architecture and terminology, such as code spaces, code points, code planes, code blocks, properties, ligatures, encodings...

View all Unicode characters on a single page, which uses a virtualized renderer to perform at adequate speed. Filter and search for Unicode characters in this view. A strategy to easily index and search this large dataset on the client will be required.

View specific character properties and encodings.

The data can come from the Unicode Character Database (UCD), the Common Locale Data Repository (CLDR) and Wikipedia.

## Features

- Overview of the Unicode Standard.
- Overview of common Unicode terminology.
- Browse Unicode properties.
- Browse Unicode encodings.
- Browse Unicode characters.
- View a unique Unicode character.
  - Annotations.
  - Charts.
  - Encodings.
  - Fonts.
  - Names.
  - Properties.
  - Wikipedia descriptions.
- Change the font used by the application.

## Tasks

- [x] Install Prettier
- [x] Use Prettier for format, and Rome for lint
- [x] Setup Next project
- [x] Organise Typescript configuration
- [x] Organise Turbo scripts
- [x] Clean up packages directory
- [x] Remove archives directory
- [ ] Setup Next for SSG
- [ ] Add basic structure to web page
- [ ] Begin to create a virtual grid and table
- [ ] Work on Unicode data collection
- [ ] Create GitHub workflow for deployment

## References

### Application

- [Codepoints](https://codepoints.net/)
- [Shapecatcher](https://shapecatcher.com/)
- [Symbl](https://symbl.cc/en/)
- [Unicode (FileFormat)](https://www.fileformat.info/info/unicode/)
- [Unicode Character Finder](https://www.mclean.net.nz/ucf/)
- [Unicode Code Point and Grapheme Cluster Explorer](https://unicode.fyi/)
- [Unicode Lookup](https://unicodelookup.com/)
- [Unicode Search](http://xahlee.info/comp/unicode_index.html)
- [Unicode Table](https://old.unicode-table.com/en/)
- [Unicodes](https://github.com/jessetane/unicodes)

### Wikipedia

- [Unicode](https://en.wikipedia.org/wiki/Unicode)
  - [Origin and development](https://en.wikipedia.org/wiki/Unicode#Origin_and_development)
    - [Versions](https://en.wikipedia.org/wiki/Unicode#Versions)
  - [Architecture and terminology](https://en.wikipedia.org/wiki/Unicode#Architecture_and_terminology)
- [Unicode Consortium](https://en.wikipedia.org/wiki/Unicode_Consortium)
- [Comparison of Unicode encodings](https://en.wikipedia.org/wiki/Comparison_of_Unicode_encodings)
- [List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters)
- [List of typefaces](https://en.wikipedia.org/wiki/List_of_typefaces)
  - [Unicode fonts](https://en.wikipedia.org/wiki/List_of_typefaces#Unicode_fonts)

### Unicode

- [What is Unicode?](https://home.unicode.org/)
- [Standard](https://www.unicode.org/versions/latest/)
- [Documentation](https://www.unicode.org/main.html)
  - [What is Unicode](https://www.unicode.org/standard/WhatIsUnicode.html)
  - [About the Unicode standard](https://www.unicode.org/standard/standard.html)
  - [About the Unicode version](https://www.unicode.org/versions/)
  - [List of Unicode versions](https://www.unicode.org/versions/enumeratedversions.html)

### Unicode Character Database (UCD)

- [What is the Unicode Character Database (UCD)?](https://unicode.org/ucd/)
- [Unicode Standard Annex #44, Unicode Character Database](https://www.unicode.org/reports/tr44/)
  - [Properties](https://www.unicode.org/reports/tr44/#Properties)
  - [Property Types](https://www.unicode.org/reports/tr44/#Type_Key_Table)
  - [Property Definitions](https://www.unicode.org/reports/tr44/#Property_Definitions)
  - [Default Values](https://www.unicode.org/reports/tr44/#Default_Values)
- [Unicode Standard Annex #51, Unicode Emoji](https://www.unicode.org/reports/tr51/)

### Unicode Common Locale Data Repository (CLDR)

- [What is the Unicode Common Locale Data Repository (CLDR)?](https://cldr.unicode.org/)
- [CLDR](https://github.com/unicode-org/cldr)
- [CLDR JSON](https://github.com/unicode-org/cldr-json)

### International Components for Unicode (ICU)

- [What is International Components for Unicode (ICU)?](https://icu.unicode.org/)
- [ICU](https://github.com/unicode-org/icu)
  - [Documentation](https://unicode-org.github.io/icu/)
    - [Introduction to ICU](https://unicode-org.github.io/icu/userguide/icu/)
    - [Properties](https://unicode-org.github.io/icu/userguide/strings/properties.html)
- [ICU4X](https://github.com/unicode-org/icu4x)
  - [Documentation](https://docs.rs/icu/latest/icu/)

### SEO

- [React SEO](https://ahrefs.com/blog/react-seo/)
- [Single Page Application SEO](https://medium.com/@theadkgroup/spa-seo-single-page-applications-and-seo-2d94ac505ce9)
