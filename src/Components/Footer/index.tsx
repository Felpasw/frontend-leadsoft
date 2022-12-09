
export default function Footer(){
    return(
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-center">
         <div className="col">
          <img src={require('../../@img/leadsoft_lambda_branco.png')} style={{width: 30}} />
          <span className="mb-3 mb-md-0 text-muted"> © 2022 Company, Inc</span>
         </div>
    </footer>
      )
}