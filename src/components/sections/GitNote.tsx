import React from 'react'
import { NoteScriptWrapper, NoteSubtitle } from '../parts/NoteStyles'

export const GitNote = () => {
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
        <NoteSubtitle>#Push/upload local project to GitHub</NoteSubtitle>
        <p>
        Upload local project to GitHub
        </p>
        <NoteScriptWrapper>
          git init <br/>
          git add . <br/>
          git commit -m 'write your commit note here.' <br/>
          git remote add your-project-name https://github.com/your-github-username/your-project-name.git<br/>
          git push your-project-name
        </NoteScriptWrapper>
        <p>
        Set up the branch 'master' to track 'your-project-name/master':
        </p>
        <NoteScriptWrapper>
          git branch -u your-project-name/master master
        </NoteScriptWrapper>
        <p>
        Pull/download the latest code change into local:
        </p>
        <NoteScriptWrapper>
          git pull your-project-name
        </NoteScriptWrapper>
      </div>
    </div>
  )
}
