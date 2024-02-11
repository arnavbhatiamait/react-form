import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "Select Your Country", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: "" });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))

  }
  console.log(formData);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pb-[100px] bg-gradient-to-bl from-black to-gray-200 " >
      <h1 className="text-[50px] text-white font-extrabold font-serif hover:drop-shadow-lg">INFORMATION FORM </h1>
      <div className="h-2 bg-black w-[20%] hover:w-[40%] rounded-2xl  mt-0 mb-8 pt-[-8]  "></div>
      <div className=" flex flex-col justify-center items-center w-[60%] min-w-fit rounded-2xl bg-gradient-to-br from-blue-400 via-pink-300 to-cyan-600  ">
        <form>
          <div className="flex flex-col ">
          <br/>
            <label htmlFor="firstName" className="center mx-auto text-lg font-bold font-mono">First Name</label>
            <br />
            <input name="firstName"
              type="text" id="firstName" placeholder="Enter Your First Name Here " value={formData.firstName} onChange={changeHandler}
              className=" w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            />
            <br />
            <label htmlFor="lastName"
              className="center mx-auto text-lg font-bold font-mono">Last Name</label>
            <br />
            <input name="lastName"
              type="text" id="lastName" placeholder="Enter Your Last Name Here " value={formData.lastName} onChange={changeHandler}
              className="w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            />
            <br />
            <label htmlFor="email"
              className="center mx-auto text-lg font-bold font-mono">Email</label>
            <br />
            <input name="email"
              type="email" id="email" placeholder="Type your E-mail here" value={formData.email} onChange={changeHandler}
              className="w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            />
            <br />
            <label htmlFor="country"
              className="center mx-auto text-lg font-bold font-mono">Country</label>
            <br />
            <select name="country" id="country" value={formData.country} onChange={changeHandler}
              className="w-[90%] mx-auto text-white rounded-lg hover:font-bold bg-inherit  opacity-80 text-center">
              <option className="text-md font-bold text-blue-500">Select Your Country</option>
              <option className="text-md font-bold text-blue-500">India</option>
              <option className="text-md font-bold text-blue-500">USA - United States Of America</option>
              <option className="text-md font-bold text-blue-500">UK - England</option>
              <option className="text-md font-bold text-blue-500">Germany</option>
              <option className="text-md font-bold text-blue-500">Japan</option>
              <option className="text-md font-bold text-blue-500">France</option>
              <option className="text-md font-bold text-blue-500">Mexico</option>
            </select>
            <br />
            <label className="center mx-auto text-lg font-bold font-mono" htmlFor="streetAddress">Street</label>
            <br />
            <input name="streetAddress"
              type="text" id="streetAddress" placeholder="Enter Your Address Here" value={formData.streetAddress} onChange={changeHandler}
              className="w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            />
            <br />
            <label className="center mx-auto text-lg font-bold font-mono" htmlFor="city">City</label>
            <br />
            <input name="city"
              type="text" id="city" placeholder="Enter Your City Here " value={formData.city} onChange={changeHandler}
              className="w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            />
            <br />
            <label className="center mx-auto text-lg font-bold font-mono" htmlFor="state">State</label>
            <br />
            <input name="state"
              type="text" id="state" placeholder="Enter Your State Here " value={formData.state} onChange={changeHandler}
              className="w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            />
            <br />
            <label className="center mx-auto text-lg font-bold font-mono" htmlFor="postalCode">Postal Code</label>
            <br />
            <input name="postalCode"
              type="text" id="postalCode" placeholder="Enter Your Postal Code Here " value={formData.postalCode} onChange={changeHandler}
              className="w-[90%] mx-auto placeholder:text-white rounded-lg bg-transparent text-white hover:font-bold text-center"
            /></div>
          
          <br />
          <fieldset className="">
            <legend className="center mx-auto text-lg font-bold font-mono">By Email</legend>

            <div className="flex ">
              <input type="checkbox" id="comments" name="comments"
                // value={formData.comments} 
                checked={formData.comments}
                onChange={changeHandler} className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white my-2" />
              <div>
                <label htmlFor="comments" className="px-6 text-lg font-bold">Comments</label>
                <p className="px-3 opacity-50">Get notified when someone posts a comment on a poasting.</p>
              </div>
            </div>
            <div className="flex">
              <input type="checkbox" id="candidates" name="candidates"
                // value={formData.candidates} 
                checked={formData.candidates}
                onChange={changeHandler} className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white my-2" />
              <div>
                <label htmlFor="candidates" className="px-6 text-lg font-bold">Candidates</label>
                <p className="px-3 opacity-50">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="flex">
              <input type="checkbox" id="offers" name="offers"
                //  value={formData.offers}
                checked={formData.offers} onChange={changeHandler} className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white my-2" />
              <div>
                <label htmlFor="offers" className="px-6 text-lg font-bold">Offers</label>
                <p className="px-3 opacity-50">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>

          </fieldset>
          <br />
          {/* for lower section */}
          <fieldset className="">
            <legend className="center mx-auto text-lg font-bold font-mono">Push Notifications          </legend>
            <p className="px-3 opacity-50">These are delivered via SMS to your mobile phone.</p>
            <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
            <label className="px-1 text-lg font-bold" htmlFor="pushEverything">Everything</label>
            <br />

            <input type="radio" id="pushEmail" name="pushNotifications" value="Same as Email" onChange={changeHandler} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2" />
            <label className="px-1 text-lg font-bold" htmlFor="pushEmail">E-mail</label>
            <br />
            <input type="radio" id="pushNothing" name="pushNotifications" value="Not any kind of notification" onChange={changeHandler} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2" />
            <label className="px-1 text-lg font-bold" htmlFor="pushNothing">No Push Notification</label>

          </fieldset>
          <div className="flex justify-center">
            <button className=" bg-gradient-to-r mt-8 mb-16 from-blue-300 to-red-300 text-lg text-white rounded-md w-18 px-10 font-bold  ">Save</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default App;
