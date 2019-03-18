# Sodaville-ui
Design system for stylable UI components

The project contains a series of self-documenting HTML specimen files, paired with a suite of LESS files.

The design system is built around the abstraction of CSS properties which are often affected by a client company's branding. We call this abstraction "UI Flexibility".
UI Flexibility is a system of defined variables (which are documented and constant for all instances of the project) and values (which are defined within the variables.less file for each module and for each instance of the project).

Every component and every feature is treated as a module. Inside each module's folder is a repeating pattern of files:
- _index.less
- critical.less
- (module).less
- variables.less

The index.less file encapsulates the files within the module. 

The critical.less file contains styles - for both structure and appearance - which must be available to the application as fast as possible. A goal for Sodaville UI is to keep the combined rendered critical CSS file well below 14kb. 
Critical styles for a module would typically include width, margin, padding, structural styles for responsive design, and some basic colors and typography. 

(module).less contains the remainder of the styles for a given module. This might include hover states, drop-shadows, variant styles (eg for buttons), and so on.

The variables.less file is the most important. It allows the Sodaville UI to be forkable, as every piece of UI which is _likely_ to be affected by branding is abstracted into this file. 
Any additional branding changes for the UI get handled by a dedicated /Overrides folder. 

#Goals
- Overview specimens page
- Buttons
- Inputs (text and number entry varieties)
- Inputs (radio, checkbox, and datepickers)
- Inputs (selection varieties)
- Images
- Panel
- Menu

Regarding the HTML, the intention is to stay as close as practical to native HTML. This means staying away from name-spaced class names as much as practical. Where native HTML elements don't provide enough structure, I tend to refer to Material Design to inform my choices.