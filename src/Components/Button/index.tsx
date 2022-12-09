



export default function Button(Props:{ message: string, arrowFunction?:any}){
    return( <button type="button" className="btn btn-outline-primary"  onClick={Props.arrowFunction}>{Props.message}</button> )
}