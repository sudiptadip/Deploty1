import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDataRow from "../Components/ProfileDataRow";
import { Failure, Request, Success } from "../Redux/action";
import { GET_PROFILE_DETAILS_SUCCESS } from "../Redux/actionTypes";

const Homepage = () => {
  let dispatch = useDispatch();
  function allData() {
    Request();
    fetch("http://localhost:8080/profile")
      .then((res1) => res1.json())
      .then((res2) => dispatch(Success(res2)))
      .catch((e) => dispatch(Failure()));
  }
  useEffect(() => {
    allData();
  }, []);

  const dat = useSelector((data) => data.profileData);

  return (
    <div>    
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          
        {
          dat.map((e)=>(
            <ProfileDataRow profile={{e}} />
          ))
        }


        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
