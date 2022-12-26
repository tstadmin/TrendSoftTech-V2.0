import React from "react"

const Accessible = props => {
  return (
    <div className="px-32">
      <p className="text-base">
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
      </p>
      {props.data.list ? (
        <>
          {props.data.list?.map(item => (
            <>
              <p className="text-2xl font-semibold mt-7">
                {item.listItems.title}
              </p>
              <p className="text-base mt-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.listItems.description,
                  }}
                />
              </p>
              {item.listItems.list?.map(i => (
                <li className="mt-2 ml-6">{i.listItems.description}</li>
              ))}
              {item.listItems.data ? (
                <>
                  <p className="text-base mt-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.listItems.data }}
                    />
                  </p>
                </>
              ) : (
                ""
              )}
            </>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default Accessible
