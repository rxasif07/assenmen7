/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {

    const [allCourse,setAllcourse] = useState([])
    const [selectedCourse,setSelectedCourse]=useState([])
    const [remaning,setRemaning]=useState(0)
    const [totalCredit,setTotalCredit]=useState(0)
    const [totalPrice,setTotalPrice]=useState(0)
   

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllcourse(data))
    },[])
   

const handleSelectCourse = (course) =>{
  const isExsist = selectedCourse.find(item=>item.name==course.name)
  let countCredit= course.credit
  let totalPrice = course.price

  if(isExsist){
  //  return alert('alrady select it')
  return toast.error('Alrady Select It')
  }
   else{
    selectedCourse.forEach(item =>{
      countCredit = countCredit + item.credit
      totalPrice = totalPrice + item.price
    })
    const totalRemaning = 20 - countCredit;
    
    if(totalRemaning < 0){
      // return alert('Credit Out of Lemite')
      return toast.error('Credit out of Lemit')
    }
    else{
      setTotalPrice(totalPrice)
      setTotalCredit(countCredit)
      setRemaning(totalRemaning)
      setSelectedCourse([...selectedCourse,course])
    }
    
   }
}

// console.log(selectedCourse)
  return (
    <div>
      <h1 className="text-4xl pb-6 font-bold"> Course Registration </h1>

      <hr />
      <div className="home-container flex mt-10 max-w-2/3">
        
        
        <div className="flex gap-12 ">
        
      <div className="grid md:grid-cols-2  w-2/3 gap-5 mt-10 ">
      {
            allCourse.map(course =>  <div key={course.name} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={course.img}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">Name : {course.name} </h2>
              <p>It is a long established fact that a reader will be distracted by the readable content.</p>
              <div className="flex gap-5">
                <h3 className="text-lg  font-semibold">$$ Price : {course.price} $</h3>
                <h2 className="text-lg inline font-semibold"> Credit : {course.credit} hr</h2>

              </div>
              <div className="card-actions">
                <button onClick={()=>handleSelectCourse(course)} className="btn font-bold text-white text-xl btn-primary mt-2">Select</button>
              </div>
            </div>
          </div>)
         }
      </div>

          <Cart
           selectedCourse={selectedCourse}
           remaning={remaning}
           totalCredit={totalCredit}
           totalPrice={totalPrice}
           ></Cart>
        
          
        </div>


        <div>
          <Toaster position="top-center"></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Home;
