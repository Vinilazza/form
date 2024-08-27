import { useState } from 'react'
import './MyForm.css'
const MyForm = ({user}) => {
    //6 - Controlled Input
    //3 Gerencieamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio,setBio] = useState(user ? user.bio : '')
    const [role,setRole] = useState(user ? user.role : '')
    const handleName = (e) => {
        setName (e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('enviando o formulario')
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        // Limpar forms
        setName('')
        setEmail('')
        setBio('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome...' onChange={handleName} value={name}/>
            </div>
            <label>
                <span>E-mail</span>
                <input type="text" name='email' placeholder='Digite seu e-mail...' onChange={(e)=> setEmail(e.target.value) } value={email}/>
            </label>
            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder='Descrição do usuario' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm