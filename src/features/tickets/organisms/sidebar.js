import React from "react";

import {
  SidebarContainer,
  SidebarItem,
  SidebarItemTitle,
  SidebarCol
} from "@ui/atoms";
import { CurrencySwitch } from "@features/currency/organisms";
import { FilterByStops } from "./";

export const Sidebar = () => (
  <SidebarContainer>
    <SidebarItem>
      <SidebarItemTitle>Валюта</SidebarItemTitle>

      <SidebarCol>
        <CurrencySwitch />
      </SidebarCol>
    </SidebarItem>

    <SidebarItem>
      <SidebarItemTitle>Количество пересадок</SidebarItemTitle>

      <FilterByStops />
    </SidebarItem>
  </SidebarContainer>
);
