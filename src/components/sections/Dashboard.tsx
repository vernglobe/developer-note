import React from 'react'
import { NoteScriptWrapper, NoteSubtitle } from '../parts/NoteStyles'

export const Dashboard = () => {
  return (
    <div className='p-5'>
      <a href='#createGitHubAcc'>1. Create GitHub account.</a><br/>
      <a href='#localProjExist'>2. Upload local project to GitHub.</a><br/><br/>
      
      <div id='createGitHubAcc'>
        <NoteSubtitle>#Create GitHub account</NoteSubtitle>
        <p>

        </p>
      </div><br/>
      <div id='localProjExist'>
        <NoteSubtitle>#Upload local project to GitHub</NoteSubtitle>
        <p>
        Upload local project to GitHub
        </p>
        <NoteScriptWrapper>npm i </NoteScriptWrapper>
      </div>
    </div>
  )
}
