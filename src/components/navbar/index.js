import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from './styles/navbar';

export default function Navbar({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="navbar-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Navbar.Frame = function NavbarFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Navbar.Group = function NavbarGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Navbar.Logo = function NavbarLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Navbar.Search = function NavbarSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Navbar.Profile = function NavbarProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Navbar.Feature = function NavbarFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Navbar.Picture = function NavbarPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Navbar.Dropdown = function NavbarDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Navbar.TextLink = function NavbarTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Navbar.PlayButton = function NavbarPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Navbar.FeatureCallOut = function NavbarFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Navbar.Text = function NavbarText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Navbar.ButtonLink = function NavbarButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
