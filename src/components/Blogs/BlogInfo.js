import React from "react"
import RecentPosts from "./RecentPosts"

const BlogInfo = () => {
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
    {
      id: 4,
      date: "March 23, 2023",
      description:
        "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
      img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]
  return (
    <div className="mt-10 1920Screen:px-44 2xl:px-24 px-8">
      <div>
        <h1>Blogs</h1>
      </div>
      <div className="flex mt-2 space-x-16   ">
        <div className="">
          <div className="col-span-10 py-2 space-y-1 ">
            <p className="font-semibold">March 23, 2023</p>
            <img
              src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              className="w-[1000px] h-[400px]"
            />
            <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum"</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam...
            </p>
            <button className="w-full p-2 bg-blue-500 text-white rounded-2xl">
              Read More
            </button>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-5 mt-2  py-2 ">
            {/* <div className="col-span-7 ">
              <p>March 23, 2023</p>
              <img
                src="https://blogs.worldbank.org/sites/default/files/styles/card/public/2023-02/resized.jpg.webp"
                className="w-[850px] h-[278.4px]"
              />
              <p>Section 1.10.32 of "de Finibus Bonorum et Malorum"</p>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam...
              </p>
              <button>Read More</button>
            </div> */}
            {data.map((i, id) => (
              <div className="col-span-1">
                <div className="grid gap-1 ">
                  <p className="font-semibold text-black">March 23, 2023</p>
                  <img src={i.img} className="w-full h-[200px]" />
                  <p className=" w-[400px]">
                    Section 1.10.32 of de Finibus Bonorum et Malorum, written by
                    Cicero in 45 BC
                  </p>
                  <button className="w-full p-2 bg-blue-500 text-white rounded-2xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-16">
          <RecentPosts />
        </div>
      </div>
    </div>
  )
}

export default BlogInfo
