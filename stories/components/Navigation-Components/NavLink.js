import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLink from '../../../src/NavLink';

const basicNavLinkUsage = `
    #### Basic NavLink Usage
      - Use when there are list of navigation links.

      - Use a seperate *NavLink* component for each navigation link.

      - Surround list of navigation links with *NavLinks* component.

      - Do not use if there is a single anchor link.

      - This supports a number of variations by passing a different set of properties few of which are shown as seperate stories under NavLink menu. All these properties can be used individually or together.

       `;
storiesOf('Navigation Components/NavLink', module)
  .add(
    'Basic NavLink',
    withInfo(`${basicNavLinkUsage}`)(() => (
      <ul className="nav nav-stacked">
        <NavLink href="test.html" text="Nav Link" />
      </ul>
    ))
  )
  .add(
    'Active NavLink',
    withInfo(`
     #### Usage
      - Use when a Navigation link is currently selected.

      - Provide *active* property with true value.

     ${basicNavLinkUsage}
    `)(() => (
      <ul className="nav nav-stacked col-md-3">
        <NavLink href="test.html" text="Nav Link" active={true} />
      </ul>
    ))
  )
  .add(
    'With Pre Icon',
    withInfo(`
     #### Usage
      - Use when there is a need to show pre icon for Navigation Link.

      - Provide *preIcon* property to *NavLink* component. This is a string of css className(s) to display the icon.

     ${basicNavLinkUsage}
    `)(() => (
      <ul className="nav nav-stacked col-md-3">
        <NavLink href="test.html" text="Nav Link" preIcon="fa fa-user" />
      </ul>
    ))
  )
  .add(
    'With Post Icon',
    withInfo(`
     #### Usage
      - Use when there is a need to show post icon for Navigation Link.

      - Provide a *postIcon* property to *NavLink* component. This is a string of css className(s) to display the icon.

     ${basicNavLinkUsage}
    `)(() => (
      <ul className="nav nav-stacked col-md-3">
        <NavLink
          href="test.html"
          text="Nav Link"
          postIcon="fa fa-exclamation-triangle c-red"
        />
      </ul>
    ))
  );
