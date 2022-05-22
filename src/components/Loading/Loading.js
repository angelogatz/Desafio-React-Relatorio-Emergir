import './Loading.css'

const Loading = () => {
  return (
        <div style={{display: "flex", marginTop: "260px", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h2 style={{fontSize: "30px"}}>Aguarde...
            </h2>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading