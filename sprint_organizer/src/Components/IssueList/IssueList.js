import React, {useState} from 'react'
import IssueForm from '../IssueForm/IssueForm'
import Icons from '../icons/Icons'
import Request from '../Request/Request'

function IssueList() {
  const [issues, setIssues] = useState([])
  const addIssue = issue => {
    const newIssues = [issue, ...issues];
    setIssues(newIssues);

    console.log(issue, ...issues);

  }
  const deleteIssue = id => {
    const removeArr = [...issues].filter(issue => issue.id !== id)

    setIssues(removeArr)
  }

  return (
    <div>
      <h1>INSIRA AS ISSUES COM SEUS TEMPOS PARA CONCLUSÃO E SUA DIFICULDADE</h1>
      <IssueForm onSubmit={addIssue}/>
      <Icons 
      issues = {issues}
      deleteIssue = {deleteIssue}
      />

      <div>
        <Request />
      </div>
    </div>
  )
}

export default IssueList
