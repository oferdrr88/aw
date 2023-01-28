




import { removeToken, rmoveAll } from './tokenMgmt';

interface Props{
    handler:Function
}
function Logout( {handler}:Props) 
{
    
    

        return (  
       
            <>
            <a
                onClick={(e)=>handler()}
                className="nav-link">
                    <i className="bi bi-box-arrow-left p-4"></i>Logaut
          </a>
           </>

   );
}
export default Logout;   
   
      
       
    
            
            
            
            
          
    
   

      ;
     
    

