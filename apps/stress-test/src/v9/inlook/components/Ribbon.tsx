import * as React from 'react';

import {
  makeStyles,
  tokens,
  shorthands,
  TabList,
  Tab,
  Caption1,
  Divider,
  Button,
  TabValue,
  SelectTabEvent,
  Menu,
  MenuTrigger,
  MenuButton,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@fluentui/react-components';

import {
  ImmersiveReader24Filled,
  BookOpen24Filled,
  ArrowReplyAll24Filled,
  ArrowReply24Filled,
  DocumentTextToolbox24Filled,
  DocumentTableCheckmark24Filled,
  Mail24Regular,
  CalendarLtr24Regular,
  PeopleTeam24Regular,
  MailAlert24Regular,
  Delete24Regular,
  Archive24Regular,
  MailRead24Regular,
  ReadAloud24Regular,
  BookOpen24Regular,
} from '@fluentui/react-icons';

import { Element } from '../../../shared/Element';
import clsx from 'clsx';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';

const useRibbonStyles = makeStyles({
  root: {},

  tabPanel: {
    ...shorthands.margin(tokens.spacingVerticalS, tokens.spacingHorizontalS, '0', tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    backgroundColor: tokens.colorNeutralBackground1,

    display: 'flex',
    ...shorthands.overflow('scroll', 'hidden'),
  },

  ribbonGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: tokens.spacingHorizontalS,
    marginRight: tokens.spacingHorizontalS,
  },

  iconBig: {
    width: '24px',
    height: '24px',
  },
});

const useFlexStyles = makeStyles({
  row: {
    display: 'flex',
    ...shorthands.gap(tokens.spacingHorizontalS, tokens.spacingVerticalS),
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap(tokens.spacingHorizontalS, tokens.spacingVerticalS),
  },
});

const FlexRow = ({ children }) => {
  const flexStyles = useFlexStyles();

  return <div className={flexStyles.row}>{children}</div>;
};

const FlexColumn = ({ children }) => {
  const flexStyles = useFlexStyles();

  return <div className={flexStyles.column}>{children}</div>;
};

const RibbonGroup = ({ children, label, ...props }) => {
  const ribbonStyles = useRibbonStyles();

  return (
    <Element as="div" classPrefix="ribbon-group" {...props} className={ribbonStyles.ribbonGroup}>
      {children}
      <Caption1>{label}</Caption1>
    </Element>
  );
};

const Filler = ({ numGroups }) => {
  const groups = [];

  for (let i = 0; i < numGroups; i++) {
    groups.push(
      <RibbonGroup label={`Filler ${i + 1}`} key={i}>
        <FlexRow>
          <FlexColumn>
            <Element as="div" classPrefix={`filler-${i + 1}-a`}>
              <Button icon={<ImmersiveReader24Filled />}>Feature A</Button>
              <Button icon={<BookOpen24Filled />}>Feature B</Button>
            </Element>
          </FlexColumn>
          <FlexColumn>
            <Element as="div" classPrefix={`filler-${i + 1}-b`}>
              <Button icon={<ArrowReply24Filled />} title="Feature C" />
              <Button icon={<ArrowReplyAll24Filled />} title="Feature D" />
            </Element>
          </FlexColumn>
          <FlexColumn>
            <Element as="div" classPrefix={`filler-${i + 1}-c`}>
              <Button icon={<DocumentTextToolbox24Filled />} size="large">
                Feature E
              </Button>
              <Button icon={<DocumentTableCheckmark24Filled />} size="large">
                Feature G
              </Button>
            </Element>
          </FlexColumn>
        </FlexRow>
      </RibbonGroup>,
    );
  }

  return (
    <>
      {groups.map(group => {
        return (
          <>
            <Divider vertical />
            {group}
          </>
        );
      })}
    </>
  );
};

export const NewMailButton = ({ setIsComposingMessage }) => {
  const onMailClick = React.useCallback(
    e => {
      setIsComposingMessage(true);
    },
    [setIsComposingMessage],
  );

  return (
    <Menu>
      <MenuTrigger>
        <MenuButton>New Mail</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<Mail24Regular />} onClick={onMailClick}>
            Mail
          </MenuItem>
          <MenuItem icon={<CalendarLtr24Regular />}>Event</MenuItem>
          <MenuItem icon={<PeopleTeam24Regular />}>Group</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const NewMailButtonView = observer(() => {
  const { messageStore } = useStoreContext();
  return <NewMailButton setIsComposingMessage={messageStore.setIsComposingMessage} />;
});

const Home = ({ className }) => {
  return (
    <div className={className}>
      <RibbonGroup label="New">
        <Element as="div" classPrefix="new">
          <NewMailButtonView />
        </Element>
      </RibbonGroup>
      <Divider vertical />
      <RibbonGroup label="Delete">
        <FlexRow>
          <FlexColumn>
            <Element as="div" classPrefix="delete-1">
              <Button icon={<MailAlert24Regular />} title="Ignore Mail" />
              <Button icon={<Delete24Regular />} title="Delete Mail" />
            </Element>
          </FlexColumn>
          <FlexColumn>
            <Element as="div" classPrefix="delete-2">
              <Button icon={<Delete24Regular />}>Delete</Button>
              <Button icon={<Archive24Regular />}>Archive</Button>
            </Element>
          </FlexColumn>
        </FlexRow>
      </RibbonGroup>
      <Divider vertical />
      <RibbonGroup label="Tags">
        <Element as="div" classPrefix="tags">
          <Button icon={<MailRead24Regular />}>Read / Unread</Button>
        </Element>
      </RibbonGroup>
      <Divider vertical />
      <Filler numGroups={20} />
    </div>
  );
};

export const Ribbon = ({ className, ...props }) => {
  const ribbonStyles = useRibbonStyles();
  const [selectedTab, setSelectedTab] = React.useState<TabValue>('home');

  const onTabSelect = React.useCallback(
    (e: SelectTabEvent, data: SelectTabData) => {
      setSelectedTab(data.value);
    },
    [setSelectedTab],
  );

  return (
    <div className={clsx('app-Ribbon', ribbonStyles.root, className)} {...props}>
      <TabList selectedValue={selectedTab} onTabSelect={onTabSelect}>
        <Tab id="ribbon-home" value="home">
          Home
        </Tab>
        <Tab id="ribbon-view" value="view">
          View
        </Tab>
      </TabList>
      <div>{selectedTab === 'home' && <Home className={ribbonStyles.tabPanel} />}</div>
    </div>
  );
};
