import React from 'react'
import { NoteScriptWrapper, NoteSubtitle, OrangeNote } from '../parts/NoteStyles'

export const GitNote = () => {
  return (
    <div className='px-5'>
      <a href='#createGitHubAcc'>&gt; Create GitHub account.</a><br/>
      <a href='#cli'>&gt; List of available terminal.</a><br/>
      <a href='#gitcli'>&gt; Install git cli or GitHub Desktop</a><br/>
      <a href='#localProjExist'>&gt; Upload local project to GitHub.</a><br/><br/>
      
      <div id='createGitHubAcc'>
        <NoteSubtitle># Create GitHub account</NoteSubtitle>
        <p>
        Go to <a href='https://github.com/'>GitHub website</a>, then click the button <i>"Sign up"</i>. Follow the instruction from the page.
        </p>
      </div><br/>
      <div id="cli">
        <NoteSubtitle># List of available terminal.</NoteSubtitle>
        <ul>
          <li>Git Bash: <i>Install from <a href='https://git-scm.com/downloads'>GitBash Installer</a></i></li>
          <li>Command Prompt: <i>By default it available in Windows, from Windows start button type <b>cmd</b> to search.</i></li>
          <li>Windows Powershell: <i>By default it available in Windows, from Windows start button type <b>powershell</b> to search.</i></li>
        </ul>
      </div><br/>
      <div id='gitcli'>
        <NoteSubtitle># Install git cli or GitHub Desktop</NoteSubtitle>
        <ul>
          <li>
            <p>
            Install the git cli from <a href='https://github.com/git-guides/install-git'>git cli installer webpage</a>. The page provide the installation options for Windows, Mac and Linux users.<br/>
            For Windows user, install from <a href='https://gitforwindows.org/'>Git For Windows</a>
          </p>
          <p>
            After install, to check the git cli version:
          </p>
          <NoteScriptWrapper>git --version</NoteScriptWrapper>
          <OrangeNote>Note: Make sure during installation the terminal is closed. Otherwise close it and open again to check the git version.</OrangeNote>
          </li>
          <li>
            <p>Install <a href="https://desktop.github.com/"> Github Desktop</a>, if you prefer friendly user interface to upload(push)/commit/download(pull) the sourcecode from GitHub.</p>
          </li>
        </ul>
        
        </div><br/>
      <div id='localProjExist'>
        <NoteSubtitle># Push/upload local project to GitHub</NoteSubtitle>
        <p>
        Upload local project to GitHub:
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
