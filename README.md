export default function Form (){
        const [formData,setFormData]=useState(
               {
                firstName:"",
                lastName:"",
                email:"",
                comments:"",
                isfriendly:true,
                employment:"",
                country:""

            }
        )
        
        function handleChange(event){
           const{name,value,checked,type}=event.target
            setFormData(
                prevFormData=>{
                    return{
                            ...prevFormData,
                            [name]:type==="checkbox"? checked:value
                         }
                     
                    
                }
            )
        }
       function submitData (event){
                 event.preventDefault()
                 console.log(formData);
       }
    return(
        <main className='main--wrapper'>
             <div className='main--contents'>
                <h1 className='form--title'>SIGN UP</h1>
                    <form 
                       className='form'
                       onSubmit={submitData}
                    >
                        <input
                           type='text'
                           placeholder="enter your firstname"
                           onChange={handleChange}
                           name="firstName"
                           value={formData.firstName}
                           className='input--el'
                        />
                        <input
                           type='text'
                           placeholder="enter your lastname"
                           onChange={handleChange}
                           name="lastName"
                           value={formData.lastName}
                           className='input--el'
                        />
                        <input
                           type="email"
                           placeholder="enter your email"
                           onChange={handleChange}
                           name="email"
                           value={formData.email  }
                           className='input--el'
                        />
                        <label htmlFor='comments' className='comments'>Describe yourself: </label>
                        <textarea 
                           name="comments"
                           value={formData.comments}
                           onChange={handleChange}
                           className="comments--el"
                           placeholder='(100words maximum)'
                        />
                        
                        <label htmlFor='isfriendly' className='isfriendly'>
                        <input
                           type="checkbox"
                           onChange={handleChange}
                           name="isfriendly"
                           value={formData.isfriendly}
                           checked={formData.isfriendly}
                           className="box"
                        />
                            Are you friendly?
                        </label>
                        
                        <fieldset className='employment--status'>
                            <legend>Current employment status</legend>
                               <label htmlFor='employment' className='employment'>
                                   <input 
                                         type="radio"
                                         name='employment'
                                         value="unemployed"
                                         id="unemployed"
                                         checked={formData.employment === "unemployed"}
                                         className="button--el"
                                         onClick={handleChange}
                                   />
                                   unemployed
                               </label>
                               <label htmlFor='employment' className='employment'>
                                   <input 
                                         type="radio"
                                         name='employment'
                                         value="full-time"
                                         id="full-time"
                                         checked={formData.employment === "full-time"}
                                         className="button--el"
                                         onClick={handleChange}
                                   />
                                   full-time
                               </label>
                               <label htmlFor='employment' className='employment'>
                                   <input 
                                         type="radio"
                                         name='employment'
                                         value="part-time"
                                         id="part-time"
                                         checked={formData.employment === "part-time"}
                                         className="button--el"
                                         onClick={handleChange}
                                   />
                                   part-time
                               </label>
                        </fieldset>
                                <label htmlFor='favcolor' className='country'>
                                    select your country?
                                         <select 
                                            id='select--country'
                                            name='country'
                                            checked={formData.country}
                                            onChange={handleChange}
                                         >
                                            <option value="">--Choose--</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="China">China</option>
                                            <option value="Uganda">Uganda</option>
                                         </select>
                                </label>
                                <button className='submit--el'>Submit</button>

                    </form>
                     
                    <div>
                       
                       
                    </div>
             </div>
        </main>
         )