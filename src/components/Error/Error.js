import './Error.css'

const Error = () => {
  return (
    <>
      <div className="error">
          <div className="error-container">
            <i class="icon uil uil-cloud-slash"></i>
            <h2 style={{marginTop: '-10px'}}>Erro: Algo deu errado!</h2>
            <span className='error-subtitle' style={{fontSize: '16px'}}>Verifique sua Conexão</span>
          </div>
      </div>
    </>
  )
}

export default Error