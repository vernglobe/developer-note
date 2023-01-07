import React from 'react'
import { NoteScriptWrapper, NoteSubtitle } from '../parts/NoteStyles'
import { LabelUnderContruction, MSG_UNDER_CONSTRUCTION } from './Common'

export const Dashboard = () => {
  return (
    <LabelUnderContruction>{MSG_UNDER_CONSTRUCTION}</LabelUnderContruction>
  )
}
