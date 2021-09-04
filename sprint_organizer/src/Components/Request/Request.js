import React, {useState} from 'react'

function Request(props) {
  const [duracaoMax, setDuracaoMax] = useState('');
  function handleSubmit(e) {
    e.preventDefault();    
    props.onSubmit({
      id: Math.floor(Math.random()* 10000),
      duracaoMax: duracaoMax
    });
    setDuracaoMax('');
  }
  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="bloco">
        <label htmlFor="duracaomax">Insira o tempo da Sprint</label>
        <input type="number" required value={duracaoMax} name="duracaomax" 
        className="request-duracaoMax" onChange={e=>setDuracaoMax(e.target.value)} />
      </div>
      <button type="submit">Enviar</button>



    </form>
  )
}

export default Request
