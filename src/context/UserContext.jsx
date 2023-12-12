import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("TraxainUserToken"));
  const handleLogout = () => {
    let estadoUsuario = localStorage.getItem("TraxainUserToken");
    setToken(null);
    comprobarEstado();

    function comprobarEstado() {
        if (estadoUsuario === "null" || estadoUsuario === null) {
            window.location.reload()
        }
        else {
            estadoUsuario = localStorage.getItem("TraxainUserToken");
            setTimeout(() => comprobarEstado(), 50);
        }
    }
  }

  //ENDPOINTS

  let endpointlocal = "http://localhost:8000/"
  let endpoint = "https://api.traxain.xyz/"
  let endpoint2 = "https://api.ecargo.link/"
  

  
  
  useEffect(() => {
      const fetchUser = async () => {
        
        const requestOptions = await {
          method: "GET",
          headers: { 
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ token
          },
        };

        
        if(token === null) {
            setToken(null);
        } 
        var response
        if(token === "null"){
                        
              const requestOptions = await {
                method: "GET",
                headers: { 
                "Content-Type": "application/json",
                },
              };
             
              try{
                response = await fetch(endpointlocal + "api/users/visitaWeb", requestOptions);
                if (!response.ok) {
                  throw new Error('Request failed with status ');
                }else{
                  // console.log("UserContext de endpointlocal")
                }
              }catch (err) {
                // console.log("UserContext: Fallo en endpointlocal")
                try{
                    response = await fetch(endpoint + "api/users/visitaWeb", requestOptions);
                    if (!response.ok) {
                      throw new Error('Request failed with status ');
                    }else{
                      console.log("UserContext de endpoint")
                    }
                }catch (err) {
                  // console.log("UserContext: Fallo en endpoint")
                  try{
                    response = await fetch(endpoint2 + "api/users/visitaWeb", requestOptions);
                    if (!response.ok) {
                      throw new Error('Request failed with status ');
                    }else{
                      console.log("UserContext de endpoint2")
                    }
                  }catch (err) {
                    console.log("UserContext: Fallo en endpoint2");         
                  }


                }
              }
            
         // accesoWeb();
                    
        }else {
          
          try{
            response = await fetch(endpointlocal + "api/users/visitaWeb", requestOptions);
            if (!response.ok) {
              throw new Error('Request failed with status ');
            }else{
               console.log("UserContext de endpointlocal")
            }
          }catch (err) {
            // console.log("UserContext: Fallo en endpointlocal")
            try{
                response = await fetch(endpoint + "api/users/visitaWeb", requestOptions);
                if (!response.ok) {
                  throw new Error('Request failed with status ');
                }else{
                   console.log("UserContext de endpoint")
                }
            }catch (err) {
              // console.log("UserContext: Fallo en endpoint")
              try{
                response = await fetch(endpoint2 + "api/users/visitaWeb", requestOptions);
                if (!response.ok) {
                  throw new Error('Request failed with status ');
                }else{
                   console.log("UserContext de endpoint2")
                }
              }catch (err) {
                // console.log("UserContext: Fallo en endpoint2");
                handleLogout()         
              }


            }
          }
         
          }



            localStorage.setItem("TraxainUserToken", token);
            

            if (response == null || (!response.ok && response.type === 'cors')) {
            console.log("error api/users/me")
            handleLogout()
          }
          
          
          
          
      };

    fetchUser();


  }, [token]);

  
    return (
      <UserContext.Provider value={[token, setToken ]} >
          {props.children}
      </UserContext.Provider>
    );
 
    
};
