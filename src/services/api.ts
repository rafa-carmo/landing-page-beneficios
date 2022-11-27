import { getAPIClient } from './axios'

export async function api() {
  return await getAPIClient()
}
