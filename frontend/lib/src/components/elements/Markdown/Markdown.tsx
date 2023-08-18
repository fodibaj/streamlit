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

import StreamlitMarkdown from "@streamlit/lib/src/components/shared/StreamlitMarkdown"
import React, { ReactElement } from "react"
import { Markdown as MarkdownProto } from "@streamlit/lib/src/proto"
import { LibContext } from "@streamlit/lib/src/components/core/LibContext"
import {
  InlineTooltipIcon,
  StyledLabelHelpWrapper,
} from "@streamlit/lib/src/components/shared/TooltipIcon"
import { PlatformSecurityViolation } from "@streamlit/lib/src/hostComm/types"

export interface MarkdownProps {
  width: number
  help?: string
  element: MarkdownProto
}

/**
 * Functional element representing Markdown formatted text.
 */
export default function Markdown({
  width,
  element,
}: MarkdownProps): ReactElement {
  const { hostConfig } = React.useContext(LibContext)
  if (hostConfig.disableUnsafeHtmlExecution && element.allowHtml) {
    throw new PlatformSecurityViolation(
      "Running unsafe HTML was removed in line with the platform security policy."
    )
  }

  const styleProp = { width }

  return (
    <div className="stMarkdown" style={styleProp}>
      {element.help ? (
        <StyledLabelHelpWrapper>
          <StreamlitMarkdown
            isCaption={element.isCaption}
            source={element.body}
            allowHTML={element.allowHtml}
          />
          <InlineTooltipIcon
            content={element.help}
            isLatex={element.elementType === MarkdownProto.Type.LATEX}
          ></InlineTooltipIcon>
        </StyledLabelHelpWrapper>
      ) : (
        <StreamlitMarkdown
          isCaption={element.isCaption}
          source={element.body}
          allowHTML={element.allowHtml}
        />
      )}
    </div>
  )
}
