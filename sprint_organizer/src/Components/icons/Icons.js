import React, {useState} from 'react'
import IssueForm from '../IssueForm/IssueForm'
import {RiCloseCircleLine} from 'react-icons/ri'

function Icons({ issues, deleteIssue}) {
  const [edit, setEdit] = useState({
    id: null,
    descricao: '',
    tempo: '',
    peso: ''
  })
  return issues.map((issue, index) =>(
    <div key={index}>
    <div key={issue.key}>
      Issue: {issue.descricao}
      <br />
      Duração média: {issue.tempo}
      <br />
      Peso: {issue.peso}
    </div>
    <div className='icons'>
      <RiCloseCircleLine
      onClick={() => deleteIssue(issue.id)}
      className='delete-icon'
      />
    </div>
    </div>
  ) )
}

export default Icons
