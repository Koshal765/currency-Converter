  
  const array =["INR","USD","AUD","JPY","BZD"];
  function selectCurr(){
        

        let selects=document.querySelectorAll("select");
        selects.forEach((select)=>{
            array.forEach((curr)=>{
                select.innerHTML +=`<option style="background-color:gray ; font-weight:bold" value="${curr}">${curr}</option>`

            });

        })
  }
  selectCurr();

  async function Converter( amount , from , to){
    try{
        let res= await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        console.log (res);
        let data = await res.json();
        console.log(data);
        return (amount*data.rates[to]).toFixed(2);
    }
      catch{
          alert ("conversion failed");
          return "";
      }

    }
 

    async function convert(event){
      event.preventDefault();



      let amount=document.getElementById("amount").value;
      console.log("Amount",amount);
      let from = document.getElementById("from").value;
         console.log("From",from);
      let to = document.getElementById("to").value;
        console.log("To",to);
      let output = document.getElementById("output");
      // console.log("Output", output);


      if( !amount || amount<=0){
        alert("Please Enter a valid amount");
        return;
      }
 output.value= await Converter(amount , from , to);

    
    }


    document.getElementById("currency").addEventListener("submit",convert);


  