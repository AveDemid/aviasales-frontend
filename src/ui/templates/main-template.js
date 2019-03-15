import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const MainTemplate = ({ header, sidebar, children }) => (
  <Layout>
    {header && <Header>{header}</Header>}
    {sidebar && <Sidebar>{sidebar}</Sidebar>}
    <Content>{children}</Content>
  </Layout>
);

MainTemplate.propTypes = {
  header: PropTypes.node,
  sidebar: PropTypes.node,
  children: PropTypes.node.isRequired
};

const Layout = styled.div`
  width: 84.8rem;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  grid-template-columns: 23.2rem 56.6rem;
  grid-template-rows: auto 1fr;
  grid-gap: 2rem;

  grid-template-areas:
    "header header"
    "sidebar content";
`;

const Header = styled.div`
  grid-area: header;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
`;

const Content = styled.div`
  grid-area: content;
`;
