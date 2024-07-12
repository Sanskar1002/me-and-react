import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  // api fetching
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Sanskar1002")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-700 text-white text-4xl text-center p-8">
      GitHub Followers :{data.followers}
      <img
        src={data.avatar_url}
        className="m-auto p-8 rounded-full"
        alt="github-pic"
      />
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sanskar1002");
  //   console.log(response);
  return response.json();
};
