/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import { PageConfig } from "src/autogen/proto";
import { ThemeConfig } from "src/theme";
import { BaseUriParts } from "src/lib/UriUtil";
export interface Props {
    wideMode: boolean;
    layout: PageConfig.Layout;
    initialSidebarState: PageConfig.SidebarState;
    embedded: boolean;
    showPadding: boolean;
    disableScrolling: boolean;
    showFooter: boolean;
    showToolbar: boolean;
    showColoredLine: boolean;
    isFullScreen: boolean;
    setFullScreen: (value: boolean) => void;
    addScriptFinishedHandler: (func: () => void) => void;
    removeScriptFinishedHandler: (func: () => void) => void;
    activeTheme: ThemeConfig;
    setTheme: (theme: ThemeConfig) => void;
    availableThemes: ThemeConfig[];
    addThemes: (themes: ThemeConfig[]) => void;
    sidebarChevronDownshift: number;
    getBaseUriParts: () => BaseUriParts | undefined;
}
declare const _default: React.Context<Props>;
export default _default;