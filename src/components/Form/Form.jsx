import axios from 'axios'
// import Header from './components/Header';
// import Footer from './components/Footer';

const Form = () => {
    const [userData, setUserData] = useState({
      id_company: "",
      name:"",
      email: "",
      password: ""
    })

    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:5000/api/user', {
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then((result) => {
          console.log(result)
        })
    }

  return (
    
    <div className="form">
        {/* <Header/> */}
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="id_empresa"> ID Empresa:</label><br />
          <input type="text" id="id_empresa" name="id_empresa" value={userData.id_company} onChange={(e) => setUserData ({...userData, id_company: e.target.value})}/><br />
          <label htmlFor="user"> Elige un nombre de Usuario:</label><br />
          <input type="text" id="user" name="user" value={userData.name} onChange={(e) => setUserData ({...userData, name: e.target.value})}/><br/>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={userData.email} onChange={(e) => setUserData ({...userData, email: e.target.value})} /><br />
          <label htmlFor="password">Elige una contraseña:</label><br />
          <input type="text" id="password" name="password" value={userData.password} onChange={(e) => setUserData ({...userData, password: e.target.value})} /><br />
          <br>
          </br>
          <button>Acceder</button>

      </form>
      
        {/* <Footer/> */}
    </div>
  );
}

export default Form();