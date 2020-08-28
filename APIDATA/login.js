export function login(username,password) {
    return fetch("https://xemphim20xx.000webhostapp.com/server/login.php",{
              method:'post',
              headers:{
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                  "NAME":action.email,
                  "PASS":action.pass
              })
          })
          .then((response)=>response.json())
          .then((response)=>{
              return response;
          }).catch((error) => {
              console.log("loi login");
            });
}