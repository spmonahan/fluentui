import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { Pivot, PivotItem } from '@fluentui/react/lib/Pivot';
import { DefaultPalette, DefaultSpacing } from '@fluentui/react/lib/Theme';
import { Text } from '@fluentui/react/lib/Text';
import { Stack } from '@fluentui/react/lib/Stack';
import { Separator } from '@fluentui/react/lib/Separator';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
import { Element } from '../shared/Element';
import clsx from 'clsx';

const ribbonStyles = mergeStyleSets({
  root: {},

  pivotItem: {
    marginLeft: DefaultSpacing.s1,
    marginRight: DefaultSpacing.s1,
    marginTop: DefaultSpacing.s1,
    padding: DefaultSpacing.s1,
    borderRadius: 4,
    backgroundColor: DefaultPalette.white,

    display: 'flex',
  },

  pivotGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: DefaultSpacing.s1,
    marginRight: DefaultSpacing.s1,
  },

  iconBig: {
    fontSize: 24,
    width: 24,
    height: 24,
  },
});

const newMailMenuProps = {
  items: [
    {
      key: 'newEmail',
      text: 'Mail',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'newEvent',
      text: 'Event',
      iconProps: { iconName: 'Event' },
    },
    {
      key: 'newGroup',
      text: 'Group',
      iconProps: { iconName: 'Group' },
    },
  ],
};

const RibbonGroup = ({ children, label, ...props }) => {
  return (
    <Element as="div" classPrefix="ribbon-group" {...props} className={ribbonStyles.pivotGroup}>
      {children}
      <Text variant="xSmall">{label}</Text>
    </Element>
  );
};

const Home = () => {
  return (
    <>
      <RibbonGroup label="New">
        <Element as="div" classPrefix="new">
          <DefaultButton
            text="New mail"
            iconProps={{ iconName: 'Mail', className: ribbonStyles.iconBig }}
            menuProps={newMailMenuProps}
          />
        </Element>
      </RibbonGroup>
      <Separator vertical />
      <RibbonGroup label="Delete">
        <Stack horizontal>
          <Stack>
            <Element as="div" classPrefix="delete-1">
              <IconButton iconProps={{ iconName: 'MailAlert' }} title="Ignore Mail" />
              <IconButton iconProps={{ iconName: 'Delete' }} title="Delete Mail" />
            </Element>
          </Stack>
          <Stack>
            <Element as="div" classPrefix="delete-2">
              <DefaultButton text="Delete" iconProps={{ iconName: 'Delete', className: ribbonStyles.iconBig }} />
              <DefaultButton text="Archive" iconProps={{ iconName: 'Archive', className: ribbonStyles.iconBig }} />
            </Element>
          </Stack>
        </Stack>
      </RibbonGroup>
      <Separator vertical />
      <RibbonGroup label="Tags">
        <Element as="div" classPrefix="tags">
          <DefaultButton text="Read / Unread" iconProps={{ iconName: 'Read', className: ribbonStyles.iconBig }} />
        </Element>
      </RibbonGroup>
      <Separator vertical />
      <RibbonGroup label="Filler 1">
        <Stack horizontal>
          <Stack>
            <Element as="div" classPrefix="filler-1">
              <DefaultButton
                text="Feature A"
                iconProps={{ iconName: 'ReadOutLoud', className: ribbonStyles.iconBig }}
              />
              <DefaultButton
                text="Feature B"
                iconProps={{ iconName: 'ReadingMode', className: ribbonStyles.iconBig }}
              />
            </Element>
          </Stack>
          <Stack>
            <Element as="div" classPrefix="filler-2">
              <IconButton iconProps={{ iconName: 'DependencyAdd' }} title="Feature C" />
              <IconButton iconProps={{ iconName: 'DependencyRemove' }} title="Feature D" />
            </Element>
          </Stack>
          <Stack>
            <Element as="div" classPrefix="filler-3">
              <DefaultButton
                text="Feature E"
                iconProps={{ iconName: 'EntitlementPolicy', className: ribbonStyles.iconBig }}
              />
              <DefaultButton
                text="Feature G"
                iconProps={{ iconName: 'EntitlementRedemption', className: ribbonStyles.iconBig }}
              />
            </Element>
          </Stack>
        </Stack>
      </RibbonGroup>
    </>
  );
};

export const Ribbon = ({ className, ...props }) => {
  return (
    <div className={clsx('app-Ribbon', ribbonStyles.root, className)} {...props}>
      <Pivot>
        <PivotItem headerText="Home" className={ribbonStyles.pivotItem}>
          <Home />
        </PivotItem>
        <PivotItem headerText="View" className={ribbonStyles.pivotItem}>
          VIEW
        </PivotItem>
      </Pivot>
    </div>
  );
};
