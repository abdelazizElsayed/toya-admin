import { QueryClient } from "react-query"

// let medusaUrl = "http://ec2-3-9-43-164.eu-west-2.compute.amazonaws.com:9000"
//  let medusaUrl = "http://localhost:9000"
let medusaUrl = "http://197.54.238.177:9001"

// deprecated
if (process.env.GATSBY_STORE_URL) {
  medusaUrl = process.env.GATSBY_STORE_URL
}

// takes precedence over GATSBY_STORE_URL
if (process.env.GATSBY_MEDUSA_BACKEND_URL) {
  medusaUrl = process.env.GATSBY_MEDUSA_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 90000,
      retry: 1,
    },
  },
})

export { medusaUrl, queryClient }
