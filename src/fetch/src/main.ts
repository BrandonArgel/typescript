interface UserData {
  name: string
  language: string
  id: string
  bio: string
  version: number
}

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
  return await response.json()
}

function getUserProp<T, K extends keyof T>(user: T, key: K): T[K] {
  return user[key]
}

/**
 * Best Practice: Dedicated Render Function
 * This keeps your code clean and testable.
 */
const renderUsers = (container: HTMLElement, users: UserData[]): void => {
  const fragment = document.createDocumentFragment()

  users.forEach((user) => {
    const card = document.createElement('div')
    card.className = 'user-card'

    // Using textContent is safer than innerHTML to prevent XSS attacks
    const title = document.createElement('h3')
    title.textContent = `${user.name} (ID: ${user.id})`

    const bio = document.createElement('p')
    bio.textContent = `Bio: ${user.bio}`

    const version = document.createElement('p')
    version.textContent = `Version: ${user.version}`

    card.append(title, bio, version)
    fragment.appendChild(card)
  })

  container.innerHTML = '' // Clear once
  container.appendChild(fragment)
}

// Selection with specific generic types
const button = document.querySelector<HTMLButtonElement>('.btnInfo')
const container = document.querySelector<HTMLDivElement>('.content')
const errorDisplay = document.querySelector<HTMLParagraphElement>('.info')

if (button && container) {
  button.addEventListener('click', async () => {
    try {
      // Logic: Fetch -> Render
      const data = await fetchData<UserData[]>('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')

      const userName = getUserProp(data[0], 'name') // Inferred as string
      console.log('User Name:', userName)

      renderUsers(container, data)
    } catch (error) {
      console.error('Fetch error:', error)
      if (errorDisplay) errorDisplay.textContent = 'Error loading data.'
    }
  })
}
