import React, {useState} from 'react'

function IssueForm(props) {
    const [descricao, setDescricao] = useState('');
    const [tempo, setTempo] = useState('');
    const [peso, setPeso] = useState('facil');

    function handleSubmit(e) {
        e.preventDefault();    
        props.onSubmit({
            id: {descricao},
            descricao: descricao,
            tempo: tempo,
            peso: peso
        })
        setDescricao('');
        setTempo('');
        setPeso('facil');
      }

    return (
        <form onSubmit={handleSubmit} className="issue-form">
            <div className="bloco" >
            <label htmlFor="descicao">Descrição da Issue</label>
            <input type="text" placeholder="Descrição da issue" required value={descricao} 
            name="descricao" className='issue-descricao' onChange={e=>setDescricao(e.target.value)}/>
            </div>

            <div className="bloco">
            <label htmlFor="tempo">Tempo em dias para Conclusão</label>
            <input type="text" pattern="[0-9]*" required value={tempo} name="tempo" className='issue-numero'onChange={e=>setTempo(e.target.value)}/>
            </div>
            
            <div className="bloco">
            <label htmlFor="peso">Nível de Dificuldade</label>
            <select name="peso" value={peso} required className="issue-peso" onChange={e=>setPeso(e.target.value)}>
                <option value="facil">Fácil</option>
                <option value="medio">Médio</option>
                <option value="dificil">Difícil</option>
                <option value="muitoDificil">Muito Difícil</option>
            </select>
            </div>

            <button type="submit">Enviar</button>

        </form>
    )
}

export default IssueForm
