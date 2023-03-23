import React from "react"

const RecentPosts = () => {
  const data = [
    {
      id: 1,
      date: "March 23, 2023",
      description:
        "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      date: "March 23, 2023",
      description:
        "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      date: "March 23, 2023",
      description:
        "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]
  return (
    <div>
      <div className="grid gap-4">
        {data.map((i, id) => (
          <div className="space-y-1">
            <p className="font-semibold">March 23, 2023</p>
            <img src={i.img} className="w-[500px] h-[200px]" />
            <p>
              Section 1.10.32 of de Finibus Bonorum et Malorum, written by
              Cicero in 45 BC
            </p>
            <button className="w-full p-2 bg-blue-500 text-white rounded-2xl">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPosts
