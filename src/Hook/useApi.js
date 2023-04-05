import { useEffect, useState } from "react"

const useApi = (api, params, skip) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (skip) return
    setLoading(true)
    api(params)
      .then(res => {
        setData(res.data)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [JSON.stringify(params), skip])

  return { data, error, loading }
}
export default useApi
