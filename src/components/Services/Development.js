import React from "react"

const Development = props => {
  return (
    <div className="px-28">
      <p className="text-base">
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
      </p>
      {props.data.title ? (
        <p className="text-2xl font-semibold mt-7">{props.data.title}</p>
      ) : (
        ""
      )}
      {props.data.test ? (
        <>
          {props.data.test?.map((item, id) => (
            <div key={item.listItems.id}>
              <h1 className="text-lg font-semibold mt-7" key={id}>
                {item.listItems.title}
              </h1>
              <h2 className="text-base">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.listItems.description,
                  }}
                />
              </h2>
            </div>
          ))}
        </>
      ) : (
        ""
      )}

      {props.data.list?.map((item, idx) => (
        <div key={item.listItems.id}>
          <h1 className="text-3xl mt-7">{item.listItems.title}</h1>
          <h2 className="mt-4">
            <div
              dangerouslySetInnerHTML={{ __html: item.listItems.description }}
            />
          </h2>

          {item.listItems.list?.map((i, idx) => (
            <div key={i.listItems.id}>
              <p className="text-xl font-semibold mt-5">{i.listItems.title}</p>
              <p className="text-base">{i.listItems.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Development
