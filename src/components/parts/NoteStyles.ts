import React from 'react'
import styled from 'styled-components'

export const NoteSubtitle = styled.span`
  font-style: italic;
  font-weight: bold;
  text-decoration: underline !important;
`;

export const NoteScriptWrapper = styled.pre`
  padding: 20px;
  border-radius: 8px;
  margin: 0 -1rem 3rem;
  color: #fff;
  background-color: #282c34;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
`;