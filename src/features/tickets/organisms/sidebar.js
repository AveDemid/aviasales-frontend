import React from "react";

import { SidebarContainer, SidebarItem, SidebarItemTitle } from "@ui/atoms";
import { CurrencySwitch } from "@features/currency/organisms";
import { FilterByStops } from "./";

export const Sidebar = () => (
  <SidebarContainer>
    <SidebarItem>
      <SidebarItemTitle>Валюта</SidebarItemTitle>

      <CurrencySwitch />
    </SidebarItem>

    <SidebarItem>
      <SidebarItemTitle>Количество пересадок</SidebarItemTitle>

      <FilterByStops />
    </SidebarItem>
  </SidebarContainer>
);
