

const Cart = ({selectedCourse}) => {
    
    return (
        <div>
            <div className="mt-10  ">
          <div className="card w-62  bg-base-100 shadow-xl">
            
            <div className="">

              <h2 className="text-2xl font-semibold pb-4 text-blue-500">Credit Hour Remaining : 7 hr</h2>
              <hr />
              <h1 className="text-2xl font-extrabold pb-4">Course Name </h1>
              {
                selectedCourse.map(course =>(
                    <li>{course.name}</li>
                ))
              }
              <hr />
              <h3 className="py-4 font-bold tect-xl"> Total Cridit : 1 hr</h3>
              <hr />
              <h4 className="py-4  font-bold tect-xl">Total Price : 23 $</h4>


            </div>
          </div>)
          </div>
        </div>
    );
};

export default Cart;