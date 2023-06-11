import React from "react";
import { useQuery } from "react-query";
import {fetchCompleted} from "../API/GetApi";

const New = () => {
 const {isLoading, data, isError, error} = useQuery("hari",fetchCompleted);
  if(isLoading){
    return <h2 className="font-bold">Loading............</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      <h1 className="font-bold text-2xl">fetching data using useQuery Hook.</h1>
      {
        data?.map(item =>{
          return <div key={item.id}>
            {
              item.title
            }
          </div>
        })
      }
    </div>
  );
};

export default New;
